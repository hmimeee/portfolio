import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, ArrowRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black/90 backdrop-blur-xl text-white pt-32 pb-10 px-6 md:px-20 relative overflow-hidden border-t border-neutral-900">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight">
              LET'S BUILD <br />
              <span className="text-brand-accent">SOMETHING GREAT</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-0"
          >
            <Magnetic>
              <a href="mailto:hmimeee@gmail.com" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-colors">
                <span>Get in Touch</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-neutral-800 pt-16">
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Contact Details</h3>
            <div className="space-y-6">
              <a href="mailto:hmimeee@gmail.com" className="flex items-center gap-4 text-xl hover:text-brand-accent transition-colors">
                <Mail size={20} />
                hmimeee@gmail.com
              </a>
              <a href="tel:01782448244" className="flex items-center gap-4 text-xl hover:text-brand-accent transition-colors">
                <Phone size={20} />
                01782448244
              </a>
              <div className="flex items-center gap-4 text-xl text-gray-300">
                <MapPin size={20} />
                Sector 10, Uttara, Dhaka, Bangladesh
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
             <div className="md:text-right">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Social Presence</h3>
                <div className="flex md:justify-end gap-4">
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/hmimeee" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-neutral-700 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all bg-neutral-900">
                            <Linkedin size={24} />
                        </a>
                    </Magnetic>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest border-t border-neutral-900 pt-8">
          <p>© {new Date().getFullYear()} Imran Hossen. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;