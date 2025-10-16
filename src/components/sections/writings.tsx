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
                      I didn’t grow up in Silicon Valley, but my days started to feel like i live inside its bubble. Small teams, quick feedback, move fast and break things, ship early and iterate. It began with fixing small problems: broken forms, slow processes, messy notes. Plajar came from teaching what people can actually use. Scoraa came from wanting an alternative to doomscrolling. A tool that turns noise into clearer decisions. Operatorr came from sitting inside real operations and closing quiet leaks of time and margins.
                    </p>
                    <p>
                      I thought there was something to the West, I’ll sail westward (Just like Colombus). So I choose speed over certainty, contact over theory, and simple over flashy. I ship early, learn fast, keep products lean, and let results compound. There was never a big blueprint, just steady steps in that direction. If these tools keep working when I’m not around, it’s because each small release kept pointing west.
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
