import Link from 'next/link';
import SectionShell from '@/components/section-shell';

const WORKS = [
  {
    id: 'skripsi',
    title: 'Skripsi',
    href: '/works/skripsi',
    status: 'Published',
    description:
      'Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 (2015–2024).',
  },
  {
    id: 'essays',
    title: 'Essays',
    href: '/works/essays',
    status: 'In Progress',
    description: 'Kumpulan essay, refleksi, dan ide yang sedang ditulis.',
  },
];

export const metadata = {
  title: 'Works — Haris Farrasi',
  description: 'Rangkuman karya: skripsi, essay, dan riset lain.',
};

export default function WorksPage() {
  return (
    <SectionShell
      title="Works"
      description="Satu induk untuk semua karya: skripsi, essay, dan riset lain."
    >
      <div className="space-y-4">
        {WORKS.map((work) => (
          <Link
            key={work.id}
            href={work.href}
            className="block rounded-2xl border border-border/60 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-border hover:bg-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">{work.title}</h2>
                <p className="text-sm text-muted-foreground">{work.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {work.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
