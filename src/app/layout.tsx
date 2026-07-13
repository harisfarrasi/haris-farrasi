import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Haris Farrasi',
  description: 'My name is Alwan Haris Farrasi. I’m the CEO and founder of Aksa, a social action platform that turns goals into daily action.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
