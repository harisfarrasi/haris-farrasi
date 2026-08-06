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
  const [activeTab, setActiveTab] = useState<TabKey>('artifact');

  const tabs: { key: TabKey; label: string; items: ContentItem[] }[] = [
    { key: 'artifact', label: 'Artifact', items: artifactItems },
    { key: 'thought', label: 'Thought', items: thoughtItems },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab)!;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <img
          src="/profile.png"
          alt="Haris Farrasi"
          className="h-12 w-12 rounded-full object-cover grayscale"
        />
        <div>
          <h1 className="text-xl font-semibold leading-tight text-foreground">
            Haris Farrasi
          </h1>
          <p className="mt-0.5 text-sm font-medium text-muted-foreground">
            Economics, Tech, and Education
          </p>
        </div>
      </header>

      <h2 className="home-hero-line">
        <span className="home-icon-chip home-icon-platform" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 6.5 12 2l8 4.5v9L12 20l-8-4.5v-9Zm8-2.2L6.4 7.4 12 10.5l5.6-3.1L12 4.3Zm-6 4.8v5.2l5 2.8v-5.2L6 9.1Zm12 0-5 2.8v5.2l5-2.8V9.1Z" />
          </svg>
        </span>
        {' '}
        Build platforms,{' '}
        <span className="home-icon-chip home-icon-academy" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 6.5 12 3l9 3.5-9 3.5-9-3.5Zm4 3.2 5 2 5-2v5.1c0 1.2-2.3 3.2-5 3.2s-5-2-5-3.2V9.7Zm13 1.1v5.7h-2v-5l2-.7Z" />
          </svg>
        </span>
        {' '}
        Teach academy, and{' '}
        <span className="home-icon-chip home-icon-media" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 5h10a2 2 0 0 1 2 2v1.7l3-1.7v10l-3-1.7V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3.5 4.5v5l4-2.5-4-2.5Z" />
          </svg>
        </span>
        {' '}
        Speak at media.
      </h2>

      {/* Intro Biography */}
      <article className="wiki-content home-intro" dangerouslySetInnerHTML={{ __html: aboutHtml }} />

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
