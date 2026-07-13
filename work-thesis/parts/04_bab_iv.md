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

