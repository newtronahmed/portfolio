import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projects from "../projects";

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card flex flex-col"
    >
      <div className="mb-6 overflow-hidden rounded-md h-48 relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-navy opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>

      <h3 className="text-xl mb-2 text-white font-semibold">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-green">
          {project.title}
        </a>
      </h3>

      <div className="flex-grow">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
          {project.stack.map((tech, index) => (
            <li key={index} className="text-xs font-mono text-slate uppercase tracking-wider">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Some Things I’ve Built
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
