import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { AnimateIn } from '@/components/animate-in';

export function Projects() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Selected Work
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const projectImage = getImage(project.image);
            return (
              <AnimateIn key={project.id} delay={index * 150}>
                <Card className="h-full flex flex-col overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                  {projectImage && (
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    {project.sourceUrl !== '#' && <Button variant="outline" asChild><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>}
                    {project.liveUrl !== '#' && <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>}
                  </CardFooter>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
