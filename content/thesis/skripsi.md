# **DETERMINAN PROFITABILITAS BERKELANJUTAN: ANALISIS STRUKTUR INDUSTRI DAN KUALITAS BISNIS PADA PERUSAHAAN KONSTITUEN S\&P 500 (PERIODE 2017–2025)**

 

**![][image1]**

SKRIPSI

Untuk menyelesaikan Program Studi S-1 

**Alwan Haris Farrasi**

**NIM. 12020122140050**

 

**Program Studi S1 Ekonomi**

**Departemen Ilmu Ekonomi dan Studi Pembangunan**

**Fakultas Ekonomika dan Bisnis**

**Universitas Diponegoro**

**2025/2026**

<!-- LATEX_ABSTRACT_START -->
# **ABSTRAK**

Penelitian ini menguji apakah struktur industri atau kualitas bisnis internal lebih konsisten menjelaskan profitabilitas berkelanjutan pada perusahaan konstituen S\&P 500 yang aktif pada Mei 2026. Variabel dependen yang digunakan adalah Sustained Return on Assets (SROA), yaitu rata-rata ROA tiga tahun, sedangkan struktur industri diproksikan dengan Herfindahl-Hirschman Index (HHI) dan kualitas bisnis diproksikan dengan Business Quality Score (BQS). BQS dibentuk dari lima komponen, yaitu margin kotor, free cash flow margin, leverage inverse, interest coverage, dan konsistensi laba. Sampel penelitian mencakup perusahaan non-keuangan dan non-utilitas dengan data panel efektif 2019--2025, diestimasi menggunakan two-way fixed effects dan standard errors yang di-*cluster* pada level perusahaan. Hasil penelitian menunjukkan bahwa BQS berasosiasi positif dan signifikan terhadap SROA, sedangkan HHI berkoefisien positif tetapi tidak signifikan. Temuan ini mengindikasikan bahwa dalam sampel yang digunakan, kualitas bisnis internal lebih konsisten menjelaskan profitabilitas berkelanjutan dibandingkan konsentrasi industri. Meski demikian, kesimpulan tetap dibatasi oleh adanya *survivorship bias*, sifat HHI yang *within-sample*, dan desain observasional yang tidak sepenuhnya mengidentifikasi kausalitas.

Kata kunci: profitabilitas berkelanjutan, BQS, HHI, fixed effects, S\&P 500

# **ABSTRACT**

This study examines whether industry structure or internal business quality more consistently explains sustained profitability among S\&P 500 constituents active in May 2026. The dependent variable is Sustained Return on Assets (SROA), defined as a three-year moving average of ROA. Industry structure is proxied by the Herfindahl-Hirschman Index (HHI), while business quality is proxied by the Business Quality Score (BQS). The BQS is constructed from five components: gross margin, free cash flow margin, inverse leverage, interest coverage, and earnings consistency. The sample consists of non-financial and non-utility firms with an effective panel period of 2019--2025 and is estimated using a two-way fixed effects model with firm-clustered standard errors. The results show that BQS is positively and significantly associated with SROA, whereas HHI is positive but not statistically significant. These findings suggest that, within this sample, internal business quality is a more consistent explanation of sustained profitability than industry concentration. The interpretation remains bounded by survivorship bias, the within-sample nature of HHI, and the observational design, which does not establish full causal identification.

Keywords: sustained profitability, BQS, HHI, fixed effects, S\&P 500
<!-- LATEX_ABSTRACT_END -->

# **Daftar Isi** {#daftar-isi}

Daftar isi, daftar tabel, daftar gambar, dan daftar lampiran dihasilkan otomatis pada tahap kompilasi LaTeX agar nomor halaman mengikuti pedoman fakultas.

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

# **BAB II**  **TINJAUAN PUSTAKA** {#bab-ii-tinjauan-pustaka}

## **2.1 Literatur Teori** {#2.1-literatur-teori}

Berdasarkan rumusan masalah yang diajukan pada bab sebelumnya, penelitian ini diletakkan pada landasan teori yang nama dan konstruksinya memang sudah mapan dalam literatur ekonomi dan keuangan, bukan pada istilah yang dibuat sendiri oleh peneliti. Secara konseptual, terdapat empat pijakan utama yang digunakan, yaitu: (1) teori persaingan neoklasik dan laba normal jangka panjang, (2) teori *persistence of profit* dari Mueller, (3) paradigma *Structure-Conduct-Performance* (SCP) dalam organisasi industri, dan (4) teori pertumbuhan perusahaan, *resource-based view*, serta teori struktur modal sebagai dasar pembacaan faktor internal. Dengan kerangka seperti ini, istilah *Business Quality Score* (BQS) dalam penelitian ini harus dipahami bukan sebagai nama grand theory, melainkan sebagai nama indeks operasional yang dibangun dari teori-teori yang sudah ada.

### **2.1.1 Persistence of Profit**

Teori Persistensi Laba, yang dikembangkan secara ekstensif oleh Dennis Mueller (1977, 1986), merupakan kritik dan pengembangan terhadap teori ekonomi neoklasik tentang kompetisi.  
Dalam model persaingan sempurna (perfect competition), keberadaan laba di atas normal (abnormal profit) diasumsikan bersifat sementara (transitory). Jika sebuah perusahaan memperoleh laba supernormal, hal ini akan menarik masuknya pesaing baru (entry) ke dalam pasar. Masuknya pesaing akan meningkatkan penawaran, menurunkan harga, dan pada akhirnya mengikis laba perusahaan tersebut hingga kembali ke tingkat normal (biaya modal). Proses ini dikenal sebagai Competitive Environment Hypothesis atau hipotesis pengembalian ke rata-rata (mean reversion).  
Namun, Mueller (1986) berargumen bahwa dalam realitasnya, proses mean reversion ini seringkali terhambat atau tidak sempurna. Beberapa perusahaan mampu mempertahankan profitabilitas di atas rata-rata industri untuk jangka waktu yang sangat lama. Fenomena inilah yang disebut Persistensi Laba. Persistensi ini menunjukkan adanya hambatan kompetisi yang mencegah kekuatan pasar untuk menetralkan keuntungan perusahaan.  
Dalam penelitian ini, teori Mueller menjadi landasan utama penggunaan variabel dependen Profitabilitas Berkelanjutan (Sustained ROA). Berbeda dengan laba tahunan yang fluktuatif, Sustained ROA (rata-rata 3 tahun) menangkap komponen laba permanen yang mencerminkan keberhasilan perusahaan dalam melawan gaya gravitasi kompetisi.

### **2.1.2 Structure-Conduct-Performance (SCP)**

Untuk menjelaskan faktor eksternal yang memungkinkan terjadinya persistensi laba, penelitian ini menggunakan Paradigma Structure-Conduct-Performance (SCP) yang dipelopori oleh Mason (1939) dan Bain (1956) dalam bidang Organisasi Industri.  
Premis dasar SCP adalah bahwa kinerja perusahaan (Performance) ditentukan oleh perilaku perusahaan (Conduct) di pasar, yang pada gilirannya ditentukan oleh struktur pasar (Structure) tempat perusahaan tersebut beroperasi. Hubungan kausalitasnya adalah: Struktur → Perilaku → Kinerja. Elemen struktur yang paling krusial dalam paradigma SCP adalah tingkat konsentrasi industri. Bain (1951) mempostulatkan bahwa dalam industri dengan konsentrasi tinggi (di mana pangsa pasar dikuasai oleh sedikit perusahaan besar), intensitas persaingan cenderung menurun.  
Perusahaan dominan dapat melakukan koordinasi diam-diam (tacit collusion) untuk menghindari perang harga. Hal ini menciptakan hambatan masuk (barriers to entry) bagi pesaing kecil. Akibatnya, perusahaan dalam struktur pasar yang terkonsentrasi (Oligopoli) dapat menetapkan harga di atas biaya marjinal, sehingga menikmati profitabilitas yang lebih tinggi secara persisten dibandingkan perusahaan di pasar yang terfragmentasi.  
Teori ini mendasari penggunaan variabel independen Struktur Industri yang diukur dengan Herfindahl-Hirschman Index (HHI). Semakin tinggi HHI, semakin kuat struktur oligopoli yang melindungi profitabilitas perusahaan.

### **2.1.3 Resource-Based View (RBV) dan Theory of the Growth of the Firm**

Sebagai penjelasan faktor internal, penelitian ini tidak bertumpu pada nama indeks BQS itu sendiri, melainkan pada landasan yang lebih dahulu mapan, yaitu *The Theory of the Growth of the Firm* dari Penrose (1959), *Resource-Based View* dari Wernerfelt (1984), dan pengembangan keunggulan kompetitif berkelanjutan dari Barney (1991). Penrose menekankan bahwa perusahaan bukan sekadar fungsi produksi yang identik, melainkan organisasi yang memiliki kumpulan sumber daya, kapasitas manajerial, dan batas pertumbuhan yang berbeda. Wernerfelt dan Barney kemudian memperjelas bahwa perbedaan kualitas sumber daya internal inilah yang dapat menjelaskan mengapa perusahaan dalam industri yang sama tetap menghasilkan kinerja yang berbeda.

RBV menolak asumsi bahwa perusahaan dalam satu industri adalah identik. Sebaliknya, RBV memandang perusahaan sebagai sekumpulan sumber daya (*bundle of resources*) yang unik, heterogen, dan sulit dipindahkan (*immobile*). Kinerja perusahaan tidak ditentukan oleh industri semata, melainkan oleh seberapa baik perusahaan mengelola sumber daya internalnya. Menurut Barney (1991), agar sumber daya dapat menghasilkan keunggulan kompetitif berkelanjutan yang pada akhirnya tercermin dalam profitabilitas persisten, sumber daya tersebut harus memenuhi kriteria VRIO:

1. Valuable (Bernilai): Mampu mengeksploitasi peluang/menetralkan ancaman.  
2. Rare (Langka): Tidak dimiliki banyak pesaing.  
3. Inimitable (Sulit Ditiru): Pesaing sulit menduplikasi karena biaya tinggi atau kompleksitas.  
4. Organized (Terorganisir): Perusahaan mampu mengelola sumber daya tersebut.

Dalam konteks keuangan empiris, konsep sumber daya internal yang unggul tersebut diterjemahkan menjadi faktor "kualitas". Asness, Frazzini, dan Pedersen (2019) dalam "Quality Minus Junk" menunjukkan bahwa perusahaan berkualitas tinggi cenderung memiliki profitabilitas yang lebih baik, pertumbuhan yang lebih sehat, dan keamanan finansial yang lebih tinggi. Atas dasar itulah penelitian ini membangun variabel Kualitas Bisnis (*Business Quality Score* atau BQS). Dengan demikian, BQS harus dibaca sebagai instrumen pengukuran untuk menangkap kapabilitas internal, bukan sebagai teori yang berdiri sendiri.

### **2.1.4 Landasan Teoretis Konstruksi BQS dan Variabel Kontrol**

Karena indeks komposit sering menjadi titik kritik utama dalam sidang, setiap komponen pembentuk BQS dan setiap variabel kontrol pada penelitian ini harus memiliki dasar teori yang jelas. Nama BQS hanyalah label operasional; yang memberikan legitimasi ilmiahnya adalah alasan teoretis di balik setiap komponen yang masuk ke dalam indeks.

1. **Margin kotor (MARG)** dipakai untuk menangkap *pricing power* dan efisiensi operasi dasar. Dalam perspektif organisasi industri, margin yang tinggi dapat mencerminkan ruang *mark-up* yang lebih besar atau kemampuan perusahaan mempertahankan harga di atas biaya. Dalam perspektif keuangan empiris, Novy-Marx (2013) menunjukkan bahwa profitabilitas kotor merupakan indikator yang kuat untuk membaca kualitas ekonomi perusahaan.
2. **Free cash flow margin (FCF\_MARGIN)** dipakai karena laba yang benar-benar dikonversi menjadi kas lebih dekat pada kapasitas ekonomi yang riil dibanding laba akrual murni. Sloan (1996) menunjukkan bahwa komponen arus kas memiliki daya prediksi laba masa depan yang lebih kuat daripada komponen akrual, sehingga dimensi kas perlu masuk jika penelitian ingin mengukur kualitas bisnis, bukan hanya kualitas akuntansi.
3. **Leverage discipline (LEV)** diberi tempat penting karena teori struktur modal menjelaskan bahwa utang membawa manfaat pajak sekaligus biaya kebangkrutan dan biaya *financial distress*. Dalam kerangka *trade-off theory*, perusahaan yang mampu menjaga struktur utang tetap sehat memiliki peluang lebih besar mempertahankan fleksibilitas finansial. Karena tujuan penelitian adalah membaca kualitas, rasio ini dibalik menjadi LEV = 1 - leverage ratio agar skor yang lebih tinggi selalu berarti kualitas yang lebih baik.
4. **Interest coverage** dimasukkan sebagai pelengkap disiplin utang. Jika leverage membaca posisi stok utang, maka *interest coverage* membaca kemampuan arus laba operasi untuk melayani beban bunga secara periodik. Variabel ini sangat relevan pada periode 2022--2025 ketika biaya dana meningkat akibat pengetatan moneter agresif.
5. **Konsistensi laba (CONS)** dimasukkan karena profitabilitas berkelanjutan tidak hanya bergantung pada level laba, tetapi juga kestabilan laba. Dichev dan Tang (2009) menunjukkan bahwa volatilitas laba yang tinggi melemahkan prediktabilitas laba masa depan. Oleh karena itu, perusahaan yang memiliki margin lebih stabil lebih layak dianggap memiliki kualitas bisnis yang lebih kuat.
6. **Ukuran perusahaan (SIZE)** digunakan sebagai variabel kontrol karena teori perusahaan dan literatur organisasi industri sama-sama mengakui bahwa skala dapat memengaruhi biaya rata-rata, akses pembiayaan, dan daya tawar pasar. Namun, Penrose (1959) juga mengingatkan bahwa pertumbuhan ukuran dapat memunculkan batas manajerial dan inefisiensi koordinasi. Karena itu, arah pengaruh SIZE terhadap profitabilitas tidak harus selalu positif.
7. **Pertumbuhan penjualan (GROWTH)** digunakan sebagai variabel kontrol karena teori pertumbuhan perusahaan menempatkan ekspansi sebagai bagian dari dinamika perusahaan, tetapi pertumbuhan tidak selalu identik dengan pertumbuhan yang sehat. Ekspansi penjualan dapat memperbesar laba jika didukung efisiensi, namun juga dapat menekan profitabilitas jika ditempuh melalui diskon agresif, akuisisi mahal, atau penggunaan aset yang belum efisien.

Bobot antar komponen BQS ditetapkan sama besar bukan karena semua komponen dianggap identik, melainkan karena penelitian ini mengutamakan transparansi, replikasi, dan keterbacaan ekonomi. Pemberian bobot yang ditaksir langsung dari sampel yang sama berisiko membuat indeks terlalu *data-mined* dan lebih sulit dipertahankan secara metodologis. Dengan bobot sama, indeks BQS tetap sederhana, dapat diaudit, dan lebih mudah dijelaskan bahwa ia menggabungkan lima dimensi kualitas yang saling melengkapi.

### **2.1.5 Hubungan Antar Variabel**

Berdasarkan landasan teori di atas, berikut adalah penjelasan teoretis mengenai pengaruh masing-masing variabel independen terhadap variabel dependen:

1. Pengaruh Struktur Industri (HHI) terhadap Profitabilitas Berkelanjutan  
   Mengacu pada Paradigma SCP, struktur industri memiliki hubungan positif dengan profitabilitas. Ketika Herfindahl-Hirschman Index (HHI) meningkat, pasar menjadi lebih terkonsentrasi. Dalam kondisi ini, persaingan harga antar perusahaan menurun karena jumlah pemain yang sedikit memudahkan pemantauan dan koordinasi. Perusahaan petahana mendapatkan "kekuatan pasar" (market power) untuk menetapkan margin laba yang lebih tinggi tanpa takut kehilangan pangsa pasar secara signifikan. Oleh karena itu, secara teoretis, semakin tinggi konsentrasi industri, semakin tinggi kemampuan perusahaan untuk mempertahankan profitabilitas (Sustained ROA) di atas rata-rata normal.  
2. Pengaruh Kualitas Bisnis (BQS) terhadap Profitabilitas Berkelanjutan  
   Mengacu pada teori pertumbuhan perusahaan, RBV, teori struktur modal, dan konsep *quality investing*, kualitas fundamental perusahaan memiliki hubungan positif dengan profitabilitas jangka panjang. Margin tinggi menangkap *pricing power* dan efisiensi dasar; *free cash flow margin* menangkap kualitas konversi laba menjadi kas; leverage yang sehat dan *interest coverage* yang kuat menangkap ketahanan pendanaan; sedangkan konsistensi laba menangkap kestabilan kinerja. Kombinasi kelima elemen tersebut membentuk fondasi internal yang lebih tahan terhadap tekanan kompetisi dan guncangan makro, sehingga secara teoretis berdampak positif terhadap Sustained ROA.  
3. Perbandingan Dominasi: Faktor Industri (SCP) vs. Faktor Internal (RBV)  
   Literatur manajemen strategis sering memperdebatkan apakah posisi industri (SCP) atau cara perusahaan membangun kapabilitas internal (RBV) lebih menentukan kinerja. Studi klasik seperti McGahan dan Porter (1997) menemukan bahwa faktor industri penting, namun faktor spesifik perusahaan (firm-specific effects) seringkali menjelaskan variansi kinerja yang lebih besar. Dalam pasar modern yang sangat dinamis dan terdisrupsi teknologi (seperti konstituen S\&P 500), teori RBV memprediksi bahwa kepemilikan aset tak berwujud dan kapabilitas internal (BQS) akan memiliki pengaruh yang lebih dominan terhadap persistensi laba dibandingkan sekadar berlindung di balik struktur industri yang terkonsentrasi (HHI).

## **2.2 Literatur Empiris** {#2.2-literatur-empiris}

Berikut adalah ringkasan sistematis dari penelitian-penelitian empiris yang relevan mengenai pengaruh struktur industri, kualitas fundamental, dan karakteristik perusahaan terhadap kinerja perusahaan.

\begin{longtable}{>{\raggedright\arraybackslash}p{0.25\textwidth} >{\raggedright\arraybackslash}p{0.67\textwidth}}
\caption{Ringkasan Penelitian Empiris Terdahulu}\label{tab:ringkasan-penelitian-terdahulu}\\
\toprule
\textbf{Pengarang, Tahun \& Judul Karya} & \textbf{Detail Penelitian Terdahulu} \\
\midrule
\endfirsthead
\toprule
\textbf{Pengarang, Tahun \& Judul Karya} & \textbf{Detail Penelitian Terdahulu} \\
\midrule
\endhead
Pervan, Pervan, \& Ćurak (2019) \newline \textit{``Determinants of firm profitability in the Croatian manufacturing industry: Evidence from dynamic panel analysis''} & 
\textbf{Metode \& Variabel:} \textit{Dynamic Panel Data} (System GMM). Y: ROA; X: HHI, ukuran perusahaan (\textit{size}), umur (\textit{age}), dan biaya tenaga kerja. \newline
\textbf{Temuan:} Menunjukkan hubungan positif dan signifikan secara statistik antara HHI dengan tingkat profitabilitas perusahaan. Hasil ini membuktikan keabsahan Paradigma \textit{Structure-Conduct-Performance} (SCP), di mana struktur pasar yang terkonsentrasi tinggi terbukti mampu memberikan ``payung pelindung'' bagi perusahaan petahana untuk menikmati profitabilitas supernormal akibat berkurangnya persaingan harga. \newline
\textbf{Relevansi:} Menjustifikasi penggunaan variabel HHI sebagai representasi kekuatan struktur industri eksternal yang valid dalam model regresi. \\
\midrule
Zeitun \& Tian (2014) \newline \textit{``Capital structure and corporate performance: Evidence from Jordan''} & 
\textbf{Metode \& Variabel:} Regresi Data Panel (\textit{Fixed Effect} \& \textit{Random Effect}). Y: ROA, ROE, Tobin's Q; X: Leverage (rasio utang), ukuran (\textit{size}), pertumbuhan (\textit{growth}). \newline
\textbf{Temuan:} Menunjukkan hubungan negatif yang signifikan dan konsisten antara leverage dengan profitabilitas perusahaan. Perusahaan dengan tingkat utang rendah memiliki fleksibilitas keuangan lebih tinggi dan terhindar dari risiko \textit{financial distress}, sehingga mendukung premis \textit{Resource-Based View} (RBV) dan \textit{Pecking Order Theory}. \newline
\textbf{Relevansi:} Memberikan validasi empiris yang krusial untuk memasukkan komponen Disiplin Utang (\textit{Leverage Discipline} atau LEV) sebagai salah satu pilar penentu dalam indeks komposit \textit{Business Quality Score} (BQS). \\
\midrule
Asness, Frazzini, \& Pedersen (2019) \newline \textit{``Quality minus junk''} & 
\textbf{Metode \& Variabel:} \textit{Portfolio sorting} \& regresi lintas-sektoral Fama-MacBeth. Y: \textit{Stock Returns} \& Profitabilitas; X: \textit{Quality Score} (Profitabilitas, Pertumbuhan, Keamanan/\textit{safety}, dan \textit{payout}). \newline
\textbf{Temuan:} Membuktikan secara empiris bahwa saham-saham dengan karakteristik kualitas yang tinggi secara konsisten menghasilkan pengembalian (\textit{risk-adjusted returns}) yang superior dan persisten di seluruh dunia, secara signifikan mengalahkan saham-saham berkualitas rendah (\textit{junk}). \newline
\textbf{Relevansi:} Menjadi cetak biru (\textit{blueprint}) utama dalam perancangan variabel independen internal berupa \textit{Business Quality Score} (BQS), yang mentransformasikan faktor investasi kuantitatif menjadi indeks keuangan untuk mengukur kapabilitas internal perusahaan. \\
\midrule
Novy-Marx (2013) \newline \textit{``The other side of value: The gross profitability premium''} & 
\textbf{Metode \& Variabel:} Regresi \textit{cross-sectional} Fama-MacBeth. Y: \textit{Stock Returns}; X: \textit{Gross Profitability} vs \textit{Net Income}. \newline
\textbf{Temuan:} Menemukan bahwa \textit{Gross Profitability} (laba kotor dibagi dengan total aset) memiliki daya penjelas (\textit{predictive power}) yang jauh lebih kuat dan stabil dalam mencerminkan keunggulan kompetitif sejati perusahaan dibandingkan dengan laba bersih (\textit{net income}) yang sering kali terdistorsi oleh kebijakan akuntansi non-operasional, beban pajak, depresiasi, dan amortisasi yang bersifat subyektif. \newline
\textbf{Relevansi:} Memberikan justifikasi metodologis bagi penelitian ini untuk menempatkan \textit{Gross Profit Margin} (MARG) sebagai indikator pertama dan utama dalam mengukur dimensi kekuatan penetapan harga (\textit{pricing power}) pada BQS. \\
\midrule
Hirsch, Schiefer, Gschwandtner, \& Hartmann (2021) \newline \textit{``Profitability and profit persistence in EU food retailing''} & 
\textbf{Metode \& Variabel:} Dynamic Panel Data (System GMM). Y: ROA (mengukur koefisien kecepatan penyesuaian $\lambda$); X: ROA historis, pangsa pasar (\textit{market share}), ukuran (\textit{size}). \newline
\textbf{Temuan:} Menunjukkan tingkat persistensi laba yang sangat tinggi pada perusahaan ritel pangan skala besar. Lebih lanjut, pangsa pasar individu dan ukuran perusahaan berpengaruh positif signifikan dalam menahan laju penurunan laba (\textit{mean reversion}), membuktikan bahwa kekuatan pasar struktural dan efisiensi operasional bekerja secara simultan dalam menjaga kinerja. \newline
\textbf{Relevansi:} Memperkuat argumentasi teoretis penggunaan metrik profitabilitas multi-tahun yang dinamis untuk menangkap fenomena \textit{profit persistence} pada variabel dependen \textit{Sustained ROA}. \\
\midrule
Stephan, Talavera, \& Tsapin (2008) \newline \textit{``Persistence and Determinants of Firm Profit in Emerging Markets''} & 
\textbf{Metode \& Variabel:} Model Autoregressive orde pertama AR(1) data panel. Y: ROA; X: ROA historis, ukuran, pertumbuhan, ekspor. \newline
\textbf{Temuan:} Menunjukkan bahwa profitabilitas masa lalu memiliki pengaruh signifikan terhadap profitabilitas masa depan (persistensi laba). Namun, koefisien persistensi di \textit{emerging markets} terbukti jauh lebih rendah dan tidak stabil dibanding negara maju akibat volatilitas makroekonomi, lemahnya perlindungan aset tak berwujud, dan tingginya friksi pasar. \newline
\textbf{Relevansi:} Menjustifikasi pemilihan konstituen S\&P 500 (Amerika Serikat) sebagai objek penelitian, karena pasar yang maju secara teoretis merupakan laboratorium terbaik untuk menguji pengaruh parit ekonomi internal (BQS) dan konsentrasi (HHI). \\
\midrule
Sloan (1996) \newline \textit{``Do Stock Prices Fully Reflect Information in Accruals and Cash Flows about Future Earnings?''} & 
\textbf{Metode \& Variabel:} Regresi OLS \& analisis portofolio \textit{mispricing}. Y: Profitabilitas masa depan; X: Komponen akrual (\textit{accruals}) vs komponen arus kas (\textit{cash flows}). \newline
\textbf{Temuan:} Membuktikan secara empiris bahwa laba yang didominasi oleh arus kas operasional riil memiliki tingkat persistensi jauh lebih tinggi dan kualitas prediksi lebih baik dibanding laba akrual yang rentan mengalami pembalikan (\textit{mean reverting}) akibat manipulasi manajemen laba. \newline
\textbf{Relevansi:} Melandasi keputusan penelitian ini untuk memasukkan komponen \textit{Free Cash Flow Margin}—yang menghitung arus kas operasi dikurangi belanja modal (\textit{capex}) relatif terhadap penjualan—sebagai proksi esensial dalam BQS guna memastikan dimensi kualitas bisnis yang diukur berbasis pada kekuatan kas riil, bukan sekadar angka akuntansi akrual di atas kertas. \\
\midrule
Goddard, Liu, Molyneux, \& Wilson (2011) \newline \textit{``The persistence of profit''} & 
\textbf{Metode \& Variabel:} Dynamic Panel Data (System GMM). Y: Profitabilitas; X: Pangsa pasar (\textit{firm-level}) vs indeks konsentrasi industri HHI (\textit{industry-level}). \newline
\textbf{Temuan:} Menyimpulkan bahwa pangsa pasar individu (yang mencerminkan efisiensi internal, keunggulan biaya, dan keunggulan kapabilitas sesuai hipotesis Demsetz) memiliki pengaruh yang jauh lebih dominan dan kokoh dalam menjelaskan variasi profitabilitas dibandingkan dengan faktor konsentrasi industri makro (HHI). \newline
\textbf{Relevansi:} Secara langsung melandasi perumusan masalah ketiga dan hipotesis ketiga (H3), yaitu menguji apakah faktor internal (BQS) lebih dominan daripada faktor eksternal (HHI) dalam ekosistem S\&P 500. \\
\midrule
Dichev \& Tang (2009) \newline \textit{``Earnings volatility and earnings predictability''} & 
\textbf{Metode \& Variabel:} Analisis regresi keuangan jangka panjang. Y: Prediktabilitas laba masa depan; X: Volatilitas laba historis. \newline
\textbf{Temuan:} Menunjukkan adanya korelasi negatif yang sangat kuat antara volatilitas laba dengan prediktabilitas laba masa depan. Volatilitas margin yang tinggi menunjukkan ketidakpastian operasional yang besar, sedangkan kestabilan laba yang konsisten mencerminkan adanya parit kompetitif (\textit{economic moat}) yang mapan. \newline
\textbf{Relevansi:} Memberikan dasar empiris yang kuat bagi penelitian ini untuk mengonstruksi komponen konsistensi dalam BQS, yaitu \textit{Earnings Consistency} (CONS), yang diukur melalui kebalikan dari koefisien variasi margin laba kotor selama jendela waktu tiga tahun. \\
\midrule
McGahan \& Porter (1997) \newline \textit{``How Much Does Industry Matter, Really?''} & 
\textbf{Metode \& Variabel:} Metode statistik \textit{Variance Decomposition}. Y: Profitabilitas (ROA); X: Efek perusahaan, efek industri, efek tahun. \newline
\textbf{Temuan:} Menemukan bahwa efek industri (\textit{industry effects}) menyumbang sekitar 19\% terhadap variasi kinerja perusahaan, sementara efek spesifik perusahaan (\textit{firm-specific effects}) menjelaskan porsi varians yang jauh lebih besar, yaitu mencapai sekitar 32\%. Temuan monumental ini membuktikan bahwa ``bagaimana sebuah perusahaan bersaing'' (sumber daya dan kualitas internal) jauh lebih menentukan kesuksesan finansial berkelanjutan dibandingkan dengan ``di mana perusahaan itu bersaing'' (pemilihan sektor industri). \newline
\textbf{Relevansi:} Menjadi landasan sintesis utama untuk mengantisipasi kontestasi dominasi relatif antara paradigma SCP (HHI) dan RBV (BQS), serta menjustifikasi dominasi relatif faktor internal atas faktor eksternal. \\
\bottomrule
\end{longtable}

## **2.3 Kerangka Pemikiran Teoretik** {#2.3-kerangka-pemikiran-teoretik}

Berdasarkan literatur teori dan literatur empiris di atas, penelitian ini membangun kerangka pemikiran yang lebih operasional untuk menjelaskan bagaimana HHI dan BQS dapat berhubungan dengan Sustained ROA. Profitabilitas berkelanjutan diasumsikan terbentuk melalui dua jalur utama, yaitu jalur eksternal berbasis struktur industri dan jalur internal berbasis kualitas bisnis, sementara SIZE dan GROWTH diperlakukan sebagai pengendali agar pembacaan dua jalur utama tersebut tidak tercampur oleh perbedaan skala perusahaan dan dinamika penjualan.

1. Kekuatan Eksternal (Industri): Diwakili oleh HHI. Sesuai paradigma SCP dan temuan Pervan et al. (2019), struktur industri yang terkonsentrasi menciptakan hambatan kompetisi yang memungkinkan perusahaan mempertahankan margin tinggi.  
2. Kekuatan Internal (Kualitas Bisnis): Diwakili oleh Business Quality Score (BQS). Sesuai RBV dan temuan Asness et al. (2019) serta Zeitun & Tian (2014), perusahaan dengan fundamental superior (margin tinggi, arus kas kuat, utang rendah, laba stabil) memiliki "imunitas" internal yang memampukan mereka bertahan dari guncangan makroekonomi dan kompetisi.

\begin{figure}[H]
\centering
\begin{tikzpicture}[
node distance=0.9cm and 1.1cm,
every node/.style={font=\small, align=center},
mainbox/.style={draw=AksaBlue, rounded corners=3pt, line width=0.9pt, fill=AksaMist, text width=3.25cm, minimum height=1.05cm},
midbox/.style={draw=AksaTeal, rounded corners=3pt, line width=0.9pt, fill=white, text width=3.35cm, minimum height=1cm},
corebox/.style={draw=AksaOrange, rounded corners=3pt, line width=1pt, fill=AksaSand, text width=3.6cm, minimum height=1.15cm},
ctrlbox/.style={draw=AksaBlue, dashed, rounded corners=3pt, line width=0.9pt, fill=white, text width=5.0cm, minimum height=0.95cm},
arrow/.style={-{Latex[length=3mm]}, line width=0.85pt, color=AksaBlue}
]
\node[mainbox] (hhi) {\textbf{Struktur Industri}\\HHI sebagai proksi\\konsentrasi pasar};
\node[mainbox, right=5.1cm of hhi] (bqs) {\textbf{Kualitas Bisnis}\\BQS sebagai proksi\\kapabilitas internal};
\node[midbox, below=of hhi] (scp) {Paradigma SCP\\konsentrasi pasar, hambatan masuk,\\dan potensi \textit{market power}};
\node[midbox, below=of bqs] (rbv) {Paradigma RBV\\margin, arus kas, leverage,\\coverage, dan konsistensi};
\node[midbox, below=of scp] (ext) {Jalur eksternal\\pricing power dan tekanan\\kompetitif yang lebih rendah};
\node[midbox, below=of rbv] (int) {Jalur internal\\efisiensi operasi, ketahanan kas,\\dan disiplin finansial};
\node[corebox, below=1.1cm of $(ext)!0.5!(int)$] (sroa) {\textbf{Profitabilitas Berkelanjutan}\\\textbf{(Sustained ROA)}};
\node[ctrlbox, below=1.0cm of sroa] (ctrl) {\textbf{Variabel kontrol}\\SIZE mengendalikan skala perusahaan, sedangkan GROWTH mengendalikan dinamika penjualan};
\draw[arrow] (hhi) -- (scp);
\draw[arrow] (scp) -- (ext);
\draw[arrow] (ext) -- (sroa);
\draw[arrow] (bqs) -- (rbv);
\draw[arrow] (rbv) -- (int);
\draw[arrow] (int) -- (sroa);
\draw[arrow] (ctrl) -- (sroa);
\end{tikzpicture}
\caption{Kerangka Pemikiran Teoretik Penelitian}
\end{figure}

Gambar tersebut menunjukkan bahwa HHI dan BQS tidak diperlakukan sebagai variabel yang berdiri sendiri tanpa mekanisme. HHI dibaca melalui jalur kekuatan pasar, intensitas kompetisi, dan hambatan masuk, sedangkan BQS dibaca melalui jalur kualitas operasi, kualitas arus kas, struktur pendanaan, dan stabilitas laba. Dengan struktur ini, pembahasan hasil pada BAB IV dapat langsung ditautkan kembali ke mekanisme teoretik yang telah dijelaskan pada bab ini.

## **2.4 Hipotesis** {#2.4-hipotesis}

Berdasarkan sintesis teori dan temuan empiris terdahulu, hipotesis penelitian ini dapat dirumuskan dalam bentuk pernyataan berikut:

1. Struktur industri yang lebih terkonsentrasi, sebagaimana diproksikan oleh HHI, diduga berkaitan positif dengan profitabilitas berkelanjutan perusahaan.
2. Kualitas bisnis yang lebih tinggi, sebagaimana diproksikan oleh BQS, diduga berkaitan positif dengan profitabilitas berkelanjutan perusahaan.
3. Dalam konteks perusahaan konstituen S\&P 500, kualitas bisnis internal diduga memberikan hubungan yang lebih konsisten terhadap profitabilitas berkelanjutan dibandingkan struktur industri.
4. Ukuran perusahaan dan pertumbuhan penjualan diperkirakan tetap relevan sebagai variabel kontrol, tetapi tidak ditempatkan sebagai fokus teoritis utama dibandingkan HHI dan BQS.

# **BAB III** **METODE PENELITIAN** {#bab-iii-metode-penelitian}

Pendekatan penelitian ini berakar pada paradigma positivisme, yang memandang bahwa realitas ekonomi dapat diobservasi, diukur, dan dianalisis secara sistematis. Berpijak pada ontologi ini, penelitian mengadopsi pendekatan kuantitatif deduktif (*hypothetico-deductive method*) untuk menguji hipotesis yang diturunkan dari paradigma Structure-Conduct-Performance (SCP) dan Resource-Based View (RBV) menggunakan data sekunder.  
Desain penelitian bersifat eksplanatoris (*explanatory research*), tetapi klaim yang dihasilkan dibatasi pada hubungan empiris bersyarat dalam spesifikasi model panel. Dengan kata lain, penelitian ini bertujuan menjelaskan asosiasi yang konsisten setelah heterogenitas perusahaan dan guncangan waktu dikendalikan, bukan membuktikan kausalitas absolut.

## **3.1. Variabel Penelitian dan Definisi Operasional Variabel** {#3.1.-variabel-penelitian-dan-definisi-operasional-variabel}

Langkah fundamental dalam penelitian kuantitatif adalah operasionalisasi variabel, yakni proses translasi konstruksi teoretis abstrak menjadi indikator empiris yang terukur secara presisi. Penelitian ini melibatkan satu variabel dependen (endogenous variable) dan dua variabel independen utama (exogenous variables), serta serangkaian variabel kontrol untuk mengisolasi dampak marjinal. Definisi operasional ini disusun untuk memastikan validitas konstruksi (construct validity) dan reliabilitas pengukuran, dengan merujuk pada praktik terbaik dalam literatur keuangan empiris.

### **3.1.1. Variabel Dependen: Profitabilitas Berkelanjutan (Sustained Return on Assets)**

Variabel dependen penelitian ini adalah profitabilitas berkelanjutan yang diproksikan dengan Sustained Return on Assets (SROA). SROA digunakan karena profitabilitas satu tahun dapat dipengaruhi oleh guncangan sementara, siklus bisnis, atau komponen akrual yang tidak mencerminkan kemampuan laba permanen. Dengan menggunakan rata-rata bergerak tiga tahun, ukuran profitabilitas yang diperoleh menjadi lebih sesuai untuk menguji persistensi laba dan meredam noise jangka pendek.

Return on Assets tahunan dihitung sebagai berikut.

\begin{equation}
\mathrm{ROA}_{i,t} = \frac{\text{Net Income}_{i,t}}{\text{Total Assets}_{i,t}}
\end{equation}

SROA kemudian dihitung sebagai rata-rata ROA tahun berjalan, satu tahun sebelumnya, dan dua tahun sebelumnya.

\begin{equation}
\mathrm{SROA}_{i,t} = \frac{\mathrm{ROA}_{i,t} + \mathrm{ROA}_{i,t-1} + \mathrm{ROA}_{i,t-2}}{3}
\end{equation}

Keterangan variabel adalah sebagai berikut:

1. $\mathrm{SROA}_{i,t}$ menunjukkan profitabilitas berkelanjutan perusahaan $i$ pada tahun $t$.
2. $\mathrm{ROA}_{i,t}$ menunjukkan tingkat pengembalian aset perusahaan $i$ pada tahun $t$.
3. $\mathrm{ROA}_{i,t-1}$ dan $\mathrm{ROA}_{i,t-2}$ menunjukkan tingkat pengembalian aset pada satu dan dua tahun sebelumnya.
4. Satuan pengukuran dinyatakan dalam rasio desimal.

Justifikasi penggunaan rata-rata bergerak ini sejalan dengan penelitian Stephan et al. (2008) dan literatur persistensi laba yang menekankan bahwa kinerja multi-tahun lebih mampu menangkap komponen laba permanen dibandingkan observasi satu titik waktu.

### **3.1.2. Variabel Independen 1: Struktur Industri (Industry Structure)**

Struktur industri diproksikan menggunakan Herfindahl-Hirschman Index (HHI). HHI dipilih karena ukuran ini memperhitungkan seluruh pangsa pasar perusahaan dalam satu kelompok industri dan memberikan bobot lebih besar pada perusahaan dengan pangsa pasar dominan. Dalam penelitian ini, HHI utama dihitung pada level GICS Sub-Industry per tahun menggunakan pangsa penjualan perusahaan dalam kerangka sampel.

\begin{equation}
\mathrm{HHI}_{j,t} = \sum_{i=1}^{N_j} \left(S_{i,j,t}\right)^2
\end{equation}

Pangsa pasar perusahaan dihitung sebagai berikut.

\begin{equation}
S_{i,j,t} = \frac{\text{Sales}_{i,j,t}}{\sum_{k=1}^{N_j} \text{Sales}_{k,j,t}}
\end{equation}

Keterangan variabel adalah sebagai berikut:

1. $\mathrm{HHI}_{j,t}$ menunjukkan indeks konsentrasi industri $j$ pada tahun $t$.
2. $S_{i,j,t}$ menunjukkan pangsa pasar perusahaan $i$ dalam industri $j$ pada tahun $t$.
3. $N_j$ menunjukkan jumlah perusahaan dalam industri $j$ yang tercakup dalam sampel.

Nilai HHI dibaca dalam rentang 0 sampai 1. Semakin tinggi HHI, semakin terkonsentrasi struktur industri. Karena data yang tersedia adalah konstituen S\&P 500 aktif Mei 2026, HHI dalam penelitian ini merupakan HHI within-sample, bukan HHI penuh seluruh pasar Amerika Serikat. Uji ketahanan dilakukan menggunakan klasifikasi ICB Subsector, ICB Sector, ICB Supersector, ICB Industry, dan Bloomberg Industry Group agar kesimpulan tidak bergantung pada satu batas industri.

### **3.1.3. Variabel Independen 2: Kualitas Bisnis (Business Quality Score)**

Kualitas bisnis diproksikan dengan Business Quality Score (BQS), yaitu indeks komposit yang merepresentasikan kapabilitas internal perusahaan berdasarkan perspektif Resource-Based View, teori pertumbuhan perusahaan, dan literatur kualitas fundamental dalam keuangan empiris. Penting ditegaskan bahwa BQS adalah nama indeks operasional penelitian, bukan nama teori. Karena itu, pembelaan ilmiahnya tidak boleh berhenti pada nama indeks, tetapi harus bertumpu pada alasan mengapa setiap komponen masuk dan mengapa komponen-komponen tersebut layak digabungkan dalam satu ukuran kualitas bisnis. BQS utama dibentuk dari lima komponen complete-case: margin kotor, free cash flow margin, disiplin leverage, interest coverage, dan konsistensi laba. Observasi yang tidak memiliki seluruh komponen tersebut tidak diimputasi dan dikeluarkan dari regresi utama.

Komponen pertama adalah margin kotor (MARG), yang merepresentasikan kekuatan penetapan harga dan efisiensi biaya.

\begin{equation}
\mathrm{MARG}_{i,t} = \frac{\text{Sales}_{i,t} - \text{Cost of Goods Sold}_{i,t}}{\text{Sales}_{i,t}}
\end{equation}

Komponen kedua adalah free cash flow margin (FCF_MARGIN), yang mengukur kemampuan penjualan dikonversi menjadi arus kas bebas setelah belanja modal.

\begin{equation}
\mathrm{FCF\_MARGIN}_{i,t} = \frac{\text{Operating Cash Flow}_{i,t} - \text{Capital Expenditures}_{i,t}}{\text{Sales}_{i,t}}
\end{equation}

Komponen ketiga adalah disiplin leverage (LEV), yang dibentuk sebagai kebalikan dari rasio utang terhadap aset agar arah skor sejalan dengan kualitas bisnis.

\begin{equation}
\mathrm{Leverage\ Ratio}_{i,t} = \frac{\text{Total Debt}_{i,t}}{\text{Total Assets}_{i,t}}
\end{equation}

\begin{equation}
\mathrm{LEV}_{i,t} = 1 - \mathrm{Leverage\ Ratio}_{i,t}
\end{equation}

Komponen keempat adalah interest coverage, yaitu kemampuan laba operasi menutup beban bunga.

\begin{equation}
\mathrm{INTEREST\_COVERAGE}_{i,t} = \frac{\text{Operating Income}_{i,t}}{\text{Interest Expense}_{i,t}}
\end{equation}

Komponen kelima adalah konsistensi laba (CONS), yang dihitung dari kebalikan koefisien variasi margin kotor selama tiga tahun.

\begin{equation}
CV_{\mathrm{MARG}} = \frac{\sigma\, \mathrm{MARG}_{(t,t-1,t-2)}}{|\mu\, \mathrm{MARG}_{(t,t-1,t-2)}|}
\end{equation}

\begin{equation}
\mathrm{CONS}_{i,t} = \frac{1}{CV_{\mathrm{MARG}}}
\end{equation}

Setiap komponen BQS distandarisasi secara cross-sectional per tahun menggunakan Z-score.

\begin{equation}
Z_{X,i,t} = \frac{X_{i,t} - \mu_{X,t}}{\sigma_{X,t}}
\end{equation}

Skor akhir BQS dihitung sebagai rata-rata aritmatika lima Z-score dengan bobot yang sama.

\begin{equation}
\mathrm{BQS}_{i,t} = \frac{Z_{\mathrm{MARG},i,t} + Z_{\mathrm{FCF\_MARGIN},i,t} + Z_{\mathrm{LEV},i,t} + Z_{\mathrm{INTEREST\_COVERAGE},i,t} + Z_{\mathrm{CONS},i,t}}{5}
\end{equation}

Pemilihan kelima komponen tersebut memiliki argumentasi ekonomi yang spesifik.

1. **MARG** dipilih untuk menangkap kekuatan margin dan efisiensi operasi yang menjadi inti keunggulan perusahaan.
2. **FCF\_MARGIN** dipilih untuk memastikan bahwa profitabilitas yang dibaca benar-benar didukung kas, bukan hanya akrual.
3. **LEV** dipakai dalam bentuk terbalik agar perusahaan dengan struktur utang lebih sehat memperoleh skor kualitas lebih tinggi.
4. **INTEREST\_COVERAGE** dimasukkan untuk membaca kemampuan perusahaan menghadapi tekanan biaya bunga, terutama pada periode suku bunga tinggi.
5. **CONS** dimasukkan agar indeks tidak hanya menilai level laba, tetapi juga kestabilan laba lintas waktu.
6. **Bobot sama besar** dipilih demi transparansi dan kemudahan audit. Penelitian ini sengaja tidak memberikan bobot hasil optimasi statistik dari sampel yang sama agar indeks tidak menjadi terlalu arbitrer atau terlalu menyesuaikan diri dengan data sesaat.

Interpretasi BQS adalah sebagai berikut:

1. BQS lebih besar dari nol menunjukkan kualitas bisnis di atas rata-rata sampel pada tahun yang sama.
2. BQS lebih kecil dari nol menunjukkan kualitas bisnis di bawah rata-rata sampel pada tahun yang sama.
3. BQS lama empat komponen tetap digunakan sebagai robustness, bukan sebagai model utama.

### **3.1.4. Variabel Kontrol**

Dua variabel kontrol utama digunakan agar estimasi pengaruh HHI dan BQS tidak tercampur dengan perbedaan skala dan dinamika penjualan perusahaan. Variabel kontrol pada penelitian ini juga tidak dipilih secara sembarangan; keduanya dimasukkan karena literatur profitabilitas perusahaan hampir selalu menunjukkan bahwa ukuran dan pertumbuhan dapat memengaruhi laba, sekaligus berpotensi berkorelasi dengan kualitas bisnis maupun struktur industri.

1. Ukuran perusahaan (SIZE) diukur menggunakan logaritma natural total aset. Transformasi logaritma digunakan karena distribusi total aset perusahaan besar cenderung sangat menceng ke kanan.

\begin{equation}
\mathrm{SIZE}_{i,t} = \ln(\text{Total Assets}_{i,t})
\end{equation}

2. Pertumbuhan penjualan (GROWTH) diukur sebagai perubahan penjualan tahunan relatif terhadap penjualan tahun sebelumnya.

\begin{equation}
\mathrm{GROWTH}_{i,t} = \frac{\text{Sales}_{i,t} - \text{Sales}_{i,t-1}}{\text{Sales}_{i,t-1}}
\end{equation}

Secara teoretis, SIZE diharapkan menangkap efek skala, akses pembiayaan, dan daya tawar pasar yang tidak sepenuhnya ditangkap HHI. Namun, tanda pengaruhnya tetap dapat ambigu karena perusahaan yang lebih besar juga dapat menghadapi biaya koordinasi yang lebih tinggi. Sementara itu, GROWTH dimasukkan agar model dapat membedakan perusahaan yang memang lebih menguntungkan dari perusahaan yang sekadar sedang tumbuh penjualannya. Dengan demikian, kedua variabel ini berfungsi menjaga agar koefisien HHI dan BQS tidak memungut pengaruh skala atau ekspansi penjualan yang seharusnya dibaca terpisah.

\begin{longtable}{>{\raggedright\arraybackslash}p{0.20\textwidth} >{\raggedright\arraybackslash}p{0.10\textwidth} >{\raggedright\arraybackslash}p{0.42\textwidth} >{\raggedright\arraybackslash}p{0.10\textwidth} >{\raggedright\arraybackslash}p{0.14\textwidth}}
\caption{Ringkasan Definisi Operasional Variabel}\label{tab:definisi-operasional}\\
\toprule
\textbf{Variabel} & \textbf{Simbol} & \textbf{Definisi Operasional} & \textbf{Skala} & \textbf{Sumber Data} \\
\midrule
\endfirsthead
\toprule
\textbf{Variabel} & \textbf{Simbol} & \textbf{Definisi Operasional} & \textbf{Skala} & \textbf{Sumber Data} \\
\midrule
\endhead
Dependen & & & & \\
Profitabilitas Berkelanjutan & SROA & Rata-rata Return on Assets (Laba Bersih / Total Aset) selama 3 tahun (t, t-1, t-2). & Rasio & Bloomberg Terminal \\
Independen & & & & \\
Struktur Industri & HHI & Jumlah kuadrat pangsa pasar perusahaan dalam GICS Sub-Industry yang sama ($\\sum s_i^2$); ICB dan Bloomberg Industry Group digunakan sebagai robustness. & Rasio & Bloomberg Terminal (Calculated) \\
Kualitas Bisnis & BQS & Rata-rata Z-score dari Margin, Free Cash Flow Margin, Leverage (inverse), Interest Coverage, dan Earnings Consistency. & Interval & Bloomberg Terminal (Calculated) \\
Kontrol & & & & \\
Ukuran Perusahaan & SIZE & Logaritma natural dari Total Aset akhir tahun. & Rasio & Bloomberg Terminal \\
Pertumbuhan Penjualan & GROWTH & Persentase perubahan penjualan dari tahun t-1 ke tahun t. & Rasio & Bloomberg Terminal \\
\bottomrule
\end{longtable}

## **3.2. Populasi dan Sampel** {#3.2.-populasi-dan-sampel}

Penentuan populasi dan sampel dilakukan dengan prinsip kehati-hatian statistik untuk memastikan bahwa data yang dianalisis sesuai dengan fenomena yang diteliti. Pada penelitian ini, keterbatasan utama terletak pada ketersediaan daftar konstituen historis S\&P 500. Karena data yang tersedia adalah daftar perusahaan yang aktif pada Mei 2026 dan ditarik mundur ke periode 2017-2025, penelitian ini secara eksplisit mendokumentasikan potensi *survivorship bias* sebagai keterbatasan, bukan mengklaim sebagai panel konstituen historis penuh.

### **3.2.1. Populasi Penelitian**

Populasi target konseptual penelitian ini adalah perusahaan besar Amerika Serikat yang masuk dalam indeks S\&P 500. Dalam implementasi empiris, kerangka sampel yang digunakan adalah perusahaan konstituen S\&P 500 yang aktif per Mei 2026, dengan data laporan keuangan historis tahunan periode 2017 hingga 2025 yang diperoleh dari Bloomberg Terminal. S\&P 500 dipilih karena indeks ini secara luas dianggap sebagai barometer utama pasar ekuitas berkapitalisasi besar di Amerika Serikat dan mencerminkan perusahaan-perusahaan yang paling berpengaruh dalam ekonomi global.

Penggunaan daftar konstituen aktif Mei 2026 berarti perusahaan yang pernah menjadi anggota indeks tetapi telah keluar sebelum tanggal tersebut tidak tercakup dalam sampel. Konsekuensinya, hasil penelitian paling tepat dibaca sebagai bukti empiris pada perusahaan S\&P 500 yang masih aktif pada akhir jendela observasi, bukan sebagai estimasi yang sepenuhnya bebas dari bias seleksi historis.

### **3.2.2. Teknik Pengambilan Sampel (Sampling Technique)**

Penelitian ini menggunakan teknik Purposive Sampling (Judgment Sampling), di mana sampel dipilih berdasarkan karakteristik spesifik yang disesuaikan dengan tujuan penelitian dan kebutuhan analisis data panel.  
Kriteria Inklusi dan Eksklusi:

1. Ketersediaan Data Historis: Perusahaan harus memiliki data laporan keuangan tahunan yang tersedia di Bloomberg Terminal untuk periode 2017-2025, mencakup Total Aset, Laba Bersih, Penjualan, Utang, Arus Kas Operasi, Capex, dan COGS atau data yang memungkinkan pembentukan margin. Data 2017-2018 diperlukan untuk menghitung variabel rolling sehingga panel regresi efektif dimulai pada 2019.  
2. Pengecualian Sektor Keuangan dan Utilitas (Strategic Exclusion):  
   Berdasarkan konvensi standar dalam penelitian struktur modal dan profitabilitas, perusahaan yang terklasifikasi dalam sektor Keuangan (Financials \- GICS Code 40\) dan Utilitas (Utilities \- GICS Code 55\) dikeluarkan dari sampel akhir menggunakan klasifikasi sub-industri GICS yang tersedia pada file mentah.  
   a. Alasan Eksklusi Sektor Keuangan: Neraca perusahaan keuangan (bank, asuransi) memiliki struktur yang fundamental berbeda dari perusahaan non-keuangan. Bagi bank, utang (dana pihak ketiga) adalah "bahan baku" operasional, bukan sekadar sumber pendanaan, sehingga rasio leverage dan gross margin tidak dapat diperbandingkan secara apple-to-apple dengan perusahaan manufaktur atau jasa lainnya. Memasukkan sektor ini akan mendistorsi perhitungan komponen LEV dan MARG dalam skor BQS.  
   b. Alasan Eksklusi Sektor Utilitas: Perusahaan utilitas beroperasi dalam lingkungan monopoli alamiah yang teregulasi ketat (regulated monopolies). Tingkat profitabilitas dan struktur harga mereka sering kali ditentukan oleh keputusan regulator (statutory return on equity), bukan murni oleh mekanisme pasar kompetitif atau efisiensi manajerial. Hal ini dapat mengaburkan analisis pengaruh struktur industri (HHI) dan kualitas bisnis internal terhadap SROA.  
3. Mata Uang Pelaporan: Data digunakan dalam mata uang Dolar AS (USD) sesuai hasil unduhan Bloomberg untuk menjaga konsistensi perbandingan antar perusahaan.
4. Ketersediaan Komponen BQS: Observasi yang tidak dapat membentuk seluruh komponen BQS utama (MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, dan CONS) dikeluarkan dari regresi utama. Pendekatan ini dipilih agar missing data tidak diperlakukan sebagai performa rata-rata secara implisit.

Dengan menerapkan kriteria di atas, sampel akhir terdiri dari perusahaan non-keuangan dan non-utilitas yang aktif sebagai konstituen S\&P 500 per Mei 2026 dan memiliki data cukup untuk membentuk panel regresi 2019-2025.

### **3.2.3. Penanganan Data Ekstrem (Winsorization)**

Data keuangan perusahaan seringkali mengandung nilai pencilan (outliers) yang ekstrem akibat peristiwa luar biasa (misalnya, write-off aset besar-besaran, restrukturisasi, atau denominator yang mendekati nol pada rasio pertumbuhan). Nilai ekstrem ini dapat mendistorsi estimasi parameter regresi OLS, yang sangat sensitif terhadap outlier (pelanggaran asumsi normalitas residual).  
Untuk memitigasi masalah ini tanpa membuang informasi (yang terjadi jika menggunakan teknik trimming), penelitian ini menerapkan teknik Winsorization. Seluruh variabel rasio kontinu utama (SROA, MARG, FCF_MARGIN, LEV, INTEREST_COVERAGE, CONS, GROWTH, dan kontrol robustness) di-winsorize pada tingkat 1% di kedua ekor distribusi (1st and 99th percentiles).

1. Mekanisme: Nilai data yang berada di bawah persentil ke-1 akan diganti dengan nilai pada persentil ke-1. Nilai data di atas persentil ke-99 akan diganti dengan nilai pada persentil ke-99.  
2. Justifikasi: Pendekatan ini mempertahankan ukuran sampel (sample size) sambil membatasi pengaruh disproporsional dari observasi ekstrem yang mungkin disebabkan oleh kesalahan data atau kejadian non-ekonomis, sehingga menghasilkan estimasi statistik yang lebih robust dan dapat digeneralisasi.

## **3.3. Jenis dan Sumber Data** {#3.3.-jenis-dan-sumber-data}

### **3.3.1. Jenis Data**

Jenis data yang digunakan adalah Data Sekunder kuantitatif dengan struktur Data Panel (Longitudinal Data). Data panel merupakan gabungan antara data deret waktu (time-series) tahunan selama 2017-2025 dan data lintas individu (cross-section) yang mencakup ratusan perusahaan. Karena variabel SROA dan CONS membutuhkan rata-rata bergerak 3 tahun, panel regresi efektif dimulai pada 2019.  
Keunggulan Metodologis Data Panel:  
Penggunaan data panel memberikan keunggulan analitis dibandingkan data cross-section atau time-series murni:

1. Informasi Lebih Kaya: Data panel menyediakan variabilitas data yang lebih besar, mengurangi kolinearitas antar variabel, dan meningkatkan derajat kebebasan (degrees of freedom), sehingga menghasilkan estimasi parameter yang lebih efisien.  
2. Kontrol Heterogenitas: Keunggulan utama data panel adalah kemampuannya untuk mengontrol heterogenitas individu yang tidak dapat diobservasi (unobserved heterogeneity), seperti budaya perusahaan, kualitas manajemen, atau reputasi merek, yang bersifat konstan sepanjang waktu namun berbeda antar perusahaan. Kegagalan mengontrol faktor ini (seperti dalam regresi cross-section biasa) dapat menyebabkan bias estimasi (omitted variable bias).  
3. Dinamika Penyesuaian: Data panel memungkinkan analisis dinamika perubahan perilaku perusahaan dari waktu ke waktu sebagai respons terhadap perubahan struktur industri.

### **3.3.2. Sumber Data**

Data penelitian diperoleh dari penyedia data keuangan pihak ketiga yang memiliki reputasi kredibilitas tinggi di kalangan akademisi dan praktisi:

1. Bloomberg Terminal: Merupakan sumber data utama untuk seluruh item laporan keuangan (Total Assets, Sales/Revenue, Net Income, CFO, Capex, Debt, COGS, Gross Margin, ROE, Total Equity, Free Cash Flow, Market Cap, Operating Income, Interest Expense, Cash, Current Assets, dan Current Liabilities). Data tersebut diekspor ke dalam `raw-data.csv` dengan format tahunan 2017-2025.  
2. Klasifikasi Industri: Data final mencakup GICS Sub-Industry, ICB Subsector, ICB Sector, ICB Supersector, ICB Industry, dan Bloomberg Industry Group. HHI baseline dihitung pada level GICS Sub-Industry per tahun, sedangkan taksonomi lain digunakan sebagai uji ketahanan.

## **3.4. Metode Pengumpulan Data** {#3.4.-metode-pengumpulan-data}

Metode pengumpulan data dilakukan dengan teknik Dokumentasi dan Arsip, yaitu mengunduh, menyusun, dan mengolah data yang tersedia dalam basis data elektronik. Prosedur pengumpulan data dilakukan secara sistematis melalui tahapan berikut:

1. Identifikasi Kerangka Sampel Aktif:  
   Daftar konstituen S\&P 500 yang aktif per Mei 2026 digunakan sebagai kerangka sampel. Karena daftar keluar-masuk historis tidak tersedia secara lengkap dalam dataset yang digunakan, penelitian ini tidak mengklaim sebagai panel historis bebas survivorship bias.  
2. Ekstraksi Data Keuangan (Data Retrieval):  
   Data fundamental tahunan untuk periode 2017-2025 diunduh menggunakan ticker atau identifier unik pada Bloomberg Terminal. Data 2017-2018 digunakan untuk membentuk variabel yang membutuhkan lag dan rata-rata bergerak, sehingga observasi regresi utama tersedia mulai 2019.  
3. Konstruksi Variabel dan Pembersihan Data:  
   a. Perhitungan Rasio: ROA, Gross Margin, Free Cash Flow Margin, Leverage Discipline, Interest Coverage, Consistency, dan kontrol tambahan dihitung untuk setiap observasi perusahaan-tahun.  
   b. Klasifikasi Industri: GICS Sub-Industry digunakan sebagai basis HHI utama dan ICB/Bloomberg Industry Group digunakan sebagai basis robustness.  
   c. Perhitungan HHI: Total penjualan industri (SALESj,t) dihitung dengan menjumlahkan penjualan seluruh perusahaan dalam kelompok industri yang sama pada tahun tersebut. Pangsa pasar masing-masing perusahaan kemudian dihitung dan dikuadratkan untuk mendapatkan HHI. Nilai HHI dalam penelitian ini adalah HHI dalam sampel (*within-sample HHI*) karena tidak mencakup seluruh perusahaan privat maupun publik di luar kerangka sampel.  
   d. Standardisasi BQS: Mean dan standar deviasi setiap komponen BQS dihitung secara cross-sectional per tahun, kemudian digunakan untuk menghitung Z-score dan BQS.
4. Penyusunan Dataset Panel:  
   Menggabungkan seluruh variabel yang telah dihitung ke dalam satu struktur data panel dengan format long form (kolom: Firm ID, Year, SROA, BQS, HHI, SIZE, GROWTH, komponen BQS, HHI alternatif, dan variabel robustness). Melakukan pengecekan konsistensi data dan penghapusan observasi dengan data yang tidak lengkap untuk komponen utama BQS, sehingga hasil regresi tidak bergantung pada imputasi yang tidak dapat diverifikasi.

## **3.5. Metode Analisis** {#3.5.-metode-analisis}

Analisis data dilakukan menggunakan Python dengan library pandas dan statsmodels. Tahapan analisis dirancang secara hierarkis mulai dari deskripsi data hingga pengujian hipotesis asosiatif dengan cluster-robust standard errors pada level perusahaan.

### **3.5.1. Statistik Deskriptif dan Matriks Korelasi**

Langkah awal adalah menyajikan statistik deskriptif (Mean, Median, Minimum, Maksimum, Standar Deviasi) untuk memberikan gambaran umum distribusi data, memverifikasi efektivitas winsorization, dan mendeteksi pola awal. Selanjutnya, Matriks Korelasi Pearson akan disajikan untuk menguji hubungan bivariat antar variabel. Analisis ini krusial untuk mendeteksi potensi masalah Multikolinearitas yang serius (biasanya ditandai dengan koefisien korelasi \> 0.8 antar variabel independen). Mengingat BQS disusun dari rasio keuangan yang mungkin berkorelasi dengan Size atau Growth, pemeriksaan Variance Inflation Factor (VIF) juga akan dilakukan. Jika VIF \< 10, maka asumsi non-multikolinearitas dianggap terpenuhi.

### **3.5.2. Penentuan Model Estimasi Data Panel**

Dalam ekonometrika data panel, pemilihan teknik estimasi yang tepat sangat menentukan validitas hasil. Tiga pendekatan utama yang umum dipertimbangkan adalah:

1. Common Effect Model (CEM) / Pooled OLS: Mengasumsikan bahwa intersep ($\\alpha$) dan koefisien ($\\beta$) bersifat konstan antar perusahaan dan waktu. Model ini mengabaikan struktur panel dan sifat unik perusahaan.  
2. Fixed Effect Model (FEM): Mengasumsikan bahwa setiap perusahaan memiliki karakteristik unik yang tidak terobservasi (unobserved heterogeneity) yang ditangkap oleh intersep spesifik individu ($\\alpha$). Karakteristik ini diasumsikan konstan sepanjang waktu (time-invariant) namun dapat berkorelasi dengan variabel independen (misalnya, kualitas manajemen yang baik—$\\alpha_i$ tinggi—mungkin berkorelasi dengan keputusan BQS yang tinggi). FEM menghilangkan bias ini melalui transformasi data (de-meaning).  
3. Random Effect Model (REM): Mengasumsikan bahwa perbedaan antar perusahaan bersifat acak dan error term spesifik individu tidak berkorelasi dengan variabel independen. REM lebih efisien daripada FEM jika asumsi ini terpenuhi, namun menjadi tidak konsisten jika asumsi dilanggar.

Pada penelitian ini, pemilihan model tidak dilakukan secara mekanis hanya dengan satu uji spesifikasi, melainkan melalui dua lapis pertimbangan: argumen substantif dan verifikasi statistik. Dari sisi substantif, penelitian memang ingin membaca variasi *within-firm* dari waktu ke waktu, bukan sekadar membandingkan perusahaan yang besar dengan kecil atau perusahaan sektor tertentu dengan sektor lain. Karena itu, model perlu menyerap heterogenitas perusahaan yang tetap sepanjang waktu dan guncangan tahunan yang sama-sama memengaruhi seluruh perusahaan.

Secara operasional, tahapan pemilihan model dilakukan sebagai berikut.

1. Mengestimasi *pooled OLS* sebagai pembanding paling sederhana.
2. Mengestimasi model dengan *year fixed effects* untuk menyerap guncangan waktu bersama.
3. Mengestimasi model dengan *firm fixed effects* untuk menyerap heterogenitas perusahaan yang tetap.
4. Mengestimasi model **two-way fixed effects** yang memasukkan efek perusahaan dan efek tahun secara simultan.
5. Melakukan uji F gabungan untuk membandingkan model *two-way fixed effects* dengan *pooled OLS*.
6. Melakukan uji F atas efek perusahaan bersyarat pada adanya *year fixed effects* dan uji F atas efek waktu bersyarat pada adanya *firm fixed effects*.
7. Menggunakan hasil uji tersebut sebagai verifikasi statistik, bukan sebagai satu-satunya dasar pemilihan model.

Pilihan estimator final adalah **two-way Fixed Effect Model**. Keputusan ini konsisten dengan karakteristik data keuangan korporat, di mana heterogenitas tak terobservasi seperti strategi perusahaan, reputasi merek, kultur organisasi, dan kualitas manajemen sangat mungkin berkorelasi dengan variabel independen seperti BQS, SIZE, atau bahkan HHI. Dalam situasi seperti ini, asumsi utama REM bahwa efek individual tidak berkorelasi dengan regressor menjadi sulit dipertahankan. Karena itu, uji Hausman tidak dijadikan penentu utama; secara desain penelitian, FE sudah lebih defensibel bahkan sebelum pengujian statistik tambahan dilakukan.

Dengan kata lain, alasan penggunaan *two-way fixed effects* dalam penelitian ini adalah: (1) secara ekonomi, penelitian ingin membaca perubahan profitabilitas di dalam perusahaan yang sama; (2) secara statistik, efek perusahaan dan efek tahun sama-sama relevan; dan (3) secara inferensial, model ini paling sesuai untuk memisahkan peran kualitas bisnis dan struktur industri dari faktor laten yang konstan.

### **3.5.3. Spesifikasi Model Empiris**

Berdasarkan kerangka pemikiran dan variabel yang telah didefinisikan, persamaan regresi data panel yang diajukan adalah sebagai berikut.

\begin{equation}
\mathrm{SROA}_{i,t} = \beta_0 + \beta_1\,\mathrm{BQS}_{i,t} + \beta_2\,\mathrm{HHI}_{j,t} + \beta_3\,\mathrm{SIZE}_{i,t} + \beta_4\,\mathrm{GROWTH}_{i,t} + \alpha_i + \delta_t + \varepsilon_{i,t}
\end{equation}

Keterangan:

1. $\mathrm{SROA}_{i,t}$ adalah profitabilitas berkelanjutan perusahaan $i$ pada tahun $t$.  
2. $\mathrm{BQS}_{i,t}$ adalah skor kualitas bisnis perusahaan $i$ pada tahun $t$ dengan hipotesis $\beta_1>0$.  
3. $\mathrm{HHI}_{j,t}$ adalah indeks konsentrasi industri $j$ pada tahun $t$ dengan hipotesis $\beta_2>0$.  
4. $\mathrm{SIZE}_{i,t}$ adalah logaritma natural total aset.  
5. $\mathrm{GROWTH}_{i,t}$ adalah pertumbuhan penjualan tahunan.  
6. $\alpha_i$ adalah firm fixed effects.  
7. $\delta_t$ adalah year fixed effects.  
8. $\varepsilon_{i,t}$ adalah error term.

Selain model utama, penelitian ini menjalankan uji ketahanan terfokus: (1) mengganti BQS utama dengan BQS lama empat komponen, (2) menambahkan kontrol likuiditas, cash ratio, dan capex intensity, (3) mengganti HHI GICS Sub-Industry dengan HHI berbasis ICB/Bloomberg Industry Group, dan (4) menggunakan sustained ROE sebagai outcome alternatif apabila data tersedia cukup. Robustness ini tidak mengubah hipotesis utama, tetapi berfungsi mengevaluasi apakah kesimpulan terlalu bergantung pada satu definisi variabel.

Secara praktis, penggunaan *two-way fixed effects* pada penelitian ini menuntut beberapa langkah yang harus lengkap agar model dapat dipertahankan secara metodologis. Langkah tersebut meliputi: pembentukan panel firm-year, winsorization variabel rasio, pembentukan variabel rolling seperti SROA dan CONS, estimasi model dengan efek perusahaan dan tahun, penghitungan *firm-clustered robust standard errors*, pengujian simultan relevansi efek tetap, lalu pelaksanaan uji diagnostik dan *robustness checks*. Dengan demikian, pemakaian *two-way fixed effects* di sini bukan hanya label model, tetapi rangkaian prosedur analisis yang utuh.

### **3.5.4. Validitas Konstruk dan Konsistensi Operasional Variabel**

Karena penelitian ini menggunakan data sekunder Bloomberg Terminal dan variabel yang dibangun dari rasio keuangan, pengujian validitas dan reliabilitas dalam arti instrumen kuesioner tidak diterapkan. Dengan kata lain, penelitian ini tidak memerlukan uji validitas butir, *item-total correlation*, maupun Cronbach's alpha seperti yang lazim digunakan pada penelitian survei. Penerapan uji tersebut justru tidak tepat karena komponen BQS dalam penelitian ini bersifat *formative indicators*, bukan *reflective items* yang diasumsikan memantulkan satu konstruk laten secara identik.

Sebagai pengganti yang lebih sesuai dengan karakter skripsi ini, kualitas pengukuran dijaga melalui empat mekanisme. Pertama, validitas konstruk dijaga dengan memastikan bahwa setiap variabel mengikuti definisi teoretis dan empiris yang telah dibahas pada BAB II, misalnya HHI untuk struktur industri dan komponen margin, arus kas, leverage, *interest coverage*, serta konsistensi untuk BQS. Kedua, konsistensi operasional dijaga melalui standardisasi rumus, winsorization, audit *missingness*, dan seleksi *complete-case* agar variabel tidak terbentuk dari data yang timpang. Ketiga, koherensi internal BQS dievaluasi melalui profil komponen antar desil, sehingga dapat dilihat apakah skor yang lebih tinggi benar-benar disertai perbaikan pada komponen penyusunnya. Keempat, kestabilan pengukuran diuji melalui *robustness checks*, misalnya memakai definisi BQS lama empat komponen dan beberapa taksonomi HHI alternatif.

Dengan pendekatan tersebut, penelitian ini tetap memiliki padanan evaluasi “validitas” dan “reliabilitas” yang relevan secara metodologis, hanya saja bentuknya disesuaikan dengan sifat data sekunder kuantitatif dan model panel keuangan. Jadi, relasi antara BAB III dan BAB IV bukan berupa uji instrumen survei, melainkan berupa keterkaitan antara definisi konstruk, pemeriksaan kualitas data, koherensi komponen, dan kestabilan hasil estimasi.

### **3.5.5. Perumusan Hipotesis Statistik**

Selain tiga hipotesis substantif pada BAB II, penelitian ini juga merumuskan hipotesis statistik secara eksplisit agar proses pengujian pada BAB IV dapat dibaca dengan format ekonometrika yang lengkap. Perumusan ini penting karena di dalam regresi panel setiap koefisien diuji terhadap hipotesis nol tertentu, bukan sekadar dibaca dari arah tanda koefisien saja. Dengan demikian, pembahasan hasil nantinya dapat membedakan dengan jelas antara hipotesis teoritis, hipotesis statistik parsial, dan pengujian simultan model.

Hipotesis statistik yang digunakan dalam penelitian ini adalah sebagai berikut.

1. Untuk variabel struktur industri (HHI): $H0_1: \beta_{\mathrm{HHI}} = 0$ yang berarti HHI tidak berpengaruh terhadap SROA, sedangkan $Ha_1: \beta_{\mathrm{HHI}} > 0$ yang berarti HHI berpengaruh positif terhadap SROA sesuai ekspektasi paradigma SCP.
2. Untuk variabel kualitas bisnis (BQS): $H0_2: \beta_{\mathrm{BQS}} = 0$ yang berarti BQS tidak berpengaruh terhadap SROA, sedangkan $Ha_2: \beta_{\mathrm{BQS}} > 0$ yang berarti BQS berpengaruh positif terhadap SROA sesuai ekspektasi RBV.
3. Untuk variabel kontrol ukuran perusahaan (SIZE): $H0_3: \beta_{\mathrm{SIZE}} = 0$ yang berarti perubahan ukuran perusahaan tidak berkaitan dengan SROA, sedangkan $Ha_3: \beta_{\mathrm{SIZE}} \neq 0$ yang berarti SIZE memiliki pengaruh terhadap SROA. Hipotesis ini bersifat pelengkap karena SIZE tidak ditempatkan sebagai hipotesis teoritis utama.
4. Untuk variabel kontrol pertumbuhan penjualan (GROWTH): $H0_4: \beta_{\mathrm{GROWTH}} = 0$ yang berarti pertumbuhan penjualan tidak berkaitan dengan SROA, sedangkan $Ha_4: \beta_{\mathrm{GROWTH}} \neq 0$ yang berarti GROWTH memiliki pengaruh terhadap SROA. Sama seperti SIZE, hipotesis ini digunakan untuk melengkapi pembacaan model.
5. Untuk hipotesis dominansi: $H0_5: \beta^{std}_{\mathrm{BQS}} \leq \beta^{std}_{\mathrm{HHI}}$ yang berarti kontribusi relatif BQS tidak melebihi HHI, sedangkan $Ha_5: \beta^{std}_{\mathrm{BQS}} > \beta^{std}_{\mathrm{HHI}}$ yang berarti BQS lebih dominan daripada HHI. Pengujian ini dibaca melalui *standardized beta*, signifikansi statistik, dan kestabilan pada *robustness checks*.
6. Untuk pengujian simultan model: $H0_6: \beta_{\mathrm{BQS}} = \beta_{\mathrm{HHI}} = \beta_{\mathrm{SIZE}} = \beta_{\mathrm{GROWTH}} = 0$, sedangkan $Ha_6:$ minimal ada satu koefisien yang tidak sama dengan nol. Hipotesis ini diuji melalui uji F simultan.

Formulasi di atas membuat penelitian ini memiliki jalur uji yang lengkap: hipotesis teoritis pada BAB II memberi arah konseptual, sedangkan hipotesis statistik pada BAB III memberi aturan keputusan inferensial yang eksplisit. Dengan susunan ini, pembaca dapat menilai bukan hanya apakah koefisien bernilai positif atau negatif, tetapi juga apakah bukti statistik cukup kuat untuk menolak hipotesis nol pada taraf signifikansi yang digunakan.

### **3.5.6. Asumsi Gauss-Markov, Uji Diagnostik, dan Penyesuaian Inferensi**

Untuk model panel *two-way fixed effects*, fondasi metodologis yang lebih tepat sebenarnya adalah kondisi Gauss-Markov yang disesuaikan untuk data panel, bukan daftar uji asumsi klasik yang dibaca sebagai ritual lulus-gagal. Asumsi inti yang perlu dijaga adalah: model linear dalam parameter, tidak adanya multikolinearitas sempurna setelah transformasi *within*, adanya variasi *within-firm* yang cukup pada regressor, serta syarat nilai harapan galat bersyarat yang memadai sehingga koefisien FE dapat dibaca secara konsisten.

Sebaliknya, normalitas residual, homoskedastisitas murni, dan ketiadaan autokorelasi sempurna lebih tepat diposisikan sebagai kenyamanan inferensial, bukan syarat utama agar estimator FE sah digunakan. Oleh karena itu, jawaban metodologis atas pertanyaan apakah penelitian sebaiknya memakai “uji asumsi klasik” atau “Gauss-Markov” adalah: landasan teoritisnya adalah Gauss-Markov, sedangkan uji klasik tetap dipakai sebagai alat diagnostik untuk menentukan seberapa hati-hati inferensi harus dilakukan. Dalam konteks data panel keuangan, fungsi uji tersebut adalah membaca pola residual dan menentukan apakah *robust* atau *clustered inference* wajib dipertahankan.

### **3.5.6.1. Uji Normalitas Residual**

Uji normalitas residual dilakukan menggunakan statistik Jarque-Bera pada residual model *within*. Secara klasik, normalitas residual sering dijadikan salah satu syarat kenyamanan inferensi parametrik, terutama pada sampel kecil. Namun, pada data panel korporasi dengan jumlah observasi besar, normalitas residual bukan syarat utama bagi konsistensi estimator fixed effects. Pengujian ini tetap dilakukan karena berguna untuk menilai apakah residual memiliki ekor distribusi yang berat (*fat tails*) atau asimetri yang sangat kuat.

Apabila hipotesis nol normalitas ditolak, hasil tersebut tidak otomatis membatalkan model penelitian. Sebaliknya, temuan itu dibaca sebagai sinyal bahwa inferensi standar berbasis error homoskedastik biasa tidak cukup aman, sehingga penelitian perlu mengandalkan *robust inference* dan membaca hasil secara hati-hati. Dengan kata lain, uji normalitas dalam penelitian ini berfungsi sebagai alat diagnosis, bukan sebagai syarat biner lulus-gagal.

### **3.5.6.2. Uji Multikolinearitas**

Uji multikolinearitas dilakukan melalui dua langkah, yaitu pembacaan matriks korelasi Pearson dan perhitungan Variance Inflation Factor (VIF). Matriks korelasi digunakan untuk mendeteksi hubungan linear kasar antar variabel, sedangkan VIF digunakan untuk menilai apakah variasi suatu variabel independen terlalu banyak dijelaskan oleh variabel independen lainnya.

Kriteria operasional yang digunakan adalah sebagai berikut: koefisien korelasi absolut yang sangat tinggi (misalnya di atas 0,80) akan dibaca sebagai sinyal awal adanya masalah, dan nilai VIF di atas 10 akan diperlakukan sebagai indikasi kuat multikolinearitas yang serius, meskipun secara konservatif nilai di atas 5 juga patut dicermati. Jika VIF seluruh variabel rendah, maka koefisien dapat dibaca dengan keyakinan lebih besar karena ketidakstabilan estimasi akibat hubungan linear antar penjelas tidak menjadi ancaman utama.

### **3.5.6.3. Uji Heteroskedastisitas**

Uji heteroskedastisitas dilakukan menggunakan Breusch-Pagan pada residual model yang telah di-*demean* sesuai struktur fixed effects. Hipotesis nol dalam uji ini menyatakan bahwa varians residual bersifat konstan, sedangkan hipotesis alternatif menyatakan bahwa varians residual berubah mengikuti level variabel penjelas.

Pada data perusahaan besar lintas sektor, heteroskedastisitas merupakan fenomena yang sangat mungkin muncul karena perbedaan ukuran aset, strategi, intensitas modal, dan volatilitas operasi antar perusahaan. Oleh karena itu, apabila terdapat sinyal heteroskedastisitas, penelitian tidak langsung mengganti model inti, tetapi menyesuaikan cara membaca ketidakpastian koefisien melalui *robust standard errors*. Bahkan jika sinyal heteroskedastisitas tidak dominan, penggunaan *cluster-robust standard errors* tetap dipertahankan sebagai langkah kehati-hatian metodologis.

### **3.5.6.4. Uji Autokorelasi**

Autokorelasi pada penelitian ini diperiksa melalui indikator korelasi residual intra-perusahaan antar periode, khususnya pola AR(1) rata-rata pada residual *within*. Pemeriksaan ini penting karena data panel keuangan hampir selalu memiliki komponen persistensi: kinerja perusahaan yang tinggi atau rendah pada satu tahun sering kali berlanjut ke tahun berikutnya.

Apabila residual menunjukkan korelasi serial yang nyata, maka standard error OLS biasa cenderung menjadi terlalu kecil sehingga statistik uji menjadi terlalu optimistis. Karena itu, deteksi autokorelasi dalam penelitian ini tidak dibaca sekadar sebagai pelanggaran teknis, melainkan sebagai justifikasi substantif mengapa inferensi harus di-*cluster* pada tingkat perusahaan. Dengan demikian, struktur dinamis error term dapat ditangani secara lebih realistis.

### **3.5.6.5. Uji Dependensi Lintas-Seksi**

Selain autokorelasi dalam dimensi waktu, model panel juga perlu diperiksa terhadap kemungkinan dependensi lintas-seksi, yaitu korelasi residual antar perusahaan pada tahun yang sama. Dependensi semacam ini dapat muncul karena guncangan makro bersama, perubahan suku bunga, sentimen pasar, atau kejadian sistemik yang memukul banyak perusahaan sekaligus.

Penelitian ini menggunakan pendekatan Pesaran CD approximation untuk memeriksa apakah korelasi residual antarfirma bersifat cukup kuat secara statistik. Jika dependensi lintas-seksi muncul, pembaca hasil harus lebih berhati-hati karena informasi yang tampak berasal dari banyak perusahaan sesungguhnya dapat bergerak bersama akibat satu guncangan umum. Sebaliknya, jika uji tidak signifikan, maka risiko tersebut relatif lebih terbatas, walaupun tetap tidak boleh diabaikan sepenuhnya dalam panel keuangan.

### **3.5.7. Penyesuaian Inferensi: Cluster-Robust Standard Errors**

Salah satu kelemahan kritis dalam banyak penelitian skripsi yang menggunakan data panel keuangan adalah pengabaian terhadap struktur korelasi pada error term. Asumsi standar OLS adalah error bersifat *independent and identically distributed* (i.i.d.). Namun, Petersen (2009) dalam artikel seminalnya *Estimating Standard Errors in Finance Panel Data Sets* menunjukkan bahwa data keuangan hampir selalu menghadapi dua masalah utama, yaitu ketergantungan serial dalam perusahaan yang sama dan potensi korelasi residual antar unit pada tahun tertentu.

Jika menggunakan standard errors biasa atau bahkan White heteroskedasticity-robust SE tanpa memperhatikan struktur klaster, estimasi standard error dapat bias ke bawah. Akibatnya, nilai statistik-t menjadi terlalu besar secara artifisial dan peneliti berisiko menolak hipotesis nol secara keliru. Untuk mengurangi risiko tersebut, penelitian ini menggunakan estimasi *cluster-robust standard errors* pada tingkat perusahaan. Teknik ini memungkinkan residual antar tahun di dalam perusahaan yang sama untuk saling berkorelasi, sehingga inferensi menjadi lebih defensibel.

Estimasi dijalankan sepenuhnya melalui pipeline Python dengan *year fixed effects* dan *firm-clustered covariance*. Spesifikasi ini dipilih agar pembacaan hasil lebih tahan terhadap heteroskedastisitas, autokorelasi intra-perusahaan, dan sebagian guncangan umum lintas waktu.

### **3.5.8. Pengujian Hipotesis**

Pengujian hipotesis dilakukan berdasarkan hasil estimasi model regresi dengan *cluster-robust standard errors* sehingga fokus utama tidak hanya terletak pada besaran koefisien, tetapi juga pada reliabilitas inferensinya. Jalur pengujian dibagi menjadi pengujian model secara umum, pengujian koefisien parsial, dan pengujian dominansi relatif.

1. Koefisien Determinasi (R2): Dalam konteks fixed effects, fokus analisis adalah pada nilai R-squared model utama yang menunjukkan proporsi variasi SROA yang dapat dijelaskan setelah efek tetap perusahaan dan efek tahun dimasukkan.
2. Uji Parsial (Uji t): Uji ini digunakan untuk menilai signifikansi setiap koefisien regresi. Fokus utama penelitian berada pada apakah koefisien BQS positif signifikan dan apakah koefisien HHI positif signifikan, tetapi pembacaan terhadap SIZE dan GROWTH juga tetap dilaporkan untuk menjaga kelengkapan model.
3. Uji Simultan (Uji F): Uji ini digunakan untuk menilai apakah variabel utama dan kontrol secara bersama-sama memiliki daya jelaskan terhadap SROA.
4. Analisis Dominansi: Untuk menjawab rumusan masalah mengenai faktor yang lebih dominan, penelitian ini membandingkan *standardized beta coefficients* dari BQS dan HHI serta mengevaluasi konsistensinya pada *robustness checks*.

Dengan demikian, pengujian hipotesis dalam penelitian ini tidak berhenti pada label “signifikan” atau “tidak signifikan”, tetapi juga mempertimbangkan arah koefisien, relevansi ekonomi, dan kestabilan temuan di berbagai spesifikasi. Pendekatan ini penting agar simpulan yang ditarik tidak terlalu mekanis dan tetap sejalan dengan batas identifikasi desain observasional.

### **3.5.9. Batasan Interpretasi Inferensi**

Agar pembacaan hasil tidak melampaui desain penelitian, beberapa batasan interpretasi ditegaskan sejak awal.

1. Hasil regresi panel ini terutama bersifat asosiasional bersyarat, bukan bukti kausalitas murni. Penggunaan *fixed effects* dan *cluster-robust standard errors* meningkatkan validitas inferensi, tetapi tidak sepenuhnya menghilangkan kemungkinan *reverse causality* atau variabel yang terlewat.
2. HHI dalam penelitian ini adalah *within-sample HHI* yang dibangun dari kerangka konstituen aktif Mei 2026. Karena itu, HHI dibaca sebagai proksi konsentrasi dalam cakupan data, bukan ukuran penuh struktur industri Amerika Serikat.
3. *Standardized beta coefficients* digunakan hanya untuk membandingkan kontribusi relatif antar variabel dalam model yang sama. Nilai yang berdekatan tidak boleh diartikan sebagai perbedaan yang besar secara substantif.
4. Seleksi *complete-case* pada BQS utama membuat sampel utama lebih bersih secara pengukuran, tetapi juga lebih selektif. Oleh karena itu, generalisasi hasil harus dibatasi pada perusahaan yang tetap bertahan dalam kerangka sampel dan memiliki data yang cukup lengkap.

# **BAB IV** **HASIL DAN ANALISIS** {#bab-iv-hasil-dan-analisis}

BAB IV menyajikan temuan empiris dari pengolahan data Bloomberg Terminal untuk perusahaan konstituen S\&P 500 aktif per Mei 2026. Uraian pada bab ini difokuskan pada hasil olah data, kelayakan model, pengujian hipotesis, dan interpretasi ekonomi. Definisi variabel, rumus, teknik estimasi, serta prosedur konstruksi BQS dan HHI telah dijelaskan pada BAB III sehingga tidak diulang secara panjang pada bab ini. Visualisasi Python lengkap ditempatkan pada lampiran sebagai dokumentasi audit; visual dalam BAB IV disajikan dalam bentuk rangkuman yang dikurasi agar pembacaan hasil tetap ringkas.

## **4.1 Deskripsi Objek Penelitian** {#4.1-deskripsi-objek-penelitian}

Objek penelitian ini adalah perusahaan konstituen indeks S\&P 500 yang aktif per Mei 2026, dengan data historis tahunan 2017--2025 dan panel regresi efektif 2019--2025. Pembahasan pada subbab ini tidak hanya menjelaskan siapa objek penelitiannya, tetapi juga menguraikan mengapa objek tersebut relevan, bagaimana sampel dibentuk, dan seperti apa peta awal data yang akhirnya masuk ke model empiris.

Pilihan pada perusahaan S\&P 500 membuat penelitian ini berhadapan dengan kelompok perusahaan yang secara ekonomi sangat penting, berkapitalisasi besar, dan beroperasi pada berbagai sub-industri yang sangat berbeda. Karena itu, sebelum masuk ke statistik deskriptif dan regresi, pembaca perlu terlebih dahulu melihat karakter objek penelitian, proses penyusutan sampel, serta gambaran struktur data secara visual.

### **4.1.1 Karakteristik Objek Penelitian: Konstituen S\&P 500**

S\&P 500 secara luas dipandang sebagai salah satu barometer utama pasar saham Amerika Serikat karena merepresentasikan perusahaan-perusahaan berkapitalisasi besar yang memiliki pengaruh material terhadap output, investasi, lapangan kerja, dan arah sentimen pasar. Dengan mencakup perusahaan dari beragam sektor seperti teknologi, industri, kesehatan, konsumen, energi, hingga real estat, indeks ini menyediakan laboratorium empiris yang sangat kaya untuk menguji apakah profitabilitas berkelanjutan lebih banyak dipengaruhi oleh struktur industri atau oleh kualitas bisnis internal perusahaan.

Dari sudut pandang penelitian ini, konstituen S\&P 500 juga menarik karena perusahaan-perusahaan di dalamnya umumnya telah melewati proses seleksi pasar yang ketat. Artinya, variasi kinerja yang masih tersisa di dalam sampel bukan lagi sekadar perbedaan antara perusahaan “baik” dan “buruk” secara kasat mata, melainkan perbedaan yang lebih halus pada kualitas operasi, disiplin keuangan, posisi kompetitif, dan struktur pasar tempat mereka beroperasi. Inilah alasan mengapa pengujian terhadap HHI dan BQS pada lingkungan S\&P 500 menjadi relevan secara akademik.

Namun demikian, penting ditekankan bahwa kerangka sampel yang digunakan bukan daftar historis penuh anggota S\&P 500 dari tahun ke tahun, melainkan daftar konstituen yang aktif per Mei 2026 lalu ditarik data historisnya ke belakang. Konsekuensinya, penelitian ini harus dibaca dalam bingkai *survivorship bias* yang sadar dan terdokumentasi. Dengan kata lain, hasil penelitian paling tepat dimaknai sebagai bukti pada kelompok perusahaan besar Amerika Serikat yang masih bertahan dalam indeks pada akhir jendela observasi.

### **4.1.2 Ringkasan Sampel Penelitian**

Unit analisis adalah firm-year. Ringkasan sampel akhir yang digunakan dalam regresi utama ditampilkan sebagai berikut.

<!-- AUTO:BAB4_OVERVIEW_START -->
1. Kerangka sampel: **konstituen S&P 500 aktif per Mei 2026**
2. Jumlah ticker pada file mentah: **503**
3. Eksklusi Financials/Utilities: **97** ticker; tersisa **406** ticker
4. Jumlah observasi final (N): **2241**
5. Jumlah perusahaan final: **333**
6. Jumlah sub-industri GICS final: **92**
7. Rentang panel efektif: **2019–2025**
8. Observasi yang keluar karena complete-case BQS utama: **1363**
9. Komponen BQS utama: **margin, arus kas bebas, leverage, interest coverage, dan konsistensi**
10. Klasifikasi industri tersedia: **GICS Sub-Industry (110); ICB Subsector (114); ICB Sector (36); ICB Supersector (18); ICB Industry (11); Bloomberg Industry Group (56)**
11. Sel ambiguous suffix yang diaudit sebagai missing: **Free Cash Flow: 14; Total Equity: 162; Market Cap: 890**
<!-- AUTO:BAB4_OVERVIEW_END -->

Ringkasan di atas menunjukkan bahwa pembentukan sampel dilakukan secara ketat dan berlapis. Dari 503 ticker awal, perusahaan sektor Financials dan Utilities dikeluarkan karena struktur keuangan, model bisnis, dan lingkungan regulasinya terlalu berbeda dibanding perusahaan non-keuangan lain. Eksklusi ini bukan sekadar kebiasaan metodologis, melainkan keputusan substantif agar perbandingan antarperusahaan lebih *apple-to-apple*, khususnya ketika BQS menggunakan komponen seperti margin, leverage, dan interest coverage.

Setelah eksklusi sektor, sampel masih mengalami penyusutan tambahan pada tahap *complete-case* untuk BQS utama. Penyusutan ini mencerminkan bahwa penelitian memilih kualitas pengukuran di atas perluasan ukuran sampel. Keputusan tersebut memang mengurangi jumlah observasi, tetapi menghindarkan model dari imputasi data yang tidak dapat diverifikasi. Dengan demikian, hasil regresi yang diperoleh lebih layak dibaca sebagai hasil pada sampel yang terukur dengan relatif bersih, bukan pada seluruh populasi konseptual perusahaan Amerika Serikat.

Keterbatasan terpenting yang harus terus diingat adalah adanya potensi *survivorship bias* karena kerangka sampel hanya mencakup konstituen aktif per Mei 2026. Keterbatasan ini tidak membuat penelitian menjadi tidak layak, tetapi membatasi generalisasi hasil pada perusahaan yang masih bertahan sebagai anggota aktif indeks pada saat data diambil. HHI juga harus dibaca sebagai konsentrasi penjualan dalam sampel, bukan sebagai ukuran pangsa pasar penuh seluruh ekonomi Amerika Serikat.

\begin{figure}[htbp]
\caption{Ringkasan Alur Sampel dan Panel Regresi}
\vspace{0.5em}
\centering
\begin{tabularx}{\textwidth}{>{\centering\arraybackslash}X>{\centering\arraybackslash}X>{\centering\arraybackslash}X>{\centering\arraybackslash}X}
\toprule
File mentah & Eksklusi sektor & Sampel bersih & Panel regresi \\
\midrule
503 ticker & 97 ticker Financials/Utilities & 406 ticker & 333 perusahaan \\
2017--2025 & sesuai desain penelitian & firm-year non-keuangan/non-utilitas & 2.241 observasi, 2019--2025 \\
\bottomrule
\end{tabularx}
\vspace{0.5em}
{\small Sumber: Hasil pengolahan data Bloomberg Terminal.}
\end{figure}

### **4.1.3 Pemetaan Awal Sampel dan Cakupan Data**

Sebelum masuk ke pengujian ekonometrika, pemetaan visual awal diperlukan agar pembaca memperoleh intuisi mengenai bagaimana data penelitian tersusun. Visual pada bagian ini berfungsi sebagai “jembatan baca” antara penjelasan metodologis di BAB III dan pengujian formal di BAB IV. Dengan visual ini, pembaca dapat melihat secara langsung proporsi sampel, penyusutan data, komposisi industri, dan titik-titik kelemahan data yang perlu diingat ketika menafsirkan hasil.

\begin{figure}[H]
\caption{Komposisi Kerangka Sampel Setelah Eksklusi Sektor}
\centering
\begin{tikzpicture}[scale=0.95]
\fill[black!15] (0,0) -- (0:2.5) arc[start angle=0,end angle=290.5,radius=2.5] -- cycle;
\fill[white] (0,0) -- (290.5:2.5) arc[start angle=290.5,end angle=360,radius=2.5] -- cycle;
\fill[white] (0,0) circle (1.05);
\draw[white,line width=1pt] (0,0) -- (0:2.5);
\draw[white,line width=1pt] (0,0) -- (290.5:2.5);
\draw[black] (0,0) circle (2.5);
\node[align=center] at (0,0.18) {\textbf{503}};
\node[align=center] at (0,-0.18) {\small ticker mentah};
\node[align=left] at (-4.4,2.15) {\fcolorbox{black}{black!15}{\rule{0.18cm}{0.18cm}} Sampel non-keuangan/non-utilitas\\ \small 406 ticker (80,7\%)};
\node[align=left] at (-4.4,1.25) {\fcolorbox{black}{white}{\rule{0.18cm}{0.18cm}} Sektor dikeluarkan\\ \small 97 ticker (19,3\%)};
\end{tikzpicture}
\vspace{0.5em}
{\small Sumber: Olahan dari ringkasan sampel penelitian.}
\end{figure}

Gambar di atas menunjukkan bahwa mayoritas ticker awal tetap bertahan setelah eksklusi sektor, tetapi proporsi yang dikeluarkan tetap cukup material. Artinya, keputusan untuk menghapus Financials dan Utilities bukan perubahan kecil yang bisa diabaikan, melainkan penyaringan yang nyata terhadap struktur sampel. Dari perspektif metodologis, hal ini menguatkan bahwa hasil penelitian memang merepresentasikan perusahaan besar non-keuangan dan non-utilitas, bukan seluruh isi indeks secara seragam.

\begin{figure}[H]
\caption{Penyusutan Observasi dari Data Mentah ke Panel Final}
\centering
\begin{tikzpicture}[x=2.45cm,y=0.00125cm]
\foreach \x/\h/\lab/\col in {
0/4527/{Data mentah\\4.527}/AksaBlue,
1/3654/{Pasca eksklusi\\3.654}/AksaTeal,
2/3604/{Fundamental bersih\\3.604}/AksaBlue,
3/2241/{Panel final\\2.241}/AksaOrange}
{
\fill[\col!88] (\x,0) rectangle ++(0.78,\h);
\node[font=\small,align=center] at (\x+0.39,\h+180) {\lab};
}
\node[font=\small,align=center] at (0.39,-280) {Tahap 1};
\node[font=\small,align=center] at (1.39,-280) {Tahap 2};
\node[font=\small,align=center] at (2.39,-280) {Tahap 3};
\node[font=\small,align=center] at (3.39,-280) {Tahap 4};
\draw[->,thick,AksaBlue] (-0.15,0) -- (-0.15,4800) node[above] {\small Firm-year};
\draw[thick] (-0.1,0) -- (4.0,0);
\end{tikzpicture}
\vspace{0.5em}
{\small Sumber: Ringkasan pipeline pengolahan data penelitian.}
\end{figure}

Gambar penyusutan observasi memperlihatkan bahwa reduksi terbesar tidak terjadi pada tahap eksklusi sektor, melainkan pada tahap kesiapan data untuk membentuk variabel penelitian secara penuh. Panel final sebanyak 2.241 observasi lahir setelah data mentah, data pasca-eksklusi, dan data fundamental bersih disaring ulang agar konsisten dengan kebutuhan SROA, BQS, HHI, SIZE, dan GROWTH. Ini penting untuk dicatat karena ukuran sampel akhir bukan sekadar hasil pembersihan administratif, tetapi konsekuensi langsung dari standar kualitas data yang dipilih.

\begin{figure}[H]
\caption{Komposisi Perusahaan Menurut Kelompok Industri ICB}
\centering
\begin{tikzpicture}[x=0.09cm,y=0.62cm]
\foreach \y/\name/\val/\col in {
7/{Industrials}/84/AksaBlue,
6/{Technology}/60/AksaTeal,
5/{Consumer Discretionary}/54/AksaBlue,
4/{Health Care}/49/AksaTeal,
3/{Consumer Staples}/33/AksaBlue,
2/{Energy}/19/AksaTeal,
1/{Basic Materials}/15/AksaBlue,
0/{Lainnya}/19/AksaOrange}
{
\fill[\col!88] (0,\y) rectangle (\val,0.62+\y);
\node[anchor=east,font=\small] at (-2,\y+0.31) {\name};
\node[anchor=west,font=\small] at (\val+1,\y+0.31) {\val};
}
\draw[->,thick,AksaBlue] (0,-0.35) -- (90,-0.35) node[right] {\small Jumlah perusahaan};
\end{tikzpicture}
\vspace{0.5em}
{\small Sumber: Ringkasan distribusi industri pada sampel final.}
\end{figure}

Komposisi industri menunjukkan bahwa sampel tidak tersebar secara merata pada setiap kelompok industri. Kelompok Industrials, Technology, Consumer Discretionary, dan Health Care tampak paling dominan, sedangkan Financials dan Utilities hanya muncul sangat kecil karena memang dikeluarkan dari analisis utama. Ketimpangan distribusi ini relevan ketika membaca HHI, sebab struktur konsentrasi pasar pada sampel besar seperti S\&P 500 tidak berdiri di ruang hampa, tetapi dipengaruhi oleh komposisi sektor dan sub-industri yang memang tidak seimbang sejak awal.

\begin{figure}[H]
\caption{Peta Missingness Data Menurut Kelompok Variabel dan Tahun}
\centering
\small
\setlength{\tabcolsep}{5pt}
\begin{tabular}{lccccccccc}
\toprule
Kelompok variabel & 2017 & 2018 & 2019 & 2020 & 2021 & 2022 & 2023 & 2024 & 2025 \\
\midrule
Penjualan dan total aset & \cellcolor{AksaSand!35} rendah & \cellcolor{AksaSand!28} rendah & \cellcolor{AksaSand!24} rendah & \cellcolor{AksaSand!24} rendah & \cellcolor{AksaSand!22} rendah & \cellcolor{AksaSand!20} rendah & \cellcolor{AksaSand!18} rendah & \cellcolor{AksaSand!16} rendah & \cellcolor{AksaSand!14} rendah \\
Margin dan COGS & \cellcolor{AksaSand!70} sedang & \cellcolor{AksaSand!66} sedang & \cellcolor{AksaSand!64} sedang & \cellcolor{AksaSand!62} sedang & \cellcolor{AksaSand!60} sedang & \cellcolor{AksaSand!58} sedang & \cellcolor{AksaSand!56} sedang & \cellcolor{AksaSand!54} sedang & \cellcolor{AksaSand!52} sedang \\
Arus kas operasi dan capex & \cellcolor{AksaSand!30} rendah & \cellcolor{AksaSand!28} rendah & \cellcolor{AksaSand!26} rendah & \cellcolor{AksaSand!24} rendah & \cellcolor{AksaSand!22} rendah & \cellcolor{AksaSand!20} rendah & \cellcolor{AksaSand!18} rendah & \cellcolor{AksaSand!16} rendah & \cellcolor{AksaSand!16} rendah \\
Ekuitas dan leverage & \cellcolor{AksaSand!44} rendah-sedang & \cellcolor{AksaSand!40} rendah-sedang & \cellcolor{AksaSand!38} rendah-sedang & \cellcolor{AksaSand!36} rendah-sedang & \cellcolor{AksaSand!40} rendah-sedang & \cellcolor{AksaSand!42} rendah-sedang & \cellcolor{AksaSand!39} rendah-sedang & \cellcolor{AksaSand!37} rendah-sedang & \cellcolor{AksaSand!35} rendah-sedang \\
Market cap & \cellcolor{AksaOrange!62} tinggi & \cellcolor{AksaOrange!60} tinggi & \cellcolor{AksaOrange!58} tinggi & \cellcolor{AksaOrange!57} tinggi & \cellcolor{AksaOrange!78} sangat tinggi & \cellcolor{AksaOrange!67} tinggi & \cellcolor{AksaOrange!79} sangat tinggi & \cellcolor{AksaOrange!88} sangat tinggi & \cellcolor{AksaOrange!92} sangat tinggi \\
\bottomrule
\end{tabular}
\vspace{0.5em}
{\small Sumber: Ringkasan visual dari audit missingness pipeline Python.}
\end{figure}

Peta *missingness* menegaskan bahwa kualitas data tidak identik pada setiap item laporan keuangan. Variabel seperti *market cap*, sebagian komponen margin, dan beberapa akun pendukung menunjukkan tingkat kekosongan yang lebih tinggi dibanding item dasar seperti total aset dan penjualan. Temuan ini membantu menjelaskan mengapa penelitian memilih pendekatan *complete-case* untuk BQS utama: tanpa disiplin tersebut, skor kualitas bisnis berisiko tercampur antara sinyal ekonomi nyata dan artefak kekosongan data.

## **4.2 Analisis Data** {#4.2-analisis-data}

Subbab ini memaparkan hasil olahan data yang berfungsi sebagai fondasi sebelum pembaca masuk ke hasil estimasi regresi utama. Penyajian dimulai dari deskripsi pola data, statistik deskriptif, korelasi, dan evaluasi asumsi Gauss-Markov serta diagnostik residual yang telah dirancang pada BAB III. Dengan susunan ini, pembaca dapat menilai terlebih dahulu apakah data dan model cukup layak untuk dibaca sebelum sampai pada uji hipotesis utama mengenai pengaruh HHI dan BQS.

### **4.2.1 Rancangan Estimasi dan Alur Analisis**

Model utama penelitian ini adalah regresi panel two-way fixed effects (firm dan year) untuk mengendalikan heterogenitas tidak teramati yang konstan pada level perusahaan ($\alpha_i$) serta guncangan makro yang umum pada tahun tertentu ($\delta_t$). Inferensi statistik menggunakan standard errors yang di-*cluster* pada level perusahaan sebagai standar karena data panel keuangan lazim menghadapi heteroskedastisitas, autokorelasi intra-perusahaan, dan dependensi lintas unit.

Alur analisis pada Subbab 4.2 dibuat bertahap: (1) ringkasan visual kurasi, (2) statistik deskriptif dan korelasi, (3) pemeriksaan multikolinearitas, (4) uji diagnostik residual, (5) koefisien determinasi, (6) uji t, (7) uji F, dan (8) uji ketahanan. Dengan urutan ini, pembaca dapat melihat terlebih dahulu daya jelaskan model sebelum menilai signifikansi masing-masing variabel.

Kebutuhan penggunaan model *two-way fixed effects* juga diuji secara formal. Hasil uji gabungan *two-way fixed effects* terhadap *pooled OLS* menghasilkan statistik F sebesar 20,409 dengan *p-value* di bawah 0,001. Uji efek perusahaan setelah memasukkan *year fixed effects* menghasilkan F sebesar 20,457 dengan *p-value* di bawah 0,001, sedangkan uji efek waktu setelah memasukkan *firm fixed effects* menghasilkan F sebesar 8,621 dengan *p-value* di bawah 0,001. Rangkaian hasil ini menunjukkan bahwa baik efek perusahaan maupun efek tahun sama-sama relevan dan tidak layak diabaikan, sehingga pemilihan model *two-way fixed effects* bukan hanya asumsi teoritis, tetapi juga didukung bukti statistik.

### **4.2.2 Visualisasi Ringkas Pola Data**

Visual pada bagian ini tidak mengambil langsung grafik Python mentah, melainkan merangkum hasil utama dari tabel dan output regresi. Grafik lengkap hasil pipeline ditempatkan pada lampiran untuk menjaga transparansi sekaligus menghindari pengulangan teknis yang sudah dijelaskan pada BAB III.

\begin{figure}[H]
\caption{Ringkasan Pola Deskriptif Variabel Utama}
\vspace{0.5em}
\centering
\begin{tabularx}{\textwidth}{>{\raggedright\arraybackslash}p{0.22\textwidth}>{\raggedright\arraybackslash}X>{\raggedright\arraybackslash}X}
\toprule
Dimensi & Temuan empiris & Implikasi pembacaan \\
\midrule
SROA & Rata-rata 0,079 dan median 0,070 & Sampel memiliki profitabilitas berkelanjutan positif setelah perataan tiga tahun \\
BQS & Desil terendah memiliki mean SROA 0,048; desil tertinggi 0,112 & Kualitas bisnis memiliki pola deskriptif positif terhadap SROA \\
HHI & Kuintil HHI tidak menunjukkan pola SROA yang monoton & Konsentrasi industri perlu diuji melalui model panel, bukan hanya deskriptif \\
VIF & Seluruh VIF sekitar 1,015--1,031 & Multikolinearitas tidak menjadi ancaman utama \\
\bottomrule
\end{tabularx}
\vspace{0.5em}
{\small Sumber: Ringkasan Tabel 4.1--Tabel 4.6.}
\end{figure}

\begin{figure}[H]
\caption{Peta Hasil Uji Hipotesis}
\vspace{0.5em}
\centering
\begin{tabularx}{\textwidth}{>{\centering\arraybackslash}p{0.15\textwidth}>{\raggedright\arraybackslash}X>{\raggedright\arraybackslash}X>{\centering\arraybackslash}p{0.18\textwidth}}
\toprule
Hipotesis & Hubungan yang diuji & Bukti utama & Keputusan \\
\midrule
H1 & HHI $\rightarrow$ SROA & Koefisien positif 0,076, tetapi $p=0,146$ & Tidak terdukung \\
H2 & BQS $\rightarrow$ SROA & Koefisien positif 0,033 dan $p<0,001$ & Terdukung \\
H3 & Dominansi BQS dibanding HHI & Standardized beta BQS 0,258 dan HHI 0,255; BQS signifikan dan stabil & Terdukung hati-hati \\
\bottomrule
\end{tabularx}
\vspace{0.5em}
{\small Sumber: Ringkasan hasil regresi utama dan uji ketahanan.}
\end{figure}

### **4.2.3 Statistik Deskriptif, Korelasi, dan Pola Kelompok (Output Tabel)**

Bagian ini menyajikan keluaran tabel yang menjadi dasar pembacaan karakter data sebelum masuk ke diagnosis model dan regresi utama. Fokusnya adalah memahami besaran variabel, arah hubungan awal, serta pola kelompok yang nanti membantu menafsirkan hasil multivariat. Dengan demikian, tabel pada bagian ini berfungsi sebagai fondasi naratif untuk pembahasan yang lebih teknis pada subbab berikutnya.

<!-- AUTO:BAB4_ANALYSIS_TABLES_START -->
**Tabel 4.1 Statistik Deskriptif Variabel Penelitian (N=2241)**  

| Variabel | Mean | Std. Dev | Min | P25 | Median | P75 | Max |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SROA | 0,079 | 0,066 | -0,095 | 0,039 | 0,070 | 0,114 | 0,276 |
| BQS | -0,001 | 0,517 | -1,849 | -0,340 | -0,063 | 0,252 | 4,633 |
| HHI | 0,354 | 0,222 | 0,109 | 0,173 | 0,334 | 0,454 | 1,000 |
| SIZE | 23,867 | 1,231 | 20,556 | 23,010 | 23,794 | 24,671 | 27,832 |
| GROWTH | 0,088 | 0,198 | -0,406 | 0,000 | 0,060 | 0,140 | 0,972 |

Tabel 4.1 menyajikan rangkuman statistik deskriptif untuk seluruh variabel penelitian yang mencakup 2241 observasi dari 333 perusahaan selama periode panel efektif 2019–2025. SROA yang tetap positif pada rata-rata menunjukkan bahwa profitabilitas berkelanjutan sampel relatif stabil setelah efek fluktuasi tahunan diredam melalui rata-rata bergerak. Pada saat yang sama, rentang nilai SROA, BQS, HHI, SIZE, dan GROWTH yang cukup lebar menegaskan bahwa heterogenitas lintas perusahaan cukup besar sehingga penggunaan model panel memang relevan untuk menangkap perbedaan antarperusahaan dan antarperiode.

**Tabel 4.2 Matriks Korelasi Pearson (N=2241)**  

|  | SROA | BQS | HHI | SIZE | GROWTH |
| --- | --- | --- | --- | --- | --- |
| SROA | 1,000 | 0,318 | -0,043 | -0,214 | -0,083 |
| BQS | 0,318 | 1,000 | -0,105 | -0,094 | 0,113 |
| HHI | -0,043 | -0,105 | 1,000 | 0,088 | -0,021 |
| SIZE | -0,214 | -0,094 | 0,088 | 1,000 | -0,051 |
| GROWTH | -0,083 | 0,113 | -0,021 | -0,051 | 1,000 |

Tabel 4.2 menunjukkan arah hubungan bivariat awal antar variabel sebelum efek tetap perusahaan dan tahun dikendalikan. Korelasi positif antara SROA dan BQS memberi dukungan awal bahwa kualitas bisnis berkaitan dengan profitabilitas berkelanjutan, sedangkan korelasi SROA dengan HHI terlihat lemah. Korelasi antarvariabel independen juga relatif rendah, sehingga sejak tahap awal tidak tampak gejala multikolinearitas yang serius. Karena itu, kesimpulan formal tetap harus ditarik dari regresi panel multivariat.

**Tabel 4.3 Variance Inflation Factor (VIF)**  

| Variabel | VIF |
| --- | --- |
| BQS | 1,031 |
| HHI | 1,018 |
| SIZE | 1,017 |
| GROWTH | 1,015 |

Tabel 4.3 memperlihatkan bahwa seluruh nilai VIF berada sangat dekat dengan 1, sehingga tidak ada indikasi multikolinearitas yang serius di antara variabel penjelas. Dengan demikian, koefisien regresi nantinya dapat dibaca tanpa kekhawatiran besar bahwa hubungan antar variabel independen mengganggu stabilitas estimasi. Hasil ini penting karena fokus penelitian adalah membandingkan kekuatan relatif BQS dan HHI, sehingga kestabilan koefisien menjadi prasyarat utama untuk pembacaan dominansi yang kredibel.

**Tabel 4.4 Uji Diagnostik Ekonometrika**  

| Uji | Statistik | p-value | Catatan |
| --- | --- | --- | --- |
| Jarque-Bera (residual normality) | 929,014 | <0,001 | Residuals from within regression |
| Breusch-Pagan (LM) | 6,620 | 0,157 | Exog=within-demeaned regressors |
| Breusch-Pagan (F) | 1,656 | 0,158 | Exog=within-demeaned regressors |
| Pesaran CD (cross-sectional dependence, approx.) | -0,132 | 0,895 | Pairs=54851; Approx CD using pairwise correlations |
| Within-firm residual AR(1) corr (mean) | 0,579 | <0,001 | Firms used=328; Mean Fisher-z AR(1) |

Tabel 4.4 menunjukkan bahwa residual model tidak sepenuhnya normal dan masih mengandung korelasi serial intra-perusahaan, sementara sinyal heteroskedastisitas dan dependensi lintas-seksi tidak tampak dominan. Kombinasi hasil ini khas pada data panel keuangan: model masih layak digunakan, tetapi inferensinya tidak boleh dibaca dengan standard error biasa. Karena itu, temuan pada tabel ini menguatkan keputusan metodologis untuk menggunakan firm-clustered robust standard errors agar inferensi tetap lebih aman.

**Tabel 4.5 Rata-rata SROA Menurut Desil BQS**  

| Desil BQS | N | Mean BQS | Mean SROA |
| --- | --- | --- | --- |
| D1 | 225 | -0,716 | 0,048 |
| D2 | 224 | -0,446 | 0,061 |
| D3 | 224 | -0,336 | 0,061 |
| D4 | 224 | -0,219 | 0,069 |
| D5 | 224 | -0,112 | 0,074 |
| D6 | 224 | -0,005 | 0,078 |
| D7 | 224 | 0,119 | 0,087 |
| D8 | 224 | 0,254 | 0,102 |
| D9 | 224 | 0,446 | 0,102 |
| D10 | 224 | 1,013 | 0,112 |

Tabel 4.5 memperlihatkan pola deskriptif yang cukup jelas: rata-rata SROA cenderung meningkat dari desil BQS terendah ke desil tertinggi. Meskipun tidak sepenuhnya monoton di setiap titik, arah umumnya mendukung dugaan bahwa perusahaan dengan kualitas bisnis lebih baik cenderung memiliki profitabilitas berkelanjutan yang lebih tinggi. Artinya, sebelum masuk ke regresi formal pun, data sudah memberi sinyal awal bahwa BQS bergerak searah dengan ketahanan profitabilitas.

**Tabel 4.6 Rata-rata SROA Menurut Kuintil HHI**  

| Kuintil HHI | N | Mean HHI | Mean SROA |
| --- | --- | --- | --- |
| Q1 | 458 | 0,132 | 0,074 |
| Q2 | 445 | 0,196 | 0,084 |
| Q3 | 444 | 0,315 | 0,080 |
| Q4 | 447 | 0,424 | 0,079 |
| Q5 | 447 | 0,707 | 0,079 |

Tabel 4.6 menunjukkan bahwa rata-rata SROA antar kuintil HHI tidak membentuk pola yang tegas atau monoton. Hal ini mengisyaratkan bahwa pengaruh konsentrasi industri terhadap SROA tidak sekuat pola yang terlihat pada BQS, sehingga pengujian formal lewat regresi panel menjadi semakin penting. Dengan kata lain, sinyal deskriptif untuk HHI jauh lebih lemah dan lebih ambigu dibandingkan sinyal deskriptif untuk BQS.

**Tabel 4.7 Profil Komponen BQS Menurut Desil**  

| Desil | Margin | FCF | Leverage | Coverage | Consistency |
| --- | --- | --- | --- | --- | --- |
| D1 | -1,004 | -0,989 | -0,907 | -0,098 | -0,583 |
| D2 | -0,980 | -0,502 | -0,176 | -0,086 | -0,484 |
| D3 | -0,761 | -0,372 | -0,071 | -0,082 | -0,396 |
| D4 | -0,475 | -0,258 | -0,004 | -0,078 | -0,282 |
| D5 | -0,177 | -0,096 | -0,075 | -0,074 | -0,135 |
| D6 | 0,089 | 0,084 | -0,057 | -0,067 | -0,073 |
| D7 | 0,424 | 0,327 | 0,009 | -0,068 | -0,098 |
| D8 | 0,584 | 0,435 | 0,126 | -0,034 | 0,159 |
| D9 | 0,867 | 0,679 | 0,431 | -0,019 | 0,269 |
| D10 | 1,283 | 0,909 | 0,653 | 0,681 | 1,537 |

Tabel 4.7 menegaskan bahwa kenaikan desil BQS diikuti perbaikan yang relatif konsisten pada profil komponen penyusunnya. Artinya, skor BQS yang lebih tinggi memang bukan artefak satu komponen tunggal, melainkan mencerminkan peningkatan kualitas bisnis secara lebih menyeluruh. Temuan ini penting karena membuat interpretasi terhadap pengaruh BQS menjadi lebih kuat secara konseptual.

**Tabel 4.8 Sensitivitas HHI terhadap Taksonomi Industri**  

| Taksonomi | Mean | Median | Min | Max |
| --- | --- | --- | --- | --- |
| GICS Sub | 0,354 | 0,334 | 0,109 | 1,000 |
| ICB Sub | 0,381 | 0,327 | 0,095 | 1,000 |
| ICB Sector | 0,183 | 0,148 | 0,045 | 1,000 |
| ICB Super | 0,103 | 0,079 | 0,025 | 0,974 |
| ICB Industry | 0,081 | 0,076 | 0,021 | 0,974 |
| Bloomberg Group | 0,297 | 0,239 | 0,115 | 1,000 |

Tabel 4.8 menunjukkan bahwa tingkat HHI cukup sensitif terhadap taksonomi industri yang digunakan. Temuan ini penting karena berarti interpretasi pengaruh struktur industri perlu dibaca hati-hati dan tidak bergantung pada satu klasifikasi saja. Sensitivitas tersebut juga menjadi alasan mengapa penelitian menambahkan beberapa definisi HHI alternatif pada tahap robustness.
<!-- AUTO:BAB4_ANALYSIS_TABLES_END -->

### **4.2.4 Evaluasi Asumsi Gauss-Markov dan Diagnostik Model**

Setelah memperoleh gambaran umum tentang distribusi data dan pola hubungan awal, tahap berikutnya adalah memeriksa apakah model panel yang digunakan cukup sejalan dengan kondisi Gauss-Markov yang relevan dan apakah terdapat pola residual yang mengganggu inferensi. Dalam penelitian panel keuangan, bagian ini tidak dibaca secara hitam-putih seolah model harus sepenuhnya “bersih” dari semua penyimpangan. Yang lebih penting adalah apakah terdapat pola residual tertentu yang menuntut penyesuaian cara membaca standard error dan signifikansi koefisien.

### **4.2.4.1 Uji Normalitas Residual**

Normalitas residual dievaluasi melalui statistik Jarque-Bera pada Tabel 4.4. Hasil uji menunjukkan nilai statistik yang tinggi dengan *p-value* di bawah 0,001, sehingga hipotesis nol normalitas residual ditolak. Secara teknis, ini berarti distribusi residual model *within* tidak sepenuhnya mengikuti distribusi normal.

Dalam konteks data panel perusahaan besar, hasil seperti ini sesungguhnya cukup lazim. Residual keuangan korporasi sering memiliki ekor distribusi yang lebih berat karena adanya guncangan ekstrem, kejadian satu kali, atau perubahan siklus bisnis yang tidak tertangkap sempurna oleh model. Karena ukuran sampel penelitian cukup besar, penolakan normalitas tidak otomatis membatalkan model fixed effects. Namun, hasil ini memperingatkan bahwa inferensi tidak boleh bertumpu pada asumsi homoskedastik-normal biasa. Oleh sebab itu, keputusan menggunakan *firm-clustered robust standard errors* menjadi semakin relevan.

### **4.2.4.2 Uji Multikolinearitas**

Multikolinearitas dibaca terutama melalui Tabel 4.3 dan didukung oleh korelasi antar variabel pada Tabel 4.2. Seluruh nilai VIF berada pada kisaran 1,015 hingga 1,031, sangat jauh di bawah ambang konservatif 5 maupun ambang longgar 10. Hasil ini menunjukkan bahwa masing-masing variabel penjelas masih membawa informasi yang relatif berbeda, sehingga ketidakstabilan koefisien akibat hubungan linear antarsesama variabel independen tidak menjadi ancaman utama.

Temuan ini penting karena BQS secara konsep memang berpotensi berkaitan dengan SIZE dan GROWTH. Jika multikolinearitas tinggi terjadi, maka koefisien BQS dan HHI bisa menjadi sulit dibedakan secara statistik walaupun secara ekonomi keduanya relevan. Akan tetapi, karena VIF sangat rendah dan korelasi bivariat juga tidak ekstrem, model utama dapat dibaca dengan keyakinan yang lebih baik bahwa setiap koefisien mewakili informasi marjinal yang cukup terpisah.

### **4.2.4.3 Uji Heteroskedastisitas**

Heteroskedastisitas dievaluasi melalui hasil Breusch-Pagan pada Tabel 4.4, baik versi LM maupun F. Kedua hasil tersebut memberikan *p-value* sekitar 0,157 hingga 0,158, sehingga tidak ada bukti kuat untuk menolak hipotesis nol homoskedastisitas pada spesifikasi yang diuji. Secara permukaan, ini menunjukkan bahwa variasi residual tidak tampak berubah secara sistematis mengikuti level variabel penjelas dalam model *within*.

Meskipun demikian, hasil ini tidak berarti penelitian boleh kembali menggunakan standard error biasa. Pada data panel korporasi, heteroskedastisitas sering kali hidup berdampingan dengan autokorelasi dan struktur klaster residual yang lebih kompleks daripada yang dapat ditangkap satu uji formal. Karena itu, temuan Breusch-Pagan yang tidak dominan diperlakukan sebagai informasi yang menenangkan, tetapi bukan alasan untuk melepas perlindungan metodologis berupa *cluster-robust standard errors*.

### **4.2.4.4 Uji Autokorelasi**

Autokorelasi residual dibaca melalui indikator korelasi AR(1) rata-rata intra-perusahaan pada Tabel 4.4. Nilai korelasi sekitar 0,579 dengan *p-value* di bawah 0,001 menunjukkan bahwa residual pada perusahaan yang sama cenderung bergerak searah antarperiode. Dengan kata lain, ketika model mengalami *underprediction* atau *overprediction* pada suatu perusahaan di satu tahun, pola penyimpangan serupa masih berpotensi berlanjut pada tahun berikutnya.

Temuan ini sangat penting secara ekonometrika. Jika autokorelasi semacam ini diabaikan, maka standard error parsial dapat menjadi terlalu kecil sehingga koefisien tampak lebih meyakinkan daripada yang sebenarnya. Oleh karena itu, hasil uji autokorelasi justru menjadi salah satu justifikasi terkuat untuk mengandalkan *firm-level clustering* dalam inferensi akhir. Dalam bahasa yang lebih sederhana, model utama tetap dipertahankan, tetapi “cara menghitung ketidakpastian” koefisiennya harus dibuat lebih ketat.

### **4.2.4.5 Uji Dependensi Lintas-Seksi**

Dependensi lintas-seksi diperiksa melalui pendekatan Pesaran CD pada Tabel 4.4. Hasil uji menunjukkan statistik yang sangat kecil dengan *p-value* 0,895, sehingga tidak ada bukti kuat bahwa residual antarperusahaan bergerak bersama secara sistematis setelah efek tahun dimasukkan. Ini berarti guncangan umum yang sama tampaknya sudah cukup banyak diserap oleh *year fixed effects* dalam model utama.

Walaupun hasil ini relatif menenangkan, interpretasinya tetap perlu hati-hati. Tidak signifikannya uji Pesaran CD tidak berarti perusahaan-perusahaan dalam pasar modal Amerika benar-benar independen satu sama lain, melainkan hanya menunjukkan bahwa pada spesifikasi model yang digunakan, sisa korelasi residual lintas-seksi tidak muncul sebagai masalah dominan. Dengan demikian, diagnosis keseluruhan model adalah: multikolinearitas rendah, heteroskedastisitas tidak dominan, dependensi lintas-seksi tidak kuat, tetapi autokorelasi intra-perusahaan nyata dan normalitas residual tidak terpenuhi sempurna. Kombinasi temuan inilah yang membuat pemakaian *cluster-robust standard errors* menjadi pilihan paling defensibel.

### **4.2.4.6 Evaluasi Validitas Konstruk dan Konsistensi Operasional**

Sesuai penjelasan metodologis pada BAB III, penelitian ini tidak menggunakan uji validitas dan reliabilitas instrumen dalam arti kuesioner. Sebagai gantinya, evaluasi kualitas pengukuran dilakukan melalui validitas konstruk, koherensi komponen, dan kestabilan operasional variabel. Pada tahap hasil, pembaca dapat melihat bahwa konstruk BQS tidak dibangun secara arbitrer: Tabel 4.5 dan terutama Tabel 4.7 menunjukkan bahwa kenaikan skor BQS diikuti perbaikan relatif konsisten pada komponen margin, arus kas bebas, leverage discipline, *interest coverage*, dan konsistensi. Ini memberi dukungan bahwa BQS memang menangkap dimensi kualitas bisnis yang masuk akal secara ekonomi.

Selain itu, konsistensi operasional juga tercermin dari proses *complete-case*, audit *missingness*, dan *robustness checks* yang akan ditunjukkan pada hasil estimasi berikutnya. Artinya, relasi BAB III dan BAB IV pada penelitian ini bukan berupa pengujian butir kuesioner, melainkan keterkaitan yang lebih tepat secara ekonomi-keuangan: apakah konstruk variabel sesuai literatur, apakah data cukup bersih untuk membentuk ukuran tersebut, dan apakah hasil tetap stabil ketika definisi operasional digeser secara wajar.

## **4.3 Hasil** {#4.3-hasil-estimasi-regresi-dan-pengujian-hipotesis}

Subbab ini menyajikan hasil estimasi model panel utama secara lebih eksplisit, diikuti pengujian hipotesis parsial, simultan, dominansi relatif, dan uji ketahanan. Dengan demikian, bagian ini merupakan pusat inferensi statistik penelitian, sedangkan interpretasi ekonomi yang lebih mendalam akan diletakkan pada subbab berikutnya.

Secara umum, model utama yang diestimasi adalah model *two-way fixed effects* dengan *firm-clustered robust standard errors*. Dalam bentuk ringkas, persamaan estimasi utamanya dapat dibaca sebagai berikut:

\begin{equation}
\mathrm{SROA}_{i,t} = 0{,}033\,\mathrm{BQS}_{i,t} + 0{,}076\,\mathrm{HHI}_{j,t} + 0{,}007\,\mathrm{SIZE}_{i,t} - 0{,}010\,\mathrm{GROWTH}_{i,t} + \alpha_i + \delta_t + \varepsilon_{i,t}
\end{equation}

Persamaan di atas menunjukkan bahwa dalam model utama, BQS dan HHI sama-sama memiliki arah koefisien positif, SIZE juga positif, sedangkan GROWTH negatif. Namun, arah koefisien saja belum cukup untuk menarik simpulan. Karena itu, pembacaan formal tetap harus didasarkan pada uji determinasi, uji t, uji F, koefisien terstandarisasi, dan *robustness checks* yang disajikan pada tabel-tabel berikut.

### **4.3.1 Hasil Estimasi Model Regresi Utama**

<!-- AUTO:BAB4_RESULTS_TABLES_START -->
**Tabel 4.9 Perbandingan Estimator Kandidat Data Panel**  

| Estimator | BQS | HHI | SIZE | GROWTH | R2 overall | R2 within | Catatan |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pooled OLS (CEM) | 0,040 | 0,001 | -0,010 | -0,043 | 0,152 | 0,025 | Tanpa efek perusahaan dan tahun |
| Random Effects (REM) | 0,035 | -0,002 | 0,001 | -0,015 | 0,102 | 0,086 | Efek acak perusahaan |
| Fixed Effects (FEM) | 0,033 | 0,051 | 0,015 | -0,014 | -7,718 | 0,099 | Efek tetap perusahaan |
| Two-way Fixed Effects | 0,033 | 0,076 | 0,007 | -0,010 | -0,640 | 0,093 | Efek tetap perusahaan dan tahun |

Tabel 4.9 menunjukkan bahwa tanda dan besaran koefisien dapat berubah ketika asumsi estimator diubah dari pooled OLS ke REM, FEM, dan two-way fixed effects. Karena itu, pemilihan estimator tidak boleh dilakukan hanya berdasarkan kemudahan komputasi, melainkan harus ditopang oleh uji spesifikasi panel yang formal.

**Tabel 4.10 Uji Pemilihan Model Data Panel**  

| Urutan | Uji | Statistik | p-value | Keputusan | Implikasi |
| --- | --- | --- | --- | --- | --- |
| 1 | Uji Chow / Restricted F: FEM vs Pooled OLS | 20,138 | <0,001 | Tolak H0 | FEM lebih tepat daripada pooled OLS |
| 2 | Breusch-Pagan LM: REM vs Pooled OLS | 3170,753 | <0,001 | Tolak H0 | REM lebih tepat daripada pooled OLS |
| 3 | Uji Hausman: FEM vs REM | 30,308 | <0,001 | Tolak H0 | FEM lebih konsisten daripada REM |
| 4 | Uji poolability two-way FE vs pooled OLS | 20,409 | <0,001 | Tolak H0 | Efek perusahaan dan/atau waktu perlu dimasukkan |

Tabel 4.10 memperlihatkan alur keputusan model panel yang lengkap. Uji Chow dan LM sama-sama menolak pooled OLS, sedangkan uji Hausman menolak REM sehingga fixed effects menjadi pilihan yang lebih konsisten. Setelah itu, pengujian tambahan atas efek waktu memastikan bahwa model akhir yang paling layak adalah two-way fixed effects.

**Tabel 4.11 Hasil Estimasi Model Regresi Utama (Two-way FE; N=2241; Perusahaan=333)**  

| Variabel | Koefisien | Std. Error (Cluster Firm) | t/z | p-value |
| --- | --- | --- | --- | --- |
| BQS | 0,033 | 0,006 | 5,347 | <0,001 |
| HHI | 0,076 | 0,052 | 1,454 | 0,146 |
| SIZE | 0,007 | 0,008 | 0,876 | 0,381 |
| GROWTH | -0,010 | 0,006 | -1,853 | 0,064 |

Model utama diestimasi dengan two-way fixed effects dan standard errors yang di-cluster pada tingkat perusahaan. Nilai R-squared model utama sebesar 0,817 dengan adjusted R-squared sebesar 0,784. Uji simultan model juga signifikan (F(4, 332) = 8,171, p-value <0,001). Dengan demikian, model utama layak digunakan sebagai dasar pengujian hipotesis parsial.

**Tabel 4.12 Koefisien Terstandarisasi (Standardized Beta)**  

| Variabel | Standardized Beta |
| --- | --- |
| BQS | 0,258 |
| HHI | 0,255 |
| SIZE | 0,130 |
| GROWTH | -0,031 |

Tabel 4.12 memperlihatkan bahwa standardized beta BQS sedikit lebih besar daripada HHI, walaupun selisihnya tipis. Artinya, secara ekonomi BQS tampak sedikit lebih dominan, tetapi dominansi tersebut tetap perlu dibaca hati-hati. Pembacaan dominansi karena itu tidak cukup hanya berdasarkan selisih angka beta, melainkan harus dipadukan dengan signifikansi dan kestabilan hasil.

**Tabel 4.13 Uji Ketahanan Model (Robustness Checks)**  

| Model | Outcome | BQS coef. | BQS p | HHI coef. | HHI p | Beta BQS | Beta HHI | N | Catatan |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Main | SROA | 0,033 | <0,001 | 0,076 | 0,146 | 0,258 | 0,255 | 2241 | Baseline: BQS utama + HHI GICS |
| Legacy BQS | SROA | 0,035 | <0,001 | 0,076 | 0,145 | 0,301 | 0,255 | 2241 | BQS alternatif empat komponen |
| Extra controls | SROA | 0,034 | <0,001 | 0,068 | 0,187 | 0,262 | 0,229 | 2241 | Tambah liquidity, cash ratio, capex intensity |
| ICB Subsector HHI | SROA | 0,033 | <0,001 | 0,090 | 0,113 | 0,258 | 0,320 | 2241 | HHI ICB Subsector |
| ICB Sector HHI | SROA | 0,033 | <0,001 | 0,071 | 0,392 | 0,258 | 0,153 | 2241 | HHI ICB Sector |
| ICB Industry HHI | SROA | 0,033 | <0,001 | -0,020 | 0,916 | 0,259 | -0,026 | 2241 | HHI ICB Industry |
| Sustained ROE | SROE | 0,051 | 0,057 | 0,521 | 0,233 | 0,059 | 0,260 | 2109 | Outcome alternatif SROE |

Tabel 4.13 menunjukkan bahwa hasil untuk BQS relatif stabil di berbagai spesifikasi, sedangkan HHI lebih sensitif terhadap penambahan kontrol dan perubahan definisi industri. Stabilitas ini memperkuat keyakinan bahwa temuan utama tentang BQS bukan hasil kebetulan dari satu model saja, sementara temuan mengenai HHI perlu dibaca lebih hati-hati karena lebih mudah berubah ketika definisi model digeser.

**Tabel 4.14 Ringkasan Keputusan Hipotesis**  

| Hipotesis | Pernyataan | Keputusan | Dasar |
| --- | --- | --- | --- |
| H1 | HHI berpengaruh positif terhadap SROA | Tidak terdukung secara statistik | Koefisien HHI pada model utama |
| H2 | BQS berpengaruh positif terhadap SROA | Terdukung | Koefisien BQS pada model utama |
| H3 | BQS lebih dominan dibanding HHI | Terdukung secara inferensial, dominansi ekonomi tipis | Perbandingan standardized beta, signifikansi, dan robustness |

Tabel 4.14 merangkum bahwa hipotesis mengenai pengaruh BQS terdukung, sedangkan hipotesis pengaruh HHI tidak terdukung secara statistik pada model utama. Hipotesis dominansi BQS dapat diterima secara relatif karena BQS lebih stabil dan signifikan, walaupun selisih besaran ekonominya terhadap HHI tidak besar. Dengan demikian, garis besar jawaban penelitian tetap lebih dekat pada penjelasan berbasis kualitas bisnis internal.
<!-- AUTO:BAB4_RESULTS_TABLES_END -->

## **4.4 Pembahasan** {#4.4-interpretasi-hasil}

Subbab ini berfokus pada interpretasi ekonomi atas hasil estimasi regresi, bukan sekadar pengulangan signifikansi statistik. Pembahasan setiap variabel akan dikaitkan dengan teori SCP dan RBV serta dibandingkan dengan penelitian terdahulu yang telah dirangkum pada BAB II. Dengan cara ini, hasil skripsi tidak berhenti pada “koefisien signifikan atau tidak”, tetapi berkembang menjadi argumen empiris yang lebih berbobot mengenai determinan profitabilitas berkelanjutan pada sampel S\&P 500.

### **4.4.1 Pengaruh Kualitas Bisnis (BQS) terhadap SROA**

Hasil estimasi regresi panel pada Tabel 4.10 menunjukkan koefisien BQS bernilai positif sebesar 0,033 dan signifikan secara statistik pada tingkat signifikansi tertinggi ($p < 0,001$, dengan nilai t-statistik sebesar 5,347). Secara ekonomi, temuan ini menunjukkan bahwa peningkatan 1 unit skor komposit kualitas bisnis (BQS) berkaitan dengan peningkatan SROA sekitar 3,3 poin persentase, dengan asumsi variabel lain konstan dan setelah mengendalikan efek tetap perusahaan serta efek tahun. Dalam batas desain observasional ini, temuan tersebut sebaiknya dibaca sebagai asosiasi yang kuat dan stabil, bukan bukti kausalitas tunggal.

Temuan ini memberikan konfirmasi empiris yang kuat terhadap tesis Resource-Based View (RBV) yang dipelopori oleh Barney (1991) dan Wernerfelt (1984). Perusahaan yang memiliki keunggulan kompetitif yang bersumber dari aset internal berharga, langka, sulit ditiru, dan terorganisasi dengan baik (VRIO) terbukti mampu mempertahankan laba di atas rata-rata industri lintas waktu. Karena BQS adalah indeks komposit, dampak positif ini mencerminkan sinergi lima elemen penting: (i) kekuatan daya tawar harga (*pricing power*) melalui margin kotor, (ii) kemampuan mengonversi penjualan menjadi arus kas bebas, (iii) ketahanan neraca dari risiko kepailitan melalui disiplin leverage, (iv) kemampuan menanggung beban bunga, serta (v) konsistensi margin dari tahun ke tahun.

Titik yang paling rawan diserang pada variabel BQS biasanya adalah apakah indeks tersebut terlalu dibuat-buat atau terlalu arbitrer. Hasil pada penelitian ini justru memberi tiga lapis pembelaan. Pertama, setiap komponen BQS memiliki dasar teori dan literatur empiris yang berbeda namun saling melengkapi, sehingga indeks tidak dibangun dari rasio yang acak. Kedua, Tabel 4.7 menunjukkan bahwa kenaikan desil BQS diikuti perbaikan yang cukup konsisten pada seluruh komponen, sehingga skor tinggi tidak sekadar ditarik oleh satu rasio saja. Ketiga, Tabel 4.13 menunjukkan bahwa hasil BQS tetap stabil ketika definisi indeks diganti ke BQS lama atau ketika kontrol tambahan dimasukkan. Dengan demikian, BQS pada penelitian ini lebih tepat dibaca sebagai indeks operasional yang terdisiplin, bukan label yang dilekatkan tanpa fondasi teori.

Jika dibandingkan dengan penelitian terdahulu pada BAB II, hasil ini sangat konsisten dengan Asness, Frazzini, dan Pedersen (2019) yang menekankan bahwa perusahaan dengan karakteristik kualitas tinggi cenderung memiliki performa yang lebih unggul dan lebih persisten. Hasil skripsi ini juga sejalan dengan Novy-Marx (2013), yang menempatkan profitabilitas operasional sebagai sinyal penting kekuatan ekonomi perusahaan, serta Sloan (1996) dan Dichev dan Tang (2009) yang menegaskan bahwa kualitas arus kas dan kestabilan laba berkaitan erat dengan daya prediksi profitabilitas masa depan. Dengan kata lain, temuan positif pada BQS bukan sekadar cocok dengan satu teori abstrak, tetapi juga mendapat dukungan dari beberapa jalur literatur empiris yang membahas kualitas perusahaan dari sudut yang berbeda-beda.

Hasil ini juga konsisten dengan Zeitun dan Tian (2014), khususnya pada gagasan bahwa disiplin struktur keuangan dan kualitas keputusan internal perusahaan berperan penting dalam menopang kinerja. Dalam konteks skripsi ini, komponen leverage discipline dan *interest coverage* membuat BQS tidak hanya membaca perusahaan yang “tumbuh”, tetapi perusahaan yang tumbuh dengan fondasi neraca yang lebih sehat. Ini penting karena pada perusahaan besar Amerika Serikat, profitabilitas berkelanjutan tidak cukup ditopang oleh skala atau momentum pasar saja, melainkan oleh kombinasi kualitas operasi, kas, dan ketahanan finansial.

Konsistensi pengaruh positif BQS ini diperkuat oleh analisis kelompok pada Tabel 4.5, di mana kelompok perusahaan dengan BQS terendah (D1) memiliki rata-rata SROA sebesar 0,048, sedangkan kelompok BQS tertinggi (D10) memiliki rata-rata SROA sebesar 0,112. Tabel 4.13 juga menunjukkan bahwa BQS tetap positif dan signifikan ketika memakai BQS lama, menambahkan kontrol tambahan, maupun mengganti taksonomi HHI. Dari sisi besaran dampak ekonomi relatif, Tabel 4.12 menunjukkan *standardized beta* BQS sebesar 0,258. Karena itu, temuan BQS dapat dikatakan bukan hanya signifikan secara statistik, tetapi juga stabil secara operasional dan cukup kuat secara ekonomi.

### **4.4.2 Pengaruh Struktur Industri (HHI) terhadap SROA**

Koefisien HHI pada Tabel 4.10 terestimasi positif sebesar 0,076, tetapi tidak signifikan secara statistik pada tingkat signifikansi 5% ($p = 0,146$, dengan nilai t-statistik sebesar 1,454). Arah positif koefisien masih sejalan dengan intuisi SCP bahwa konsentrasi industri dapat berkaitan dengan kemampuan mempertahankan profitabilitas, tetapi bukti statistik dalam sampel ini belum cukup kuat untuk menyatakan bahwa HHI berasosiasi secara konsisten dengan SROA. Dengan kata lain, SCP memperoleh dukungan arah, namun belum memperoleh dukungan inferensial yang tegas.

Hasil ini memberi dukungan arah, tetapi bukan dukungan inferensial yang kuat, bagi paradigma Structure-Conduct-Performance (SCP) klasik (Bain, 1956; Mason, 1939). Jika dibandingkan dengan penelitian Pervan, Pervan, dan Curak (2019), hasil skripsi ini tampak lebih lemah karena mereka menemukan hubungan HHI yang positif dan signifikan terhadap profitabilitas. Perbedaan ini masuk akal karena konteks sampelnya berbeda: penelitian mereka berada pada industri manufaktur Kroasia, sedangkan skripsi ini menggunakan perusahaan besar lintas-sektor dalam S\&P 500 yang lebih heterogen dan lebih kaya faktor spesifik perusahaan.

Di sisi lain, hasil ini justru lebih dekat dengan sintesis McGahan dan Porter (1997) serta Goddard dkk. (2011), yang menekankan bahwa efek spesifik perusahaan sering kali lebih besar daripada efek industri secara agregat. Artinya, tidak signifikannya HHI pada model utama bukan berarti struktur industri tidak relevan sama sekali, melainkan menunjukkan bahwa pada pasar besar dan matang seperti S\&P 500, variasi profitabilitas berkelanjutan tampaknya lebih kuat dijelaskan oleh “bagaimana perusahaan bersaing” daripada “di industri mana perusahaan itu berada”. Dari sudut ini, hasil skripsi juga sejalan dengan kritik Demsetz bahwa konsentrasi tidak selalu identik dengan rente pasar; bisa saja perusahaan yang unggul secara internal yang justru mendorong konsentrasi.

Terdapat dua penjelasan tambahan yang cukup penting. Pertama, HHI dalam penelitian ini adalah *within-sample HHI*, sehingga tidak menangkap keseluruhan kompetisi dari perusahaan privat, perusahaan publik di luar S\&P 500, maupun perubahan komposisi anggota indeks secara historis. Kedua, sensitivitas HHI terhadap taksonomi industri pada Tabel 4.8 dan Tabel 4.13 menunjukkan bahwa simpulan mengenai struktur industri memang lebih mudah bergeser ketika batas pasar diubah. Dari sisi kontribusi ekonomi relatif, HHI memiliki *standardized beta* sebesar 0,255, sangat dekat dengan BQS, tetapi tidak signifikan secara statistik dan tidak stabil pada seluruh taksonomi HHI. Karena itu, posisi HHI dalam skripsi ini lebih tepat dibaca sebagai faktor yang mungkin relevan, tetapi belum cukup kuat untuk menjadi penjelas utama.

### **4.4.3 Pengaruh Ukuran Perusahaan (SIZE) terhadap SROA**

Hasil estimasi pada Tabel 4.10 menunjukkan koefisien SIZE bernilai positif sebesar 0,007 tetapi tidak signifikan secara statistik pada tingkat signifikansi 5% maupun 10% ($p = 0,381$, dengan t-statistik 0,876). Ketidaksignifikanan koefisien SIZE menunjukkan bahwa peningkatan skala aset perusahaan secara temporal (*within-firm*) tidak secara konsisten meningkatkan kemampuan mempertahankan profitabilitas berkelanjutan, setelah heterogenitas tetap yang tidak teramati diserap oleh *firm fixed effects*. Dengan demikian, ukuran besar saja tidak cukup untuk menjelaskan profitabilitas yang bertahan.

Secara teoretis, peningkatan skala aset memang berpotensi menghasilkan efisiensi melalui *economies of scale* dan meningkatkan daya tawar di pasar keuangan. Namun, temuan ini mengindikasikan bahwa bagi perusahaan S\&P 500 yang sudah berada pada skala aset sangat besar, manfaat dari perluasan aset cenderung diimbangi oleh meningkatnya biaya birokrasi, inefisiensi koordinasi internal, dan potensi *agency problems* (Penrose, 1959). Oleh karena itu, skala aset saja tidak cukup untuk menjadi penjelas tambahan yang andal dalam menjelaskan profitabilitas berkelanjutan di luar kontribusi yang telah dicakup oleh kualitas bisnis internal (BQS) dan konsentrasi pasar (HHI).

Jika dibandingkan dengan Hirsch dkk. (2021), hasil ini juga menarik. Mereka menemukan bahwa ukuran perusahaan dapat membantu menahan laju *mean reversion* laba pada konteks tertentu. Akan tetapi, sampel skripsi ini terdiri dari perusahaan yang sejak awal sudah berada pada lapisan atas kapitalisasi dan aset di pasar Amerika Serikat. Karena itu, variasi SIZE yang tersisa di dalam sampel mungkin tidak lagi cukup informatif untuk menjadi pembeda utama. Dengan kata lain, ukuran mungkin penting ketika membedakan perusahaan kecil dan besar, tetapi menjadi kurang menentukan ketika hampir seluruh sampel sudah berada pada kategori perusahaan sangat besar.

### **4.4.4 Pengaruh Pertumbuhan Penjualan (GROWTH) terhadap SROA**

Koefisien GROWTH pada Tabel 4.10 menunjukkan nilai negatif sebesar -0,010 dan signifikan secara marginal pada tingkat signifikansi 10% ($p = 0,064$, dengan t-statistik sebesar -1,853). Temuan bahwa pertumbuhan penjualan berhubungan negatif secara marginal dengan profitabilitas berkelanjutan menunjukkan bahwa ekspansi pendapatan tidak selalu identik dengan peningkatan kualitas laba atau efisiensi aset. Pada perusahaan besar, pertumbuhan dapat datang bersama tekanan harga, akuisisi, atau investasi yang belum langsung menaikkan laba bersih relatif terhadap aset.

Dalam teori keuangan dan strategi korporasi, fenomena ini dapat dijelaskan melalui teori *diseconomies of growth* atau *growth traps* (Penrose, 1959). Pada pasar matang seperti perusahaan besar Amerika Serikat, sebagian pertumbuhan penjualan dapat berasal dari ekspansi agresif, tekanan harga, akuisisi, atau belanja modal yang belum langsung meningkatkan laba bersih relatif terhadap aset. Akibatnya, pertumbuhan yang tidak disertai kualitas bisnis yang kuat dapat menekan pengembalian aset rata-rata bergerak (SROA) dalam horizon jangka menengah.

Temuan ini juga membantu membedakan antara “bertumbuh” dan “bertumbuh dengan berkualitas”. Dalam konteks skripsi ini, BQS menangkap dimensi kualitas pertumbuhan secara lebih halus, sedangkan GROWTH hanya membaca laju perubahan penjualan. Karena itu, wajar jika variabel pertumbuhan penjualan sendiri tidak menjadi sumber utama profitabilitas berkelanjutan. Secara tidak langsung, hasil ini memperkuat argumen bahwa pasar menghargai pertumbuhan yang sehat dan tertopang fondasi internal, bukan sekadar ekspansi nominal pendapatan.

### **4.4.5 Ringkasan Dominansi dan Jawaban Hipotesis Penelitian**

Berdasarkan pengujian empiris multivariat menggunakan model *two-way fixed effects*, ringkasan jawaban atas tiga hipotesis utama penelitian adalah sebagai berikut:

1. Hipotesis 1 (H1) tidak terdukung secara statistik: Herfindahl-Hirschman Index (HHI) memiliki koefisien positif, tetapi tidak signifikan secara statistik terhadap Sustained ROA (SROA) ($\beta = 0,076$, $p = 0,146$). Dengan demikian, arah hasil sesuai ekspektasi SCP, tetapi bukti empiris belum cukup untuk menerima H1 pada tingkat signifikansi konvensional.
2. Hipotesis 2 (H2) terdukung: Business Quality Score (BQS) berpengaruh positif dan signifikan secara statistik terhadap Sustained ROA (SROA) ($\beta = 0,033$, $p < 0,001$), memberikan konfirmasi kuat atas tesis keunggulan kompetitif berbasis kapabilitas internal (paradigma RBV).
3. Hipotesis 3 (H3) hanya terdukung secara relatif: Berdasarkan perbandingan dampak ekonomi relatif pada Tabel 4.12, koefisien terstandarisasi BQS (0,258) sedikit lebih besar dibandingkan HHI (0,255). Selisihnya sangat tipis, sehingga hasil ini lebih tepat dibaca sebagai keunggulan relatif yang nyaris seimbang, bukan dominansi yang tegas. Argumen untuk BQS lebih kuat karena BQS signifikan dan lebih stabil pada *robustness checks*, sedangkan HHI tidak signifikan dan lebih sensitif terhadap definisi industri.

Jika disintesis dengan penelitian terdahulu, hasil skripsi ini lebih dekat pada kubu literatur yang menekankan dominasi faktor spesifik perusahaan dibanding faktor industri. Temuan ini paling jelas sejalan dengan McGahan dan Porter (1997) serta Goddard dkk. (2011), yang sama-sama menunjukkan bahwa efek perusahaan sering kali lebih dominan daripada efek industri agregat. Pada saat yang sama, arah koefisien HHI yang tetap positif membuat hasil skripsi ini tidak sepenuhnya menolak SCP; yang ditolak adalah klaim bahwa struktur industri sendirian sudah cukup kuat menjelaskan profitabilitas berkelanjutan pada konteks S\&P 500.

Sebagai kesimpulan akhir BAB IV, hasil empiris menunjukkan bahwa kapabilitas internal yang ditangkap oleh BQS (RBV) memiliki dukungan empiris paling kuat dalam menjelaskan profitabilitas berkelanjutan pada sampel ini. Struktur industri tetap memiliki arah koefisien positif, tetapi perannya tidak cukup kuat secara statistik dalam spesifikasi utama dan hasilnya lebih sensitif terhadap taksonomi industri. Oleh karena itu, pesan paling defensibel dari Bab IV adalah bahwa BQS merupakan prediktor yang lebih konsisten daripada HHI dalam kerangka data yang digunakan, bukan bahwa BQS secara universal mengalahkan semua penjelasan industri. Formulasi seperti ini lebih hati-hati secara akademik sekaligus lebih sesuai dengan literatur ekonomi industri dan keuangan perusahaan yang memang sering menunjukkan hasil campuran.

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

# **Daftar Pustaka** {-}

Asness, C. S., Frazzini, A., & Pedersen, L. H. (2019). Quality minus junk. Review of Accounting Studies, 24(1), 34-112.

Bain, J. S. (1951). Relation of profit rate to industry concentration: American manufacturing, 1936–1940. The Quarterly Journal of Economics, 65(3), 293-324.

Bain, J. S. (1956). Barriers to new competition. Harvard University Press.

Barney, J. B. (1991). Firm resources and sustained competitive advantage. Journal of Management, 17(1), 99-120.

Bhojraj, S., Lee, C. M. C., & Oler, D. (2003). Does the method of classification matter in the empirical measurement of industry structure? Journal of Accounting Research, 41(3), 441-475.

Bivens, J. (2022, April 21). Corporate profits have contributed disproportionately to inflation: How should policymakers respond? Economic Policy Institute. https://www.epi.org/blog/corporate-profits-have-contributed-disproportionately-to-inflation-how-should-policymakers-respond/

Bloomberg News. (2025). Zombie companies surge to highest level since 2022\. Bloomberg Terminal.

Board of Governors of the Federal Reserve System. (2024). Federal funds effective rate [Data set]. FRED, Federal Reserve Bank of St. Louis. Retrieved May 22, 2026, from https://fred.stlouisfed.org/series/FEDFUNDS

Demsetz, H. (1973). Industry structure, market rivalry, and public policy. Journal of Law and Economics, 16(1), 1–9.

Dichev, I. D., & Tang, V. W. (2009). Earnings volatility and earnings predictability. Journal of Accounting and Economics, 47(1-2), 160-181.

Goddard, J., Liu, H., Molyneux, P., & Wilson, J. O. (2011). The persistence of profit. International Journal of Industrial Organization, 29(4), 396-405.

Hirsch, S., Schiefer, J., Gschwandtner, A., & Hartmann, M. (2021). Profitability and profit persistence in EU food retailing. Agricultural Economics, 52(1), 15-28.

Mason, E. S. (1939). Price and production policies of large-scale enterprise. The American Economic Review, 29(1), 61-74.

McGahan, A. M., & Porter, M. E. (1997). How much does industry matter, really? Strategic Management Journal, 18(S1), 15-30.

Mueller, D. C. (1977). The persistence of profits above the norm. Economica, 44(176), 369-380.

Mueller, D. C. (1986). Profits in the long run. Cambridge University Press.

Novy-Marx, R. (2013). The other side of value: The gross profitability premium. Journal of Financial Economics, 108(1), 1-28.

Penrose, E. T. (1959). The theory of the growth of the firm. John Wiley & Sons.

Pervan, M., Pervan, I., & Curak, M. (2019). Determinants of firm profitability in the Croatian manufacturing industry: Evidence from dynamic panel analysis. Economic Research-Ekonomska Istrazivanja, 32(1), 968-981.

Petersen, M. A. (2009). Estimating standard errors in finance panel data sets: Comparing approaches. Review of Financial Studies, 22(1), 435-480.

S\&P Global Market Intelligence. (2025, January). U.S. corporate bankruptcies soar to 14-year high in 2024; 61 filings in December. https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/1/us-corporate-bankruptcies-soar-to-14-year-high-in-2024-61-filings-in-december-87008718

Sloan, R. G. (1996). Do stock prices fully reflect information in accruals and cash flows about future earnings? The Accounting Review, 71(3), 289-315.

Stephan, A., Talavera, O., & Tsapin, A. (2008). Persistence and determinants of firm profit in emerging markets. Applied Economics Quarterly, 54(3), 231-253.

Wernerfelt, B. (1984). A resource-based view of the firm. Strategic Management Journal, 5(2), 171-180.

Zeitun, R., & Tian, G. G. (2014). Capital structure and corporate performance: Evidence from Jordan. Australasian Accounting, Business and Finance Journal, 8(4), 63-88.

[image1]: <data:image/png;base64,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>
