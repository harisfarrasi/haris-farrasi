# Skripsi Context

## Identitas
- Judul: Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 Aktif Mei 2026 (2017-2025)
- Penulis: Alwan Haris Farrasi (NIM 12020122140050)
- Prodi: S1 Ekonomi, Universitas Diponegoro
- Tahun akademik: 2024/2025

## Variabel dan Rumus
### Dependen: Sustained ROA (SROA)
- ROA_it = NetIncome_it / TotalAssets_it
- SROA_it = (ROA_it + ROA_it-1 + ROA_it-2) / 3

### Independen 1: Struktur Industri (HHI)
- HHI_jt = sum_i (share_i,j,t^2)
- share_i,j,t = Sales_i,j,t / sum_k Sales_k,j,t
- Baseline industri berbasis GICS Sub-Industry x tahun; robustness memakai ICB Subsector, ICB Sector, ICB Supersector, ICB Industry, dan Bloomberg Industry Group.

### Independen 2: Business Quality Score (BQS)
Komponen:
- MARG_it = (Sales_it - COGS_it) / Sales_it
- FCF_MARGIN_it = (OperatingCashFlow_it - Capex_it) / Sales_it
- LeverageRatio_it = TotalDebt_it / TotalAssets_it
- LEV_it = 1 - LeverageRatio_it
- INTEREST_COVERAGE_it = OperatingIncome_it / InterestExpense_it
- CV_MARG_it = sigma(MARG_t,t-1,t-2) / |mu(MARG_t,t-1,t-2)|
- CONS_it = 1 / CV_MARG_it

Standarisasi per tahun (cross-sectional):
- Z_X_it = (X_it - mean_t(X)) / sd_t(X)

Agregasi:
- BQS_it = (Z_MARG_it + Z_FCF_MARGIN_it + Z_LEV_it + Z_INTEREST_COVERAGE_it + Z_CONS_it) / 5
- BQS_OLD dipertahankan sebagai robustness: (Z_MARG + Z_OE + Z_LEV + Z_CONS) / 4.

### Variabel Kontrol
- SIZE_it = ln(TotalAssets_it)
- GROWTH_it = (Sales_it - Sales_it-1) / Sales_it-1

## Model Empiris
SROA_it = beta0 + beta1 * BQS_it + beta2 * HHI_jt + beta3 * SIZE_it + beta4 * GROWTH_it + alpha_i + delta_t + eps_it

## Sampel dan Data
- Kerangka sampel: konstituen S&P 500 yang aktif per Mei 2026, ditarik mundur untuk periode data 2017-2025.
- Catatan utama: data tidak mencakup konstituen yang keluar dari indeks sebelum Mei 2026, sehingga survivorship bias didokumentasikan sebagai keterbatasan.
- Eksklusi: GICS 40 (Financials) dan GICS 55 (Utilities).
- Mata uang: USD.
- Sumber: Bloomberg Terminal (`raw-data.csv`).
- Data yang ditarik: annual fundamentals 2017-2025.
- Panel regresi efektif dimulai pada 2019 karena SROA dan CONS membutuhkan rolling 3 tahun, sementara GROWTH membutuhkan lag penjualan.
- Field tambahan final: ROE, Total Equity, Free Cash Flow, Market Cap, Operating Income, Interest Expense, Cash, Current Assets, Current Liabilities, ICB hierarchy, deskripsi perusahaan, dan Bloomberg Industry Group.

## Metodologi
- Regresi data panel; baseline Fixed Effects (firm + year), dipilih karena desain penelitian berfokus pada perubahan within-firm dan perlu menyerap heterogenitas perusahaan yang konstan.
- Diagnostik ekonometrika mencakup VIF, Jarque-Bera, Breusch-Pagan, Pesaran CD approximation, dan korelasi residual intra-perusahaan.
- Cluster-robust standard errors di level perusahaan (Petersen 2009).
- Winsorization 1% dan 99% untuk variabel rasio (SROA, MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, CONS, GROWTH, dan kontrol robustness).
- Regresi utama memakai complete-case BQS: observasi dikeluarkan jika tidak dapat membentuk seluruh komponen MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, dan CONS.
- Robustness terfokus: BQS lama, extra controls, HHI alternatif berbasis ICB/Bloomberg, dan sustained ROE sebagai outcome alternatif.

## Hipotesis
- H1: HHI berpengaruh positif terhadap SROA.
- H2: BQS berpengaruh positif terhadap SROA.
- H3: Pengaruh BQS lebih dominan dibanding HHI.
