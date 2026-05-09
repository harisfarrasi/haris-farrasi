'use client';

import { useState } from 'react';
import Link from 'next/link';
import Clock from '@/components/clock';

type TabKey = 'home' | 'beliefs' | 'people' | 'read';

type NavItem = 
  | { type: 'link'; key: TabKey; label: string; href: string }
  | { type: 'label'; label: string };

const NAV_ITEMS: NavItem[] = [
  { type: 'link', key: 'home', label: 'About', href: '/' },
  { type: 'label', label: 'Worldview' },
  { type: 'link', key: 'beliefs', label: 'Beliefs', href: '/beliefs' },
  { type: 'link', key: 'people', label: 'People', href: '/people' },
  { type: 'link', key: 'read', label: 'Read', href: '/read' },
];

type TabbedShellProps = {
  active: TabKey;
  children: React.ReactNode;
};

export default function TabbedShell({ active, children }: TabbedShellProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-10 py-12 sm:px-12 sm:py-24 md:flex-row md:gap-16">
          <aside className="w-full md:w-36 md:shrink-0 md:sticky md:top-12 self-start">
            <nav className="flex flex-row items-center overflow-x-auto scrollbar-hide gap-6 md:flex-col md:items-start md:gap-4 md:space-y-0 border-b border-border/40 md:border-none pb-4 md:pb-0">
              {NAV_ITEMS.map((item, index) => {
                if (item.type === 'label') {
                  return (
                    <div key={index} className="relative md:w-full w-auto flex items-center shrink-0">
                      {/* Desktop Separator Line */}
                      <div className="absolute inset-0 hidden md:flex items-center" aria-hidden="true">
                        <div className="w-full h-[1px] bg-foreground/20"></div>
                      </div>
                      
                      <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="relative z-10 text-base text-muted-foreground md:cursor-default whitespace-nowrap flex items-center gap-2 bg-background md:pr-4"
                      >
                        {item.label}
                        <span className="text-[10px] md:hidden opacity-50">{isExpanded ? '<' : '>'}</span>
                      </button>
                    </div>
                  );
                }

                const isActive = item.key === active;
                
                // On mobile, hide worldview items if not expanded
                // Except if the item is currently active
                const isWorldviewItem = ['beliefs', 'people', 'read'].includes(item.key);
                const shouldHideOnMobile = isWorldviewItem && !isExpanded && !isActive;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`inline-flex items-center justify-start text-base whitespace-nowrap ${
                      isActive ? 'font-bold text-black' : 'text-muted-foreground hover:text-black transition-colors'
                    } ${shouldHideOnMobile ? 'hidden md:inline-flex' : 'inline-flex'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </main>

      <footer className="w-full pb-12">
        <div className="mx-auto flex w-full max-w-4xl justify-between px-10 sm:px-12 text-muted-foreground text-sm">
          <Clock />
          <div className="flex items-center space-x-4">
            <Link
              href="https://x.com/harisfarrasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-black transition-colors"
            >
              X
            </Link>
            <Link
              href="mailto:harisfarrasi@gmail.com"
              className="text-muted-foreground hover:text-black transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
