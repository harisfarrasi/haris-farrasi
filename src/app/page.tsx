'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ABOUT_PARAGRAPHS } from '@/lib/home-data';

const SECTIONS = [
  {
    title: 'About',
    href: '/about',
    description: 'Thesis, mission, dan arah besar yang sedang dikerjakan.',
  },
  {
    title: 'Beliefs',
    href: '/beliefs',
    description: 'Prinsip dan nilai yang jadi kompas kerja.',
  },
  {
    title: 'People',
    href: '/people',
    description: 'Tokoh dan pemikir yang membentuk cara pikir.',
  },
  {
    title: 'Read',
    href: '/read',
    description: 'Koleksi bacaan yang paling berpengaruh.',
  },
  {
    title: 'Bio',
    href: '/bio',
    description: 'Perjalanan pribadi dan asal-usul obsesi.',
  },
  {
    title: 'Works',
    href: '/works',
    description: 'Rangkuman karya: skripsi, essay, dan riset.',
  },
];

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(formattedTime);
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <p>
      it's <span>{time || '...'}</span> for Haris in 🇮🇩
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between max-w-3xl mx-auto px-10 sm:px-12 py-12 sm:py-24">
      <main className="flex-grow space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Second Brain</p>
          <h1 className="text-3xl font-semibold text-foreground">Haris Farrasi</h1>
          <p className="text-base text-muted-foreground">
            Home untuk catatan, prinsip, manusia yang menginspirasi, dan karya-karya yang sedang dibangun.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">About</h2>
          <p className="text-base text-foreground/90">{ABOUT_PARAGRAPHS[0]}</p>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            Lihat versi lengkap →
          </Link>
        </section>

        <section className="grid gap-4">
          {SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-border/60 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-border hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <span className="text-sm text-muted-foreground">→</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="w-full mt-12">
        <div className="flex justify-between items-center text-muted-foreground text-sm">
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
