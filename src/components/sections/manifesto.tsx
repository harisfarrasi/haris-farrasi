import { AnimateIn } from '@/components/animate-in';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 sm:py-32">
      <AnimateIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              From Vision to Reality: The Why, What, and How of Our AI Conglomerate.
            </p>

            <div className="space-y-12 text-left">
              <div className="p-8 border border-border rounded-lg bg-card/50">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  Why: The Vision
                </h3>
                <p className="text-lg text-foreground/80">
                  We are at a critical inflection point. Indonesia has the demographic dividend, the ambition, and the digital readiness to become a global technology powerhouse. My vision is to harness the transformative power of Artificial Intelligence to accelerate this trajectory, creating a future where Indonesian innovation leads on the world stage. We exist to build sovereign technological capability and unlock the nation's immense human potential.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg bg-card/50">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  What: The Vehicle
                </h3>
                <p className="text-lg text-foreground/80">
                  We are building a vertically integrated AI Tech Conglomerate. This is not just a company; it's an ecosystem designed for sustainable growth and impact. It consists of three core pillars: an AI academy (Plajar) to cultivate talent, an AI application suite (Scoraa) to provide personal leverage, and an AI agency (Operatorr) to solve real-world business problems and generate cash flow. Each part strengthens the others, creating a powerful flywheel for innovation.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg bg-card/50">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  How: The Strategy
                </h3>
                <p className="text-lg text-foreground/80">
                  Our strategy is execution-focused and pragmatic. We start by empowering people with knowledge (Education), then we build tools that amplify their capabilities (Applications), and we apply these capabilities to generate value for businesses (Agency). This three-pronged approach allows us to build a strong talent pipeline, develop proprietary technology, and maintain financial resilience. We operate with a global mindset, while being deeply rooted in the Indonesian context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
