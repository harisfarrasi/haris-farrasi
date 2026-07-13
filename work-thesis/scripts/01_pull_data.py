"""Pull raw data and save to `thesis/data/raw/`.

Goal: keep a Bloomberg-compatible *schema* so later you can swap the source
without rewriting downstream scripts (clean -> construct -> regress).
"""

from __future__ import annotations

import argparse
import time
from pathlib import Path
from urllib.request import Request, urlopen
from io import StringIO

import pandas as pd
import numpy as np

try:
    import yfinance as yf
except Exception:  # pragma: no cover
    yf = None

import sys

sys.path.append(str(Path(__file__).resolve().parent))
from pipeline_utils import ensure_dir, first_present, thesis_root, write_csv, write_json  # noqa: E402


RAW_COLS = [
    "source",
    "firm_id",
    "ticker",
    "company_name",
    "sector",
    "industry_key",
    "year",
    "currency",
    "sales",
    "cogs",
    "net_income",
    "total_assets",
    "total_debt",
    "operating_cash_flow",
    "capex",
]


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--source", choices=["yfinance"], default="yfinance")
    p.add_argument("--years", default="2015-2024", help="e.g. 2015-2024")
    p.add_argument(
        "--from-raw",
        default="",
        help="Use an existing raw CSV as input (offline practice). If set, skips network pulls.",
    )
    p.add_argument(
        "--tickers",
        default="",
        help="Comma-separated tickers. If empty: use `thesis/data/sp500_tickers.csv` or Wikipedia fallback.",
    )
    p.add_argument("--max-tickers", type=int, default=0, help="0 = no limit (careful w/ rate limits)")
    p.add_argument("--sleep", type=float, default=0.2, help="Seconds between tickers")
    p.add_argument(
        "--practice-target-firms",
        type=int,
        default=0,
        help="If >0, expand the dataset by cloning firms until reaching this many unique firm_id (offline-friendly).",
    )
    p.add_argument(
        "--practice-min-years",
        type=int,
        default=4,
        help="Minimum yearly observations per firm for practice expansion (backcasts if needed).",
    )
    p.add_argument(
        "--practice-jitter",
        type=float,
        default=0.02,
        help="Multiplicative noise (std dev) applied to numeric columns when cloning/backcasting (0 = no noise).",
    )
    p.add_argument("--practice-seed", type=int, default=42)
    return p.parse_args()


def years_from_range(s: str) -> tuple[int, int]:
    if "-" not in s:
        y = int(s)
        return y, y
    a, b = s.split("-", 1)
    return int(a), int(b)


def load_tickers(root: Path, tickers_arg: str) -> list[str]:
    if tickers_arg.strip():
        out = [t.strip().upper() for t in tickers_arg.split(",") if t.strip()]
        # Yahoo Finance uses dashes for share classes (e.g., BRK.B -> BRK-B)
        return [t.replace(".", "-") for t in out]

    tickers_path = root / "data" / "sp500_tickers.csv"
    if tickers_path.exists():
        df = pd.read_csv(tickers_path)
        col = "ticker" if "ticker" in df.columns else df.columns[0]
        out = sorted({str(x).strip().upper() for x in df[col].dropna().tolist() if str(x).strip()})
        return [t.replace(".", "-") for t in out]

    # Best-effort: Wikipedia current constituents (not historical). OK for practice.
    try:
        url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
        # Wikipedia often blocks default Python user agents (403). Fetch HTML with a browser UA.
        req = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; thesis-pipeline/1.0)"})
        with urlopen(req, timeout=30) as resp:  # nosec - practice data pull
            html = resp.read().decode("utf-8", errors="replace")
        tables = pd.read_html(StringIO(html))
        sp500 = tables[0]
        symbols = sp500["Symbol"].astype(str).str.strip().str.upper().str.replace(".", "-", regex=False).tolist()
        ensure_dir(tickers_path.parent)
        pd.DataFrame({"ticker": symbols}).to_csv(tickers_path, index=False)
        return symbols
    except Exception:
        # Last resort: small training set
        return ["AAPL", "MSFT", "AMZN", "GOOGL", "META", "NVDA", "TSLA"]


def _extract_statements_yf(t: "yf.Ticker") -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    # yfinance uses 'yearly'/'quarterly'/'trailing'
    income = t.get_income_stmt(freq="yearly")
    balance = t.get_balance_sheet(freq="yearly")
    cashflow = t.get_cash_flow(freq="yearly")
    return income, balance, cashflow


def _value(df: pd.DataFrame, key_candidates: list[str], col: pd.Timestamp | None) -> float | None:
    if df is None or df.empty:
        return None
    if col is None or col not in df.columns:
        return None
    key = first_present(df.index, key_candidates)
    if key is None:
        return None
    try:
        v = df.at[key, col]
    except Exception:
        return None
    try:
        if pd.isna(v):
            return None
        return float(v)
    except Exception:
        return None


def _col_for_year(df: pd.DataFrame, year: int) -> pd.Timestamp | None:
    if df is None or df.empty:
        return None
    cols = []
    for c in df.columns:
        try:
            ts = pd.Timestamp(c)
        except Exception:
            continue
        if int(ts.year) == int(year):
            cols.append(ts)
    if not cols:
        return None
    # Pick the latest period end within the year
    return sorted(cols)[-1]


def pull_one_yfinance(ticker: str) -> list[dict]:
    if yf is None:
        raise RuntimeError("yfinance is not installed. Run: python3 -m pip install yfinance")

    t = yf.Ticker(ticker)
    info = {}
    try:
        info = t.get_info()
    except Exception:
        info = {}

    income, balance, cashflow = _extract_statements_yf(t)
    if income is None or income.empty:
        return []

    # Columns are period end timestamps.
    years = sorted({int(pd.Timestamp(c).year) for c in income.columns})

    # Key mappings (yfinance time-series uses XBRL-ish names).
    k_sales = ["TotalRevenue", "OperatingRevenue"]
    k_cogs = ["CostOfRevenue", "ReconciledCostOfRevenue"]
    k_net_income = [
        "NetIncome",
        "NetIncomeCommonStockholders",
        "NetIncomeFromContinuingOperationNetMinorityInterest",
    ]
    k_total_assets = ["TotalAssets"]
    k_total_debt = ["TotalDebt", "TotalDebtGross", "LongTermDebtAndCapitalLeaseObligation", "LongTermDebt"]
    k_ocf = ["OperatingCashFlow", "CashFlowFromContinuingOperatingActivities"]
    k_capex = ["CapitalExpenditure", "CapitalExpenditures"]

    industry_key = (
        info.get("industry")
        or info.get("sector")
        or info.get("industryDisp")
        or "UNKNOWN_INDUSTRY"
    )
    sector = info.get("sector") or "UNKNOWN_SECTOR"
    company_name = info.get("shortName") or info.get("longName") or ""
    currency = info.get("currency") or "USD"

    rows: list[dict] = []
    for col in income.columns:
        col_ts = pd.Timestamp(col)
        year = int(col_ts.year)
        bal_col = _col_for_year(balance, year)
        cf_col = _col_for_year(cashflow, year)
        rows.append(
            {
                "source": "yfinance",
                "firm_id": ticker,
                "ticker": ticker,
                "company_name": company_name,
                "sector": sector,
                "industry_key": industry_key,
                "year": year,
                "currency": currency,
                "sales": _value(income, k_sales, col),
                "cogs": _value(income, k_cogs, col),
                "net_income": _value(income, k_net_income, col),
                "total_assets": _value(balance, k_total_assets, bal_col),
                "total_debt": _value(balance, k_total_debt, bal_col),
                "operating_cash_flow": _value(cashflow, k_ocf, cf_col),
                "capex": _value(cashflow, k_capex, cf_col),
            }
        )

    # Note: yfinance capex is typically negative (cash outflow). Keep raw sign here;
    # we normalize in the construct step.
    return rows


PRACTICE_NUMERIC_COLS = [
    "sales",
    "cogs",
    "net_income",
    "total_assets",
    "total_debt",
    "operating_cash_flow",
    "capex",
]


def _apply_jitter(df: pd.DataFrame, cols: list[str], rng: np.random.Generator, jitter: float) -> pd.DataFrame:
    if jitter <= 0:
        return df
    out = df.copy()
    for c in cols:
        if c not in out.columns:
            continue
        s = pd.to_numeric(out[c], errors="coerce")
        if s.dropna().empty:
            continue
        noise = rng.normal(loc=0.0, scale=jitter, size=len(out))
        out[c] = s * (1.0 + noise)
    return out


def _backcast_to_min_years(
    df: pd.DataFrame,
    min_years: int,
    rng: np.random.Generator,
    jitter: float,
) -> pd.DataFrame:
    """Ensure each firm has at least `min_years` yearly rows by backcasting earlier years.

    This is intentionally "practice-grade": we derive earlier values from the earliest
    available year via a plausible growth distribution, then add small noise.
    """
    if min_years <= 0 or df.empty:
        return df

    # Only backcast for rows that already have the minimal fields needed downstream.
    key_required = ["sales", "total_assets", "net_income"]
    base = df.copy()
    for c in key_required:
        if c not in base.columns:
            base[c] = np.nan
    base = base[base["sales"].notna() & base["total_assets"].notna() & base["net_income"].notna()].copy()
    if base.empty:
        return df

    extra_rows: list[pd.DataFrame] = []
    for firm_id, g in base.groupby("firm_id", sort=False):
        years = sorted({int(y) for y in g["year"].dropna().tolist()})
        if len(years) >= min_years:
            continue

        # Anchor on the earliest available year row (take last if duplicates).
        y0 = years[0]
        anchor = g[g["year"] == y0].tail(1).copy()
        prev = anchor.copy()
        current_year = y0
        needed = int(min_years - len(years))
        made = 0

        while made < needed:
            current_year -= 1

            # Growth rate used for backcasting (so earlier year is smaller on average).
            gr = float(rng.normal(loc=0.06, scale=0.10))
            gr = max(-0.30, min(0.30, gr))
            scale = 1.0 / (1.0 + gr) if (1.0 + gr) != 0 else 1.0

            new_row = prev.copy()
            new_row["year"] = current_year
            for c in PRACTICE_NUMERIC_COLS:
                if c not in new_row.columns:
                    continue
                v = pd.to_numeric(new_row[c], errors="coerce")
                if v.isna().all():
                    continue
                new_row[c] = v * scale

            new_row = _apply_jitter(new_row, PRACTICE_NUMERIC_COLS, rng=rng, jitter=jitter)
            extra_rows.append(new_row)
            prev = new_row
            made += 1

    if not extra_rows:
        return df

    add = pd.concat(extra_rows, ignore_index=True)
    out = pd.concat([df, add], ignore_index=True)
    return out


def _expand_to_target_firms(
    df: pd.DataFrame,
    target_firms: int,
    rng: np.random.Generator,
    jitter: float,
    min_years: int,
) -> tuple[pd.DataFrame, dict]:
    if target_firms <= 0:
        return df, {"expanded": False}

    meta: dict = {
        "expanded": True,
        "target_firms": int(target_firms),
        "jitter": float(jitter),
        "min_years": int(min_years),
    }

    # Prefer firms with enough yearly depth so FE regression remains identified.
    by_firm = df.groupby("firm_id")["year"].nunique(dropna=True)
    eligible = by_firm[by_firm >= min_years].index.tolist()
    if not eligible:
        eligible = by_firm[by_firm >= 3].index.tolist()
    if not eligible:
        eligible = df["firm_id"].dropna().astype(str).unique().tolist()

    eligible = sorted({str(x) for x in eligible})
    base_firms = sorted({str(x) for x in df["firm_id"].dropna().astype(str).unique().tolist()})
    meta["base_firms"] = int(len(base_firms))
    meta["eligible_firms"] = int(len(eligible))

    if not eligible:
        return df, meta | {"warning": "No eligible firms to expand."}

    out_parts = [df]
    firm_count = len(base_firms)
    clone_i = 1
    while firm_count < target_firms:
        base = eligible[(clone_i - 1) % len(eligible)]
        g = df[df["firm_id"].astype(str) == base].copy()
        new_id = f"{base}__P{clone_i:04d}"
        g["firm_id"] = new_id
        if "company_name" in g.columns:
            g["company_name"] = g["company_name"].astype(str).where(g["company_name"].notna(), "").map(
                lambda s: (s + f" (Practice {clone_i:04d})").strip()
            )
        g = _apply_jitter(g, PRACTICE_NUMERIC_COLS, rng=rng, jitter=jitter)
        out_parts.append(g)
        clone_i += 1
        firm_count += 1

    out = pd.concat(out_parts, ignore_index=True)
    meta["cloned_firms"] = int(max(0, target_firms - len(base_firms)))
    meta["final_firms"] = int(out["firm_id"].nunique(dropna=True))
    meta["final_rows"] = int(out.shape[0])
    return out, meta


def main() -> int:
    args = parse_args()
    root = thesis_root()
    raw_dir = root / "data" / "raw"
    ensure_dir(raw_dir)

    start_year, end_year = years_from_range(args.years)
    if args.from_raw:
        tickers: list[str] = []
    else:
        tickers = load_tickers(root, args.tickers)
        if args.max_tickers and args.max_tickers > 0:
            tickers = tickers[: args.max_tickers]

    pulled: list[dict] = []
    errors: list[dict] = []

    if args.from_raw:
        src = Path(args.from_raw)
        df_src = pd.read_csv(src)
        for c in RAW_COLS:
            if c not in df_src.columns:
                df_src[c] = None
        df_src = df_src[RAW_COLS].copy()
        df_src["year"] = pd.to_numeric(df_src["year"], errors="coerce").astype("Int64")
        df_src = df_src[df_src["year"].notna()].copy()
        df_src["year"] = df_src["year"].astype(int)
        df_src = df_src[(df_src["year"] >= start_year) & (df_src["year"] <= end_year)].copy()
        pulled = df_src.to_dict(orient="records")
    else:
        for i, ticker in enumerate(tickers, start=1):
            try:
                rows = pull_one_yfinance(ticker)
                if not rows:
                    errors.append({"ticker": ticker, "error": "No yearly fundamentals returned (empty statements)."})
                    rows = []
                for r in rows:
                    if start_year <= int(r["year"]) <= end_year:
                        pulled.append(r)
            except Exception as e:
                errors.append({"ticker": ticker, "error": str(e)})

            if args.sleep and i != len(tickers):
                time.sleep(args.sleep)

    df = pd.DataFrame(pulled)
    for c in RAW_COLS:
        if c not in df.columns:
            df[c] = None
    df = df[RAW_COLS].sort_values(["ticker", "year"]).reset_index(drop=True)

    rng = np.random.default_rng(int(args.practice_seed))
    if args.practice_target_firms and args.practice_target_firms > 0:
        df = _backcast_to_min_years(df, min_years=int(args.practice_min_years), rng=rng, jitter=float(args.practice_jitter))
        df, practice_meta = _expand_to_target_firms(
            df,
            target_firms=int(args.practice_target_firms),
            rng=rng,
            jitter=float(args.practice_jitter),
            min_years=int(args.practice_min_years),
        )
    else:
        practice_meta = {"expanded": False}

    write_csv(df, raw_dir / "fundamentals_raw.csv")
    write_json(
        {
            "source": args.source,
            "years_requested": args.years,
            "tickers_requested": len(tickers),
            "tickers_succeeded": int(df["ticker"].nunique()) if not df.empty else 0,
            "rows_pulled": int(df.shape[0]),
            "errors": errors,
            "from_raw": args.from_raw or None,
            "practice": practice_meta,
            "notes": [
                "This is practice data from Yahoo Finance via yfinance (not identical to Bloomberg).",
                "yfinance fundamentals often cover only a limited number of yearly periods; expect an unbalanced panel.",
            ],
        },
        raw_dir / "pull_meta.json",
    )

    if errors:
        write_json(errors, raw_dir / "pull_errors.json")

    print(f"Wrote {df.shape[0]} rows -> {raw_dir/'fundamentals_raw.csv'}")
    if errors:
        print(f"Warnings: {len(errors)} tickers failed. See {raw_dir/'pull_errors.json'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
