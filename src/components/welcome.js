import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import {
  containerVariants,
  childrenVariant,
  experienceVariant,
  socialLinksVariants,
  fadeVariant,
  socialLinks,
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
        <ul className=" flex flex-col">
          {navLinks.map((each) => {
            return (
              <li className="name py-2 side-nav">
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
