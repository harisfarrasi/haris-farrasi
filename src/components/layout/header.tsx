"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#essays', label: 'Essays' },
    { href: '#library', label: 'Library' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div
        className={cn(
          'relative transition-all duration-300',
          'mx-auto max-w-max rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-md', // Desktop: floating island
          'px-4'
        )}
      >
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-headline text-xl font-bold text-foreground transition-colors hover:text-primary md:px-4">
            Haris Farrasi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild className="rounded-full">
                <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </Button>
            ))}
            <Button asChild className="rounded-full">
                <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-headline text-xl font-bold">
                        Haris Farrasi
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg text-muted-foreground hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                  </nav>

                  <div className="mt-auto">
                    <Button asChild className="w-full rounded-full">
                        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
