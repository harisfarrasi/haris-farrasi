import Link from 'next/link';
import { PEOPLE_LINKS } from '@/lib/data';

export default function People() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold">People</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Some internet people who (mostly) write about a wide variety of topics and who I regularly learn from. (I might try making lists of specialists in different fields at some point.)
          </p>
        </header>

        <section>
          <ul className="list-disc list-inside text-muted-foreground">
            {PEOPLE_LINKS.map((person) => (
              <li key={person.id}>
                <Link href={person.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  <span className="font-semibold">{person.name}</span> — {person.description}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12">
            <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </footer>
      </div>
    </main>
  );
}
