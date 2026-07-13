# Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 Aktif Mei 2026 (2017-2025)

Skripsi S1 Ekonomi Universitas Diponegoro  
Penulis: Alwan Haris Farrasi (NIM 12020122140050)  
Tahun akademik: 2024/2025

Ringkas tujuan:
- Menguji apakah struktur industri (SCP/HHI) atau kualitas bisnis internal (RBV/BQS) lebih dominan menjelaskan sustained profitability perusahaan S&P 500.

Data dan sampel final:
- Kerangka sampel: konstituen S&P 500 yang aktif per Mei 2026, berdasarkan `raw-data.csv` dari Bloomberg Terminal.
- Periode data mentah: 2017-2025.
- Panel regresi efektif: 2019-2025, karena SROA dan CONS membutuhkan rolling 3 tahun.
- Eksklusi: Financials dan Utilities berdasarkan GICS Sub-Industry yang tersedia di file mentah.
- Keterbatasan utama: sampel tidak mencakup perusahaan yang keluar dari indeks sebelum Mei 2026, sehingga survivorship bias harus dinyatakan eksplisit.
- Field final sudah mencakup ROE, Total Equity, FCF, Market Cap, Operating Income, Interest Expense, Cash, Current Assets/Liabilities, ICB hierarchy, dan Bloomberg Industry Group.

Metode:
- Regresi data panel dengan firm + year fixed effects.
- Cluster-robust standard errors di level perusahaan.
- Winsorization 1% dan 99% untuk variabel rasio.
- BQS utama memakai lima komponen complete-case: MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, dan CONS.
- Robustness mencakup BQS lama, extra controls, HHI berbasis ICB/Bloomberg, dan sustained ROE.

Spesifikasi model:
SROA_it = beta0 + beta1 * BQS_it + beta2 * HHI_jt + beta3 * SIZE_it + beta4 * GROWTH_it + alpha_i + delta_t + eps_it

Workflow final:
1. `python3 scripts/convert_raw_data.py`
2. `python3 scripts/02_clean_data.py`
3. `python3 scripts/03_construct_variables.py`
4. `python3 scripts/04_regression.py`
5. `python3 scripts/06_update_bab4_tables.py`
6. `python3 scripts/05_build_latex.py`
7. `cd latex && pdflatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=out skripsi.tex` dua kali.

Output data dan audit:
- Long raw panel: `data/raw/fundamentals_raw.csv`
- Audit konversi: `data/raw/raw_conversion_audit.json`
- Missingness: `data/raw/missing_by_field_year.csv`, `data/raw/missing_by_ticker_field.csv`
- Checklist Bloomberg terakhir: `data/raw/bloomberg_final_checklist.md`
- Panel final: `data/final/panel_final.csv`
- Audit panel final: `data/final/panel_variable_audit.json`

Output Bab IV:
- Tabel: `output/tables/descriptive_stats.csv`, `output/tables/correlation_matrix.csv`, `output/tables/vif.csv`, `output/tables/diagnostics_tests.csv`, `output/tables/regression_coefficients.csv`, `output/tables/regression_coefficients_standardized.csv`, `output/tables/robustness_models.csv`, `output/tables/hypothesis_decisions.csv`, `output/tables/sample_overview.json`
- Visual: `output/figures/correlation_heatmap.png`, `output/figures/coef_plot.png`, `output/figures/coef_comparison.png`, `output/figures/trends.png`, `output/figures/distributions.png`, `output/figures/sample_attrition.png`, `output/figures/missingness_heatmap.png`, `output/figures/industry_composition.png`, `output/figures/bqs_component_profile.png`, `output/figures/hhi_taxonomy_comparison.png`
- PDF: `latex/out/skripsi.pdf`

Catatan final:
- Tidak diasumsikan ada pengambilan data tambahan. File `data/raw/bloomberg_final_checklist.md` kini berfungsi sebagai audit data final, bukan daftar field yang harus ditarik lagi.
