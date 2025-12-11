import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
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
              <a href="tel:+8801782448244" className="flex items-center gap-4 text-xl hover:text-brand-accent transition-colors">
                <Phone size={20} />
                +8801782448244
              </a>
              <div className="flex items-center gap-4 text-xl text-gray-300">
                <MapPin size={20} />
                Sector 18, Uttara, Dhaka, Bangladesh
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
                <Magnetic>
                  <a href="https://wa.me/+8801782448244" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-neutral-700 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all bg-neutral-900">
                    <svg fill="rgb(156 163 175 / var(--tw-text-opacity, 1))" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>whatsapp</title>
                      <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                    </svg>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://fiverr.com/var_imrn" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-neutral-700 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all bg-neutral-900">
                    <svg fill="rgb(156 163 175 / var(--tw-text-opacity, 1))" width="24px" height="24px" viewBox="-2.5 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-fiverr"><path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z' /><circle cx='14.375' cy='1.875' r='1.875' /></svg>
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