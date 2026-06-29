import TabbedShell from '@/components/tabbed-shell';
import HomeClient from '@/components/home-client';
import { getWikiContent } from '@/lib/wiki';

export const metadata = {
  title: 'People — Haris Farrasi',
};

export default function PeoplePage() {
  const { html: aboutHtml } = getWikiContent('about');
  const { html: beliefsHtml } = getWikiContent('beliefs');
  const { html: peopleHtml } = getWikiContent('people');
  const { html: readHtml } = getWikiContent('read');

  return (
    <TabbedShell>
      <HomeClient
        aboutHtml={aboutHtml}
        beliefsHtml={beliefsHtml}
        peopleHtml={peopleHtml}
        readHtml={readHtml}
        defaultTab="people"
      />
    </TabbedShell>
  );
}
