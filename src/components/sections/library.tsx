import { AnimateIn } from '@/components/animate-in';
import { Separator } from '@/components/ui/separator';
import { LIBRARY_LINKS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Library() {
  return (
    <section id="library" className="py-24 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Library
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The readings that have changed the way I see the world.
              </p>
            </div>
          </AnimateIn>
          <div className="space-y-1">
            {LIBRARY_LINKS.map((link, index) => (
              <AnimateIn key={link.id} delay={index * 50}>
                <div>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="p-3 rounded-lg transition-colors hover:bg-card/50">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="font-headline text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{link.title}</h3>
                                <p className="mt-1 text-foreground/80">{link.description}</p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                    </div>
                  </Link>
                  {index < LIBRARY_LINKS.length - 1 && <Separator />}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
