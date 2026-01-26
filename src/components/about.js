import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Laravel",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -20 }}
          animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4">
            Hello! My name is Ahmed Zubairu, and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom templates — turns out hacking together a simple custom button taught me a lot about HTML & CSS!
          </p>

          <p className="mb-4 text-slate">
            Fast-forward to today, and I’ve had the privilege of working at an internship, where my most notable achievement was contributing to <a href="http://app.fayasms.com" target="_blank" rel="noopener noreferrer">Fayasms</a>, a large-scale SMS platform.
          </p>

          <p className="mb-4 text-slate">
            My main focus these days is building accessible, inclusive products and digital experiences at scale.
          </p>

          <p className="text-slate italic">
            When I’m not at the computer, I’m usually watching anime or exploring new technologies.
          </p>
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, x: 20 }}
          animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
        >
          <h3 className="text-white mb-6 text-xl">Technologies I’ve been working with:</h3>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm group">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2 text-slate hover:text-green transition-colors">
                <span className="text-green text-xs">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
