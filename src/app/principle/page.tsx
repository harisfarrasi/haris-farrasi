import TabbedShell from '@/components/tabbed-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Principle — Haris Farrasi',
  description: 'Beliefs, people, and reading list in a single place.',
};

export default function PrinciplePage() {
  const { html } = getWikiContent('principle');

  return (
    <TabbedShell active="principle">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </TabbedShell>
  );
}
