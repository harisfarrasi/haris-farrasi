import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const geist = Geist({ subsets: ['latin'] });

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
      <body className={geist.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
