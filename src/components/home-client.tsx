'use client';

import { useState } from 'react';

type TabKey = 'beliefs' | 'people' | 'read';

type HomeClientProps = {
  aboutHtml: string;
  beliefsHtml: string;
  peopleHtml: string;
  readHtml: string;
  defaultTab?: TabKey;
};

export default function HomeClient({
  aboutHtml,
  beliefsHtml,
  peopleHtml,
  readHtml,
  defaultTab = 'beliefs',
}: HomeClientProps) {
  const [activeTab, setActiveTab] = useState<TabKey>(defaultTab);

  const tabs: { key: TabKey; label: string; html: string }[] = [
    { key: 'beliefs', label: 'Beliefs', html: beliefsHtml },
    { key: 'people', label: 'People', html: peopleHtml },
    { key: 'read', label: 'Read', html: readHtml },
  ];

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

      {/* Tab Content Area */}
      <div className="mt-2 animate-in fade-in duration-300">
        <article
          className="wiki-content"
          dangerouslySetInnerHTML={{ __html: tabs.find((t) => t.key === activeTab)?.html || '' }}
        />
      </div>
    </div>
  );
}
