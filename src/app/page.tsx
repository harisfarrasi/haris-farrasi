import Link from 'next/link';
import { PROJECTS } from '@/lib/data';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground">
            I didn’t grow up in Silicon Valley, but my days started to feel like i live inside its bubble. Small teams, quick feedback, move fast and break things, ship early and iterate. It began with fixing small problems: broken forms, slow processes, messy notes. Plajar came from teaching what people can actually use. Scoraa came from wanting an alternative to doomscrolling. A tool that turns noise into clearer decisions. Operatorr came from sitting inside real operations and closing quiet leaks of time and margins.
            <br/><br/>
            I thought there was something to the West, I’ll sail westward (Just like Colombus). So I choose speed over certainty, contact over theory, and simple over flashy. I ship early, learn fast, keep products lean, and let results compound. There was never a big blueprint, just steady steps in that direction. If these tools keep working when I’m not around, it’s because each small release kept pointing west.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                  {project.title}
                </Link>
                {' '}— {project.description}
              </li>
            ))}
          </ul>
        </section>

        <nav>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>
                <Link href="/read" className="font-semibold text-primary hover:underline">Read</Link>
                {' '}— My reading list and summaries.
            </li>
            <li>
                <Link href="/people" className="font-semibold text-primary hover:underline">People</Link>
                {' '}— Internet people I learn from.
            </li>
          </ul>
        </nav>
        
        <section>
           <h2 className="text-xl font-bold mb-4">Contact</h2>
           <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                  <Link href="mailto:harisfarrasi@gmail.com" className="font-semibold text-primary hover:underline">Email</Link>
                  {' '}— harisfarrasi@gmail.com
              </li>
              <li>
                  <Link href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">X/Twitter</Link>
                  {' '}— @harisfarrasi
              </li>
              <li>
                  <Link href="https://instagram.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Instagram</Link>
                  {' '}— @harisfarrasi
              </li>
            </ul>
        </section>
      </div>
    </main>
  );
}
