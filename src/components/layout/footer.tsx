import { SOCIAL_LINKS } from '@/lib/data';
import { Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Contact</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new ideas and collaborations. Let's connect to collaborate, invest, or join the mission. Let's build the future together.
            </p>
            <div className="flex justify-start gap-4 mt-8">
              <Button variant="outline" asChild>
                <a href="mailto:hello@harisfarrasi.com">
                  Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://t.me/harisfarrasi" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-sm">
            &copy; {currentYear} Haris Farrasi.
          </p>
        </div>
      </div>
    </footer>
  );
}
