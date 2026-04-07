import SectionShell from '@/components/section-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Bio — Haris Farrasi',
  description: 'Perjalanan pribadi, obsesi, dan akar dari cara berpikir.',
};

export default function BioPage() {
  const { html } = getWikiContent('bio');

  return (
    <SectionShell
      title="Bio"
      description="Perjalanan pribadi, obsesi, dan akar dari cara berpikir."
    >
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}
