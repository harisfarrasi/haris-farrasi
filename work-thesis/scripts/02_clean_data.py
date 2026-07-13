"""Clean raw fundamentals and save to `thesis/data/processed/`.

This step intentionally stays source-agnostic. It only prepares a tidy panel of
fundamental items (levels) to be used by the variable construction step.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd

import sys

sys.path.append(str(Path(__file__).resolve().parent))
from pipeline_utils import as_numeric, ensure_dir, read_csv_required, thesis_root, write_csv  # noqa: E402


LEVEL_NUMERIC_COLS = [
    "sales",
    "cogs",
    "net_income",
    "total_assets",
    "total_debt",
    "operating_cash_flow",
    "capex",
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


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--input", default="", help="Override input path (csv)")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    root = thesis_root()
    raw_path = Path(args.input) if args.input else (root / "data" / "raw" / "fundamentals_raw.csv")
    out_dir = root / "data" / "processed"
    ensure_dir(out_dir)

    df = read_csv_required(raw_path)
    # Basic typing
    df["year"] = pd.to_numeric(df["year"], errors="coerce").astype("Int64")
    df["ticker"] = df["ticker"].astype(str).str.upper()
    df["firm_id"] = df["firm_id"].astype(str)

    for c in LEVEL_NUMERIC_COLS:
        if c in df.columns:
            df[c] = as_numeric(df[c])

    # Drop exact duplicates, keep the last occurrence.
    df = df.sort_values(["ticker", "year"]).drop_duplicates(subset=["firm_id", "year"], keep="last")

    # Minimal sanity: remove rows without sales/assets (can't build ratios).
    df = df[df["year"].notna()].copy()
    df = df[df["sales"].notna() & df["total_assets"].notna()].copy()

    df["year"] = df["year"].astype(int)
    df = df.sort_values(["firm_id", "year"]).reset_index(drop=True)

    out_path = out_dir / "fundamentals_clean.csv"
    write_csv(df, out_path)
    print(f"Wrote {df.shape[0]} rows -> {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
