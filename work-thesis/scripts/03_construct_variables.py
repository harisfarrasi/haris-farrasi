"""Construct final thesis variables and save to `thesis/data/final/`.

Final model:
- Sustained ROA (3-year rolling mean)
- Upgraded BQS: MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, CONS
- Legacy BQS retained as robustness: MARG, OE, LEV, CONS
- HHI baseline: GICS Sub-Industry x year
- HHI robustness: ICB hierarchy and Bloomberg industry group
- Controls: SIZE, GROWTH; optional controls for robustness

Missing BQS components stay missing. The final regression panel is complete-case
on the upgraded BQS and baseline model variables.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
import pandas as pd

import sys

sys.path.append(str(Path(__file__).resolve().parent))
from pipeline_utils import (  # noqa: E402
    as_numeric,
    ensure_dir,
    read_csv_required,
    safe_log,
    thesis_root,
    winsorize_series,
    write_csv,
    write_json,
)


BQS_COMPONENTS = ["MARG", "FCF_MARGIN", "LEV", "INTEREST_COVERAGE", "CONS"]
BQS_OLD_COMPONENTS = ["MARG", "OE", "LEV", "CONS"]
HHI_KEYS = {
    "HHI_GICS_SUB": "gics_sub_industry",
    "HHI_ICB_SUBSECTOR": "icb_subsector_name",
    "HHI_ICB_SECTOR": "icb_sector_name",
    "HHI_ICB_SUPERSECTOR": "icb_supersector_name",
    "HHI_ICB_INDUSTRY": "icb_industry_name",
    "HHI_BLOOMBERG_IND_GROUP": "bloomberg_ind_group",
}


def zscore_by_year_complete(df: pd.DataFrame, value_col: str, year_col: str = "year") -> pd.Series:
    """Yearly z-score that preserves missing values."""
    x = as_numeric(df[value_col])
    means = x.groupby(df[year_col]).transform("mean")
    stds = x.groupby(df[year_col]).transform("std")
    z = (x - means) / stds
    z = z.replace([np.inf, -np.inf], np.nan)
    z = z.mask(x.isna() | stds.isna() | (stds == 0))
    return z


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--winsor", default="0.01,0.99", help="low,high quantiles")
    p.add_argument("--roll-window", type=int, default=3, help="Rolling window (years) for SROA, SROE, and CONS")
    p.add_argument(
        "--roll-min-periods",
        type=int,
        default=3,
        help="Minimum periods for rolling metrics; final thesis default is 3.",
    )
    return p.parse_args()


def _positive_capex(capex: pd.Series) -> pd.Series:
    capex_num = as_numeric(capex)
    return pd.Series(np.where(capex_num.notna() & (capex_num < 0), -capex_num, capex_num), index=capex.index)


def _safe_ratio(num: pd.Series, den: pd.Series, require_positive_den: bool = True) -> pd.Series:
    n = as_numeric(num)
    d = as_numeric(den)
    if require_positive_den:
        d = d.where(d > 0)
    out = n / d
    return out.replace([np.inf, -np.inf], np.nan)


def _rolling_mean(df: pd.DataFrame, col: str, window: int, min_periods: int) -> pd.Series:
    return (
        df.groupby("firm_id")[col]
        .rolling(window=window, min_periods=min_periods)
        .mean()
        .reset_index(level=0, drop=True)
    )


def _rolling_std(df: pd.DataFrame, col: str, window: int, min_periods: int) -> pd.Series:
    return (
        df.groupby("firm_id")[col]
        .rolling(window=window, min_periods=min_periods)
        .std(ddof=0)
        .reset_index(level=0, drop=True)
    )


def _compute_hhi(df: pd.DataFrame, key_col: str, out_col: str) -> pd.Series:
    key = df[key_col].fillna("").astype(str).str.strip().replace("", "UNKNOWN_INDUSTRY")
    tmp = df.assign(_hhi_key=key)
    grp = tmp.groupby(["_hhi_key", "year"], dropna=False)
    sales = as_numeric(tmp["sales"])
    industry_sales = grp["sales"].transform("sum")
    share = (sales / industry_sales).replace([np.inf, -np.inf], np.nan)
    hhi = share.groupby([tmp["_hhi_key"], tmp["year"]]).transform(lambda s: (s.dropna() ** 2).sum())
    return as_numeric(hhi).clip(lower=0, upper=1).rename(out_col)


def _missing_counts(df: pd.DataFrame, cols: list[str]) -> dict[str, int]:
    return {c: int(df[c].isna().sum()) for c in cols if c in df.columns}


def main() -> int:
    args = parse_args()
    p_low, p_high = [float(x) for x in args.winsor.split(",")]
    roll_window = int(args.roll_window)
    roll_min = int(args.roll_min_periods)

    root = thesis_root()
    in_path = root / "data" / "processed" / "fundamentals_clean.csv"
    out_dir = root / "data" / "final"
    ensure_dir(out_dir)

    df = read_csv_required(in_path)
    df = df.sort_values(["firm_id", "year"]).reset_index(drop=True)

    capex_pos = _positive_capex(df.get("capex", pd.Series(np.nan, index=df.index)))
    df["capex_pos"] = capex_pos

    sales = as_numeric(df["sales"])
    cogs = as_numeric(df.get("cogs", pd.Series(np.nan, index=df.index)))
    gross_margin = as_numeric(df.get("gross_margin", pd.Series(np.nan, index=df.index)))
    net_income = as_numeric(df.get("net_income", pd.Series(np.nan, index=df.index)))
    total_assets = as_numeric(df.get("total_assets", pd.Series(np.nan, index=df.index)))
    total_debt = as_numeric(df.get("total_debt", pd.Series(np.nan, index=df.index)))
    ocf = as_numeric(df.get("operating_cash_flow", pd.Series(np.nan, index=df.index)))
    operating_income = as_numeric(df.get("operating_income", pd.Series(np.nan, index=df.index)))
    interest_expense = as_numeric(df.get("interest_expense", pd.Series(np.nan, index=df.index)))
    cash = as_numeric(df.get("cash_and_equivalents", pd.Series(np.nan, index=df.index)))
    current_assets = as_numeric(df.get("current_assets", pd.Series(np.nan, index=df.index)))
    current_liabilities = as_numeric(df.get("current_liabilities", pd.Series(np.nan, index=df.index)))
    roe_raw = as_numeric(df.get("roe", pd.Series(np.nan, index=df.index)))
    market_cap = as_numeric(df.get("market_cap", pd.Series(np.nan, index=df.index)))

    # Base profitability and quality ratios
    df["ROA"] = _safe_ratio(net_income, total_assets)
    marg_from_cogs = _safe_ratio(sales - cogs, sales)
    df["MARG"] = marg_from_cogs.where(marg_from_cogs.notna(), gross_margin)
    df["FCF_MARGIN"] = _safe_ratio(ocf - capex_pos, sales)
    df["OE"] = df["FCF_MARGIN"]
    df["LeverageRatio"] = _safe_ratio(total_debt, total_assets)
    df["LEV"] = 1.0 - df["LeverageRatio"]
    df["INTEREST_COVERAGE"] = _safe_ratio(operating_income, interest_expense)
    df["SIZE"] = safe_log(total_assets)
    df["LIQUIDITY"] = _safe_ratio(current_assets, current_liabilities)
    df["CASH_RATIO"] = _safe_ratio(cash, total_assets)
    df["CAPEX_INTENSITY"] = _safe_ratio(capex_pos, sales)
    df["MARKET_CAP_SIZE"] = safe_log(market_cap)
    df["ROE"] = roe_raw

    # Growth uses lag sales per firm.
    df["sales_lag1"] = df.groupby("firm_id")["sales"].shift(1)
    df["GROWTH"] = _safe_ratio(sales - df["sales_lag1"], df["sales_lag1"])

    ratio_cols = [
        "ROA",
        "ROE",
        "MARG",
        "FCF_MARGIN",
        "OE",
        "LEV",
        "INTEREST_COVERAGE",
        "GROWTH",
        "LIQUIDITY",
        "CASH_RATIO",
        "CAPEX_INTENSITY",
    ]
    for c in ratio_cols:
        df[c] = as_numeric(df[c]).replace([np.inf, -np.inf], np.nan)
        df[c] = winsorize_series(df[c], p_low=p_low, p_high=p_high)

    df["SROA"] = _rolling_mean(df, "ROA", roll_window, roll_min)
    df["SROA"] = winsorize_series(df["SROA"], p_low=p_low, p_high=p_high)

    df["SROE"] = _rolling_mean(df, "ROE", roll_window, roll_min)
    df["SROE"] = winsorize_series(df["SROE"], p_low=p_low, p_high=p_high)

    roll_mean = _rolling_mean(df, "MARG", roll_window, roll_min)
    roll_std = _rolling_std(df, "MARG", roll_window, roll_min)
    cv = roll_std / roll_mean.abs()
    df["CONS"] = (1.0 / cv).replace([np.inf, -np.inf], np.nan)
    df["CONS"] = winsorize_series(df["CONS"], p_low=p_low, p_high=p_high)

    # HHI variables.
    for out_col, key_col in HHI_KEYS.items():
        if key_col not in df.columns:
            df[key_col] = ""
        df[out_col] = _compute_hhi(df, key_col, out_col)
    df["HHI"] = df["HHI_GICS_SUB"]
    df["industry_key"] = df["gics_sub_industry"].fillna("").astype(str).str.strip().replace("", "UNKNOWN_INDUSTRY")

    # Z-scores for upgraded and legacy BQS.
    for c in sorted(set(BQS_COMPONENTS + BQS_OLD_COMPONENTS)):
        df[f"Z_{c}"] = zscore_by_year_complete(df, c, year_col="year")
    df["BQS"] = df[[f"Z_{c}" for c in BQS_COMPONENTS]].mean(axis=1, skipna=False)
    df["BQS_OLD"] = df[[f"Z_{c}" for c in BQS_OLD_COMPONENTS]].mean(axis=1, skipna=False)

    out_cols = [
        "firm_id",
        "ticker",
        "company_name",
        "year",
        "industry_key",
        "sector",
        "gics_sub_industry",
        "icb_subsector_name",
        "icb_sector_name",
        "icb_supersector_name",
        "icb_industry_name",
        "bloomberg_ind_group",
        "SROA",
        "SROE",
        "BQS",
        "BQS_OLD",
        "HHI",
        *HHI_KEYS.keys(),
        "SIZE",
        "GROWTH",
        "LIQUIDITY",
        "CASH_RATIO",
        "CAPEX_INTENSITY",
        "MARKET_CAP_SIZE",
        "ROA",
        "ROE",
        "MARG",
        "FCF_MARGIN",
        "OE",
        "LEV",
        "INTEREST_COVERAGE",
        "CONS",
        "Z_MARG",
        "Z_FCF_MARGIN",
        "Z_LEV",
        "Z_INTEREST_COVERAGE",
        "Z_CONS",
        "Z_OE",
    ]
    for c in out_cols:
        if c not in df.columns:
            df[c] = np.nan

    complete_case_cols = [
        "SROA",
        "BQS",
        "HHI",
        "SIZE",
        "GROWTH",
        *BQS_COMPONENTS,
    ]
    panel = df[out_cols].dropna(subset=complete_case_cols).copy()
    panel = panel.sort_values(["firm_id", "year"]).reset_index(drop=True)

    out_path = out_dir / "panel_final.csv"
    write_csv(panel, out_path)

    hhi_ranges = {}
    for c in HHI_KEYS:
        s = as_numeric(panel[c])
        hhi_ranges[c] = {
            "min": float(s.min()) if s.notna().any() else None,
            "max": float(s.max()) if s.notna().any() else None,
            "missing": int(s.isna().sum()),
        }

    write_json(
        {
            "sample_frame": "S&P 500 active constituents as of May 2026",
            "input_rows": int(df.shape[0]),
            "input_firms": int(df["firm_id"].nunique()),
            "panel_rows": int(panel.shape[0]),
            "panel_firms": int(panel["firm_id"].nunique()),
            "panel_years_min": int(panel["year"].min()) if not panel.empty else None,
            "panel_years_max": int(panel["year"].max()) if not panel.empty else None,
            "obs_by_year": {str(k): int(v) for k, v in panel["year"].value_counts().sort_index().to_dict().items()},
            "dropped_rows_due_to_complete_case": int(df.shape[0] - panel.shape[0]),
            "missing_core_variables_before_complete_case": _missing_counts(df, complete_case_cols),
            "missing_robustness_variables_before_complete_case": _missing_counts(
                df,
                ["BQS_OLD", "SROE", "LIQUIDITY", "CASH_RATIO", "CAPEX_INTENSITY", "MARKET_CAP_SIZE"],
            ),
            "bqs_policy": "Main BQS is computed only when MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, and CONS are all available.",
            "bqs_components": BQS_COMPONENTS,
            "legacy_bqs_policy": "BQS_OLD is retained for robustness and uses MARG, OE, LEV, and CONS.",
            "hhi_policy": "HHI baseline is GICS Sub-Industry x year using within-sample sales shares.",
            "hhi_robustness_columns": HHI_KEYS,
            "hhi_ranges": hhi_ranges,
            "computed_fcf_margin_policy": "FCF_MARGIN uses operating cash flow minus positive Capex divided by sales; raw Bloomberg FCF is not required for main BQS.",
        },
        out_dir / "panel_variable_audit.json",
    )
    print(f"Wrote {panel.shape[0]} rows -> {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
