import TabbedShell from '@/components/tabbed-shell';
import HomePageClient from '@/components/home-page-client';
import { getWikiContent } from '@/lib/wiki';
import { getAllItems } from '@/lib/content';

export default function Home() {
  const { html: aboutHtml } = getWikiContent('about');
  const thoughtItems = getAllItems('thought');
  const artifactItems = getAllItems('artifact');

  return (
    <TabbedShell>
      <HomePageClient
        aboutHtml={aboutHtml}
        thoughtItems={thoughtItems}
        artifactItems={artifactItems}
      />
    </TabbedShell>
  );
}
