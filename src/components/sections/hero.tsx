import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/data';
import Link from 'next/link';
import { AnimateIn } from '@/components/animate-in';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Haris Farrasi
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="font-headline text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-8">
            Software Engineer & Digital Craftsman
          </p>
        </AnimateIn>
        <AnimateIn delay={400}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            I build elegant, high-performance web applications that solve real-world problems and provide exceptional user experiences.
          </p>
        </AnimateIn>
        <AnimateIn delay={600}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
