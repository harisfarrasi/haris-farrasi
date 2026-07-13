# **BAB V** **PENUTUP** {#bab-v-penutup}

Bab ini menyajikan kesimpulan penelitian, implikasi teoretis dan praktis, keterbatasan penelitian, serta saran untuk pengembangan penelitian selanjutnya berdasarkan seluruh temuan analisis empiris data panel dari Bloomberg Terminal.

## **5.1 Simpulan**

Berdasarkan kerangka teori SCP (struktur industri) dan RBV (kualitas bisnis internal), serta rancangan empiris data panel dengan *two-way fixed effects*, penelitian ini menyimpulkan beberapa poin utama berikut. Seluruh kesimpulan di bawah harus dibaca sebagai temuan pada sampel, periode, dan definisi variabel yang digunakan, bukan sebagai hukum umum untuk seluruh pasar:

1. Business Quality Score (BQS) berasosiasi positif dan signifikan dengan SROA. Hasil ini mendukung pandangan RBV bahwa kualitas internal perusahaan, yang mencakup margin, kemampuan menghasilkan arus kas bebas, disiplin leverage, kemampuan menutup beban bunga, dan konsistensi kinerja, merupakan penjelas penting profitabilitas berkelanjutan.  
2. HHI memiliki arah koefisien positif tetapi tidak signifikan secara statistik. Dengan demikian, penelitian ini tidak menemukan bukti yang cukup kuat bahwa konsentrasi sub-industri dalam sampel aktif Mei 2026 secara mandiri menjelaskan SROA setelah mengendalikan efek tetap perusahaan dan efek tahun.  
3. BQS memiliki *standardized beta* yang sedikit lebih besar daripada HHI dan signifikan secara statistik. Oleh karena itu, kualitas bisnis internal tampak lebih konsisten secara relatif dibandingkan struktur industri, meskipun selisihnya tipis dan perlu dibaca hati-hati.  
4. GROWTH berasosiasi negatif secara marginal dengan SROA, mengindikasikan bahwa pertumbuhan penjualan pada perusahaan besar tidak selalu mencerminkan pertumbuhan yang berkualitas atau meningkatkan pengembalian aset berkelanjutan.

Implikasi ringkas dari penelitian ini adalah:

1. **Implikasi akademik:** konstruksi indeks komposit kontinu (BQS berbasis Z-score) dapat menjadi alternatif proksi “kualitas perusahaan” yang lebih informatif dibanding rasio tunggal.  
2. **Implikasi praktis:** evaluasi fundamental internal perlu diberi bobot lebih besar daripada sekadar *industry bet* berbasis konsentrasi pasar, terutama ketika HHI tidak terbukti signifikan secara statistik.  
3. **Implikasi manajerial:** fokus pada penguatan pricing power, arus kas bebas, disiplin leverage, kemampuan membayar bunga, dan konsistensi kinerja berpotensi meningkatkan ketahanan profitabilitas.

## **5.2 Keterbatasan**

Keterbatasan penelitian ini meliputi:

1. **Keterbatasan sampel (survivorship bias):** Sampel penelitian hanya mencakup konstituen indeks S&P 500 yang aktif per Mei 2026 dan menarik datanya ke belakang. Pendekatan ini tidak mencakup perusahaan yang telah keluar dari indeks (*delisted*), mengalami kepailitan, atau merger sebelum Mei 2026. Hal ini berpotensi menimbulkan *survivorship bias* yang memengaruhi tingkat generalisasi temuan.  
2. **Keterbatasan klasifikasi industri dan HHI *within-sample*:** Penghitungan konsentrasi pasar (HHI) didasarkan pada penjualan perusahaan dalam sampel aktif Mei 2026. Meskipun penelitian ini menambahkan *robustness* berbasis ICB dan Bloomberg Industry Group, HHI tetap belum menangkap pesaing privat, perusahaan publik di luar S&P 500, atau perubahan klasifikasi historis perusahaan.  
3. **Keterbatasan data *complete-case*:** Beberapa perusahaan dan tahun tidak memiliki data yang diperlukan untuk membentuk BQS utama, terutama karena kebutuhan *rolling* 3 tahun dan komponen *interest coverage*. Penelitian ini memilih mengeluarkan observasi tersebut dari regresi utama agar tidak melakukan imputasi yang tidak dapat diverifikasi, tetapi konsekuensinya ukuran sampel regresi menjadi lebih kecil.  
4. **Keterbatasan endogenitas (*endogeneity bias*):** Meskipun model estimasi *two-way fixed effects* telah menyerap bias dari heterogenitas tidak teramati yang bersifat konstan (*firm fixed effects*) dan guncangan waktu (*year fixed effects*), model regresi ini belum secara penuh mengendalikan potensi endogenitas yang bersifat dinamis seperti hubungan kausalitas terbalik (*reverse causality*) atau variabel penting yang terlewat (*omitted variables*) yang berubah lintas waktu. Karena itu, hasil sebaiknya dibaca sebagai asosiasi yang kuat, bukan bukti kausal yang final.

## **5.3 Saran**

Beberapa saran taktis untuk penelitian selanjutnya meliputi:

1. Menggunakan daftar konstituen indeks historis yang dinamis per tahun (termasuk anggota yang sudah tidak aktif) guna mengeliminasi efek *survivorship bias* secara menyeluruh.  
2. Mengembangkan HHI berbasis pasar yang lebih luas dengan memasukkan perusahaan privat, perusahaan publik di luar S&P 500, atau data pangsa pasar eksternal apabila tersedia.  
3. Menggunakan data segmen bisnis perusahaan agar konglomerasi atau perusahaan multisegmen tidak dipaksa masuk ke satu klasifikasi industri tunggal.  
4. Mempertimbangkan pendekatan estimasi panel dinamis seperti *System Generalized Method of Moments* (System GMM) untuk mengatasi masalah endogenitas secara lebih tangguh dalam analisis persistensi laba.  
5. Mengeksplorasi pembobotan alternatif BQS, misalnya *principal component analysis* atau *factor score*, untuk menguji apakah kesimpulan tetap stabil ketika konstruksi indeks kualitas bisnis tidak memakai bobot rata-rata sederhana.

