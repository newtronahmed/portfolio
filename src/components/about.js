import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    { name: "Frontend", items: ['TypeScript', 'React', 'Next.js', 'Redux'] },
    { name: "Backend", items: ['Node.js', 'Express', 'Laravel', 'FastAPI', 'Spring Boot', '.NET'] },
    { name: "Databases", items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Cosmos DB', 'Firebase', 'Pinecone DB'] },
    { name: "Tools", items: ['Git', 'Vim', 'Linux', 'Redux RTK'] },
    { name: "Focus", items: ['Microservices', 'DevOps', 'Cloud Computing'] }
  ];

  return (
    <section id="about">
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -20 }}
          animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="mb-4 text-lg text-white">
            I’m a full-stack software engineer focused on building scalable, production-ready web applications. I work across the frontend and backend, with experience designing clean APIs, managing data flows, and building maintainable UI components.
          </p>

          <p className="mb-4 text-slate">
            I’ve worked with React and Next.js on the frontend, and Expressjs, Spring Boot and Laravel on the backend, building systems that handle real users, real data, and real constraints. I care deeply about code quality, performance, and writing software that’s easy to extend and maintain.
          </p>

          <p className="text-slate italic">
            When I’m not at the computer, I’m usually exploring new technologies or tackling complex architectural challenges.
          </p>
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, x: 20 }}
          animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card"
        >
          <h3 className="text-white mb-6 text-xl">Technical Toolkit</h3>
          <div className="space-y-6">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-green font-mono text-xs uppercase tracking-widest mb-2">{category.name}</h4>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <li key={i} className="text-xs bg-lightest-navy text-light-slate px-2 py-1 rounded border border-glass-border hover:border-green hover:text-green transition-colors cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
