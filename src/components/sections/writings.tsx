import { WRITINGS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { AnimateIn } from '@/components/animate-in';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function Writings() {
  return (
    <section id="writing" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center sm:text-left">
              Writings
            </h2>
            <div className="space-y-2">
              {WRITINGS.map((writing, index) => (
                <div key={writing.id}>
                  <AnimateIn delay={index * 150}>
                    <Link href={writing.url} target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="p-4 rounded-lg transition-colors hover:bg-card">
                          <div className="flex justify-between items-start gap-4">
                              <div>
                                  <h3 className="font-headline text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{writing.title}</h3>
                                  <p className="text-sm text-muted-foreground">{writing.publication} &bull; {new Date(writing.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                  <p className="mt-2 text-sm text-foreground/80">{writing.description}</p>
                              </div>
                              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                          </div>
                      </div>
                    </Link>
                  </AnimateIn>
                  {index < WRITINGS.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
