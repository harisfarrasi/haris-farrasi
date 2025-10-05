import { SOCIAL_LINKS } from '@/lib/data';
import { Linkedin, Send, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Footer() {

  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">Contact</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new ideas and collaborations. Let's connect to collaborate, invest, or join the mission. Let's build the future together.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:harisfarrasi@gmail.com">
                  <Mail />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://x.com/harisfarrasi" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com/harisfarrasi" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </Button>
            </div>

            <Button asChild size="lg">
              <Link href="mailto:harisfarrasi@gmail.com">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
