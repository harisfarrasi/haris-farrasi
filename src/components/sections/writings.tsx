import { WRITINGS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { AnimateIn } from '@/components/animate-in';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const timeline = [
  { year: '2003', event: 'Born into a world on the cusp of technological change.' },
  { year: '2022', event: 'Began studies at Diponegoro University.' },
  { year: '2024', event: 'Founded Plajar, an AI Academy to democratize AI knowledge.' },
  { year: '2025', event: 'Launched Scoraa, an AI application for personal leverage.' },
  { year: '2025', event: 'Building Operatorr, an AI agency for business solutions.' },
  { year: 'Future', event: 'Expanding the AI Tech Conglomerate globally.' }
];


export function Writings() {
  return (
    <section id="essays" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="about" className="mb-24 sm:mb-32">
          <AnimateIn>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-1 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
                    Who is Haris?
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground max-w-3xl">
                    <p>
                      I’m 21, but I never saw my age as a limitation. I didn’t grow up in Silicon Valley. I grew up watching technology reshape the world from the outside, where every new breakthrough felt like both a promise and a warning. That distance shaped me: I don’t see tech as hype, but as raw material to rewire reality. My curiosity naturally gravitates toward AI, systems thinking, and code, because they are the strongest levers to multiply human capability.
                    </p>
                    <p>
                      At my core, I am a builder. I’m obsessed with turning complexity into clarity, and clarity into something people can actually use. I don’t think in terms of careers or companies; I think in terms of frameworks that can scale, endure, and compound over time. Building is not what I do. It’s who I am.
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

        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center sm:text-left">
              Essays
            </h2>
            <div className="space-y-2">
              {WRITINGS.map((writing, index) => (
                <div key={writing.id}>
                  <AnimateIn delay={index * 150}>
                    <Link href={writing.url} target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="p-4 rounded-lg transition-colors hover:bg-card">
                          <div className="flex justify-between items-start gap-4">
                              <div>
                                  <h3 className="font-headline text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{writing.title}</h3>
                                  <p className="mt-2 text-foreground/80">{writing.description}</p>
                              </div>
                              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                          </div>
                      </div>
                    </Link>
                  </AnimateIn>
                  {index < WRITINGS.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
