# .agent/rules.md — Aturan Non‑Negotiable

## Umum

- Kerjakan perubahan sekecil mungkin untuk mencapai tujuan.
- Hindari “refactor sekalian” kecuali diminta.
- Utamakan correctness dan keterbacaan daripada solusi “pintar”.
- Ikuti pola yang sudah ada sebelum bikin abstraksi/dependency baru.
- Jangan menambahkan dependency baru tanpa persetujuan eksplisit.
- Jangan melakukan aksi destruktif tanpa instruksi eksplisit.
- Tentukan domain kerja dulu (site/wiki/thesis/dll). Jika ada `AGENTS.md` di domain tersebut, baca sebelum mengubah file di dalam domain itu.

## Aturan Domain-Spesifik

- Thesis: baca `thesis/AGENTS.md` (dan patuhi aturan di sana) sebelum mengubah apa pun di `thesis/`.

## Cara Kerja (untuk task non-trivial)

- Selalu buat rencana singkat + langkah verifikasi (boleh ditulis di `.agent/tasks/todo.md`).
- Kalau menemukan info baru yang membatalkan rencana: stop, update rencana, lalu lanjut.
- “Done” wajib punya bukti: tests/build/lint/typecheck atau langkah manual yang deterministik.
- Jika terjadi hal tak terduga (error/test gagal/regresi): stop nambah fitur, simpan bukti, kembali ke diagnosis.
- Setelah koreksi user atau kesalahan ditemukan: tulis 1 baris di `.agent/tasks/lessons.md`.

## Output & Data

- Jangan menghapus file di `thesis/data/` dan `thesis/output/` kecuali diminta.
- Jika pipeline skripsi menghasilkan angka baru, pastikan narasi Bab IV tetap menyatakan bahwa itu latihan/placeholder (kecuali user menyatakan sudah data final).
