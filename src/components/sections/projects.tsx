import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AnimateIn } from '@/components/animate-in';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const LogoPlaceholder = ({ letter }: { letter: string }) => (
  <div className="w-20 h-20 bg-card flex items-center justify-center rounded-full text-4xl font-headline text-primary">
    {letter}
  </div>
);

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Projects
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 150}>
              <Card className="h-full flex flex-col items-center text-center p-6 bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
                <CardHeader className="p-0 mb-4">
                  <LogoPlaceholder letter={project.title.charAt(0)} />
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                  <p className="font-bold text-primary mb-2">{project.tagline}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
