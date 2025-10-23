import Link from 'next/link';
import { LIBRARY_LINKS } from '@/lib/data';

export default function Read() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold">Read</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A list of articles, essays, and books that have shaped my thinking.
          </p>
        </header>

        <section>
          <ul className="list-disc list-inside text-muted-foreground">
            {LIBRARY_LINKS.map((item) => (
              <li key={item.id}>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  <span className="font-semibold">{item.title}</span> — {item.description}
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
