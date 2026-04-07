import Link from 'next/link';
import Clock from '@/components/clock';

type TabKey = 'home' | 'principle' | 'bio' | 'projects';

type TabItem = {
  key: TabKey;
  label: string;
  href: string;
};

const TABS: TabItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'principle', label: 'Principle', href: '/principle' },
  { key: 'bio', label: 'Bio', href: '/bio' },
  { key: 'projects', label: 'Projects', href: '/projects' },
];

type TabbedShellProps = {
  active: TabKey;
  children: React.ReactNode;
};

export default function TabbedShell({ active, children }: TabbedShellProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-10 py-12 sm:px-12 sm:py-24 md:flex-row md:gap-16">
          <aside className="w-full md:w-36 md:shrink-0 md:sticky md:top-12 self-start">
            <nav className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:flex-col md:space-y-1">
              {TABS.map((tab) => {
                const isActive = tab.key === active;
                return (
                  <Link
                    key={tab.key}
                    href={tab.href}
                    className={`inline-flex items-center justify-start text-base ${
                      isActive ? 'font-bold text-black' : 'text-muted-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {tab.label}
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
