import TabbedShell from '@/components/tabbed-shell';

export const metadata = {
  title: 'Skripsi — Haris Farrasi',
  description:
    'Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 (2015–2024).',
};

export const dynamic = 'force-static';

export default function SkripsiPage() {
  return (
    <TabbedShell active="projects">
      <div className="w-full h-[calc(100vh-10rem)]">
        <iframe 
          src="/documents/skripsi.pdf#toolbar=0&navpanes=0" 
          className="w-full h-full border-none rounded-sm shadow-inner"
          title="Skripsi PDF Preview"
        />
      </div>
    </TabbedShell>
  );
}
