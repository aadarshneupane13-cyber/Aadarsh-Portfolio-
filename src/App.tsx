import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialLinks } from './components/SocialLinks';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#07090e] text-zinc-800 dark:text-slate-100 flex flex-col selection:bg-zinc-800 selection:text-white dark:selection:bg-white dark:selection:text-black font-['Poppins'] transition-colors duration-300">
      {/* Smooth minimal scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white origin-left z-50 pointer-events-none opacity-80"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <About />
        <Contact />
      </main>
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
