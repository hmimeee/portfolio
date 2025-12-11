import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const links = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 bg-brand-black/30 backdrop-blur-md border-b border-white/5"
      >
        <div className="text-2xl font-bold font-display tracking-tighter text-white">
          IMRAN<span className="text-brand-accent">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Magnetic key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-white hover:text-brand-accent transition-colors uppercase tracking-widest"
              >
                {link}
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors uppercase"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;