import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Writings } from '@/components/sections/writings';
import { Library } from '@/components/sections/library';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Writings />
      </main>
      <Footer />
      <Library />
    </>
  );
}
