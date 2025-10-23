import Link from 'next/link';
import { PROJECTS, WRITINGS } from '@/lib/data';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-bold text-primary-foreground">Alwan Haris Farrasi</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            I didn’t grow up in Silicon Valley. I learned the world doesn’t break because of bad intentions, but because of poor design. I build not to chase anything, but to test whether ideas can make reality a little more coherent.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <div className="space-y-3">
            {PROJECTS.map((project) => (
              <div key={project.id}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-foreground hover:underline">
                  {project.title}
                </Link>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Writings</h2>
           <div className="space-y-3">
            {WRITINGS.map((writing) => (
              <div key={writing.id}>
                <Link href={writing.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-foreground hover:underline">
                  {writing.title}
                </Link>
                <p className="text-muted-foreground">{writing.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex space-x-4">
            <Link href="mailto:harisfarrasi@gmail.com" className="hover:underline">Email</Link>
            <Link href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="hover:underline">X/Twitter</Link>
            <Link href="https://instagram.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
