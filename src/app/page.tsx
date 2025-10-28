import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-8">
        <section>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              My name is Alwan Haris Farrasi. I’m the CEO and founder of{' '}
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>
              , where we build systems that help people adopt new knowledge and skills faster. The
              dirty secret of Edtech 1.0 is that most platforms didn’t actually care if you learned
              anything. Duolingo became a $14B giant but most users still can’t hold a basic
              conversation. Masterclass sells inspiration but not mastery. Udemy and Coursera
              reached millions yet video courses average only 4 to 10 percent completion. Creator
              platforms enabled tens of thousands of courses, but too many optimized for sales over
              outcomes. Engagement grew, but real learning did not.
            </p>
            <p>
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>{' '}
              is my answer to that failure. We are building Edtech 2.0: real learning outcomes with
              high engagement. The world is entering the largest reskilling and upskilling demand in
              modern history, and old tools will not be enough. Our mission is to make every domain
              of knowledge and skill easier to understand, easier to use, and easier to build with.
              This is not education as entertainment. This is education as capability.
            </p>
            <p>
              My personal focus is the intersection of physical intelligence and cognitive
              intelligence, how robots move, how AI thinks, and how both extend human capability.
              But the ambition of{' '}
              <Link
                href="https://plajar.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plajar
              </Link>{' '}
              goes beyond frontier technologies. It is about creating a new infrastructure of
              learning where any subject, from the oldest sciences to the newest skills, can be
              mastered faster and applied at scale.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">Navigation</h2>
           <ul className="mt-4 list-disc list-outside pl-5 space-y-1 text-base">
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
              <li>
                <Link href="/beliefs" className="hover:underline">
                  <span className="font-semibold text-primary">Beliefs</span>
                  <span className="text-muted-foreground"> — Things I believe in.</span>
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
