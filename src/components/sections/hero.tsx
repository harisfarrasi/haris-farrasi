import { AnimateIn } from '@/components/animate-in';
import { Button } from '@/components/ui/button';
import { BookOpen, Spline, Workflow } from 'lucide-react';
import Link from 'next/link';

const IconContainer = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <AnimateIn delay={delay}>
    <div className="w-10 h-10 bg-card flex items-center justify-center rounded-lg text-primary shadow-md border border-white/10">
      {children}
    </div>
  </AnimateIn>
);


export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link href="#project-1">
            <IconContainer delay={0}>
              <BookOpen className="w-5 h-5" />
            </IconContainer>
          </Link>
          <Link href="#project-2">
            <IconContainer delay={100}>
              <Spline className="w-5 h-5" />
            </IconContainer>
          </Link>
          <Link href="#project-3">
            <IconContainer delay={200}>
              <Workflow className="w-5 h-5" />
            </IconContainer>
          </Link>
        </div>
        <AnimateIn delay={300}>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto">
            Haris Farrasi
          </h1>
        </AnimateIn>
        <AnimateIn delay={500}>
          <p className="font-headline text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-10">
            Founder of <a href="#project-1" className="font-bold hover:underline"><b>Plajar</b></a>, <a href="#project-2" className="font-bold hover:underline"><b>Scoraa</b></a>, and <a href="#project-3" className="font-bold hover:underline"><b>Operatorr</b></a>. I design and build things that create leverage for people.
          </p>
        </AnimateIn>
        <AnimateIn delay={700}>
           <Button asChild size="lg">
              <Link href="#projects">Join the Mission</Link>
           </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
