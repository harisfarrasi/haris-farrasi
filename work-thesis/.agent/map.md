# .agent/map.md — “Kalau mau X, file-nya Y”

Tujuan: lookup cepat supaya agent tidak perlu *grep* seluruh repo.

## Orientasi Cepat (repo ini)

- Entry point: `AGENTS.md`
- Aturan: `.agent/rules.md`
- Workflows: `.agent/workflows/`
- Tasks/lessons: `.agent/tasks/`

## Site (web/app)

- Root app: `site/`
- Build scripts: `site/package.json`

## Wiki (catatan)

- Root notes: `wiki/`

## Thesis (skripsi)

- Catatan domain: `thesis/AGENTS.md`
- Naskah utama: `thesis/skripsi.md`
- Panduan agent skripsi: `thesis/agent.md`
- Ringkas workflow + output: `thesis/readme.md`
- Pipeline scripts:
  - Pull data: `thesis/scripts/01_pull_data.py`
  - Clean: `thesis/scripts/02_clean_data.py`
  - Construct variables: `thesis/scripts/03_construct_variables.py`
  - Regression + figures/tables: `thesis/scripts/04_regression.py`
  - Update tabel Bab IV di skripsi: `thesis/scripts/06_update_bab4_tables.py`
  - Build LaTeX dari Markdown: `thesis/scripts/05_build_latex.py`
- Output utama: `thesis/latex/out/skripsi.pdf`

## VS Code Tasks

- Task definitions: `.vscode/tasks.json`
