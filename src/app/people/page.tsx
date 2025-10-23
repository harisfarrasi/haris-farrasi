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
          <div className="space-y-4">
            {PEOPLE_LINKS.map((person) => (
              <div key={person.id}>
                <Link href={person.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                  {person.name}
                </Link>
                 <p className="text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12">
            <Link href="/" className="hover:underline">Back to Home</Link>
        </footer>
      </div>
    </main>
  );
}
