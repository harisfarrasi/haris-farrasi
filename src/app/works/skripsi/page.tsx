import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import { convertMarkdown } from '@/lib/markdown';
import SkripsiChart, { type ChartData } from './SkripsiChart';

export const metadata = {
  title: 'Skripsi — Haris Farrasi',
  description:
    'Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis pada Perusahaan Konstituen S&P 500 (2015–2024).',
};

export const dynamic = 'force-static';

function loadMarkdown(): string {
  const mdPath = path.join(process.cwd(), 'content', 'thesis', 'skripsi.md');
  return fs.readFileSync(mdPath, 'utf-8');
}

function loadChartData(): ChartData {
  const jsonPath = path.join(process.cwd(), 'content', 'thesis', 'chart-data.json');
  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const parsed = JSON.parse(raw) as ChartData;
  return {
    title: parsed.title ?? 'Ringkasan Koefisien',
    labels: parsed.labels ?? [],
    values: parsed.values ?? [],
    notes: parsed.notes ?? 'Angka placeholder. Ganti dengan hasil regresi aktual.',
  };
}

export default function SkripsiPage() {
  const markdown = loadMarkdown();
  const { html, toc } = convertMarkdown(markdown);
  const chartData = loadChartData();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#f8f4ef_55%,_#efe8dd_100%)] text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
        <aside className="order-2 space-y-4 lg:order-1">
          <div className="rounded-2xl border border-border/60 bg-white/80 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Daftar Isi</p>
            <nav className="mt-4 max-h-[70vh] space-y-2 overflow-auto pr-2 text-sm">
              {toc.map((item) => {
                const indent =
                  item.level === 1
                    ? 'pl-0 text-foreground'
                    : item.level === 2
                    ? 'pl-4 text-muted-foreground'
                    : 'pl-6 text-muted-foreground';

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block leading-snug transition hover:text-foreground ${indent}`}
                  >
                    {item.text}
                  </a>
                );
              })}
            </nav>
          </div>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            ← Kembali ke Works
          </Link>
        </aside>

        <main className="order-1 space-y-8 lg:order-2">
          <SkripsiChart data={chartData} />
          <article
            className="skripsi-content rounded-3xl border border-border/60 bg-white/90 p-8 shadow-[0_22px_60px_-32px_rgba(15,23,42,0.45)]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </div>
    </div>
  );
}
