

import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import PhoneIcon from "@material-ui/icons/Phone";
// import LinkedIn from "@material-ui/icons/LinkedIn";
// import market from './images/market.png'
// import projects from "./projects";
// import portfolioSvg from "./images/portfolio.svg";
// import aboutMe from "./images/aboutMe.svg";
// import programmer from "./images/webdev.jpg";
// import Section from "./components/section"*********;
// import frontend from "./images/frontend.svg";
// import WOW from "wowjs";

import About from "./components/about";
// import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import { Divider } from "@material-ui/core";
// import { useInView } from "react-intersection-observer";
// import css from './images/css.png';
// import javascript from "./images/javascript.png";
// import laravel from "./images/laravel.png";
// import react from "./images/react.png";
// import mysql from "./images/mysql.png";
// import sass from "./images/sass.png";
// import nodejs from "./images/nodejs.png";

// import Logo from '/assets/logo.svg'

// import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Services from "./components/services";

const App = () => {
  // useEffect(() => {
  // 	new WOW.WOW({
  // 	    live: false
  // 	}).init();
  // }, [])
  const [openNav, setOpenNav] = React.useState(false);
  /*
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("end");
    }
    if (!inView) {
      controls.start("init");
    }
  }, [inView, controls]);
  const skills = [nodejs, javascript, laravel, react, mysql, sass];
  */
  return (
    <div id="App">
      <Welcome openNav={openNav} setOpenNav={setOpenNav} />
      <About />
      <Services />
      <Work />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;

// Arrow down
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
// </svg> */}
//code
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
// </svg> */}
//download
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
// </svg> */}
// external link
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// </svg> */}
//menu
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
// </svg> */}
//trendingUp
// {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// </svg> */}
