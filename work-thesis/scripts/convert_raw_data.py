#!/usr/bin/env python3
"""Convert Bloomberg `raw-data.csv` to the thesis long panel format.

The raw export is a wide file with two header rows:
- row 1: field names
- row 2: fiscal years

This script is the official ingestion step for the final 2017-2025 thesis
dataset. It also writes data-audit files used to document the final Bloomberg
coverage and any suspicious numeric cells that should not silently enter models.
"""

from __future__ import annotations

import argparse
import json
import re
from datetime import date
from pathlib import Path

import numpy as np
import pandas as pd

FINANCIALS_SUB_INDUSTRIES = {
    "Asset Management & Custody Banks",
    "Consumer Finance",
    "Diversified Banks",
    "Diversified Financial Services",
    "Financial Exchanges & Data",
    "Insurance Brokers",
    "Investment Banking & Brokerage",
    "Life & Health Insurance",
    "Property & Casualty Insurance",
    "Regional Banks",
    "Reinsurance",
}

UTILITIES_SUB_INDUSTRIES = {
    "Electric Utilities",
    "Gas Utilities",
    "Independent Power Producers & Energy Traders",
    "Multi-Utilities",
    "Water Utilities",
}

EXCLUDE_SUB_INDUSTRIES = FINANCIALS_SUB_INDUSTRIES | UTILITIES_SUB_INDUSTRIES

RAW_TO_LONG = {
    "Revenue": "sales",
    "COGS": "cogs",
    "Net Income": "net_income",
    "Total Asset": "total_assets",
    "Total Debt": "total_debt",
    "CFO": "operating_cash_flow",
    "Capex": "capex",
    "Gross Margin": "gross_margin",
    "Free Cash Flow": "free_cash_flow_raw",
    "ROE": "roe",
    "Total Equity": "total_equity",
    "Market Cap": "market_cap",
    "Operating Income": "operating_income",
    "Interest Expense": "interest_expense",
    "Cash and Cash Equivalent": "cash_and_equivalents",
    "Current Assets": "current_assets",
    "Current Liability": "current_liabilities",
}

REQUIRED_LONG_FIELDS = [
    "sales",
    "cogs",
    "net_income",
    "total_assets",
    "total_debt",
    "operating_cash_flow",
    "capex",
]

OPTIONAL_LONG_FIELDS = [
    "gross_margin",
    "free_cash_flow_raw",
    "roe",
    "total_equity",
    "market_cap",
    "operating_income",
    "interest_expense",
    "cash_and_equivalents",
    "current_assets",
    "current_liabilities",
]

ALL_LONG_FIELDS = REQUIRED_LONG_FIELDS + OPTIONAL_LONG_FIELDS

META_COLUMNS = {
    "ticker": 0,
    "company_name": 1,
    "gics_sub_industry": 2,
    "icb_subsector_name": 3,
    "icb_sector_name": 4,
    "icb_supersector_name": 5,
    "icb_industry_name": 6,
    "company_description": 7,
    "bloomberg_ind_group": 8,
}

PERCENT_FIELDS = {"Gross Margin", "ROE"}
BLANK_MARKERS = {"", "--", "nan", "NaN", "N/A", "#N/A", "#N/A N/A"}


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--input", default="", help="Bloomberg wide CSV input (default: thesis/raw-data.csv)")
    p.add_argument("--output", default="", help="Long CSV output (default: thesis/data/raw/fundamentals_raw.csv)")
    return p.parse_args()


def _parse_year(value: object) -> int | None:
    if pd.isna(value):
        return None
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return None


def _clean_text(value: object) -> str:
    if pd.isna(value):
        return ""
    text = str(value).strip()
    return "" if text.lower() == "nan" else text


def _is_blank_value(value: object) -> bool:
    if pd.isna(value):
        return True
    return str(value).strip() in BLANK_MARKERS


def _parse_bloomberg_number(value: object, raw_field: str) -> float:
    if pd.isna(value):
        return np.nan
    text = str(value).strip()
    if text in BLANK_MARKERS:
        return np.nan

    is_percent = text.endswith("%")
    text = text.replace("%", "").replace(",", "")
    suffix_match = re.fullmatch(r"([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)([A-Za-z]+)", text)
    if suffix_match:
        # Bloomberg/Excel exports sometimes contain repeated suffixes such as
        # `1.06345MMMMM`. Those cells are ambiguous and are intentionally
        # excluded from numeric modeling instead of being guessed.
        suffix = suffix_match.group(2)
        if len(suffix) == 1:
            multiplier = {"K": 1e3, "M": 1e6, "B": 1e9, "T": 1e12}.get(suffix.upper())
            if multiplier is not None:
                text = suffix_match.group(1)
                try:
                    parsed_suffix = float(text) * multiplier
                except ValueError:
                    return np.nan
                if raw_field in PERCENT_FIELDS or is_percent:
                    return parsed_suffix / 100.0 if abs(parsed_suffix) > 1 else parsed_suffix
                return parsed_suffix
        return np.nan

    try:
        parsed = float(text)
    except ValueError:
        return np.nan

    if raw_field in PERCENT_FIELDS or is_percent:
        return parsed / 100.0 if abs(parsed) > 1 else parsed
    return parsed


def _sector_label(sub_industry: str) -> str:
    if sub_industry in FINANCIALS_SUB_INDUSTRIES:
        return "Financials"
    if sub_industry in UTILITIES_SUB_INDUSTRIES:
        return "Utilities"
    return "Non-Financial/Non-Utilities"


def _build_missing_by_field_year(df: pd.DataFrame) -> pd.DataFrame:
    rows: list[dict[str, object]] = []
    for field in ALL_LONG_FIELDS:
        if field not in df.columns:
            continue
        for year, g in df.groupby("year", sort=True):
            rows.append(
                {
                    "field": field,
                    "year": int(year),
                    "nonmissing": int(g[field].notna().sum()),
                    "missing": int(g[field].isna().sum()),
                }
            )
    return pd.DataFrame(rows)


def _build_missing_by_ticker_field(df: pd.DataFrame) -> pd.DataFrame:
    rows: list[dict[str, object]] = []
    fields = ALL_LONG_FIELDS
    for (ticker, company_name, industry_key), g in df.groupby(["ticker", "company_name", "industry_key"], dropna=False):
        row: dict[str, object] = {
            "ticker": ticker,
            "company_name": company_name,
            "industry_key": industry_key,
            "years": int(g["year"].nunique()),
        }
        for field in fields:
            if field in g.columns:
                row[f"missing_{field}"] = int(g[field].isna().sum())
        rows.append(row)
    out = pd.DataFrame(rows)
    missing_cols = [c for c in out.columns if c.startswith("missing_")]
    if missing_cols:
        out["missing_required_total"] = out[[c for c in missing_cols if c != "missing_gross_margin"]].sum(axis=1)
        out = out.sort_values(["missing_required_total", "ticker"], ascending=[False, True])
    return out


def _write_checklist(path: Path, audit: dict[str, object], missing_by_ticker: pd.DataFrame) -> None:
    cogs_missing = missing_by_ticker.loc[
        missing_by_ticker.get("missing_cogs", pd.Series(dtype=int)).fillna(0).astype(int) > 0,
        ["ticker", "company_name", "industry_key", "missing_cogs", "years"],
    ].sort_values(["missing_cogs", "ticker"], ascending=[False, True])

    lines = [
        "# Bloomberg Final Data Audit",
        "",
        f"Generated: {date.today().isoformat()}",
        "",
        "## Current Sample Audit",
        "",
        f"- Raw tickers in `raw-data.csv`: {audit['raw_firms']}",
        f"- Excluded Financials/Utilities tickers: {audit['excluded_firms']}",
        f"- Non-Financial/Non-Utilities tickers after exclusion: {audit['included_firms']}",
        f"- Long firm-year rows after exclusion: {audit['included_rows']}",
        f"- Raw data years: {audit['years_min']}-{audit['years_max']}",
        "",
        "## Data Status",
        "",
        "- Final thesis run uses the current `raw-data.csv`; no additional Bloomberg pull is assumed.",
        "- Available metadata: ticker, company name, GICS Sub-Industry, ICB hierarchy, company description, and Bloomberg Industry Group.",
        "- Available annual fundamentals: Revenue, COGS/Gross Margin, Net Income, Total Assets, Total Debt, CFO, Capex, ROE, Total Equity, FCF, Market Cap, Operating Income, Interest Expense, Cash, Current Assets, and Current Liabilities.",
        "- Main BQS uses computed free cash flow margin from CFO minus Capex; raw Bloomberg FCF is retained for audit because some cells have ambiguous suffix formatting.",
        "",
        "## Modeling Use",
        "",
        "- Main HHI: GICS Sub-Industry x year, using within-sample sales shares.",
        "- Robustness HHI: ICB Subsector, ICB Sector, ICB Supersector, ICB Industry, and Bloomberg Industry Group.",
        "- Robustness outcome: sustained ROE if the constructed panel passes complete-case checks.",
        "- Historical membership is not used; survivorship bias is documented as a sample limitation.",
        "",
        "## Highest Priority Missing COGS / Gross Margin Names",
        "",
    ]

    if cogs_missing.empty:
        lines.append("- No missing COGS cases after current exclusion.")
    else:
        for _, r in cogs_missing.iterrows():
            lines.append(
                f"- {r['ticker']}: {r['company_name']} | {r['industry_key']} | "
                f"missing COGS years={int(r['missing_cogs'])}/{int(r['years'])}"
            )

    lines.extend(
        [
            "",
            "## Remaining External Limitation",
            "",
            "- The dataset does not include historical S&P 500 membership. This is a limitation for external validity, not a blocker for the final thesis framing.",
            "",
        ]
    )
    path.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    args = parse_args()
    thesis_root = Path(__file__).resolve().parent.parent
    raw_csv_path = Path(args.input) if args.input else thesis_root / "raw-data.csv"
    output_dir = thesis_root / "data" / "raw"
    output_path = Path(args.output) if args.output else output_dir / "fundamentals_raw.csv"
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"Reading Bloomberg wide data from {raw_csv_path}...")
    headers = pd.read_csv(raw_csv_path, header=None, nrows=2)
    var_names = headers.iloc[0].tolist()
    years = headers.iloc[1].tolist()
    df_data = pd.read_csv(raw_csv_path, header=None, skiprows=2)

    raw_tickers = df_data.iloc[:, 0].astype(str).str.strip()
    sub_industries = df_data.iloc[:, META_COLUMNS["gics_sub_industry"]].astype(str).str.strip()
    excluded_mask = sub_industries.isin(EXCLUDE_SUB_INDUSTRIES)

    records: list[dict[str, object]] = []
    parse_problem_counts: dict[str, int] = {}
    ambiguous_suffix_counts: dict[str, int] = {}
    print("Reshaping wide format to long panel...")
    for _, row in df_data.iterrows():
        ticker = _clean_text(row.iloc[META_COLUMNS["ticker"]]).upper()
        if ticker in {"", "NAN"}:
            continue
        name = _clean_text(row.iloc[META_COLUMNS["company_name"]])
        sub_industry = _clean_text(row.iloc[META_COLUMNS["gics_sub_industry"]])
        if sub_industry in EXCLUDE_SUB_INDUSTRIES:
            continue

        metadata = {
            "icb_subsector_name": _clean_text(row.iloc[META_COLUMNS["icb_subsector_name"]]),
            "icb_sector_name": _clean_text(row.iloc[META_COLUMNS["icb_sector_name"]]),
            "icb_supersector_name": _clean_text(row.iloc[META_COLUMNS["icb_supersector_name"]]),
            "icb_industry_name": _clean_text(row.iloc[META_COLUMNS["icb_industry_name"]]),
            "company_description": _clean_text(row.iloc[META_COLUMNS["company_description"]]),
            "bloomberg_ind_group": _clean_text(row.iloc[META_COLUMNS["bloomberg_ind_group"]]),
        }

        by_year: dict[int, dict[str, float]] = {}
        for col_idx in range(max(META_COLUMNS.values()) + 1, len(row)):
            raw_field = var_names[col_idx]
            year = _parse_year(years[col_idx])
            if pd.isna(raw_field) or year is None or raw_field not in RAW_TO_LONG:
                continue
            parsed = _parse_bloomberg_number(row.iloc[col_idx], str(raw_field))
            if not _is_blank_value(row.iloc[col_idx]) and pd.isna(parsed):
                parse_problem_counts[str(raw_field)] = parse_problem_counts.get(str(raw_field), 0) + 1
                if re.search(r"[A-Za-z]+$", str(row.iloc[col_idx]).strip()):
                    ambiguous_suffix_counts[str(raw_field)] = ambiguous_suffix_counts.get(str(raw_field), 0) + 1
            by_year.setdefault(year, {})[RAW_TO_LONG[str(raw_field)]] = parsed

        for year, values in by_year.items():
            record = {
                "source": "bloomberg_raw_data_csv",
                "sample_frame": "S&P 500 active constituents as of May 2026",
                "firm_id": ticker,
                "ticker": ticker,
                "company_name": name,
                "sector": _sector_label(sub_industry),
                "industry_key": sub_industry,
                "gics_sub_industry": sub_industry,
                **metadata,
                "year": year,
                "currency": "USD",
            }
            for field in ALL_LONG_FIELDS:
                record[field] = values.get(field, np.nan)
            records.append(record)

    df_out = pd.DataFrame(records).sort_values(["ticker", "year"]).reset_index(drop=True)
    df_out.to_csv(output_path, index=False)

    missing_by_field_year = _build_missing_by_field_year(df_out)
    missing_by_ticker = _build_missing_by_ticker_field(df_out)
    missing_by_field_year.to_csv(output_dir / "missing_by_field_year.csv", index=False)
    missing_by_ticker.to_csv(output_dir / "missing_by_ticker_field.csv", index=False)

    audit = {
        "source_file": str(raw_csv_path),
        "sample_frame": "S&P 500 active constituents as of May 2026",
        "raw_firms": int(raw_tickers.nunique()),
        "excluded_firms": int(excluded_mask.sum()),
        "excluded_subindustry_counts": sub_industries[excluded_mask].value_counts().sort_index().to_dict(),
        "included_firms": int(df_out["ticker"].nunique()),
        "included_rows": int(df_out.shape[0]),
        "years_min": int(df_out["year"].min()) if not df_out.empty else None,
        "years_max": int(df_out["year"].max()) if not df_out.empty else None,
        "missing_required_fields_total": {
            field: int(df_out[field].isna().sum()) for field in REQUIRED_LONG_FIELDS if field in df_out.columns
        },
        "missing_optional_fields_total": {
            field: int(df_out[field].isna().sum()) for field in OPTIONAL_LONG_FIELDS if field in df_out.columns
        },
        "parse_problem_counts": parse_problem_counts,
        "ambiguous_suffix_counts": ambiguous_suffix_counts,
        "available_industry_classifications": {
            "gics_sub_industry": int(df_out["gics_sub_industry"].replace("", np.nan).nunique(dropna=True)),
            "icb_subsector_name": int(df_out["icb_subsector_name"].replace("", np.nan).nunique(dropna=True)),
            "icb_sector_name": int(df_out["icb_sector_name"].replace("", np.nan).nunique(dropna=True)),
            "icb_supersector_name": int(df_out["icb_supersector_name"].replace("", np.nan).nunique(dropna=True)),
            "icb_industry_name": int(df_out["icb_industry_name"].replace("", np.nan).nunique(dropna=True)),
            "bloomberg_ind_group": int(df_out["bloomberg_ind_group"].replace("", np.nan).nunique(dropna=True)),
        },
        "notes": [
            "Financials and Utilities are excluded using the GICS Sub-Industry labels available in raw-data.csv.",
            "The raw file does not contain historical S&P 500 membership; the thesis therefore uses current active constituents and documents survivorship bias.",
            "Gross Margin and ROE are stored as decimal ratios when available.",
            "Ambiguous repeated alphabetic suffixes are audited and parsed as missing rather than guessed.",
        ],
    }
    (output_dir / "raw_conversion_audit.json").write_text(
        json.dumps(audit, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    _write_checklist(output_dir / "bloomberg_final_checklist.md", audit, missing_by_ticker)

    print("Conversion completed successfully!")
    print(f"- Wrote {df_out.shape[0]} rows -> {output_path}")
    print(f"- Unique firms after Financials/Utilities exclusion: {df_out['ticker'].nunique()}")
    print(f"- Years covered: {df_out['year'].min()} to {df_out['year'].max()}")
    print(f"- Wrote audit files -> {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
