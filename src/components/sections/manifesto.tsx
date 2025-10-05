import { AnimateIn } from '@/components/animate-in';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 sm:py-32">
      <AnimateIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              From Vision to Reality: The Why, What, and How of Our AI Conglomerate.
            </p>

            <div className="space-y-12 text-left">
              <div className="p-8 border border-border rounded-lg bg-card/50">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  Why: The Vision
                </h3>
                <p className="text-lg text-foreground/80">
                  We are at a critical inflection point. The world is shifting, and the AI decade is upon us. Indonesia has the demographic dividend, the ambition, and the digital readiness to become a global technology powerhouse. My vision is to harness this transformative power of Artificial Intelligence to accelerate this trajectory, creating a future where Indonesian innovation leads on the world stage. We exist to build sovereign technological capability and unlock the nation's immense human potential.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg bg-card/50">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  What: The Vehicle
                </h3>
                <p className="text-lg text-foreground/80">
                  We are building a vertically integrated AI Tech Conglomerate, an ecosystem designed for sustainable growth and impact. It consists of three core pillars: <strong>Plajar</strong> (an AI academy to cultivate talent), <strong>Scoraa</strong> (an AI application suite for personal leverage), and <strong>Operatorr</strong> (an AI agency to solve real-world business problems and generate cash flow). Each part strengthens the others, creating a powerful flywheel for innovation.
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
