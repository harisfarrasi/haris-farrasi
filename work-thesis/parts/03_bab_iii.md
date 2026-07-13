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

