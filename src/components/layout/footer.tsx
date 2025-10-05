import { SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm currently open to new opportunities. Feel free to reach out if you want to collaborate or just say hi!
        </p>
        <Button size="lg" asChild>
          <a href="mailto:hello@harisfarrasi.com">
            hello@harisfarrasi.com
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-12">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
            <Twitter />
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-12">
          &copy; {currentYear} Haris Farrasi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
