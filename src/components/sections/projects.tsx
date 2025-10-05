"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AnimateIn } from '@/components/animate-in';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { PROJECTS } from '@/lib/data';

const LogoPlaceholder = ({ letter }: { letter: string }) => (
  <div className="w-20 h-20 bg-card flex items-center justify-center rounded-lg text-4xl font-headline text-primary">
    {letter}
  </div>
);

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [scaleValues, setScaleValues] = useState<number[]>([]);
  const [opacityValues, setOpacityValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!api) return;

    const scrollProgress = api.scrollProgress();
    const newScaleValues = api.scrollSnapList().map((snap) => {
        let diff = Math.abs(snap - scrollProgress);
        if (api.options?.loop) {
            const wrapDiff = Math.abs(1 - diff);
            diff = Math.min(diff, wrapDiff);
        }
        return 1 - diff * 0.2; // Center is 1, others are smaller
    });
    
    const newOpacityValues = api.scrollSnapList().map((snap) => {
        let diff = Math.abs(snap - scrollProgress);
        if (api.options?.loop) {
            const wrapDiff = Math.abs(1 - diff);
            diff = Math.min(diff, wrapDiff);
        }
        return 1 - diff * 0.5; // Center is 1, others are more transparent
    });

    setScaleValues(newScaleValues);
    setOpacityValues(newOpacityValues);
  }, [api]);


  useEffect(() => {
    if (!api) {
      return;
    }
    
    onScroll();

    api.on("scroll", onScroll);
    api.on("reInit", onScroll);
    api.on("select", onScroll);

    return () => {
      api?.off("scroll", onScroll);
    };
  }, [api, onScroll]);

  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-72 h-72 bg-primary/20 rounded-full filter blur-[150px] -z-10"></div>
        <div className="w-72 h-72 bg-accent/20 rounded-full filter blur-[150px] -z-10 animation-delay-4000"></div>
      </div>

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
              <Card className="h-full flex flex-col items-center text-center p-6 bg-background/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border-white/10 rounded-2xl">
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
                <CarouselItem key={project.id} className="basis-2/3">
                  <div className="p-1">
                    <Card 
                      className="h-full flex flex-col items-center text-center p-6 bg-background/10 backdrop-blur-xl transition-transform duration-300 ease-out shadow-lg border-white/10 rounded-2xl"
                      style={{
                        transform: `scale(${scaleValues[index] || 0.8})`,
                        opacity: opacityValues[index] || 0.5,
                      }}
                    >
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
