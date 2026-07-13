# Workflow — Thesis Pipeline (Bloomberg final)

Tujuan: dari `raw-data.csv` Bloomberg -> panel final -> regresi -> update Bab IV -> build PDF.

## 1) Convert Bloomberg Raw Data

```sh
python3 scripts/convert_raw_data.py
```

Output penting:
- `data/raw/fundamentals_raw.csv`
- `data/raw/raw_conversion_audit.json`
- `data/raw/missing_by_field_year.csv`
- `data/raw/missing_by_ticker_field.csv`
- `data/raw/bloomberg_final_checklist.md`

## 2) Clean -> Construct -> Regression

```sh
python3 scripts/02_clean_data.py
python3 scripts/03_construct_variables.py
python3 scripts/04_regression.py
```

Catatan:
- Data mentah 2017-2025 menghasilkan panel efektif 2019-2025.
- BQS memakai complete-case, bukan imputasi.
- HHI baseline dihitung pada level GICS Sub-Industry x year.

## 3) Update tabel Bab IV di `skripsi.md`

```sh
python3 scripts/06_update_bab4_tables.py
```

## 4) Build LaTeX + PDF

```sh
python3 scripts/05_build_latex.py
cd latex
pdflatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=out skripsi.tex
pdflatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=out skripsi.tex
```

Output PDF: `latex/out/skripsi.pdf`
