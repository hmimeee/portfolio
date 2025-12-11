import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Box, Zap, Server } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually stunning, user-centric designs that tell your brand's story.",
    icon: "Monitor"
  },
  {
    id: 2,
    title: "Development",
    description: "Building robust, scalable frontend and backend solutions using modern tech stacks.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Node.js Ecosystem",
    description: "Architecting high-performance server-side solutions with Node.js and modern JS tools.",
    icon: "Server"
  },
  {
    id: 4,
    title: "3D Experiences",
    description: "Integrating immersive 3D elements to create memorable interactive web journeys.",
    icon: "Box"
  },
  {
    id: 5,
    title: "Optimization",
    description: "Enhancing website performance and SEO to ensure maximum reach and speed.",
    icon: "Zap"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black/80 backdrop-blur-md px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">DIGITAL SOLUTIONS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-brand-black/50 border border-neutral-800 hover:border-brand-accent transition-all duration-300 flex flex-col items-start h-full backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                {service.id === 1 && <Monitor size={20} />}
                {service.id === 2 && <Smartphone size={20} />}
                {service.id === 3 && <Server size={20} />}
                {service.id === 4 && <Box size={20} />}
                {service.id === 5 && <Zap size={20} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                {service.description}
              </p>
              <div className="w-full h-[1px] bg-neutral-800 mt-8 group-hover:bg-brand-accent transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;