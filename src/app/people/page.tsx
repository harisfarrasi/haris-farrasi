import TabbedShell from '@/components/tabbed-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'People — Haris Farrasi',
};

export default function PeoplePage() {
  const { html } = getWikiContent('people');

  return (
    <TabbedShell active="people">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </TabbedShell>
  );
}
