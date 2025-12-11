import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from './3d/HeroScene';
import Magnetic from './ui/Magnetic';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const name = "IMRAN HOSSEN";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      <HeroScene />
      
      <div className="relative z-10 text-center flex flex-col items-center w-full px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-8 md:w-16 bg-brand-accent"></div>
          <p className="text-brand-accent uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            Sr. Software Engineer
          </p>
          <div className="h-[1px] w-8 md:w-16 bg-brand-accent"></div>
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] overflow-hidden mb-6">
          {name.split(" ").map((word, i) => (
             <span key={i} className="inline-block mx-2 md:mx-4">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 + (i * 5 + j) * 0.05, duration: 0.5, ease: "backOut" }}
                    className="inline-block hover:text-brand-accent transition-colors duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
             </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 max-w-xl text-gray-400 text-sm md:text-lg px-6 leading-relaxed font-light backdrop-blur-sm bg-black/20 rounded-xl p-4"
        >
          Architecting robust software designs and driving innovation in Fintech. 
          Expert in Laravel & Modern Web Technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 flex gap-6"
        >
          <Magnetic>
            <a href="#projects" className="inline-block px-8 py-4 bg-brand-white text-brand-black border border-brand-white hover:bg-transparent hover:text-brand-white transition-all duration-300 font-bold uppercase tracking-wider text-sm">
              View Work
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="inline-block px-8 py-4 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black transition-all duration-300 font-bold uppercase tracking-wider text-sm">
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <ArrowDown size={20} className="text-brand-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;