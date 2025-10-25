import Link from 'next/link';
import { PROJECTS } from '@/lib/data';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground">
            My name is Alwan Haris Farrasi. I’m the CEO and founder of Plajar, and I build systems that help people adopt new technology faster. My projects: Plajar, Scoraa, and Operatorr focus on learning, automation, and human-AI collaboration. The goal is to make frontier technologies like AI and robotics easier to understand, easier to use, and easier to build with.
            <br/><br/>
            My work centers on the intersection of physical intelligence (robots) and cognitive intelligence (AI) — how machines move, think, and extend human capability. I care about design, engineering, and scale. If this mission speaks to you, you should consider joining us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <ul className="list-disc list-outside pl-5">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <span className="font-semibold text-primary">{project.title}</span>
                  <span className="text-muted-foreground"> — {project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <nav>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
           <ul className="list-disc list-outside pl-5">
              <li>
                <Link href="/read" className="hover:underline">
                  <span className="font-semibold text-primary">Read</span>
                  <span className="text-muted-foreground"> — My reading list and summaries.</span>
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:underline">
                  <span className="font-semibold text-primary">People</span>
                  <span className="text-muted-foreground"> — Internet people I learn from.</span>
                </Link>
              </li>
          </ul>
        </nav>
        
        <footer className="pt-8">
           <div className="flex justify-center space-x-4 text-muted-foreground">
              <Link href="mailto:harisfarrasi@gmail.com" className="font-semibold text-primary hover:underline">Email</Link>
              <Link href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">X/Twitter</Link>
              <Link href="https://www.instagram.com/haris.farrasi/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Instagram</Link>
            </div>
        </footer>
      </div>
    </main>
  );
}
