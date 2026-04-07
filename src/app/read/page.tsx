import SectionShell from '@/components/section-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Read — Haris Farrasi',
  description: 'Koleksi artikel, essay, dan buku yang paling berpengaruh.',
};

export default function ReadPage() {
  const { html } = getWikiContent('read');

  return (
    <SectionShell
      title="Read"
      description="Koleksi artikel, essay, dan buku yang paling berpengaruh."
    >
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}
