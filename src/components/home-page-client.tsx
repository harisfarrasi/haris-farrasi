'use client';

import { useState } from 'react';
import { ContentItem } from '@/lib/content-types';
import ContentCard from '@/components/content-card';

type TabKey = 'thought' | 'artifact';

type HomePageClientProps = {
  aboutHtml: string;
  thoughtItems: ContentItem[];
  artifactItems: ContentItem[];
};

export default function HomePageClient({
  aboutHtml,
  thoughtItems,
  artifactItems,
}: HomePageClientProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('thought');

  const tabs: { key: TabKey; label: string; items: ContentItem[] }[] = [
    { key: 'thought', label: 'Thought', items: thoughtItems },
    { key: 'artifact', label: 'Artifact', items: artifactItems },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab)!;

  return (
    <div className="flex flex-col gap-6">
      {/* Intro Biography */}
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: aboutHtml }} />

      {/* Horizontal Tabs bar */}
      <div className="border-b border-border/40">
        <nav className="flex gap-6 -mb-[1px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2.5 text-base font-semibold transition-all border-b-2 ${
                  isActive
                    ? 'border-black text-black dark:border-white dark:text-white'
                    : 'border-transparent text-muted-foreground hover:text-black dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content Grid */}
      <div className="mt-2 animate-in fade-in duration-300">
        <div className="grid grid-cols-2 gap-2">
          {currentTab.items.map((item) => (
            <ContentCard
              key={item.slug}
              item={item}
              href={`/${currentTab.key}/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
