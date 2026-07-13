# LaTeX build (generated from Markdown)

Source of truth tetap `thesis/skripsi.md` (tempat kamu nulis).

Build ke LaTeX:

```bash
python3 thesis/scripts/05_build_latex.py
```

Styling LaTeX:
- Template Pandoc: `thesis/latex/template.tex`
- Metadata (isi cover): `thesis/latex/metadata.yaml`
- Output yang digenerate: `thesis/latex/skripsi.tex` (jangan diedit manual; bakal ke-overwrite)

Hasil:
- `thesis/latex/skripsi.sanitized.md` (copy untuk Pandoc; base64 image diekstrak jadi file)
- `thesis/latex/skripsi.tex` (output LaTeX)
- `thesis/latex/assets/` (gambar hasil ekstraksi)
- `thesis/latex/build_meta.json` (log build)

Catatan:
- Repo ini belum punya LaTeX engine (mis. `xelatex`/`pdflatex`), jadi script hanya menghasilkan `.tex`.
- Kalau sudah install TeX Live/MacTeX, kamu bisa compile misalnya:
  - (disarankan untuk font Latin Modern via `lmodern`): `cd thesis/latex && pdflatex skripsi.tex && pdflatex skripsi.tex`
  - atau XeLaTeX: `cd thesis/latex && xelatex skripsi.tex && xelatex skripsi.tex`
  - atau latexmk (kalau terpasang): `cd thesis/latex && latexmk -pdf -xelatex skripsi.tex`

Preview di VS Code (LaTeX Workshop):
- Install TeX Live/MacTeX (biar ada `pdflatex`/`xelatex` dan idealnya `latexmk`).
- Install extension `LaTeX Workshop` (lihat rekomendasi workspace di `.vscode/extensions.json`).
- Buka `thesis/latex/skripsi.tex`, lalu `LaTeX Workshop: Build LaTeX project`.
- PDF output default akan muncul di `thesis/latex/out/` dan bisa di-preview di tab.
- Kalau muncul error `spawn pdflatex ENOENT` / `spawn xelatex ENOENT`, biasanya VS Code belum bisa menemukan TeX binaries di `PATH`.
  - Cek dulu di terminal: `which pdflatex` / `which xelatex` harus ketemu.
  - Di macOS, path MacTeX biasanya `/Library/TeX/texbin`. Untuk BasicTeX, seringnya bin ada di `/usr/local/texlive/2026basic/bin/universal-darwin`.
  - Workspace ini sudah set `latex-workshop.latex.texbin` dan `latex-workshop.latex.env.PATH` (lihat `.vscode/settings.json`).
  - Kadang perlu restart VS Code, atau buka workspace dari terminal pakai `code .` supaya environment-nya kebawa.
 - Kalau muncul error package hilang (mis. `File 'tikz-cd.sty' not found`), itu normal di BasicTeX yang minimal.
   - Opsi 1 (disarankan): install paket yang kurang via `tlmgr` (contoh: `sudo tlmgr install tikz-cd`).
   - Opsi 2: install MacTeX full (lebih besar, tapi biasanya “langsung jalan”).
 - Kalau muncul error font `The font "Latin Modern Roman" cannot be found`, biasanya font LM belum ter-install.
   - Workspace ini sudah pakai fallback ke `Times New Roman` supaya tetap bisa build.
   - Kalau mau tetap pakai Latin Modern, install: `sudo tlmgr install lm`.
 - Kalau muncul error `spawn latexmk ENOENT`, berarti `latexmk` belum ter-install.
   - Pakai recipe `pdflatex (twice)` (default workspace), atau install: `sudo tlmgr install latexmk`.

Workflow yang aman:
- Edit konten di `thesis/skripsi.md`
- Regen LaTeX: `python3 thesis/scripts/05_build_latex.py`
- Build PDF (LaTeX Workshop atau terminal)
