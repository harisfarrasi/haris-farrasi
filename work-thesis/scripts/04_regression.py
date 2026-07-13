"""Run final thesis regressions, robustness checks, tables, and figures.

Main model:
SROA_it ~ BQS_it + HHI_GICS_SUB_jt + SIZE_it + GROWTH_it
          + firm FE + year FE

SE: cluster-robust at firm level.
"""

from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path

import numpy as np
import pandas as pd
import statsmodels.api as sm
import statsmodels.formula.api as smf
from linearmodels.panel import PanelOLS, PooledOLS, RandomEffects
from scipy import stats
from statsmodels.stats.diagnostic import het_breuschpagan
from statsmodels.stats.outliers_influence import variance_inflation_factor
from statsmodels.stats.stattools import jarque_bera

import sys

sys.path.append(str(Path(__file__).resolve().parent))
from pipeline_utils import configure_matplotlib, ensure_dir, read_csv_required, thesis_root, write_csv  # noqa: E402


MAIN_REGRESSORS = ["BQS", "HHI", "SIZE", "GROWTH"]
BQS_COMPONENT_Z = ["Z_MARG", "Z_FCF_MARGIN", "Z_LEV", "Z_INTEREST_COVERAGE", "Z_CONS"]
HHI_COLUMNS = [
    "HHI_GICS_SUB",
    "HHI_ICB_SUBSECTOR",
    "HHI_ICB_SECTOR",
    "HHI_ICB_SUPERSECTOR",
    "HHI_ICB_INDUSTRY",
    "HHI_BLOOMBERG_IND_GROUP",
]

MONO_LINESTYLES = ["solid", "dashed", "dashdot", "dotted", (0, (3, 1, 1, 1))]
MONO_MARKERS = ["o", "s", "^", "D", "x"]


@dataclass(frozen=True)
class ModelSpec:
    model: str
    outcome: str
    bqs_var: str
    hhi_var: str
    controls: tuple[str, ...]
    notes: str


ROBUSTNESS_SPECS = [
    ModelSpec("Main", "SROA", "BQS", "HHI", ("SIZE", "GROWTH"), "Baseline: BQS utama + HHI GICS"),
    ModelSpec("Legacy BQS", "SROA", "BQS_OLD", "HHI", ("SIZE", "GROWTH"), "BQS alternatif empat komponen"),
    ModelSpec(
        "Extra controls",
        "SROA",
        "BQS",
        "HHI",
        ("SIZE", "GROWTH", "LIQUIDITY", "CASH_RATIO", "CAPEX_INTENSITY"),
        "Tambah liquidity, cash ratio, capex intensity",
    ),
    ModelSpec("ICB Subsector HHI", "SROA", "BQS", "HHI_ICB_SUBSECTOR", ("SIZE", "GROWTH"), "HHI ICB Subsector"),
    ModelSpec("ICB Sector HHI", "SROA", "BQS", "HHI_ICB_SECTOR", ("SIZE", "GROWTH"), "HHI ICB Sector"),
    ModelSpec("ICB Industry HHI", "SROA", "BQS", "HHI_ICB_INDUSTRY", ("SIZE", "GROWTH"), "HHI ICB Industry"),
    ModelSpec("Sustained ROE", "SROE", "BQS", "HHI", ("SIZE", "GROWTH"), "Outcome alternatif SROE"),
]


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--input", default="", help="Override input path (csv)")
    return p.parse_args()


def _read_json_safe(path: Path) -> dict[str, object]:
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {}


def _descriptive_stats(df: pd.DataFrame, cols: list[str]) -> pd.DataFrame:
    rows = []
    for c in cols:
        s = pd.to_numeric(df[c], errors="coerce")
        rows.append(
            {
                "var": c,
                "count": int(s.notna().sum()),
                "mean": float(s.mean()) if s.notna().any() else np.nan,
                "std": float(s.std(ddof=1)) if s.notna().sum() > 1 else np.nan,
                "min": float(s.min()) if s.notna().any() else np.nan,
                "p25": float(s.quantile(0.25)) if s.notna().any() else np.nan,
                "median": float(s.median()) if s.notna().any() else np.nan,
                "p75": float(s.quantile(0.75)) if s.notna().any() else np.nan,
                "max": float(s.max()) if s.notna().any() else np.nan,
            }
        )
    return pd.DataFrame(rows)


def _two_way_demean(s: pd.Series, firm: pd.Series, year: pd.Series) -> pd.Series:
    overall = s.mean()
    by_firm = s.groupby(firm).transform("mean")
    by_year = s.groupby(year).transform("mean")
    return s - by_firm - by_year + overall


def _norm_cdf(x: float) -> float:
    from math import erf, sqrt

    return 0.5 * (1.0 + erf(x / sqrt(2.0)))


def _pesaran_cd_from_residuals(df_resid: pd.DataFrame) -> dict[str, object]:
    piv = df_resid.pivot_table(index="year", columns="firm_id", values="resid", aggfunc="mean")
    firms = list(piv.columns)
    if len(firms) < 3:
        return {"cd_stat": np.nan, "p_value": np.nan, "n_pairs": 0, "notes": "N_firms<3"}

    corrs: list[float] = []
    for i, firm_i in enumerate(firms):
        s_i = piv[firm_i]
        for firm_j in firms[i + 1 :]:
            both = pd.concat([s_i, piv[firm_j]], axis=1).dropna()
            if len(both) < 2:
                continue
            r = float(both.iloc[:, 0].corr(both.iloc[:, 1]))
            if np.isfinite(r):
                corrs.append(r)

    if not corrs:
        return {"cd_stat": np.nan, "p_value": np.nan, "n_pairs": 0, "notes": "No overlap for pairwise correlations"}
    m = len(corrs)
    cd = float(np.sqrt(2.0 * m) * float(np.mean(corrs)))
    p = float(2.0 * (1.0 - _norm_cdf(abs(cd))))
    return {"cd_stat": cd, "p_value": p, "n_pairs": m, "notes": "Approx CD using pairwise correlations"}


def _mean_within_firm_ar1_corr(df_resid: pd.DataFrame) -> dict[str, object]:
    corrs: list[float] = []
    for _, g in df_resid.sort_values(["firm_id", "year"]).groupby("firm_id", sort=False):
        if g.shape[0] < 3:
            continue
        e = g["resid"].to_numpy(dtype=float)
        if np.std(e[1:]) == 0 or np.std(e[:-1]) == 0:
            continue
        r = float(np.corrcoef(e[1:], e[:-1])[0, 1])
        if np.isfinite(r):
            corrs.append(max(min(r, 0.999999), -0.999999))
    if not corrs:
        return {"mean_ar1_corr": np.nan, "p_value": np.nan, "n_firms_used": 0, "notes": "Not enough firm series"}
    z = np.arctanh(np.array(corrs, dtype=float))
    se = float(np.std(z, ddof=1) / np.sqrt(len(z))) if len(z) > 1 else np.nan
    if not np.isfinite(se) or se == 0:
        return {"mean_ar1_corr": float(np.tanh(np.mean(z))), "p_value": np.nan, "n_firms_used": len(z), "notes": "SE undefined"}
    stat = float(np.mean(z) / se)
    p = float(2.0 * (1.0 - _norm_cdf(abs(stat))))
    return {"mean_ar1_corr": float(np.tanh(np.mean(z))), "p_value": p, "n_firms_used": len(z), "notes": "Mean Fisher-z AR(1)"}


def _fit_fe(df: pd.DataFrame, spec: ModelSpec):
    regressors = [spec.bqs_var, spec.hhi_var, *spec.controls]
    needed = [spec.outcome, *regressors, "firm_id", "year"]
    est = df[needed].dropna().copy()
    if est.shape[0] < 50 or est["firm_id"].nunique() < 10:
        raise ValueError(f"Not enough observations for {spec.model}")
    rhs = " + ".join(regressors + ["C(firm_id)", "C(year)"])
    formula = f"{spec.outcome} ~ {rhs}"
    res = smf.ols(formula, data=est).fit(cov_type="cluster", cov_kwds={"groups": est["firm_id"]})
    return res, est, regressors


def _hausman_test(fe_res, re_res, terms: list[str]) -> dict[str, object]:
    common = [t for t in terms if t in fe_res.params.index and t in re_res.params.index]
    if not common:
        return {"stat": np.nan, "p_value": np.nan, "df": 0, "notes": "No common coefficients"}
    b_diff = fe_res.params[common] - re_res.params[common]
    v_diff = fe_res.cov.loc[common, common] - re_res.cov.loc[common, common]
    try:
        stat = float(b_diff.T @ np.linalg.pinv(v_diff.to_numpy(dtype=float)) @ b_diff)
    except Exception as exc:
        return {"stat": np.nan, "p_value": np.nan, "df": len(common), "notes": f"Failed: {exc}"}
    p_value = float(1.0 - stats.chi2.cdf(stat, df=len(common)))
    return {"stat": stat, "p_value": p_value, "df": len(common), "notes": "Unadjusted covariance Hausman test"}


def _breusch_pagan_lm_unbalanced(pooled_resids: pd.Series) -> dict[str, object]:
    grouped = list(pooled_resids.groupby(level=0))
    if not grouped:
        return {"stat": np.nan, "p_value": np.nan, "df": 1, "notes": "No entity groups"}
    sse = float((pooled_resids**2).sum())
    if not np.isfinite(sse) or sse <= 0:
        return {"stat": np.nan, "p_value": np.nan, "df": 1, "notes": "Invalid SSE"}
    t_i = np.array([float(len(g)) for _, g in grouped], dtype=float)
    cross_sum = float(sum((float(g.sum()) ** 2) - float((g**2).sum()) for _, g in grouped))
    denom = float(np.sum(t_i * (t_i - 1.0)))
    if denom <= 0:
        return {"stat": np.nan, "p_value": np.nan, "df": 1, "notes": "Insufficient repeated observations"}
    nobs = float(len(pooled_resids))
    stat = float((cross_sum / sse) ** 2 * ((nobs**2) / (2.0 * denom)))
    p_value = float(1.0 - stats.chi2.cdf(stat, df=1))
    return {"stat": stat, "p_value": p_value, "df": 1, "notes": "Breusch-Pagan LM approximation for unbalanced panel"}


def _panel_method_selection(df: pd.DataFrame, spec: ModelSpec) -> tuple[pd.DataFrame, pd.DataFrame]:
    regressors = [spec.bqs_var, spec.hhi_var, *spec.controls]
    needed = [spec.outcome, *regressors, "firm_id", "year"]
    est = df[needed].dropna().copy()
    panel = est.set_index(["firm_id", "year"]).sort_index()
    y = panel[spec.outcome]
    x = panel[regressors]
    x_const = sm.add_constant(x, has_constant="add")

    pooled = PooledOLS(y, x_const).fit(cov_type="unadjusted")
    re = RandomEffects(y, x_const).fit(cov_type="unadjusted")
    fe = PanelOLS(y, x, entity_effects=True).fit(cov_type="unadjusted")
    tw = PanelOLS(y, x, entity_effects=True, time_effects=True).fit(cov_type="unadjusted")

    methods_rows = []
    specs = [
        ("Pooled OLS (CEM)", pooled, "Tanpa efek perusahaan dan tahun"),
        ("Random Effects (REM)", re, "Efek acak perusahaan"),
        ("Fixed Effects (FEM)", fe, "Efek tetap perusahaan"),
        ("Two-way Fixed Effects", tw, "Efek tetap perusahaan dan tahun"),
    ]
    for name, res, notes in specs:
        methods_rows.append(
            {
                "estimator": name,
                "coef_bqs": float(res.params.get(spec.bqs_var, np.nan)),
                "coef_hhi": float(res.params.get(spec.hhi_var, np.nan)),
                "coef_size": float(res.params.get("SIZE", np.nan)),
                "coef_growth": float(res.params.get("GROWTH", np.nan)),
                "r2_overall": float(getattr(res, "rsquared_overall", getattr(res, "rsquared", np.nan))),
                "r2_within": float(getattr(res, "rsquared_within", np.nan)),
                "loglik": float(getattr(res, "loglik", np.nan)),
                "n_obs": int(res.nobs),
                "notes": notes,
            }
        )

    haus = _hausman_test(fe, re, regressors)
    bp_lm = _breusch_pagan_lm_unbalanced(pooled.resids)

    selection_rows = [
        {
            "step": 1,
            "test": "Uji Chow / Restricted F: FEM vs Pooled OLS",
            "stat": float(fe.f_pooled.stat),
            "p_value": float(fe.f_pooled.pval),
            "df_num": float(fe.f_pooled.df),
            "df_denom": float(fe.f_pooled.df_denom),
            "distribution": "F",
            "decision": "Tolak H0" if fe.f_pooled.pval < 0.05 else "Gagal tolak H0",
            "implication": "FEM lebih tepat daripada pooled OLS" if fe.f_pooled.pval < 0.05 else "Pooled OLS masih memadai",
            "notes": "H0: seluruh efek perusahaan = 0",
        },
        {
            "step": 2,
            "test": "Breusch-Pagan LM: REM vs Pooled OLS",
            "stat": bp_lm["stat"],
            "p_value": bp_lm["p_value"],
            "df_num": bp_lm["df"],
            "df_denom": np.nan,
            "distribution": "Chi-square",
            "decision": "Tolak H0" if pd.notna(bp_lm["p_value"]) and float(bp_lm["p_value"]) < 0.05 else "Gagal tolak H0",
            "implication": "REM lebih tepat daripada pooled OLS" if pd.notna(bp_lm["p_value"]) and float(bp_lm["p_value"]) < 0.05 else "Pooled OLS masih memadai",
            "notes": str(bp_lm["notes"]),
        },
        {
            "step": 3,
            "test": "Uji Hausman: FEM vs REM",
            "stat": haus["stat"],
            "p_value": haus["p_value"],
            "df_num": haus["df"],
            "df_denom": np.nan,
            "distribution": "Chi-square",
            "decision": "Tolak H0" if pd.notna(haus["p_value"]) and float(haus["p_value"]) < 0.05 else "Gagal tolak H0",
            "implication": "FEM lebih konsisten daripada REM" if pd.notna(haus["p_value"]) and float(haus["p_value"]) < 0.05 else "REM tetap efisien dan konsisten",
            "notes": str(haus["notes"]),
        },
        {
            "step": 4,
            "test": "Uji poolability two-way FE vs pooled OLS",
            "stat": float(tw.f_pooled.stat),
            "p_value": float(tw.f_pooled.pval),
            "df_num": float(tw.f_pooled.df),
            "df_denom": float(tw.f_pooled.df_denom),
            "distribution": "F",
            "decision": "Tolak H0" if tw.f_pooled.pval < 0.05 else "Gagal tolak H0",
            "implication": "Efek perusahaan dan/atau waktu perlu dimasukkan" if tw.f_pooled.pval < 0.05 else "Pooled OLS masih memadai",
            "notes": "H0: seluruh efek perusahaan dan tahun = 0",
        },
    ]
    return pd.DataFrame(methods_rows), pd.DataFrame(selection_rows)


def _coef_table(res, regressors: list[str], label_map: dict[str, str] | None = None) -> pd.DataFrame:
    label_map = label_map or {}
    rows = []
    for term in regressors:
        if term not in res.params.index:
            continue
        rows.append(
            {
                "term": label_map.get(term, term),
                "source_term": term,
                "coef": float(res.params[term]),
                "se_cluster_firm": float(res.bse[term]),
                "t": float(res.tvalues[term]),
                "p": float(res.pvalues[term]),
            }
        )
    return pd.DataFrame(rows)


def _standardized_table(res, est: pd.DataFrame, regressors: list[str], label_map: dict[str, str] | None = None) -> pd.DataFrame:
    label_map = label_map or {}
    y_name = res.model.endog_names
    y_sd = float(est[y_name].std(ddof=1)) if len(est) > 1 else np.nan
    rows = []
    for term in regressors:
        x_sd = float(est[term].std(ddof=1)) if len(est) > 1 and term in est.columns else np.nan
        b = float(res.params[term]) if term in res.params.index else np.nan
        can_std = np.isfinite(x_sd) and np.isfinite(y_sd) and y_sd != 0
        rows.append(
            {
                "term": label_map.get(term, term),
                "source_term": term,
                "beta": b,
                "sd_x": x_sd,
                "sd_y": y_sd,
                "beta_standardized": b * (x_sd / y_sd) if can_std else np.nan,
            }
        )
    return pd.DataFrame(rows)


def _diagnostics(est: pd.DataFrame, regressors: list[str], outcome: str) -> pd.DataFrame:
    rows: list[dict[str, object]] = []
    firm = est["firm_id"].astype(str)
    year = pd.to_numeric(est["year"], errors="coerce").astype(int)
    y = pd.to_numeric(est[outcome], errors="coerce")
    X = est[regressors].apply(pd.to_numeric, errors="coerce")
    y_dm = _two_way_demean(y, firm, year)
    X_dm = pd.DataFrame({c: _two_way_demean(X[c], firm, year) for c in X.columns})
    wres = sm.OLS(y_dm.to_numpy(dtype=float), X_dm.to_numpy(dtype=float)).fit()
    resid = pd.Series(wres.resid, index=est.index, name="resid")
    resid_df = pd.DataFrame({"firm_id": firm, "year": year, "resid": resid})

    jb_stat, jb_p, _, _ = jarque_bera(resid.to_numpy(dtype=float))
    rows.append({"test": "Jarque-Bera (residual normality)", "stat": float(jb_stat), "p_value": float(jb_p), "df": 2, "notes": "Residuals from within regression"})
    try:
        exog_bp = sm.add_constant(X_dm.to_numpy(dtype=float), has_constant="add")
        bp_lm, bp_lm_p, bp_f, bp_f_p = het_breuschpagan(resid.to_numpy(dtype=float), exog_bp)
        rows.append({"test": "Breusch-Pagan (LM)", "stat": float(bp_lm), "p_value": float(bp_lm_p), "df": int(X_dm.shape[1]), "notes": "Exog=within-demeaned regressors"})
        rows.append({"test": "Breusch-Pagan (F)", "stat": float(bp_f), "p_value": float(bp_f_p), "df": int(X_dm.shape[1]), "notes": "Exog=within-demeaned regressors"})
    except Exception as exc:
        rows.append({"test": "Breusch-Pagan", "stat": np.nan, "p_value": np.nan, "df": np.nan, "notes": f"Failed: {exc}"})

    cd = _pesaran_cd_from_residuals(resid_df)
    rows.append({"test": "Pesaran CD (cross-sectional dependence, approx.)", "stat": cd.get("cd_stat"), "p_value": cd.get("p_value"), "df": np.nan, "notes": f"Pairs={cd.get('n_pairs')}; {cd.get('notes')}"})
    ar1 = _mean_within_firm_ar1_corr(resid_df)
    rows.append({"test": "Within-firm residual AR(1) corr (mean)", "stat": ar1.get("mean_ar1_corr"), "p_value": ar1.get("p_value"), "df": np.nan, "notes": f"Firms used={ar1.get('n_firms_used')}; {ar1.get('notes')}"})
    return pd.DataFrame(rows)


def _fixed_effect_selection(est: pd.DataFrame, outcome: str, regressors: list[str]) -> pd.DataFrame:
    rhs = " + ".join(regressors)
    pooled = smf.ols(f"{outcome} ~ {rhs}", data=est).fit()
    year_fe = smf.ols(f"{outcome} ~ {rhs} + C(year)", data=est).fit()
    firm_fe = smf.ols(f"{outcome} ~ {rhs} + C(firm_id)", data=est).fit()
    two_way = smf.ols(f"{outcome} ~ {rhs} + C(firm_id) + C(year)", data=est).fit()

    rows: list[dict[str, object]] = []
    tests = [
        (
            "Uji gabungan two-way FE vs pooled OLS",
            two_way,
            pooled,
            "H0: seluruh efek perusahaan dan tahun = 0",
        ),
        (
            "Uji efek perusahaan | year FE",
            two_way,
            year_fe,
            "H0: alpha_i = 0 setelah efek tahun dimasukkan",
        ),
        (
            "Uji efek waktu | firm FE",
            two_way,
            firm_fe,
            "H0: delta_t = 0 setelah efek perusahaan dimasukkan",
        ),
    ]
    for name, unrestricted, restricted, notes in tests:
        try:
            f_stat, p_value, df_num = unrestricted.compare_f_test(restricted)
            rows.append(
                {
                    "test": name,
                    "f_stat": float(f_stat),
                    "p_value": float(p_value),
                    "df_num": float(df_num),
                    "df_denom": float(unrestricted.df_resid),
                    "notes": notes,
                }
            )
        except Exception as exc:
            rows.append(
                {
                    "test": name,
                    "f_stat": np.nan,
                    "p_value": np.nan,
                    "df_num": np.nan,
                    "df_denom": np.nan,
                    "notes": f"{notes}; failed: {exc}",
                }
            )
    return pd.DataFrame(rows)


def _plot_heatmap(corr: pd.DataFrame, out_path: Path, title: str) -> None:
    import matplotlib.pyplot as plt

    vals = corr.to_numpy()
    labels = list(corr.columns)
    fig, ax = plt.subplots(figsize=(max(6, len(labels)), max(5, len(labels) * 0.75)), dpi=160)
    im = ax.imshow(vals, vmin=-1, vmax=1, cmap="Greys")
    ax.set_xticks(range(len(labels)))
    ax.set_yticks(range(len(labels)))
    ax.set_xticklabels(labels, rotation=45, ha="right")
    ax.set_yticklabels(labels)
    ax.set_title(title)
    for i in range(len(labels)):
        for j in range(len(labels)):
            v = vals[i, j]
            if np.isfinite(v):
                ax.text(j, i, f"{v:.2f}", ha="center", va="center", fontsize=8)
    fig.colorbar(im, ax=ax, fraction=0.046, pad=0.04)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_coefficients(coef: pd.DataFrame, out_path: Path, title: str) -> None:
    import matplotlib.pyplot as plt

    df = coef.copy().sort_values("term")
    y = np.arange(len(df))
    x = df["coef"].to_numpy(dtype=float)
    se = pd.to_numeric(df.get("se_cluster_firm"), errors="coerce").to_numpy(dtype=float)
    fig, ax = plt.subplots(figsize=(7, 3.8), dpi=160)
    ax.axvline(0, color="black", linewidth=1)
    ax.scatter(x, y, facecolors="white", edgecolors="black", s=42, zorder=3)
    if np.isfinite(se).all():
        for yi, l, h in zip(y, x - 1.96 * se, x + 1.96 * se):
            ax.plot([l, h], [yi, yi], color="black", linewidth=1.8)
    ax.set_yticks(y)
    ax.set_yticklabels(df["term"].tolist())
    ax.set_title(title)
    ax.set_xlabel("Coefficient (95% CI)")
    ax.grid(True, axis="x", alpha=0.2)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_trends(df: pd.DataFrame, out_path: Path) -> None:
    import matplotlib.pyplot as plt

    by_year = df.groupby("year")[["SROA", "BQS", "HHI"]].mean(numeric_only=True).reset_index()
    fig, ax = plt.subplots(figsize=(8, 4.2), dpi=160)
    series = [("SROA", "Avg SROA"), ("BQS", "Avg BQS"), ("HHI", "Avg HHI")]
    for i, (col, label) in enumerate(series):
        ax.plot(
            by_year["year"],
            by_year[col],
            marker=MONO_MARKERS[i],
            linestyle=MONO_LINESTYLES[i],
            label=label,
            color="black",
            markerfacecolor="white",
        )
    ax.set_title("Yearly Averages")
    ax.set_xlabel("Year")
    ax.grid(True, alpha=0.25)
    ax.legend()
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_distributions(df: pd.DataFrame, out_path: Path) -> None:
    import matplotlib.pyplot as plt

    cols = ["SROA", "BQS", "HHI", "SIZE", "GROWTH", "INTEREST_COVERAGE"]
    fig, axes = plt.subplots(2, 3, figsize=(10.5, 6), dpi=160)
    for ax, c in zip(axes.ravel(), cols):
        s = pd.to_numeric(df[c], errors="coerce").dropna()
        ax.hist(s, bins=25, histtype="step", color="black", linewidth=1.3)
        ax.set_title(c)
        ax.grid(True, alpha=0.2)
    fig.suptitle("Distributions", y=1.02)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_scatter_with_fit(df: pd.DataFrame, x: str, y: str, out_path: Path, title: str) -> None:
    import matplotlib.pyplot as plt

    d = df[[x, y]].apply(pd.to_numeric, errors="coerce").dropna()
    fig, ax = plt.subplots(figsize=(7.5, 4.8), dpi=160)
    ax.scatter(d[x], d[y], s=12, alpha=0.35, facecolors="none", edgecolors="black", linewidths=0.5)
    if len(d) >= 5 and d[x].nunique() > 1:
        b1, b0 = np.polyfit(d[x].to_numpy(dtype=float), d[y].to_numpy(dtype=float), deg=1)
        x_line = np.linspace(float(d[x].min()), float(d[x].max()), 100)
        ax.plot(x_line, b1 * x_line + b0, color="black", linewidth=1.8, linestyle="dashed", label="OLS fit")
        ax.legend(loc="best")
    ax.set_title(title)
    ax.set_xlabel(x)
    ax.set_ylabel(y)
    ax.grid(True, alpha=0.25)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_box_by_year(df: pd.DataFrame, var: str, out_path: Path, title: str) -> None:
    import matplotlib.pyplot as plt

    d = df[["year", var]].copy()
    d[var] = pd.to_numeric(d[var], errors="coerce")
    d = d.dropna()
    years = sorted(d["year"].unique().tolist())
    data = [d.loc[d["year"] == y, var].to_numpy(dtype=float) for y in years]
    fig, ax = plt.subplots(figsize=(9, 4.8), dpi=160)
    ax.boxplot(
        data,
        tick_labels=[str(int(y)) for y in years],
        showfliers=False,
        patch_artist=True,
        boxprops={"facecolor": "white", "edgecolor": "black", "linewidth": 1.0},
        medianprops={"color": "black", "linewidth": 1.2},
        whiskerprops={"color": "black", "linewidth": 1.0},
        capprops={"color": "black", "linewidth": 1.0},
    )
    ax.set_title(title)
    ax.set_xlabel("Year")
    ax.set_ylabel(var)
    ax.grid(True, axis="y", alpha=0.25)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_group_means(df_group: pd.DataFrame, x_col: str, y_col: str, out_path: Path, title: str) -> None:
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(7.5, 4.2), dpi=160)
    ax.plot(df_group[x_col], df_group[y_col], marker="o", color="black", markerfacecolor="white")
    ax.set_title(title)
    ax.set_xlabel(x_col)
    ax.set_ylabel(y_col)
    ax.grid(True, alpha=0.25)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_attrition(sample: dict[str, object], out_path: Path) -> None:
    import matplotlib.pyplot as plt

    raw_firms = sample.get("raw_firms") or 0
    included_rows = sample.get("included_rows_after_exclusion") or sample.get("included_rows") or 0
    processed_rows = sample.get("processed_rows") or 0
    n_obs = sample.get("n_obs") or 0
    labels = ["Raw firm-years", "After exclusions", "Clean fundamentals", "Final panel"]
    values = [int(raw_firms) * 9, int(included_rows), int(processed_rows), int(n_obs)]
    fig, ax = plt.subplots(figsize=(8, 4.4), dpi=160)
    bars = ax.bar(labels, values, color="white", edgecolor="black", linewidth=1.0)
    hatches = ["", "//", "\\\\", "xx"]
    for bar, hatch in zip(bars, hatches):
        bar.set_hatch(hatch)
    ax.set_title("Sample Attrition")
    ax.set_ylabel("Firm-year rows")
    ax.tick_params(axis="x", rotation=18)
    for i, v in enumerate(values):
        ax.text(i, v, f"{v:,}", ha="center", va="bottom", fontsize=9)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_missingness_heatmap(path: Path, out_path: Path) -> None:
    import matplotlib.pyplot as plt

    if not path.exists():
        return
    miss = pd.read_csv(path)
    miss["total"] = miss["missing"] + miss["nonmissing"]
    miss["missing_rate"] = miss["missing"] / miss["total"].replace(0, np.nan)
    piv = miss.pivot(index="field", columns="year", values="missing_rate").fillna(0)
    fig, ax = plt.subplots(figsize=(9, max(5, 0.35 * len(piv))), dpi=160)
    im = ax.imshow(piv.to_numpy(), vmin=0, vmax=max(0.5, float(piv.to_numpy().max())), cmap="Greys")
    ax.set_xticks(range(len(piv.columns)))
    ax.set_xticklabels([str(int(c)) for c in piv.columns])
    ax.set_yticks(range(len(piv.index)))
    ax.set_yticklabels(piv.index)
    ax.set_title("Missingness by Field and Year")
    fig.colorbar(im, ax=ax, fraction=0.03, pad=0.03, label="Missing rate")
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_industry_composition(df: pd.DataFrame, out_path: Path) -> None:
    import matplotlib.pyplot as plt

    col = "icb_industry_name" if "icb_industry_name" in df.columns else "industry_key"
    comp = df[["firm_id", col]].drop_duplicates()
    counts = comp[col].fillna("Unknown").replace("", "Unknown").value_counts().sort_values(ascending=True)
    fig, ax = plt.subplots(figsize=(8, max(4.5, 0.35 * len(counts))), dpi=160)
    bars = ax.barh(counts.index, counts.values, color="white", edgecolor="black", linewidth=1.0)
    for i, bar in enumerate(bars):
        bar.set_hatch(["", "//", "\\\\", "xx"][i % 4])
    ax.set_title("Firm Count by ICB Industry")
    ax.set_xlabel("Number of firms")
    for i, v in enumerate(counts.values):
        ax.text(v, i, f" {v}", va="center", fontsize=8)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _plot_bqs_component_profile(df: pd.DataFrame, out_path: Path) -> pd.DataFrame:
    import matplotlib.pyplot as plt

    d = df[["BQS", *BQS_COMPONENT_Z]].dropna().copy()
    d["bqs_decile"] = pd.qcut(d["BQS"], 10, labels=[f"D{i}" for i in range(1, 11)], duplicates="drop")
    prof = d.groupby("bqs_decile", observed=True)[BQS_COMPONENT_Z].mean().reset_index()
    fig, ax = plt.subplots(figsize=(9, 4.8), dpi=160)
    for i, c in enumerate(BQS_COMPONENT_Z):
        ax.plot(
            prof["bqs_decile"],
            prof[c],
            marker=MONO_MARKERS[i],
            linestyle=MONO_LINESTYLES[i],
            linewidth=1.6,
            label=c.replace("Z_", ""),
            color="black",
            markerfacecolor="white",
        )
    ax.axhline(0, color="black", linewidth=1)
    ax.set_title("BQS Component Profile by BQS Decile")
    ax.set_xlabel("BQS decile")
    ax.set_ylabel("Mean yearly z-score")
    ax.grid(True, alpha=0.22)
    ax.legend(ncol=3, fontsize=8)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)
    return prof


def _plot_hhi_taxonomy_comparison(df: pd.DataFrame, out_path: Path) -> pd.DataFrame:
    import matplotlib.pyplot as plt

    rows = []
    for c in HHI_COLUMNS:
        if c not in df.columns:
            continue
        s = pd.to_numeric(df[c], errors="coerce").dropna()
        rows.append({"taxonomy": c, "mean": float(s.mean()), "median": float(s.median()), "min": float(s.min()), "max": float(s.max())})
    out = pd.DataFrame(rows)
    fig, ax = plt.subplots(figsize=(8.5, 4.8), dpi=160)
    x = np.arange(len(out))
    bars_mean = ax.bar(x - 0.18, out["mean"], width=0.36, label="Mean", color="white", edgecolor="black", linewidth=1.0)
    bars_median = ax.bar(x + 0.18, out["median"], width=0.36, label="Median", color="white", edgecolor="black", linewidth=1.0)
    for bar in bars_mean:
        bar.set_hatch("//")
    for bar in bars_median:
        bar.set_hatch("\\\\")
    ax.set_xticks(x)
    ax.set_xticklabels(out["taxonomy"].str.replace("HHI_", "", regex=False), rotation=25, ha="right")
    ax.set_ylim(0, min(1.05, max(0.4, float(out["max"].max()) + 0.05)))
    ax.set_title("HHI Sensitivity Across Industry Taxonomies")
    ax.set_ylabel("HHI")
    ax.legend()
    ax.grid(True, axis="y", alpha=0.2)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)
    return out


def _plot_coef_comparison(robust: pd.DataFrame, out_path: Path) -> None:
    import matplotlib.pyplot as plt

    d = robust.dropna(subset=["bqs_beta_standardized", "hhi_beta_standardized"]).copy()
    if d.empty:
        return
    x = np.arange(len(d))
    fig, ax = plt.subplots(figsize=(9, 4.8), dpi=160)
    ax.axhline(0, color="black", linewidth=1)
    bars_bqs = ax.bar(x - 0.18, d["bqs_beta_standardized"], width=0.36, label="BQS", color="white", edgecolor="black", linewidth=1.0)
    bars_hhi = ax.bar(x + 0.18, d["hhi_beta_standardized"], width=0.36, label="HHI", color="white", edgecolor="black", linewidth=1.0)
    for bar in bars_bqs:
        bar.set_hatch("//")
    for bar in bars_hhi:
        bar.set_hatch("\\\\")
    ax.set_xticks(x)
    ax.set_xticklabels(d["model"], rotation=25, ha="right")
    ax.set_title("Standardized Coefficients Across Robustness Models")
    ax.set_ylabel("Standardized beta")
    ax.legend()
    ax.grid(True, axis="y", alpha=0.22)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def _render_firm_badges(firm_ids: list[str], out_path: Path) -> None:
    import matplotlib.pyplot as plt
    from matplotlib.patches import FancyBboxPatch

    ids = sorted(set(str(x) for x in firm_ids))
    if not ids:
        return
    cols = 20
    rows = int(np.ceil(len(ids) / cols))
    fig, ax = plt.subplots(figsize=(12, max(8, rows * 0.35)), dpi=160)
    ax.set_xlim(0, cols)
    ax.set_ylim(0, rows)
    ax.axis("off")
    for i, firm in enumerate(ids):
        r = rows - 1 - (i // cols)
        c = i % cols
        box = FancyBboxPatch(
            (c + 0.05, r + 0.08),
            0.9,
            0.84,
            boxstyle="round,pad=0.02,rounding_size=0.08",
            linewidth=0.7,
            edgecolor="black",
            facecolor="white",
        )
        ax.add_patch(box)
        ax.text(c + 0.5, r + 0.5, firm[:6], ha="center", va="center", fontsize=7, color="black", fontweight="bold")
    ax.set_title("Firm Badges (Ticker Labels)", pad=10)
    fig.tight_layout()
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def main() -> int:
    args = parse_args()
    root = thesis_root()
    in_path = Path(args.input) if args.input else (root / "data" / "final" / "panel_final.csv")
    out_tables = root / "output" / "tables"
    out_figures = root / "output" / "figures"
    ensure_dir(out_tables)
    ensure_dir(out_figures)
    configure_matplotlib(root)

    df = read_csv_required(in_path)
    df["firm_id"] = df["firm_id"].astype(str)
    df["year"] = pd.to_numeric(df["year"], errors="coerce").astype(int)

    # Main descriptive outputs.
    desc = _descriptive_stats(df, MAIN_REGRESSORS + ["SROA"])
    desc = desc.set_index("var").loc[["SROA", *MAIN_REGRESSORS]].reset_index()
    write_csv(desc, out_tables / "descriptive_stats.csv")

    corr = df[["SROA", *MAIN_REGRESSORS]].corr(numeric_only=True)
    corr.to_csv(out_tables / "correlation_matrix.csv")
    _plot_heatmap(corr, out_figures / "correlation_heatmap.png", "Correlation Matrix (Pearson)")

    vif_df = df[MAIN_REGRESSORS].dropna().copy()
    if len(vif_df) >= 5:
        X = sm.add_constant(vif_df, has_constant="add")
        vifs = [{"var": name, "vif": float(variance_inflation_factor(X.values, i))} for i, name in enumerate(X.columns) if name != "const"]
        write_csv(pd.DataFrame(vifs).sort_values("vif", ascending=False), out_tables / "vif.csv")
    else:
        write_csv(pd.DataFrame([{"var": v, "vif": np.nan} for v in MAIN_REGRESSORS]), out_tables / "vif.csv")

    estimator_methods, model_selection = _panel_method_selection(df, ROBUSTNESS_SPECS[0])
    write_csv(estimator_methods, out_tables / "estimation_methods.csv")
    write_csv(model_selection, out_tables / "model_selection_tests.csv")

    main_res, main_est, main_regressors = _fit_fe(df, ROBUSTNESS_SPECS[0])
    try:
        main_f_test = main_res.f_test("BQS = 0, HHI = 0, SIZE = 0, GROWTH = 0")
        main_f_stat = float(np.asarray(main_f_test.fvalue).ravel()[0])
        main_f_p = float(np.asarray(main_f_test.pvalue).ravel()[0])
        main_f_df_num = float(getattr(main_f_test, "df_num", np.nan))
        main_f_df_denom = float(getattr(main_f_test, "df_denom", np.nan))
    except Exception:
        main_f_stat = np.nan
        main_f_p = np.nan
        main_f_df_num = np.nan
        main_f_df_denom = np.nan
    coef = _coef_table(main_res, main_regressors, {"HHI": "HHI"})
    std = _standardized_table(main_res, main_est, main_regressors, {"HHI": "HHI"})
    write_csv(coef, out_tables / "regression_coefficients.csv")
    write_csv(std, out_tables / "regression_coefficients_standardized.csv")
    write_csv(_fixed_effect_selection(main_est, "SROA", main_regressors), out_tables / "fixed_effects_selection.csv")
    fit_stats = pd.DataFrame(
        [
            {"metric": "R-squared", "value": float(main_res.rsquared), "p_value": np.nan, "df_num": np.nan, "df_denom": np.nan, "notes": "Two-way fixed effects model"},
            {"metric": "Adjusted R-squared", "value": float(main_res.rsquared_adj), "p_value": np.nan, "df_num": np.nan, "df_denom": np.nan, "notes": "Includes firm and year fixed effects"},
            {
                "metric": "Uji F simultan",
                "value": main_f_stat,
                "p_value": main_f_p,
                "df_num": main_f_df_num,
                "df_denom": main_f_df_denom,
                "notes": "Joint test: BQS = HHI = SIZE = GROWTH = 0, using firm-clustered covariance",
            },
            {"metric": "Observasi", "value": float(main_res.nobs), "p_value": np.nan, "df_num": np.nan, "df_denom": np.nan, "notes": "Firm-year observations"},
            {"metric": "Perusahaan", "value": float(main_est["firm_id"].nunique()), "p_value": np.nan, "df_num": np.nan, "df_denom": np.nan, "notes": "Unique firms"},
        ]
    )
    write_csv(fit_stats, out_tables / "model_fit_stats.csv")
    (out_tables / "regression_summary.txt").write_text(main_res.summary().as_text() + "\n", encoding="utf-8")
    write_csv(_diagnostics(main_est, main_regressors, "SROA"), out_tables / "diagnostics_tests.csv")

    # Group summaries.
    gdf = df[["SROA", "BQS"]].dropna().copy()
    gdf["bqs_decile"] = pd.qcut(gdf["BQS"], q=10, labels=False, duplicates="drop")
    gdf = gdf.dropna(subset=["bqs_decile"]).copy()
    gdf["bqs_decile"] = gdf["bqs_decile"].astype(int).map(lambda x: f"D{x + 1}")
    bqs_dec = gdf.groupby("bqs_decile", observed=True).agg(n_obs=("SROA", "size"), mean_SROA=("SROA", "mean"), mean_BQS=("BQS", "mean")).reset_index()
    bqs_dec["_order"] = bqs_dec["bqs_decile"].str.extract(r"D(\d+)").astype(int)
    bqs_dec = bqs_dec.sort_values("_order").drop(columns="_order")
    write_csv(bqs_dec, out_tables / "sroa_by_bqs_decile.csv")

    hdf = df[["SROA", "HHI"]].dropna().copy()
    hdf["hhi_quintile"] = pd.qcut(hdf["HHI"], q=5, labels=False, duplicates="drop")
    hdf = hdf.dropna(subset=["hhi_quintile"]).copy()
    hdf["hhi_quintile"] = hdf["hhi_quintile"].astype(int).map(lambda x: f"Q{x + 1}")
    hhi_q = hdf.groupby("hhi_quintile", observed=True).agg(n_obs=("SROA", "size"), mean_SROA=("SROA", "mean"), mean_HHI=("HHI", "mean")).reset_index()
    hhi_q["_order"] = hhi_q["hhi_quintile"].str.extract(r"Q(\d+)").astype(int)
    hhi_q = hhi_q.sort_values("_order").drop(columns="_order")
    write_csv(hhi_q, out_tables / "sroa_by_hhi_quintile.csv")

    # Robustness models.
    robust_rows: list[dict[str, object]] = []
    for spec in ROBUSTNESS_SPECS:
        try:
            res, est, regressors = _fit_fe(df, spec)
            std_table = _standardized_table(res, est, regressors)
            bqs_std = std_table.loc[std_table["source_term"] == spec.bqs_var, "beta_standardized"]
            hhi_std = std_table.loc[std_table["source_term"] == spec.hhi_var, "beta_standardized"]
            robust_rows.append(
                {
                    "model": spec.model,
                    "outcome": spec.outcome,
                    "bqs_var": spec.bqs_var,
                    "hhi_var": spec.hhi_var,
                    "bqs_coef": float(res.params.get(spec.bqs_var, np.nan)),
                    "bqs_p": float(res.pvalues.get(spec.bqs_var, np.nan)),
                    "bqs_beta_standardized": float(bqs_std.iloc[0]) if not bqs_std.empty else np.nan,
                    "hhi_coef": float(res.params.get(spec.hhi_var, np.nan)),
                    "hhi_p": float(res.pvalues.get(spec.hhi_var, np.nan)),
                    "hhi_beta_standardized": float(hhi_std.iloc[0]) if not hhi_std.empty else np.nan,
                    "n_obs": int(res.nobs),
                    "n_firms": int(est["firm_id"].nunique()),
                    "r2": float(res.rsquared),
                    "notes": spec.notes,
                }
            )
        except Exception as exc:
            robust_rows.append(
                {
                    "model": spec.model,
                    "outcome": spec.outcome,
                    "bqs_var": spec.bqs_var,
                    "hhi_var": spec.hhi_var,
                    "bqs_coef": np.nan,
                    "bqs_p": np.nan,
                    "bqs_beta_standardized": np.nan,
                    "hhi_coef": np.nan,
                    "hhi_p": np.nan,
                    "hhi_beta_standardized": np.nan,
                    "n_obs": 0,
                    "n_firms": 0,
                    "r2": np.nan,
                    "notes": f"Failed: {exc}",
                }
            )
    robust = pd.DataFrame(robust_rows)
    write_csv(robust, out_tables / "robustness_models.csv")

    h2_supported = bool(coef.loc[coef["term"] == "BQS", "p"].iloc[0] < 0.05 and coef.loc[coef["term"] == "BQS", "coef"].iloc[0] > 0)
    h1_supported = bool(coef.loc[coef["term"] == "HHI", "p"].iloc[0] < 0.05 and coef.loc[coef["term"] == "HHI", "coef"].iloc[0] > 0)
    bqs_std = float(std.loc[std["term"] == "BQS", "beta_standardized"].iloc[0])
    hhi_std = float(std.loc[std["term"] == "HHI", "beta_standardized"].iloc[0])
    h3_supported = bool(abs(bqs_std) > abs(hhi_std) and h2_supported)
    h3_decision = (
        "Terdukung secara inferensial, dominansi ekonomi tipis"
        if h3_supported and abs(bqs_std - hhi_std) < 0.05
        else ("Terdukung secara relatif" if h3_supported else "Tidak terdukung")
    )
    hypothesis = pd.DataFrame(
        [
            {"hypothesis": "H1", "statement": "HHI berpengaruh positif terhadap SROA", "decision": "Terdukung" if h1_supported else "Tidak terdukung secara statistik", "basis": "Koefisien HHI pada model utama"},
            {"hypothesis": "H2", "statement": "BQS berpengaruh positif terhadap SROA", "decision": "Terdukung" if h2_supported else "Tidak terdukung", "basis": "Koefisien BQS pada model utama"},
            {"hypothesis": "H3", "statement": "BQS lebih dominan dibanding HHI", "decision": h3_decision, "basis": "Perbandingan standardized beta, signifikansi, dan robustness"},
        ]
    )
    write_csv(hypothesis, out_tables / "hypothesis_decisions.csv")

    raw_audit = _read_json_safe(root / "data" / "raw" / "raw_conversion_audit.json")
    panel_audit = _read_json_safe(root / "data" / "final" / "panel_variable_audit.json")
    sample_overview = {
        "sample_frame": "S&P 500 active constituents as of May 2026",
        "source": "Bloomberg Terminal export in raw-data.csv",
        "complete_case_policy": "Main BQS complete-case: observations must have SROA, BQS, HHI, SIZE, GROWTH, MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, and CONS.",
        "n_obs": int(df.shape[0]),
        "n_firms": int(df["firm_id"].nunique()),
        "n_industries": int(df["industry_key"].nunique()) if "industry_key" in df.columns else None,
        "years_min": int(df["year"].min()) if not df.empty else None,
        "years_max": int(df["year"].max()) if not df.empty else None,
        "obs_by_year": {str(k): int(v) for k, v in df["year"].value_counts().sort_index().to_dict().items()},
        "processed_rows": int(panel_audit.get("input_rows", 0) or 0),
        "main_model_nobs": int(main_res.nobs),
        "main_model_r2": float(main_res.rsquared),
        "main_model_adj_r2": float(main_res.rsquared_adj),
        "main_model_f_stat": main_f_stat,
        "main_model_f_p": main_f_p,
        "main_model_f_df_num": main_f_df_num,
        "main_model_f_df_denom": main_f_df_denom,
        "main_model_firms": int(main_est["firm_id"].nunique()),
    }
    if raw_audit:
        sample_overview["raw_firms"] = raw_audit.get("raw_firms")
        sample_overview["excluded_firms_financials_utilities"] = raw_audit.get("excluded_firms")
        sample_overview["included_firms_after_exclusion"] = raw_audit.get("included_firms")
        sample_overview["included_rows_after_exclusion"] = raw_audit.get("included_rows")
        sample_overview["parse_problem_counts"] = raw_audit.get("parse_problem_counts")
        sample_overview["available_industry_classifications"] = raw_audit.get("available_industry_classifications")
    if panel_audit:
        sample_overview["dropped_rows_due_to_complete_case"] = panel_audit.get("dropped_rows_due_to_complete_case")
        sample_overview["missing_core_variables_before_complete_case"] = panel_audit.get("missing_core_variables_before_complete_case")
        sample_overview["bqs_components"] = panel_audit.get("bqs_components")
        sample_overview["hhi_ranges"] = panel_audit.get("hhi_ranges")
    (out_tables / "sample_overview.json").write_text(json.dumps(sample_overview, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    bqs_profile = _plot_bqs_component_profile(df, out_figures / "bqs_component_profile.png")
    write_csv(bqs_profile, out_tables / "bqs_component_profile.csv")
    hhi_summary = _plot_hhi_taxonomy_comparison(df, out_figures / "hhi_taxonomy_comparison.png")
    write_csv(hhi_summary, out_tables / "hhi_taxonomy_summary.csv")

    # Figures.
    _plot_coefficients(coef, out_figures / "coef_plot.png", "Main Coefficients (Two-way FE)")
    _plot_coef_comparison(robust, out_figures / "coef_comparison.png")
    _plot_trends(df, out_figures / "trends.png")
    _plot_distributions(df, out_figures / "distributions.png")
    _plot_scatter_with_fit(df, "BQS", "SROA", out_figures / "scatter_sroa_bqs.png", "SROA vs BQS")
    _plot_scatter_with_fit(df, "HHI", "SROA", out_figures / "scatter_sroa_hhi.png", "SROA vs HHI")
    _plot_box_by_year(df, "SROA", out_figures / "box_sroa_by_year.png", "SROA Distribution by Year")
    _plot_box_by_year(df, "BQS", out_figures / "box_bqs_by_year.png", "BQS Distribution by Year")
    _plot_group_means(bqs_dec, "bqs_decile", "mean_SROA", out_figures / "sroa_by_bqs_decile.png", "Mean SROA by BQS Decile")
    _plot_group_means(hhi_q, "hhi_quintile", "mean_SROA", out_figures / "sroa_by_hhi_quintile.png", "Mean SROA by HHI Quintile")
    _plot_attrition(sample_overview, out_figures / "sample_attrition.png")
    _plot_missingness_heatmap(root / "data" / "raw" / "missing_by_field_year.csv", out_figures / "missingness_heatmap.png")
    _plot_industry_composition(df, out_figures / "industry_composition.png")
    _render_firm_badges(df["firm_id"].astype(str).unique().tolist(), out_figures / "firm_badges.png")

    chart_path = root / "chart-data.json"
    coef_map = {r["term"]: float(r["coef"]) for r in coef.to_dict(orient="records")}
    chart = {
        "title": "Ringkasan Koefisien Final (FE + Firm-Clustered SE)",
        "labels": MAIN_REGRESSORS,
        "values": [coef_map.get(v, float("nan")) for v in MAIN_REGRESSORS],
        "notes": f"N={int(main_res.nobs)}; firms={int(main_est['firm_id'].nunique())}; R2={float(main_res.rsquared):.3f}; SE=cluster(firm_id).",
    }
    chart_path.write_text(json.dumps(chart, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Wrote outputs -> {out_tables}")
    print(f"Updated -> {chart_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
