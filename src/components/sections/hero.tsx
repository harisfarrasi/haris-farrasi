import { AnimateIn } from '@/components/animate-in';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Haris Farrasi
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="font-headline text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-10">
            Making Technology Accessible.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
