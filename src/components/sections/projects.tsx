"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AnimateIn } from '@/components/animate-in';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';

const LogoPlaceholder = ({ letter }: { letter: string }) => (
  <div className="w-20 h-20 bg-card flex items-center justify-center rounded-full text-4xl font-headline text-primary">
    {letter}
  </div>
);

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Projects
          </h2>
        </AnimateIn>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Mobile Carousel View */}
        <div className="md:hidden -mx-4">
           <Carousel setApi={setApi} opts={{
              align: "center",
              loop: true,
           }}>
            <CarouselContent>
              {PROJECTS.map((project, index) => (
                <CarouselItem key={project.id} className="basis-3/4">
                  <div className="p-1">
                    <Card className={cn(
                      "h-full flex flex-col items-center text-center p-6 bg-card transition-all duration-300 rounded-2xl",
                      index === current ? "scale-100 opacity-100" : "scale-90 opacity-60"
                    )}>
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
