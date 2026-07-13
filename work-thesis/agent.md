# Agent Guide - Skripsi Thesis Codebase

Tujuan file ini adalah memberi arahan cepat untuk agent (atau kolaborator) agar memahami konteks, batasan, dan workflow skripsi ini tanpa perlu membaca seluruh dokumen.

## Ringkas Konteks
- Judul: Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 Aktif Mei 2026 (2017-2025)
- Penulis: Alwan Haris Farrasi (S1 Ekonomi, Universitas Diponegoro)
- Fokus: Menguji dominasi struktur industri (HHI) vs kualitas bisnis (BQS) terhadap sustained profitability (SROA).
- Model: Panel FE (firm + year), cluster-robust SE, winsorization 1% dan 99%, dengan robustness terfokus.

## Sumber Kebenaran Utama
- `CONTEXT.md` = definisi variabel, rumus, dan desain empiris.
- `README.md` = ringkas tujuan dan urutan workflow script.
- `skripsi.md` = naskah skripsi utama (referensi narasi dan teori).

## Peta Folder
- `scripts/` = pipeline data dan estimasi.
- `data/` = data mentah/antara (jika ada).
- `output/` = hasil olahan, tabel, dan output regresi.
- `thesis-references/` dan `thesis-resources/` berada di root proyek (sejajar dengan `thesis-codebase`).

## Workflow Standar
Jalankan script berurutan jika perlu re-run data final:
1. `scripts/convert_raw_data.py`
2. `scripts/02_clean_data.py`
3. `scripts/03_construct_variables.py`
4. `scripts/04_regression.py`
5. `scripts/06_update_bab4_tables.py`

Jika hanya mengubah teks/narasi skripsi, jangan jalankan ulang pipeline data.

## Batasan dan Prinsip
- Jangan mengubah definisi variabel atau model tanpa persetujuan eksplisit.
- Jaga konsistensi periode data mentah 2017-2025 dan panel efektif 2019-2025.
- Framing sampel final adalah konstituen S&P 500 aktif per Mei 2026; jangan mengklaim konstituen historis dinamis kecuali data membership historis benar-benar tersedia.
- BQS utama memakai lima komponen complete-case (MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, CONS); jangan mengisi missing komponen BQS sebagai nol/rata-rata.
- BQS lama hanya dipakai sebagai robustness, bukan model utama.
- Pastikan setiap perubahan metode sesuai dengan `CONTEXT.md`.
- Hindari menghapus file data atau output yang sudah ada.

## Catatan Penulisan
- Gunakan bahasa akademik Indonesia.
- Jika perlu kutipan, rujuk sumber di `thesis-references/`.
- Untuk angka/claim faktual, cantumkan rujukan yang jelas di naskah.
