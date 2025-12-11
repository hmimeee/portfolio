import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Coder Station Ltd.",
    role: "Senior Software Engineer",
    period: "October 2023 - Present",
    duration: "2 years 3 months",
    location: "Dhaka, Bangladesh",
    description: [
      "Develop high-quality software design and architecture.",
      "Review and debug code.",
      "Collaborate with internal teams and vendors to fix and improve products.",
      "Ensure software is up-to-date with latest technologies."
    ]
  },
  {
    company: "Apple",
    role: "Independent Contractor",
    period: "March 2023 - March 2024",
    duration: "1 year 1 month",
    location: "Remote (Softzino Technologies)",
    description: [
      "Working as an Independent Contractor through 'Softzino Technologies'.",
      "Contributing to high-scale application modules."
    ]
  },
  {
    company: "Softzino Technologies",
    role: "Software Engineer",
    period: "September 2022 - October 2023",
    duration: "1 year 2 months",
    location: "Dhaka, Bangladesh",
    description: [
      "Developing software solutions by studying information needs.",
      "Conferring with users and studying system flow, data usage, and work processes."
    ]
  },
  {
    company: "VISER X",
    role: "Software Engineer",
    period: "August 2021 - October 2022",
    duration: "1 year 3 months",
    location: "Uttara, Dhaka",
    description: [
      "Working on enterprise-level web applications.",
      "Leading a team to deliver robust solutions."
    ]
  },
  {
    company: "Junior Software Engineer",
    role: "Software Engineer",
    period: "November 2020 - September 2021",
    duration: "11 months",
    location: "Dhaka, Bangladesh",
    description: [
      "Worked as a junior software engineer.",
      "Gained a reward to be promoted to senior within a short time due to high performance."
    ]
  },
  {
    company: "Freelance & Early Career",
    role: "Web Developer",
    period: "2018 - 2020",
    duration: "2 years+",
    location: "Various",
    description: [
      "Web Developer at local initiative (Mar 2019 - Nov 2020).",
      "Upwork Web Developer & Designer (Mar 2019 - Aug 2019).",
      "Fiverr SEO & Backlink Specialist (Aug 2018 - Feb 2019)."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen py-24 bg-brand-black/80 backdrop-blur-md px-6 md:px-20 relative border-t border-neutral-900 overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mt-4">PROFESSIONAL <br/> JOURNEY</h2>
        </motion.div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-neutral-600 rounded-full border border-black group-hover:bg-brand-accent group-hover:scale-150 transition-all duration-300 z-10"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{exp.company}</h3>
                  <p className="text-lg text-gray-300 font-medium">{exp.role}</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 bg-neutral-900 text-xs text-brand-accent rounded-full border border-neutral-800">
                    {exp.period}
                  </span>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{exp.location}</p>
                </div>
              </div>
              
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base marker:text-brand-accent">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;