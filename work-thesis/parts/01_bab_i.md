# **BAB I**  **PENDAHULUAN** {#bab-i-pendahuluan}

## **1.1 Latar Belakang Masalah** {#1.1-latar-belakang-masalah}

Periode 2017 hingga 2025 menyediakan konteks empiris yang relevan untuk menguji persistensi profitabilitas pada perusahaan besar di Amerika Serikat. Dalam teori ekonomi mikro neoklasik, laba di atas normal diperkirakan bersifat sementara karena kompetisi dan masuknya pesaing baru akan mendorong pengembalian menuju tingkat normal. Namun, pada sebagian perusahaan berkapitalisasi besar, proses mean reversion berjalan lambat atau tidak simetris. Karena itu, pertanyaan penelitian ini bukan apakah profitabilitas berkelanjutan itu mungkin terjadi, melainkan faktor apa yang paling konsisten berkaitan dengan kemampuan perusahaan mempertahankannya dari waktu ke waktu.  
Fenomena profit persistence menjadi semakin relevan di tengah perubahan kondisi makro selama periode pengamatan. Rentang ini mencakup era suku bunga rendah pasca-Krisis Finansial Global, disrupsi rantai pasok akibat pandemi COVID-19, lonjakan inflasi global, dan siklus pengetatan moneter agresif pada 2022-2024. Dalam konteks tersebut, perusahaan dihadapkan pada tekanan yang berbeda-beda terhadap margin, biaya modal, dan ketahanan arus kas. Data agregat menunjukkan bahwa laba korporasi domestik non-finansial di Amerika Serikat meningkat dari rata-rata 8,1% dari pendapatan nasional pada periode 2010-2019 menjadi 11,2% pada kuartal terakhir 2024. Margin keuntungan bersih perusahaan S\&P 500 juga tetap relatif tinggi pada 2024. Temuan makro ini menjadi latar yang masuk akal untuk menelaah apakah persistensi profitabilitas lebih dekat pada penjelasan struktur pasar atau kualitas fundamental internal perusahaan.  
Untuk menjawab pertanyaan tersebut, penelitian ini berjudul "Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S\&P 500 (Periode 2017-2025)" dan membandingkan dua jalur penjelasan yang sama-sama berakar pada literatur ekonomi dan keuangan: jalur struktur pasar berbasis organisasi industri, dan jalur efisiensi internal berbasis teori perusahaan serta kualitas fundamental.

\begin{table}[H]
\caption{Ringkasan Awal Objek Penelitian pada Latar Belakang}
\centering
\begin{tabularx}{\textwidth}{>{\raggedright\arraybackslash}p{0.56\textwidth}>{\centering\arraybackslash}p{0.28\textwidth}}
\toprule
\textbf{Indikator objek penelitian} & \textbf{Nilai} \\
\midrule
Kerangka sampel awal & 503 ticker S\&P 500 aktif Mei 2026 \\
Eksklusi sektor utama & 97 ticker Financials dan Utilities \\
Perusahaan final regresi & 333 perusahaan \\
Observasi panel final & 2.241 firm-year \\
Periode data mentah & 2017--2025 \\
Periode panel efektif & 2019--2025 \\
Variabel utama & SROA, HHI, BQS, SIZE, GROWTH \\
\bottomrule
\end{tabularx}
\vspace{0.5em}
{\small Sumber: Ringkasan output pipeline penelitian.}
\end{table}

Tabel di atas menunjukkan bahwa penelitian ini sejak awal memang berfokus pada objek yang sangat spesifik, yaitu perusahaan besar non-keuangan dan non-utilitas yang masih aktif sebagai konstituen S\&P 500 pada Mei 2026. Visualisasi awal ini penting ditempatkan di latar belakang karena menunjukkan bahwa pembahasan penelitian tidak bergerak pada ruang abstrak, melainkan pada objek empiris yang terukur, dengan ukuran sampel, periode, dan variabel yang sudah dapat diidentifikasi sejak bab pembuka.

Dilihat dari perspektif eksternal, paradigma *Structure-Conduct-Performance* (SCP) yang dipelopori Mason dan Bain menekankan bahwa struktur pasar, terutama tingkat konsentrasi industri, dapat memengaruhi perilaku perusahaan dan pada akhirnya kinerja laba. Dalam industri yang sangat terkonsentrasi, ruang kompetisi harga cenderung lebih sempit sehingga perusahaan dominan berpotensi mempertahankan margin lebih tinggi melalui *market power*, hambatan masuk, atau koordinasi tidak langsung. Relevansi pandangan ini cukup kuat dalam konteks Amerika Serikat karena banyak pengamatan menunjukkan bahwa kapitalisasi dan laba pasar semakin terkonsentrasi pada kelompok perusahaan besar, terutama di sektor teknologi dan platform digital. Pervan, Pervan, dan Curak (2019) juga menemukan hubungan positif antara konsentrasi industri dan ROA. Meski demikian, pandangan SCP tetap harus dibaca hati-hati karena kritik Demsetz (1973) mengingatkan bahwa konsentrasi tinggi bisa juga muncul karena efisiensi perusahaan yang lebih unggul, bukan semata-mata karena rente monopoli.

Dilihat dari perspektif internal, *Resource-Based View* (RBV) yang dikembangkan Wernerfelt (1984) dan Barney (1991) memandang bahwa keunggulan kompetitif berkelanjutan lebih banyak ditentukan oleh sumber daya dan kapabilitas internal yang bernilai, langka, sulit ditiru, dan terorganisasi dengan baik. Dalam penelitian ini, sudut pandang RBV dioperasionalkan melalui konsep kualitas bisnis yang dirangkum dalam *Business Quality Score* (BQS). BQS tidak diposisikan sebagai pengganti langsung profitabilitas, melainkan sebagai proksi untuk menangkap fondasi internal yang menopang ketahanan laba, yaitu kemampuan menjaga margin, menghasilkan arus kas bebas, mempertahankan struktur utang yang sehat, memenuhi beban bunga, dan menjaga konsistensi laba. Zeitun dan Tian (2014) menegaskan bahwa faktor spesifik perusahaan seperti efisiensi manajemen dan struktur modal sering kali memiliki daya jelas yang besar terhadap variasi kinerja, sehingga kualitas internal perusahaan memang layak diuji sebagai determinan utama profitabilitas berkelanjutan.

Pemilihan periode 2017-2025 juga memperkuat urgensi penelitian ini. Rentang tersebut mencakup fase ekspansi pra-pandemi, guncangan COVID-19, periode inflasi tinggi, pengetatan moneter agresif, hingga normalisasi pertumbuhan. Pada fase seperti ini, perusahaan dengan kekuatan harga dan struktur pasar yang kuat mungkin lebih mampu mempertahankan margin, tetapi perusahaan dengan neraca sehat dan arus kas kuat juga lebih tahan terhadap tekanan biaya modal. Karena itu, periode ini menjadi laboratorium empiris yang tepat untuk menilai apakah profitabilitas berkelanjutan lebih dekat dijelaskan oleh struktur industri atau oleh kualitas internal perusahaan.

Di atas dasar itulah kesenjangan penelitian muncul. Literatur mengenai determinan profitabilitas memang telah mapan, tetapi hasil empiris tentang dominasi relatif faktor industri dan faktor perusahaan masih belum konsisten. Banyak studi terdahulu juga masih memakai rasio tunggal sebagai proksi faktor internal, sedangkan penelitian ini memakai indeks komposit BQS agar kualitas bisnis tertangkap lebih utuh. Selain itu, konteks ekonomi modern yang semakin dipengaruhi aset tak berwujud, platform, dan efek jaringan dapat membuat mekanisme pembentukan profitabilitas berbeda dari studi klasik berbasis manufaktur. Dengan demikian, penelitian ini relevan karena menawarkan pengujian yang lebih terukur atas dua penjelasan besar profitabilitas berkelanjutan dalam satu kerangka panel yang sama.

Berdasarkan uraian di atas, penelitian ini relevan bukan karena mengklaim kausalitas universal, tetapi karena menawarkan uji empiris yang terukur atas dua penjelasan besar untuk profitabilitas berkelanjutan dalam satu kerangka panel yang sama. Kontribusinya terletak pada pembandingan yang disiplin antara struktur industri dan kualitas bisnis dalam sampel yang jelas batasnya.

## **1.2 Rumusan Masalah** {#1.2-rumusan-masalah}

Berangkat dari latar belakang masalah yang telah dipaparkan, inti permasalahan penelitian ini adalah adanya ketidakpastian mengenai faktor determinan utama yang memungkinkan perusahaan untuk mempertahankan profitabilitas di atas rata-rata (sustainable profitability) di tengah kondisi pasar yang dinamis dan seringkali turbulen. Adanya dualisme perspektif teoritis antara market-based view (SCP) yang menekankan posisi dalam struktur industri, dan resource-based view (RBV) yang menekankan kapabilitas internal, menuntut pembuktian empiris untuk menentukan mana yang lebih relevan dalam konteks pasar modal Amerika Serikat periode 2017-2025.  
Secara spesifik, rumusan masalah dalam penelitian ini dirinci dalam tiga pertanyaan penelitian sebagai berikut:

1. Apakah struktur industri, yang diproksikan dengan tingkat konsentrasi pasar (*Herfindahl-Hirschman Index* - HHI), berpengaruh signifikan terhadap profitabilitas berkelanjutan perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025?
2. Apakah kualitas bisnis, yang diproksikan dengan skor komposit kualitas bisnis (*Business Quality Score* - BQS), berpengaruh signifikan terhadap profitabilitas berkelanjutan perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025?
3. Di antara struktur industri dan kualitas bisnis, faktor manakah yang memiliki kontribusi relatif lebih dominan dalam menjelaskan variasi profitabilitas berkelanjutan pada perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025 dalam spesifikasi model penelitian ini?

## **1.3 Tujuan dan Kegunaan Penelitian** {#1.3-tujuan-dan-kegunaan-penelitian}

**Tujuan Penelitian.** Penelitian ini dirancang untuk mencapai serangkaian tujuan analitis yang terstruktur, yang secara langsung merespons rumusan masalah yang telah ditetapkan. Tujuan-tujuan tersebut adalah:

1. Menganalisis pengaruh struktur industri, yang diproksikan dengan *Herfindahl-Hirschman Index* (HHI), terhadap profitabilitas berkelanjutan perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025.
2. Menganalisis pengaruh kualitas bisnis, yang diproksikan dengan *Business Quality Score* (BQS), terhadap profitabilitas berkelanjutan perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025.
3. Menganalisis dan membandingkan tingkat dominansi relatif antara faktor struktur industri dan kualitas bisnis dalam menjelaskan variasi profitabilitas berkelanjutan perusahaan konstituen S\&P 500 aktif Mei 2026 periode 2017–2025 pada spesifikasi model yang digunakan.

**Kegunaan Penelitian.** Hasil dari penelitian ini diharapkan dapat memberikan kontribusi yang substansial dan multidimensi, baik bagi pengembangan ilmu pengetahuan maupun bagi praktik bisnis dan kebijakan publik. Namun, seluruh implikasi praktis harus dibaca sebagai hasil yang bersifat kondisional pada sampel, definisi variabel, dan periode observasi yang digunakan.

1. Kegunaan Teoritis (Kontribusi Akademis):  
   Pengayaan Literatur SCP vs RBV: Penelitian ini memberikan bukti empiris mutakhir mengenai relevansi paradigma SCP dan RBV dalam konteks ekonomi digital dan pasca-pandemi. Temuan ini membantu memperjelas apakah pergeseran struktur ekonomi ke arah aset tak berwujud dan platform digital mengubah keseimbangan hubungan antara faktor industri dan perusahaan.

   Validasi Metodologis BQS: Penggunaan Business Quality Score (BQS) sebagai variabel komposit menawarkan kebaruan metodologis. Jika terbukti signifikan, BQS dapat diadopsi oleh peneliti selanjutnya sebagai proksi yang lebih robust untuk mengukur "kualitas perusahaan" dibandingkan penggunaan rasio keuangan terfragmentasi.

   Pemahaman Fenomena Profit Persistence: Penelitian ini memperdalam pemahaman akademis mengenai mengapa mekanisme mean reversion tampak lebih lambat pada periode 2017-2025, memberikan wawasan tentang friksi pasar dan keunggulan kompetitif yang persisten.

2. Kegunaan Praktis (Implikasi Manajerial dan Kebijakan):  
   Bagi Investor dan Manajer Investasi: Temuan penelitian ini memiliki implikasi langsung bagi strategi alokasi aset. Jika kualitas bisnis (BQS) terbukti lebih kuat dalam spesifikasi ini, maka analisis fundamental berbasis kualitas layak diberi bobot lebih besar daripada semata-mata rotasi sektor. Sebaliknya, bila struktur industri lebih kuat, perhatian pada sektor dengan konsentrasi tinggi menjadi relevan. Informasi ini berguna sebagai panduan awal, bukan sebagai aturan universal.

   Bagi Manajemen Perusahaan: Penelitian ini memberikan panduan strategis bagi eksekutif perusahaan. Jika BQS terbukti signifikan, manajemen pantas memprioritaskan disiplin finansial seperti menjaga margin, mengelola utang, dan memastikan kualitas arus kas sebagai pilar strategi korporasi, bukan sekadar mengejar pertumbuhan ukuran atau pangsa pasar.

   Bagi Regulator dan Pembuat Kebijakan: Hasil analisis mengenai hubungan konsentrasi industri (HHI) dan profitabilitas relevan bagi otoritas antimonopoli. Jika konsentrasi tinggi berhubungan kuat dengan profitabilitas berlebih yang persisten, itu bisa menjadi sinyal perlunya perhatian regulasi. Sebaliknya, jika profitabilitas lebih dekat pada efisiensi internal (BQS), maka intervensi terhadap perusahaan besar perlu dilakukan secara hati-hati agar tidak menghambat inovasi dan efisiensi ekonomi.

## **1.4 Sistematika Penulisan** {#1.4-sistematika-penulisan}

Untuk menyajikan hasil penelitian secara logis, terstruktur, dan komprehensif, skripsi ini disusun dengan sistematika penulisan yang mengacu pada "Pedoman Penyusunan Skripsi Ekonomi" Universitas Diponegoro. Sistematika tersebut terdiri dari lima bab utama sebagai berikut :   

**BAB I: PENDAHULUAN** Bab ini meletakkan fondasi penelitian. Uraian dimulai dari latar belakang masalah, dilanjutkan dengan rumusan masalah, tujuan dan kegunaan penelitian, serta sistematika penulisan sebagai peta jalan skripsi.

**BAB II: TINJAUAN PUSTAKA** Bab ini memuat literatur teori, literatur empiris, kerangka pemikiran teoretik, dan hipotesis penelitian yang menjadi dasar konseptual pengujian pada bab berikutnya.

**BAB III: METODE PENELITIAN** Bab ini menjelaskan rancangan metodologis penelitian, variabel penelitian, definisi operasional, populasi dan sampel, jenis dan sumber data, metode pengumpulan data, serta metode analisis ekonometrika yang digunakan.

**BAB IV: HASIL DAN ANALISIS** Bab ini menyajikan deskripsi objek penelitian, analisis data, hasil estimasi, serta pembahasan yang mengaitkan temuan empiris dengan teori dan penelitian terdahulu.

**BAB V: PENUTUP** Bab terakhir merangkum kesimpulan, keterbatasan penelitian, dan saran untuk pengembangan studi berikutnya maupun implikasi praktis.

**DAFTAR PUSTAKA DAN LAMPIRAN** Bagian akhir memuat referensi yang digunakan serta lampiran berupa output mentah pipeline Python dan audit pengolahan data yang mendukung tubuh utama skripsi.

