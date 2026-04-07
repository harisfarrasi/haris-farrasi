import SectionShell from '@/components/section-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'People — Haris Farrasi',
  description: 'Tokoh dan pemikir yang membentuk cara pikir dan arah belajar.',
};

export default function PeoplePage() {
  const { html } = getWikiContent('people');

  return (
    <SectionShell
      title="People"
      description="Tokoh dan pemikir yang membentuk cara pikir dan arah belajar."
    >
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}
