"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AnimateIn } from '@/components/animate-in';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BookOpen, Spline, Workflow } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { PROJECTS } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

type IconName = keyof Omit<typeof LucideIcons, 'createReactComponent' | 'icons'>;

const ProjectIcon = ({ name, className }: { name: IconName; className?: string }) => {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  if (!Icon) return null;
  return <Icon className={className} />;
};

const IconContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="w-20 h-20 bg-card flex items-center justify-center rounded-lg text-primary shadow-inner border border-white/10">
      {children}
    </div>
  );

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Future logic on select can go here
    });

  }, [api]);

  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden relative scroll-mt-20">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-72 h-72 bg-primary/20 rounded-full filter blur-[150px] -z-10"></div>
        <div className="w-72 h-72 bg-accent/20 rounded-full filter blur-[150px] -z-10 animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Creations designed to provide leverage and drive progress.
              </p>
            </div>
        </AnimateIn>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 150} id={project.id}>
              <Card className="h-full flex flex-col items-center text-center p-6 bg-background/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border-white/10 rounded-2xl">
                <CardHeader className="p-0 mb-4">
                  <IconContainer>
                    <ProjectIcon name={project.icon as IconName} className="w-10 h-10" />
                  </IconContainer>
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
                <CarouselItem key={project.id} className="basis-5/6">
                  <div className="p-1" id={project.id}>
                    <Card 
                      className="h-full flex flex-col items-center text-center p-6 bg-background/10 backdrop-blur-xl transition-transform duration-300 ease-out shadow-lg border-white/10 rounded-2xl"
                    >
                      <CardHeader className="p-0 mb-4">
                        <IconContainer>
                           <ProjectIcon name={project.icon as IconName} className="w-10 h-10" />
                        </IconContainer>
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
