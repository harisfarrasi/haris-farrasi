import Link from 'next/link';
import { LIBRARY_LINKS } from '@/lib/data';

export default function Read() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold">Read</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of articles, essays, and books that have shaped my thinking.
          </p>
        </header>

        <section>
          <div className="space-y-4">
            {LIBRARY_LINKS.map((item) => (
              <div key={item.id}>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                  {item.title}
                </Link>
                <p className="text-muted-foreground">{item.description}</p>
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
