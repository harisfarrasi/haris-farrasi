import TabbedShell from '@/components/tabbed-shell';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'Beliefs — Haris Farrasi',
};

export default function BeliefsPage() {
  const { html } = getWikiContent('beliefs');

  return (
    <TabbedShell active="beliefs">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </TabbedShell>
  );
}
