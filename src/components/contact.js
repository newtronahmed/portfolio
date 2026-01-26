import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="text-center max-w-2xl mx-auto" ref={sectionRef}>
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="name text-base mb-4"
      >
        04. What’s Next?
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-5xl font-bold mb-6 text-white"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-slate text-lg mb-12"
      >
        My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="mailto:devahmed365@gmail.com" className="btn-primary inline-block">
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
