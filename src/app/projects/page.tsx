import Link from 'next/link';
import TabbedShell from '@/components/tabbed-shell';

const WORKS = [
  {
    id: 'aksa',
    title: 'Aksa',
    href: 'https://joinaksa.com',
    description: 'social upskilling network with creator-led communities.',
  },
  {
    id: 'skripsi',
    title: 'Thesis',
    href: '/projects/skripsi',
    description:
      'determinants of sustainable profitability: industry structure and business quality in S&P 500 constituents (2015–2024).',
  },
];

export const metadata = {
  title: 'Projects — Haris Farrasi',
  description: 'A concise list of projects and published work.',
};

export default function WorksPage() {
  return (
    <TabbedShell active="projects">
      <div className="space-y-6">
        <p className="text-base text-foreground/90">
          A concise list of the projects and published work that summarize what I’m building,
          researching, and learning right now.
        </p>
        <ol className="space-y-2 text-base list-decimal list-outside pl-5">
          {WORKS.map((work) => (
            <li key={work.id}>
              {work.href ? (
                <Link
                  href={work.href}
                  className="group"
                  target={work.href.startsWith('http') ? '_blank' : undefined}
                  rel={work.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="font-semibold group-hover:font-bold">{work.title}</span>
                  {`: ${work.description}`}
                </Link>
              ) : (
                <span className="text-foreground">
                  <span className="font-semibold">{work.title}</span>: {work.description}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </TabbedShell>
  );
}
