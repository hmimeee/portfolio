import React from 'react';
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

const App: React.FC = () => {
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
      <Education />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
    </main>
  );
};

export default App;