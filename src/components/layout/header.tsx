"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#story', label: 'Story' },
    { href: '#library', label: 'Library' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4" ref={headerRef}>
      <div
        className={cn(
          'relative transition-all duration-300',
          'mx-auto max-w-max rounded-full border border-border bg-background/50 backdrop-blur-xl shadow-md',
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              'md:hidden absolute top-full w-screen max-w-xs left-1/2 -translate-x-1/2 mt-3 p-4',
              'rounded-2xl border border-border bg-background/50 backdrop-blur-xl shadow-md',
              'origin-top transition-all duration-300 ease-out',
              isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            )}
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground text-center py-2 rounded-lg hover:bg-white/5"
                >
                    {link.label}
                </Link>
              ))}
                <div className="pt-2">
                  <Button asChild className="w-full rounded-full">
                      <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  </Button>
                </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
