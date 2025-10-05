import { AnimateIn } from '@/components/animate-in';
import Image from 'next/image';

const timeline = [
  { year: '2023', event: 'Founded Plajar, an AI Academy to democratize AI knowledge.' },
  { year: '2024', event: 'Launched Scoraa, an AI application for personal leverage.' },
  { year: 'Present', event: 'Building Operatorr, an AI agency for business solutions.' },
  { year: 'Future', event: 'Expanding the AI Tech Conglomerate globally.' }
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <AnimateIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Who is Haris?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I am a founder, thinker, builder, operator, and perpetual learner at the intersection of technology and human potential. My work is driven by a vision to leverage artificial intelligence to solve meaningful problems, starting from Indonesia and reaching the global stage.
                </p>
                <p>
                  My journey is one of relentless building and iterating, transforming ambitious ideas into tangible products and platforms that empower individuals and businesses. I believe in the power of technology not just as a tool, but as a cognitive amplifier that can unlock new possibilities for humanity.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/haris/400/400"
                  alt="Haris Farrasi"
                  fill
                  className="object-cover"
                  data-ai-hint="portrait man"
                />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="font-headline text-2xl font-bold text-center mb-8">My Journey</h3>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className={`w-1/2 pr-8 text-right ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                    <p className="font-headline font-bold text-primary">{item.year}</p>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2 z-10 order-2"></div>
                  <div className="w-1/2 pl-8 order-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
