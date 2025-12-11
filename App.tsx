import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/ui/Cursor';
import BackgroundCanvas from './components/3d/BackgroundCanvas';
import Separator from './components/3d/Separator';
import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for a premium feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept all anchor link clicks to use Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Only intercept internal hash links
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="min-h-screen text-white selection:bg-brand-accent selection:text-black relative">
      <BackgroundCanvas />
      <Cursor />
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Experience />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Education />
      <Separator />
      <Contact />
    </main>
  );
};

export default App;