import SectionShell from '@/components/section-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Beliefs — Haris Farrasi',
  description: 'Prinsip dan nilai yang menjadi kompas kerja dan pengambilan keputusan.',
};

export default function BeliefsPage() {
  const { html } = getWikiContent('beliefs');

  return (
    <SectionShell
      title="Beliefs"
      description="Prinsip dan nilai yang menjadi kompas kerja dan pengambilan keputusan."
    >
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}
