import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Database, Cpu, Layout, Terminal, Layers } from 'lucide-react';

const skills = [
  { name: 'Laravel Framework', icon: <Server />, desc: 'Advanced Architecture, APIs' },
  { name: 'PHP Ecosystem', icon: <Code2 />, desc: 'Modern PHP, Composer' },
  { name: 'Frontend Tech', icon: <Layout />, desc: 'Vue.js, React, Tailwind' },
  { name: 'Database Design', icon: <Database />, desc: 'MySQL, PostgreSQL, Optimization' },
  { name: 'System Design', icon: <Cpu />, desc: 'Scalable Architecture, Microservices' },
  { name: 'Web Technologies', icon: <Globe />, desc: 'REST, GraphQL, WebSockets' },
  { name: 'DevOps & Tools', icon: <Terminal />, desc: 'Git, Docker, CI/CD' },
  { name: 'Management', icon: <Layers />, desc: 'Code Review, Team Leadership' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-black/80 backdrop-blur-md px-6 md:px-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">TECHNICAL ARSENAL</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            My expertise lies in building robust backend systems and seamless frontend interfaces, ensuring high performance and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0, 209, 255, 0.2)" }}
              className="p-8 border border-neutral-800 bg-black/50 hover:border-brand-accent/50 transition-all duration-300 group rounded-sm"
            >
              <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 bg-neutral-900/50 w-12 h-12 flex items-center justify-center rounded-full">
                {React.cloneElement(skill.icon as React.ReactElement<{ size: number }>, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-500 font-mono text-sm group-hover:text-gray-300 transition-colors">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;