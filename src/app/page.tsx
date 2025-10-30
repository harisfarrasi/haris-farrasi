import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-8">
        <section>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              My name is Haris Farrasi. I’m the CEO and founder of{' '}
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>
              , built as an answer to the failures of Edtech 1.0. The dirty secret is that most
              platforms never cared if people actually learned: Duolingo became a $14B giant but
              most users still can’t hold a basic conversation. Masterclass sells inspiration
              without mastery. Coursera and Udemy reached millions, yet video courses average only
              4–10 percent completion. Creator platforms scaled quickly but too often optimized
              for sales over outcomes. Engagement grew, but learning did not.{' '}
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>{' '}
              is my response: building Edtech 2.0, where education delivers real outcomes with
              high engagement, and where learning feels less like consuming content and more like a
              multiplayer system: people learning, building, and advancing together. The world is
              entering the largest reskilling and upskilling demand in modern history, and old
              tools will not be enough.
            </p>
            <p>
              The long-term vision is to create the operating system of civilization that makes
              mastery across every field from the oldest sciences to the newest skills not only
              possible, but faster, fairer, and massively scalable. Education is the first proof
              point: if we can redesign how knowledge is mastered, we can redesign how every system
              that powers abundance works. My thesis is that true abundance can only be achieved
              through three pillars: cognitive intelligence (AI that thinks), physical
              intelligence (machines that act), and governance (the systems that align and
              distribute).{' '}
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>{' '}
              is my immediate vehicle in this journey, but the larger direction is clear: building
              governance for universal abundance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Navigation</h2>
           <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-lg">
              <li>
                <Link href="/beliefs" className="hover:underline">
                  <span className="font-semibold text-primary">Beliefs</span>
                  <span className="text-muted-foreground"> — Things I believe in.</span>
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:underline">
                  <span className="font-semibold text-primary">People</span>
                  <span className="text-muted-foreground"> — Internet people I learn from.</span>
                </Link>
              </li>
              <li>
                <Link href="/read" className="hover:underline">
                  <span className="font-semibold text-primary">Read</span>
                  <span className="text-muted-foreground"> — My reading list and summaries.</span>
                </Link>
              </li>
          </ul>
        </section>
        
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
