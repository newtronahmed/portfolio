import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import Navbar from "./navbar";
import {
  containerVariants,
  childrenVariant,
} from "../utilities/motion";

function Welcome({ openNav, setOpenNav }) {
  const navLinks = [
    { path: "#about", title: "About" },
    { path: "#services", title: "Services" },
    { path: "#work", title: "Work" },
    { path: "#blog", title: "Blog" },
    { path: "#contact", title: "Contact" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="init"
      animate="end"
      className="relative overflow-hidden"
      id="welcome"
    >
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />

      <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-20">
        <div className="max-w-4xl w-full">
          <motion.div variants={childrenVariant} className="name mb-4 text-lg">
            Hi, my name is
          </motion.div>

          <motion.div variants={childrenVariant} className="mb-2">
            <h1 className="heroTextXL">
              Ahmed Zubairu.
            </h1>
          </motion.div>

          <motion.div variants={childrenVariant} className="mb-6">
            <h2 className="heroTextL flex flex-wrap items-center gap-x-3">
              I build things for the{" "}
              <span className="text-green">
                <Typed
                  strings={["web.", "mobile.", "desktop."]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </span>
            </h2>
          </motion.div>

          <motion.div variants={childrenVariant} className="max-w-lg mb-10 text-slate text-lg">
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
          </motion.div>

          <motion.div variants={childrenVariant} className="flex flex-wrap gap-4">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              download
              className="btn-primary flex items-center gap-2"
            >
              Check out my resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      <aside
        className={`nav-list fixed top-0 right-0 h-full w-full max-w-sm z-[100] flex flex-col items-center justify-center p-10 transition-all duration-300 transform ${openNav ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-8 right-10 text-green"
          onClick={() => setOpenNav(false)}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-8 text-center list-none p-0 m-0 mb-12">
          {navLinks.map((link, i) => (
            <li key={i} className="font-mono text-lg">
              <a
                href={link.path}
                className="flex flex-col gap-1 items-center hover:text-green transition-colors"
                onClick={() => setOpenNav(false)}
              >
                <span className="text-green text-sm">0{i + 1}.</span>
                <span className="text-lightest-slate text-2xl">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
          Resume
        </a>
      </aside>
    </motion.div>
  );
}

export default Welcome;
