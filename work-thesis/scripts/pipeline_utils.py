from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Iterable

try:
    import pandas as pd
except ModuleNotFoundError:  # pragma: no cover - optional for LaTeX build only
    pd = None  # type: ignore[assignment]
try:
    import numpy as np
except ModuleNotFoundError:  # pragma: no cover - optional for LaTeX build only
    np = None  # type: ignore[assignment]


def thesis_root() -> Path:
    # thesis/scripts/... -> thesis/
    return Path(__file__).resolve().parents[1]


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def read_csv_required(path: Path) -> pd.DataFrame:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for CSV operations")
    if not path.exists():
        raise FileNotFoundError(f"Missing file: {path}")
    return pd.read_csv(path)


def write_csv(df: pd.DataFrame, path: Path) -> None:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for CSV operations")
    ensure_dir(path.parent)
    df.to_csv(path, index=False)


def write_json(data: object, path: Path) -> None:
    ensure_dir(path.parent)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def as_numeric(series: pd.Series) -> pd.Series:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for numeric operations")
    return pd.to_numeric(series, errors="coerce")


def winsorize_series(s: pd.Series, p_low: float = 0.01, p_high: float = 0.99) -> pd.Series:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for numeric operations")
    s_num = as_numeric(s)
    if s_num.dropna().empty:
        return s_num
    lo = s_num.quantile(p_low)
    hi = s_num.quantile(p_high)
    return s_num.clip(lower=lo, upper=hi)


def safe_log(x: pd.Series) -> pd.Series:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for numeric operations")
    x_num = as_numeric(x)
    if np is not None:
        return np.log(x_num.where(x_num > 0))
    return x_num.where(x_num > 0).apply(lambda v: math.log(v) if pd.notna(v) and v > 0 else math.nan)


def zscore_by_year(df: pd.DataFrame, value_col: str, year_col: str = "year") -> pd.Series:
    if pd is None:
        raise ModuleNotFoundError("pandas is required for numeric operations")
    x = as_numeric(df[value_col])
    means = x.groupby(df[year_col]).transform("mean")
    stds = x.groupby(df[year_col]).transform("std")
    z = (x - means) / stds
    # If std=0 (or NaN), treat as 0 deviation
    return z.replace([math.inf, -math.inf], math.nan).fillna(0.0)


def first_present(index: Iterable[str], candidates: list[str]) -> str | None:
    index_set = set(index)
    for c in candidates:
        if c in index_set:
            return c
    return None


def coalesce(*values: object) -> object:
    for v in values:
        if v is None:
            continue
        if isinstance(v, float) and math.isnan(v):
            continue
        return v
    return None


def configure_matplotlib(root: Path) -> None:
    # Avoid permission issues writing to ~/.matplotlib and font caches.
    import os

    mpl_dir = root / "output" / ".mplconfig"
    ensure_dir(mpl_dir)
    os.environ.setdefault("MPLCONFIGDIR", str(mpl_dir))
    os.environ.setdefault("MPLBACKEND", "Agg")
    # Some environments lack writable default fontconfig cache dirs.
    cache_dir = root / "output" / ".cache"
    ensure_dir(cache_dir)
    os.environ.setdefault("XDG_CACHE_HOME", str(cache_dir))
