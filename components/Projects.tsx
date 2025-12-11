import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Core Platform",
    category: "System Architecture",
    description: "Architected robust fintech solutions handling high-volume transactions at Coder Station.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Enterprise Web App",
    category: "Full Stack Development",
    description: "Led team development for a large-scale enterprise application at VISER X.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "High-Scale Modules",
    category: "Backend Engineering",
    description: "Contributed to specialized modules for Apple via Softzino Technologies.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    category: "Web Development",
    description: "Delivered efficient e-commerce platforms and optimized data flows.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop"
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 bg-brand-black/80 backdrop-blur-md px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white">SELECTED <br/> WORKS</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right mt-6 md:mt-0">
            A showcase of enterprise-grade solutions and technical initiatives.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors cursor-pointer"
            >
              <div className="z-10 flex flex-col gap-2 w-full md:w-auto">
                <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">{project.category}</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="z-10 mt-6 md:mt-0 flex items-center justify-between w-full md:w-auto gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-400 text-sm max-w-xs">{project.description}</span>
                <Magnetic>
                  <div className="w-12 h-12 rounded-full border border-brand-accent flex items-center justify-center text-brand-accent bg-black">
                    <ArrowUpRight size={20} />
                  </div>
                </Magnetic>
              </div>

              {/* Hover Image Reveal - Desktop only */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block absolute right-[25%] top-1/2 -translate-y-1/2 pointer-events-none z-0 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-2xl shadow-brand-accent/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;