import Link from 'next/link';
import { PEOPLE_LINKS } from '@/lib/data';

export default function People() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold">People</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A list of thinkers and writers on the internet that I learn from regularly. They cover a broad range of topics.
      </p>
      
      <ul className="mt-8 list-disc list-outside pl-5 space-y-3 text-lg text-muted-foreground">
        {PEOPLE_LINKS.map((person) => (
          <li key={person.id}>
            <span>{person.name}</span>
            {person.twitterHandle && (
              <>
                {' — '}
                <Link href={`https://x.com/${person.twitterHandle}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @{person.twitterHandle}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-lg text-muted-foreground">
        Have a recommendation? <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">Let me know</Link>.
      </p>

      <footer className="mt-12">
          <Link href="/" className="text-muted-foreground no-underline hover:underline">Back to Home</Link>
      </footer>
    </main>
  );
}
