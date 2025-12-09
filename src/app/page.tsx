import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PEOPLE_LINKS, LIBRARY_LINKS } from '@/lib/data';

const BELIEFS = [
    { id: 'belief-14', text: 'The universe defaults to scarcity; the mission is to engineer sustainable abundance.' },
    { id: 'belief-1', text: 'Value comes only from solving real problems.' },
    { id: 'belief-2', text: 'Iteration beats everything. Keep cycling until reality bends.' },
    { id: 'belief-3', text: 'Benchmark the best. Compete with the top or die average.' },
    { id: 'belief-4', text: 'Leverage compounds. Always chase code, content, connection, capital, company, etc.' },
    { id: 'belief-5', text: 'Being a machine learner beats being smart. Curiosity compounds.' },
    { id: 'belief-6', text: 'Always ask your question. Find the right question to ask is key.' },
    { id: 'belief-7', text: 'Extreme people achieve extreme results. Work so hard it feels unnatural.' },
    { id: 'belief-8', text: 'Extreme discomfort means you’re exactly where you should be.' },
    { id: 'belief-9', text: 'It’s hard to be wildly successful at anything you aren’t obsessed with.' },
    { id: 'belief-10', text: 'Status quo bias is the enemy. >70% live in permanent slight suffering because they never take a big swing.' },
    { id: 'belief-11', text: 'Delete until nothing is left. In fact, if you don’t end up adding back at least 10%, you didn’t delete enough.' },
    { id: 'belief-12', text: 'Wanting to be liked is weakness. Fulfillment must come from within.' },
    { id: 'belief-13', text: 'Everything is sales. The teacher sells, the leader sells, the orator sells.' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-5xl mx-auto px-4 py-16 sm:py-24 w-full">
        <div className="text-lg text-muted-foreground space-y-4 mb-12">
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

        <Tabs defaultValue="beliefs" className="flex flex-col md:flex-row md:space-x-8">
          <TabsList className="flex-col h-auto justify-start items-stretch bg-transparent p-0 border-b md:border-l md:border-b-0 md:w-40">
            <TabsTrigger value="beliefs" className="justify-start data-[state=active]:bg-accent data-[state=active]:shadow-none rounded-none md:rounded-r-none md:rounded-l-md text-base px-4 py-2">Beliefs</TabsTrigger>
            <TabsTrigger value="people" className="justify-start data-[state=active]:bg-accent data-[state=active]:shadow-none rounded-none md:rounded-r-none md:rounded-l-md text-base px-4 py-2">People</TabsTrigger>
            <TabsTrigger value="read" className="justify-start data-[state=active]:bg-accent data-[state=active]:shadow-none rounded-none md:rounded-r-none md:rounded-l-md text-base px-4 py-2">Read</TabsTrigger>
          </TabsList>
          
          <div className="flex-1 mt-6 md:mt-0">
            <TabsContent value="beliefs">
                <h2 className="text-2xl font-bold mb-4">Beliefs</h2>
                <ul className="list-disc list-outside pl-5 space-y-3 text-lg text-muted-foreground">
                    {BELIEFS.map((item) => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                    </li>
                    ))}
                </ul>
                <p className="mt-8 text-lg text-muted-foreground">
                    I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">please let me know</Link>.
                </p>
            </TabsContent>
            
            <TabsContent value="people">
                <h2 className="text-2xl font-bold mb-4">People</h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  A list of thinkers and writers on the internet that I learn from regularly. They cover a broad range of topics.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-3 text-lg text-muted-foreground">
                    {PEOPLE_LINKS.map((person) => (
                    <li key={person.id}>
                        <span className="text-primary">{person.name}</span>
                        {person.twitterHandle && (
                        <>
                            {' — '}
                            <Link href={`https://x.com/${person.twitterHandle}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            @{person.twitterHandle}
                            </Link>
                        </>
                        )}
                    </li>
                    ))}
                </ul>
                 <p className="mt-8 text-lg text-muted-foreground">
                    I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">please let me know</Link>.
                </p>
            </TabsContent>

            <TabsContent value="read">
                 <h2 className="text-2xl font-bold mb-4">Read</h2>
                 <p className="mb-4 text-lg text-muted-foreground">
                    A collection of articles, essays, and books that have significantly influenced my perspective and shaped my thinking.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-3 text-lg text-muted-foreground">
                    {LIBRARY_LINKS.map((item) => (
                    <li key={item.id}>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        <span>{item.title}</span>
                        </Link>
                    </li>
                    ))}
                </ul>
                 <p className="mt-8 text-lg text-muted-foreground">
                    I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">please let me know</Link>.
                </p>
            </TabsContent>
          </div>
        </Tabs>

      </main>

      <footer className="max-w-5xl mx-auto px-4 py-8 w-full">
         <div className="flex justify-between items-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Haris Farrasi</p>
            <div className="flex items-center space-x-4">
              <Link href="mailto:harisfarrasi@gmail.com" className="hover:text-primary transition-colors">Email</Link>
              <Link href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">X/Twitter</Link>
              <Link href="https://www.instagram.com/haris.farrasi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</Link>
            </div>
          </div>
      </footer>
    </div>
  );
}
