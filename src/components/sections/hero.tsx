import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimateIn } from '@/components/animate-in';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            I’m building an AI Tech Conglomerate from Indonesia to the world.
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="font-headline text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-10">
            Founder of Plajar, Scoraa, Operatorr
          </p>
        </AnimateIn>
        <AnimateIn delay={400}>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Through education, applications, and agency.
          </p>
        </AnimateIn>
        <AnimateIn delay={600}>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">Join the Mission</Link>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
