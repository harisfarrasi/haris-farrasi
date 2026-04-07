import SectionShell from '@/components/section-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'About — Haris Farrasi',
  description:
    'Thesis, mission, dan arah besar yang sedang dibangun melalui Aksa dan karya lainnya.',
};

export default function AboutPage() {
  const { html } = getWikiContent('about');

  return (
    <SectionShell
      title="About"
      description="Thesis, mission, dan arah besar yang sedang dibangun melalui Aksa dan karya lainnya."
    >
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}
