import { AnimateIn } from '@/components/animate-in';

const timeline = [
  { year: '2003', event: 'Born, instantly assigned Indonesian nationality 🇮🇩.' },
  { year: '2022', event: 'Began Economics at Universitas Diponegoro, self-learning tech and engineering.' },
  { year: '2024', event: 'Founded Plajar, an AI Academy to democratize AI knowledge.' },
  { year: '2025', event: 'Launched Scoraa, an AI application for personal leverage.' },
  { year: '2025', event: 'Building Operatorr, an AI ops for business solutions.' },
  { year: 'Future', event: 'Expanding the AI Tech Conglomerate globally.' }
];


export function Writings() {
  return (
    <section id="story" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="about" className="mb-24 sm:mb-32">
          <AnimateIn>
            <div className="max-w-2xl mx-auto">
              <div className="grid lg:grid-cols-1 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
                    My Story
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      I wasn’t born in Silicon Valley. I grew up in a place where systems often fail and good ideas rarely get a fair chance. From that, I learned something simple: the world doesn’t break because of bad intentions, it breaks because of poor design. Since then, I’ve been drawn to understanding how things work and how they can be rebuilt. I build not to chase anything, but to test whether ideas can make reality a little more coherent.
                    </p>
                    <p>
                      For me, building is not about a single product or a single moment of success. It’s about creating structures that make people and technology reinforce each other. I’m drawn to things with long half-lives, things that keep working even when I’m not around. I believe complexity isn’t the enemy as long as we’re patient enough to map it and brave enough to redesign it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <h3 className="font-headline text-2xl font-bold text-center mb-8">My Journey</h3>
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-center mb-8">
                      {index % 2 === 0 ? (
                        <>
                          <div className="w-1/2 pr-8 text-right">
                            <p className="font-headline font-bold text-primary">{item.year}</p>
                            <p className="text-muted-foreground">{item.event}</p>
                          </div>
                          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2 z-10"></div>
                          <div className="w-1/2 pl-8"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-8"></div>
                          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2 z-10"></div>
                          <div className="w-1/2 pl-8 text-left">
                            <p className="font-headline font-bold text-primary">{item.year}</p>
                            <p className="text-muted-foreground">{item.event}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
