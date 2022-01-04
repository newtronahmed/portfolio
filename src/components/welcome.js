import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import {
  containerVariants,
  childrenVariant,
  // experienceVariant,
  // socialLinksVariants,
  // fadeVariant,
  // socialLinks,
  // projectList,
} from "../utilities/motion";
function Welcome({ openNav, setOpenNav }) {
  const navLinks = [
    {
      path: "#about",
      title: "About",
    },
    {
      path: "#services",
      title: "Services",
    },
    {
      path: "#work",
      title: "Work",
    },
    {
      path: "#contact",
      title: "Contact",
    },
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial="init"
      animate="end"
      id="banner"
    >
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />

      <div className="w-full hero min-h-screen wow bg-cover bg-center name ">
        <div className="text-center">
          <motion.div variants={childrenVariant} className=" px-4  wow">
            Hi, I am
          </motion.div>

          <motion.div variants={childrenVariant} className="">
            <div className="heroTextXL lg:bg-transparent inline-block  px-4  font-boldest">
              Ahmed
            </div>
          </motion.div>
          <motion.div variants={childrenVariant}>
            <div className="heroTextXL  px-4  inline-block font-boldest    ">
              Zubairu
            </div>
          </motion.div>
          <motion.div variants={childrenVariant} className="md:text-3xl p-4">
            <div className="  md:text-2xl p-2 ">I am a Developer</div>
          </motion.div>
          <motion.div variants={childrenVariant} className="p-4 inline-flex ">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              download
              className="rounded p-2 text-white flex items-center "
            >
              RESUME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        className={`nav-list py-2 px-2 items-center bg-navy ${
          openNav ? "nav-list-active" : ""
        }`}
      >
        <div className="ml-auto">
          <button className="py-1 px-1" onClick={() => setOpenNav(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </div>
        <div className="footer-icons-wrapper flex justify-center text-sm my-2  ">
          <a
            href="http://github.com/newtronahmed"
            target="_blank"
            className="w-5 h-5 mx-2 "
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/neutronahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 mx-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <title>Twitter</title>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="http://github.com/newtronahmed"
            target="_blank"
            className="w-5 h-5 mx-2 "
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="http://github.com/newtronahmed"
            target="_blank"
            className="w-5 h-5  mx-2 "
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
        <ul className=" flex flex-col">
          {navLinks.map((each) => {
            return (
              <li className="name py-2 my-2 side-nav">
                <a
                  href={each.path}
                  // className="nav-list-item"
                  onClick={() => setOpenNav(false)}
                  rel="noopener noreferrer"
                >
                  {each.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </motion.div>
  );
}

export default Welcome;
