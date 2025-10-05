import { AnimateIn } from '@/components/animate-in';
import { Badge } from '@/components/ui/badge';

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'GraphQL',
  'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Figma'
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <AnimateIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hello! I'm Haris, a passionate software engineer with a knack for turning complex ideas into beautiful, functional, and user-centric digital products. My journey into tech started with a fascination for how things work, and it has evolved into a career dedicated to building robust and scalable applications.
              </p>
              <p>
                I thrive in collaborative environments and enjoy working on the full-stack, from architecting backend systems to crafting pixel-perfect user interfaces. I'm always eager to learn new technologies and methodologies to improve my craft.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
