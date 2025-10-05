import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Writings } from '@/components/sections/writings';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Writings />
      </main>
      <Footer />
    </>
  );
}
