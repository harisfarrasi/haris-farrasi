import TabbedShell from '@/components/tabbed-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Read — Haris Farrasi',
};

export default function ReadPage() {
  const { html } = getWikiContent('read');

  return (
    <TabbedShell active="read">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </TabbedShell>
  );
}
