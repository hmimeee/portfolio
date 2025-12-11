import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-brand-black/80 backdrop-blur-md px-6 md:px-20 border-t border-neutral-900 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="p-3 bg-neutral-900 rounded-full text-brand-accent border border-neutral-800">
             <GraduationCap size={32} />
          </div>
          <div>
              <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Academic Background</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-1">EDUCATION</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                school: "Govt. M. M. Ali College",
                degree: "Bachelor of Arts - BA",
                field: "English Language and Literature",
                year: "2019 - 2023"
            },
            {
                school: "Khalilur Rahman College",
                degree: "HSC",
                field: "Business/Commerce",
                year: "2016 - 2017"
            },
            {
                school: "BST High School",
                degree: "SSC",
                field: "Business Studies",
                year: "2010 - 2015"
            }
            ].map((edu, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/80 transition-all duration-300 rounded-sm overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl -mr-12 -mt-12 group-hover:bg-brand-accent/10 transition-colors"></div>
                
                <p className="text-brand-accent text-sm font-mono mb-4">{edu.year}</p>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{edu.school}</h3>
                <p className="text-white font-medium text-lg mb-1">{edu.degree}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{edu.field}</p>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;