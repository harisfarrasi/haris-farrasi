import fs from 'fs';
import path from 'path';

import TabbedShell from '@/components/tabbed-shell';
import { convertMarkdown } from '@/lib/markdown';

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

export default function SkripsiPage() {
  const markdown = loadMarkdown();
  const { html } = convertMarkdown(markdown);

  return (
    <TabbedShell active="projects">
      <div className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project</p>
          <h1 className="text-2xl font-semibold text-foreground">Skripsi</h1>
          <p className="text-base text-muted-foreground">
            Determinan Profitabilitas Berkelanjutan: Analisis Struktur Industri dan Kualitas Bisnis
            pada Perusahaan Konstituen S&P 500 (2015–2024).
          </p>
        </header>
        <article className="wiki-content thesis-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </TabbedShell>
  );
}
