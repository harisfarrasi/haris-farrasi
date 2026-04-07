import TabbedShell from '@/components/tabbed-shell';
import { getWikiContent } from '@/lib/wiki';

export default function Home() {
  const { html } = getWikiContent('about');

  return (
    <TabbedShell active="home">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </TabbedShell>
  );
}
