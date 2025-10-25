import Link from 'next/link';
import { LIBRARY_LINKS } from '@/lib/data';

export default function Read() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <section>
          <h1 className="text-3xl font-bold">Read</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of articles, essays, and books that have significantly influenced my perspective and shaped my thinking.
          </p>
        </section>

        <section>
           <p className="text-lg text-muted-foreground">
            Have a recommendation? <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">Let me know</Link>.
          </p>
          <ul className="mt-8 list-disc list-outside pl-5 space-y-2">
            {LIBRARY_LINKS.map((item) => (
              <li key={item.id}>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  <span className="font-semibold">{item.title}</span>
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
