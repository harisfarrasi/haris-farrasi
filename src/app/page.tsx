'use client';

import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

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

const PEOPLE_LINKS = [
    { id: 'person-1', name: 'Muhammad ﷺ', twitterHandle: null },
    { id: 'person-2', name: 'Muhammad Al-Fatih', twitterHandle: null },
    { id: 'person-3', name: 'Ahmad Bahauddin Nursalim (Gus Baha)', twitterHandle: null },
    { id: 'person-4', name: 'Adi Hidayat', twitterHandle: null },
    { id: 'person-5', name: 'Elon Musk', twitterHandle: 'elonmusk' },
    { id: 'person-6', name: 'Sam Altman', twitterHandle: 'sama' },
    { id: 'person-7', name: 'Peter Thiel', twitterHandle: null },
    { id: 'person-8', name: 'Jensen Huang', twitterHandle: 'jensenhuang' },
    { id: 'person-9', name: 'Patrick Collison', twitterHandle: 'patrickc' },
    { id: 'person-10', name: 'Andrej Karpathy', twitterHandle: 'karpathy' },
    { id: 'person-11', name: 'Demis Hassabis', twitterHandle: 'demishassabis' },
    { id: 'person-12', name: 'Alexandr Wang', twitterHandle: 'alexandr_wang' },
    { id: 'person-13', name: 'Marc Andreessen', twitterHandle: 'pmarca' },
    { id: 'person-14', name: 'Balaji Srinivasan', twitterHandle: 'balajis' },
    { id: 'person-15', name: 'Paul Graham', twitterHandle: 'paulg' },
    { id: 'person-16', name: 'Naval Ravikant', twitterHandle: 'naval' },
    { id: 'person-17', name: 'Elad Gil', twitterHandle: 'eladgil' },
    { id: 'person-18', name: 'Ray Dalio', twitterHandle: 'RayDalio' },
    { id: 'person-19', name: 'Warren Buffett', twitterHandle: null },
    { id: 'person-20', name: 'Charlie Munger', twitterHandle: null },
    { id: 'person-21', name: 'Jeff Bezos', twitterHandle: 'JeffBezos' },
    { id: 'person-22', name: 'Larry Page', twitterHandle: null },
    { id: 'person-23', name: 'Sergey Brin', twitterHandle: null },
    { id: 'person-24', name: 'Mark Zuckerberg', twitterHandle: null },
    { id: 'person-25', name: 'Reed Hastings', twitterHandle: null },
    { id: 'person-26', name: 'Brian Chesky', twitterHandle: 'bchesky' },
    { id: 'person-27', name: 'Pavel Durov', twitterHandle: 'durov' },
    { id: 'person-28', name: 'Masayoshi Son', twitterHandle: null },
    { id: 'person-29', name: 'Tim Urban', twitterHandle: 'waitbutwhy' },
    { id: 'person-30', name: 'Timothy Ronald', twitterHandle: 'timothyronald22' },
    { id: 'person-31', name: 'Steve Jobs', twitterHandle: null },
    { id: 'person-32', name: 'Jack Dorsey', twitterHandle: 'jack' },
];

const LIBRARY_LINKS = [
    { id: 'library-1', title: '100 Blocks a Day', url: 'https://perch.app/post/826cc63a-198b-44d0-9fda-545fdb3b90e6', description: 'by Wait But Why' },
    { id: 'library-2', title: 'Good and Bad Procrastination', url: 'https://perch.app/post/1ed4bbc9-a34e-43e3-8194-7adbf9a6ed31', description: 'by Paul Graham' },
    { id: 'library-3', title: 'Life is lived in the arena', url: 'https://perch.app/post/1f38f233-46a2-4449-83e6-9560fe5acbf7', description: 'by Naval Ravikant' },
    { id: 'library-4', title: 'Very Bad Advice', url: 'https://perch.app/post/653c7e9f-2222-417a-adb9-7a2978d49788', description: 'by Morgan Housel' },
    { id: 'library-5', title: 'Principles for Lifelong Meaningful Relationships', url: 'https://perch.app/post/0ff5537c-2330-4965-8008-4efb46ad9180', description: 'by Ray Dalio' },
    { id: 'library-6', title: 'How to Pick Your Life Partner (Part 2)', url: 'https://perch.app/post/3d6a454c-bd6c-44e5-95e6-7efd835f9b04', description: 'by Wait But Why' },
    { id: 'library-7', title: 'If You Want to Learn, Do', url: 'https://perch.app/post/d83d5919-a386-4597-99df-ba6d862af654', description: 'by Naval Ravikant' },
    { id: 'library-8', title: 'Find Your Specific Knowledge Through Action', url: 'https://perch.app/post/6e3b89a2-264e-4f1b-b019-dc1c476e86fa', description: 'by Naval Ravikant' },
    { id: 'library-9', title: 'In Most Difficult Things, The Solution is Indirect', url: 'https://perch.app/post/a8428c1a-58bf-4c2e-9db0-41c4ec92d495', description: 'by Naval Ravikant' },
    { id: 'library-10', title: 'Eventually You Will Get What You Deserve', url: 'https://perch.app/post/cf31851f-7ab0-4dfe-b75c-ad992d4fdd6a', description: 'by Naval Ravikant' },
    { id: 'library-11', title: 'Optimism Shapes Reality', url: 'https://perch.app/post/ac474ea8-47a9-4831-b887-cdd1a050a0b7', description: 'by Alexandr Wang' },
    { id: 'library-12', title: 'Digital Hygiene', url: 'https://perch.app/post/be3d4e7f-4c3b-4b63-8289-dc6f32f0969d', description: 'by Andrej Karpathy' },
    { id: 'library-13', title: 'I Love Calculator', url: 'https://perch.app/post/a2975370-d887-4463-abea-a1d66ecd9cdb', description: 'by Andrej Karpathy' },
    { id: 'library-14', title: 'Advice for ambitious 19 year olds', url: 'https://perch.app/post/da0638f9-e41e-4ced-b4e7-204a716ad583', description: 'by Sam Altman' },
    { id: 'library-15', title: 'The days are long but the decades are short', url: 'https://perch.app/post/80ea2532-f643-4122-91ad-1821f9b63840', description: 'by Sam Altman' },
    { id: 'library-16', title: 'Value is created by doing', url: 'https://perch.app/post/e19a7e75-9826-444c-8fc8-3785df8388d3', description: 'by Sam Altman' },
    { id: 'library-17', title: 'Productivity', url: 'https://perch.app/post/f506403c-21f8-4e26-9262-76203e6c9aa6', description: 'by Sam Altman' },
    { id: 'library-18', title: 'How To Be Successful', url: 'https://perch.app/post/a39d2a17-8e24-4cee-a68d-356a659280fc', description: 'by Sam Altman' },
    { id: 'library-19', title: 'The Strength of Being Misunderstood', url: 'https://perch.app/post/4d81e14b-ef52-4275-8520-1cd15ba35084', description: 'by Sam Altman' },
    { id: 'library-20', title: 'Relentlessly Resourceful', url: 'https://perch.app/post/b658ab48-f5a-4cf4-93c8-376cc2ef630c', description: 'by Paul Graham' },
    { id: 'library-21', title: 'Startup = Growth', url: 'https://perch.app/post/4a062d5a-14fd-43f5-bfc5-4579cae935f9', description: 'by Paul Graham' },
    { id: 'library-22', title: '18 Mistakes That Kill Startups', url: 'https://perch.app/post/ab1d7fcc-812b-4700-9a86-3ba893423f70', description: 'by Paul Graham' },
    { id: 'library-23', title: 'Startups in 13 Sentences', url: 'https://perch.app/post/1f405161-603d-4f5d-afba-e638fb5b43a1', description: 'by Paul Graham' },
    { id: 'library-24', title: 'What I’ve Learned from Users', url: 'https://perch.app/post/29c47516-1b96-44f3-b7b7-79ee945841ed', description: 'by Paul Graham' },
    { id: 'library-25', title: 'Researchers and Founders', url: 'https://perch.app/post/e318e005-26b0-4a3b-8ddc-4274b58c8ce3', description: 'by Sam Altman' },
    { id: 'library-26', title: '9 things the best founders do', url: 'https://perch.app/post/488e8785-6dc3-4e5a-b133-7c6525a5020f', description: 'by Sam Altman' },
    { id: 'library-27', title: 'The Only Way to Grow Huge', url: 'https://perch.app/post/dedb6b9b-7794-43d8-8f14-a013075fc891', description: 'by Sam Altman' },
    { id: 'library-28', title: 'Before Growth', url: 'https://perch.app/post/f3ea81d8-cec8-4469-8525-26b59e6d525f', description: 'by Sam Altman' },
    { id: 'library-29', title: 'Super successful companies', url: 'https://perch.app/post/56d227e0-d6bc-4553-91b7-22a8fc61b6ed', description: 'by Sam Altman' },
    { id: 'library-30', title: 'Seek out negative feedback', url: 'https://perch.app/post/cf59b04d-f832-4ba5-8da0-76ca71f7854e', description: 'by Elon Musk' },
    { id: 'library-31', title: 'How to be Elon Musk (Justine Musk)', url: 'https://perch.app/post/f9638d21-2c00-4bab-a97f-14c4e6ca0d1d', description: 'by The Founders’ Tribune' },
    { id: 'library-32', title: 'CEO as Chief Editor', url: 'https://perch.app/post/4ea0878f-07e8-410f-8e4a-c21e20f4d114', description: 'by Jack Dorsey' },
    { id: 'library-33', title: '12 Leadership Habits', url: 'https://perch.app/post/4f407382-8fd5-498a-8851-e6dedd28f6e9', description: 'by Jack Dorsey' },
    { id: 'library-34', title: 'The Power of Great Storytelling', url: 'https://perch.app/post/45cc5b7f-c873-4a8e-8fb8-fc0b1b3e2b9d', description: 'by Jack Dorsey' },
    { id: 'library-35', title: 'Culture Lessons from Bill Walsh', url: 'https://perch.app/post/38e347f5-1ab8-4de3-99ea-d7544ebfe249', description: 'by Jack Dorsey' },
    { id: 'library-36', title: 'Balancing performance and loyalty', url: 'https://perch.app/post/d8c6f974-7f2f-4c42-89c6-99c07fef2a1f', description: 'by Reed Hastings' },
    { id: 'library-37', title: 'Amp It Up!', url: 'https://perch.app/post/2adced28-c613-4479-ae52-0ab0ac8bd6df', description: 'by Frank Slootman' },
    { id: 'library-38', title: 'Performance Culture', url: 'https://perch.app/post/5c283f38-a15f-4270-a2d6-e78a72485bce', description: 'by Frank Slootman' },
    { id: 'library-39', title: 'From Coding to Leadership', url: 'https://perch.app/post/685e1b32-992b-43bd-8044-7cfe7856e26f', description: 'by Max Levchin' },
    { id: 'library-40', title: 'Marketing is a Transfer of Enthusiasm', url: 'https://perch.app/post/ce994418-4cde-4fab-bfe4-f4444e1a1ac6', description: 'by Jason Fried' },
    { id: 'library-41', title: 'Entrepreneurs are Typically Polymaths', url: 'https://perch.app/post/65fbda29-277a-4980-b383-2f0d454899b7', description: 'by Peter Thiel' },
    { id: 'library-42', title: 'Lessons from Peter Thiel', url: 'https://perch.app/post/e914ea51-56bb-476a-aacd-725b9f8d8efd', description: 'by Joe Lonsdale' },
    { id: 'library-43', title: 'Be Less Precious', url: 'https://perch.app/post/99ddf7f0-bb5b-447c-9f67-bd840ec0c9d7', description: 'by David Heinemeier Hansson' },
    { id: 'library-44', title: 'Elon Musk', url: 'https://perch.app/post/275781d8-5c8a-44f8-8149-eaec70634933', description: 'by David Senra' },
    { id: 'library-45', title: 'Make Something Wonderful', url: 'https://perch.app/post/ebf85540-449a-43bc-84af-21fcfddd26f4', description: 'by Steve Jobs' },
    { id: 'library-46', title: 'The Struggle', url: 'https://perch.app/post/ce6b9324-d1c8-4be2-a2c7-c3233d98e3a9', description: 'by Ben Horowitz' },
    { id: 'library-47', title: 'Product/Market Fit at Pinterest', url: 'https://perch.app/post/c9a3195b-1906-4121-888b-d64581b3d799', description: 'by Ben Silbermann' },
    { id: 'library-48', title: 'DO TOO MUCH', url: 'https://perch.app/post/f13313f1-054d-49bc-93ff-2abf5af63b30', description: 'by Alexandr Wang' },
    { id: 'library-49', title: 'Hire people who give a shit', url: 'https://perch.app/post/06a64b9f-31c2-43f5-a492-8bc9b2052986', description: 'by Alexandr Wang' },
    { id: 'library-50', title: 'Reflections on OpenAI', url: 'https://perch.app/post/ddb4fe67-9bfd-4548-95ab-ac08b342a9c6', description: 'by Calvin French-Owen' },
];

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(formattedTime);
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <p>it's <span>{time || '...'}</span> for Haris in 🇮🇩</p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between max-w-3xl mx-auto px-10 sm:px-12 py-12 sm:py-24">
      <main className="flex-grow">
        <Tabs defaultValue="about" className="flex flex-col md:flex-row md:space-x-16">
          <TabsList className="flex-row md:flex-col h-auto items-start bg-transparent p-0 border-none space-x-4 md:space-x-0 md:space-y-2 mb-8 md:mb-0 md:w-32">
            <TabsTrigger value="about" className="justify-start data-[state=active]:font-bold data-[state=active]:text-black text-muted-foreground p-0 text-base">About</TabsTrigger>
            <TabsTrigger value="beliefs" className="justify-start data-[state=active]:font-bold data-[state=active]:text-black text-muted-foreground p-0 text-base">Beliefs</TabsTrigger>
            <TabsTrigger value="people" className="justify-start data-[state=active]:font-bold data-[state=active]:text-black text-muted-foreground p-0 text-base">People</TabsTrigger>
            <TabsTrigger value="read" className="justify-start data-[state=active]:font-bold data-[state=active]:text-black text-muted-foreground p-0 text-base">Read</TabsTrigger>
            <TabsTrigger value="bio" className="justify-start data-[state=active]:font-bold data-[state=active]:text-black text-muted-foreground p-0 text-base">Bio</TabsTrigger>
          </TabsList>
          
          <div className="flex-1">
            <TabsContent value="about" className="mt-0">
              <div className="text-base space-y-4">
                <p>
                  My name is Haris Farrasi. I’m the CEO and founder of{' '}
                  <Link
                    href="https://plajar.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aksa
                  </Link>
                  , a living multidimensional growth platform. The world is entering the largest
                  reskilling and upskilling demand in modern history, and old tools will not be enough.
                  Aksa is my response: where education delivers real outcomes with high engagement, and where
                  learning feels less like consuming content and more like a multiplayer system:
                  people learning, building, and advancing together.
                </p>
                <p>
                  The long-term vision is to create the operating system of civilization that makes
                  mastery across every field from the oldest sciences to the newest skills not only
                  possible, but faster, fairer, and massively scalable. Education is the first proof
                  point: if we can redesign how knowledge is mastered, we can redesign how every system
                  that powers abundance works. My thesis is that true abundance can only be achieved
                  through three pillars: cognitive intelligence (AI that thinks), physical
                  intelligence (machines that act), and governance (the systems that align and
                  distribute). Aksa is my immediate vehicle in this journey, but the larger direction
                  is clear: building governance for universal abundance.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="beliefs" className="mt-0">
              <p className="mb-4 text-base">
                A curated collection of principles and values that guide my work, decisions, and approach to life.
              </p>
              <ol className="space-y-1 text-base list-decimal list-outside pl-5">
                  {BELIEFS.map((item) => (
                  <li key={item.id}>
                      <span>{item.text}</span>
                  </li>
                  ))}
              </ol>
              <p className="mt-8 text-base text-foreground">
                  I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="hover:underline">please let me know</Link>.
              </p>
            </TabsContent>
            
            <TabsContent value="people" className="mt-0">
                <p className="mb-4 text-base">
                  A list of thinkers and writers on the internet that I learn from regularly. They cover a broad range of topics.
                </p>
                <ol className="space-y-1 text-base list-decimal list-outside pl-5">
                    {PEOPLE_LINKS.map((person) => (
                    <li key={person.id}>
                        <span>{person.name}</span>
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
                </ol>
                 <p className="mt-8 text-base text-foreground">
                    I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="hover:underline">please let me know</Link>.
                </p>
            </TabsContent>

            <TabsContent value="read" className="mt-0">
                 <p className="mb-4 text-base">
                    A collection of articles, essays, and books that have significantly influenced my perspective and shaped my thinking.
                </p>
                <ol className="space-y-1 text-base list-decimal list-outside pl-5">
                    {LIBRARY_LINKS.map((item) => (
                    <li key={item.id}>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <span>{item.title}</span>
                        </Link>
                    </li>
                    ))}
                </ol>
                 <p className="mt-8 text-base text-foreground">
                    I'm always learning and unlearning. If you have a recommendation, <Link href="mailto:harisfarrasi@gmail.com" className="hover:underline">please let me know</Link>.
                </p>
            </TabsContent>

            <TabsContent value="bio" className="mt-0">
              <div className="text-base space-y-4">
                <p>
                  The skill I have taken to an extreme is what I call “engineering the best way” an obsessive drive to find the most effective method for anything, then rebuild it from scratch until it works better.
                </p>
                <p>
                  At 13, I entered a boarding school with no devices, minimal food, physical punishment as discipline, and a 4 AM wake-up every morning. I slept at 1 or 2 AM. To stay awake during late study sessions I rubbed harsh aromatic oil directly onto my eyes not because anyone told me to, but because I needed a system that worked when willpower alone could not. I became the fastest Quran memorizer in the school and ranked first academically out of 1,500 students.
                </p>
                <p>
                  The environment forced me to master 30+ disciplines simultaneously: Mantiq, Ushul Fiqih, Balaghoh, mathematics, economics. Fields that look completely unrelated until you realize each one is a different lens on the same question: how do humans actually process, retain, and apply knowledge? That question never left me. It followed me into economics, then into self-taught software engineering, and eventually into building Aksa.
                </p>
                <p>
                  Every domain I touched became raw material for the same obsession. Mantiq taught me how to structure reasoning. Ushul Fiqih taught me how frameworks scale. Economics taught me how incentives shape behavior. Engineering taught me how to ship.
                </p>
                <p>
                  Steve Jobs once said the secret behind most great things is someone who cared an unreasonable amount. The Quran calls this quality harīṣ (care so intense it defines a person entirely). That word is my name, and it appears in the most sacred book in the world. It is the only way I know how to build.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </main>

      <footer className="w-full mt-12">
         <div className="flex justify-between items-center text-muted-foreground text-sm">
            <Clock />
            <div className="flex items-center space-x-4">
              <Link href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black transition-colors">X</Link>
              <Link href="mailto:harisfarrasi@gmail.com" className="text-muted-foreground hover:text-black transition-colors">Email</Link>
            </div>
          </div>
      </footer>
    </div>
  );
}
