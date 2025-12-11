import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-[60vh] py-24 px-6 md:px-20 bg-brand-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-16 overflow-hidden relative z-10">
      
      <div className="max-w-4xl w-full text-center md:text-left">
        {/* Content Column */}
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 justify-center md:justify-start"
          >
             <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold">About Me</span>
             <div className="h-[1px] w-20 bg-neutral-800"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            INNOVATION IN <br/>
            <span className="text-transparent stroke-text text-brand-accent">EVERY LINE OF CODE</span>
          </motion.h2>

          <motion.div 
            className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              At <strong className="text-white">Coder Station Ltd.</strong>, our commitment to innovation is reflected in the fintech solutions we craft. 
              As a Senior Software Engineer, I leverage my proficiency in Laravel and modern web technologies to architect robust software designs.
            </p>
            <p>
              I specialize in ensuring quality through code reviews and collaborating effectively with teams and vendors for product enhancements.
              With a background in <strong className="text-white">English Language and Literature</strong>, I have honed my communication and analytical skills, 
              which are pivotal in understanding user requirements and translating them into seamless software experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 pt-8 border-t border-neutral-800 mt-8">
              <div>
                <h3 className="text-brand-accent font-bold text-4xl md:text-5xl mb-2">5+</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-brand-accent font-bold text-4xl md:text-5xl mb-2">10+</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500">Major Projects</p>
              </div>
              <div>
                <h3 className="text-brand-accent font-bold text-4xl md:text-5xl mb-2">3</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500">Languages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;