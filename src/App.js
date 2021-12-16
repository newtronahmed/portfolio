import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
// import market from './images/market.png'
import projects from "./projects";
import portfolioSvg from "./images/portfolio.svg";
import aboutMe from "./images/aboutMe.svg";
import programmer from "./images/webdev.jpg";
import Section from "./components/section";
// import WOW from "wowjs";
import { Divider } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
// import css from './images/css.png';
import javascript from "./images/javascript.png";
import laravel from "./images/laravel.png";
import react from "./images/react.png";
import mysql from "./images/mysql.png";
import sass from "./images/sass.png";
import nodejs from "./images/nodejs.png";
// import Logo from '/assets/logo.svg'
import {
  containerVariants,
  childrenVariant,
  experienceVariant,
  socialLinksVariants,
  fadeVariant,
  socialLinks,
  projectList,
} from "./utilities/motion";

const App = () => {
  // useEffect(() => {
  // 	new WOW.WOW({
  // 	    live: false
  // 	}).init();
  // }, [])
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
  // const projects = [
  // 	{
  // 		title: 'Frontend Mentor Joblisting Challenge',
  // 		stack: ['react', 'styled-components', 'bootstrap',],
  // 		image: frontendMentor,
  // 		link: 'http://newtrojoblisting.netlify.app'

  // 	},
  // 	{
  // 		title:'Nextjs Ecommerce website + paypal integration',
  // 		stack:['nextjs','material-ui','paypal','vercel'],
  // 		image: ahmedzona,
  // 		link:'https://ahmedzona.vercel.app'

  // 	},
  // 	{
  // 		title: 'React Laravel SPA + Laravel Sanctum Auth',
  // 		stack: ['laravel', 'laravel-sanctum', 'react'],
  // 		image: frontendMentor,
  // 		link: 'https://github.com/newtronahmed'
  // 	},
  // 	{
  // 		title: 'Laravel React Inventory Manager',
  // 		stack: ['laravel', 'react', 'redux',],
  // 		image: inventory,
  // 		link: 'http://guarded-sierra-88803.herokuapp.com',
  // 	},
  // 	{
  // 		title: 'React Commercejs Stripe Ecommerce Project',
  // 		stack: ['react', 'redux', 'material-ui', 'stripe'],
  // 		image: ecommerce,
  // 		link: 'http://newtro-ecommerce.netlify.app',
  // 	},
  // 	{
  // 		title: 'Udemy React Robofriends App',
  // 		stack: ['react', 'tacyons'],
  // 		image: robofriends,
  // 		link: 'http://newtronahmed.netlify.app',
  // 	},
  // 	{
  // 		title: ' House Market Project',
  // 		stack: ['react', 'context-api', 'tailwind-css'],
  // 		image: market,
  // 		link: 'http://newtro-market.netlify.app',
  // 	},
  // 	{
  // 		title: 'YelpCamp Express  Project',
  // 		stack: ['Express', 'Ejs', 'PassportJs'],
  // 		link: 'http://stormy-falls-57297.herokuapp.com',
  // 		image: yelpcamp,
  // 	},
  // 	{
  // 		title:'ConverX chat application',
  // 		stack:['Expressjs','Socket.io','MongoDb','Material Ui'],
  // 		link:'http://brave-visvesvaraya-2ba0ba.netlify.app',
  // 		image:yelpcamp
  // 	}

  // ]

  return (
    <div id="App">
      <motion.div
        variants={containerVariants}
        initial="init"
        animate="end"
        id="banner"
      >
        <nav className="navbar shadow-md">
          <div className="container mx-auto flex items-center">
            <div className="nav-header ">
              <div className="border-2 rounded-full inline-block p-2 border-green ">
                <img
                  src="/assets/logo.svg"
                  className="w-6 h-6 text-green"
                  alt="logo"
                />
              </div>
            </div>
            <div className="nav-items ml-auto">
              <ul className="flex">
                <li><a href="/">About</a></li>
                <li><a href="/">Experience</a></li>
                <li><a href="/">Work</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="w-full min-h-screen wow 
		   bg-cover bg-center name flex items-center justify-center
		    flex-wrap content-center  "
        >
          <motion.div variants={childrenVariant} className="text-white wow">
            Hi, i am
          </motion.div>

          <motion.div
            variants={childrenVariant}
            className="w-full flex wow justify-center"
          >
            <div className="  md:text-2xl  frost-gradient  lg:bg-transparent text-white px-4 py-1 font-bold tracking-widest ">
              Ahmed
            </div>
            <div className="  md:text-2xl text-white px-4 py-1 font-bold bg-black tracking-widest name frost-gradient-reverse ">
              Zubairu
            </div>
          </motion.div>

          <motion.div variants={childrenVariant} className=" p-4">
            <div className="frost-gradient  md:text-2xl p-2 text-white">
              I am a Developer
            </div>
          </motion.div>
          <motion.div
            variants={childrenVariant}
            className="p-4 w-100 flex justify-center "
          >
            <a
              href="/assets/resume.pdf"
              target="_blank"
              download
              className=" bg-black rounded p-2 text-white flex items-center "
            >
              RESUME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  fill="#64ffda"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </div>
        <aside className="nav-list">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </aside>
      </motion.div>

      {/*About Me Section*/}
      <Section title="Something About Me" svg={aboutMe} />
      <section className=" p-y-10 grid md:grid-cols-2 ">
        <div className=" wow slideInLeft ">
          <div className="frost-gradient">
            <img src={programmer} alt="developer" className=" rotate-image" />
          </div>
        </div>
        <div className="md:p-16 p-8 ">
          <div className="m-6 wow slideInRight">
            Hello, I am Ahmed Zubairu , a mid-level professional{" "}
            <strong>Web developer</strong> and a L300 student of the University
            of Ghana . I am a hardworking , creative , and a very honest person
            . I am very passionate about software development because I am able
            to bring my ideas to Life. Infact I am a self-taught web developer
            and as you may know it takes more than just passion to be a
            self-taught developer. I have hands on experience in building
            complex react , laravel and Mern stack applictions . Recently I
            worked under a team of react-native developers in developing the
            interface of a car-pooling application popularly known as Vielly. I
            free-lance using the skills I have acquired through platforms like
            Udemy , Freecodecamp , tech blogs etc. Currently I am learning
            nodejs and mongoDB. Lastly , I am open to job opportunities.
          </div>
        </div>
      </section>
      {/*Resume Section */}
      {/* <section>
        <div>
          <motion.div
            variants={experienceVariant}
            ref={ref}
            animate={controls}
            initial="init"
            className="wow"
          >
            <motion.div
              variants={fadeVariant}
              className="text-xl wow capitalize my-2 font-bold wow "
            >
              Experience
            </motion.div>
            <motion.div variants={fadeVariant} className="text-lg wow my-2 wow">
              Vielly
            </motion.div>
            <motion.li variants={fadeVariant} className="wow ">
              Development of UI of Car Pooling Application Working With Other
              Frontend Developer teams
            </motion.li>
            <motion.li variants={fadeVariant} className="wow ">
              Integration of Apis
            </motion.li>
          </motion.div>
          <br />
          <motion.div
            variants={experienceVariant}
            initial="init"
            animate={controls}
            className="my-2 wow"
          >
            <motion.div
              variants={fadeVariant}
              className="text-lg capitalize my-2 wow "
            >
              Full-stack dev internship
            </motion.div>
            <motion.li variants={fadeVariant} className="wow fadeIn">
              Developing the api documentation of FayaSMS , bulk sms platform
            </motion.li>
            <motion.li variants={fadeVariant} className="wow fadeIn">
              Contributed in implementing features on FayaSMS admin dashboard{" "}
            </motion.li>

            <motion.li variants={fadeVariant} className="wow fadeIn">
              Developing skills in ReactJs and Laravel
            </motion.li>
          </motion.div>
			<br />

		  <motion.div
              variants={experienceVariant}
              ref={ref}
              initial="init"
              animate={controls}
            >
              <motion.div className="text-xl my-2 font-bold wow slideInLeft">
                Education
              </motion.div>

              <motion.div
                variants={fadeVariant}
                className="text-lg wow slideInRight "
              >
                University Of Ghana
              </motion.div>

              <br />
              <motion.div
                variants={fadeVariant}
                className="text-lg my-2 wow slideInRight"
              >
                Udemy
              </motion.div>
              <motion.li variants={fadeVariant} className="wow fadeIn">
                Rob Percival's The Complete Web Developer 2.0
              </motion.li>
              <motion.li variants={fadeVariant} className="wow fadeIn">
                Colt Steele's The Web Developer Bootcamp
              </motion.li>
              <motion.li variants={fadeVariant} className="wow fadeIn">
                Andrei aneagoi's The Complete Web Develper Zero To Mastery
              </motion.li>
              <motion.li variants={fadeVariant} className="wow fadeIn">
                Laracast
              </motion.li>
            </motion.div>
        </div>
      </section> */}
      {/* <Section title='Journey' svg={portfolioSvg} />
				<div className='md:p-16 xs:p-8'>
				Coming Soon
				</div> */}
      {/* Skills Section */}
      <Section title="Skills" svg={portfolioSvg} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {skills.map((each) => {
          return (
            <div className="frost-gradient">
              <img src={each} className="w-12 h-12" alt="skill" />
            </div>
          );
        })}
      </div>
      <div class="neonText">Hello world</div>

      {/* what i can do

								Design What you want
								develop what you need - fast and
								help you to grow  -increase traffic*/}
      {/*Works or Projects Section*/}
      <section className="py-5 md:p-5 vh-full">
        <Section title="Projects Over the Years" svg={portfolioSvg} />

        <div className="container flex md:justify-evenly flex-col md:flex-row flex-wrap    ">
          {projects.map((each) => (
            <div className="w-full   md:w-1/3 p-6 wow slideInUp h-auto">
              <a
                href={each.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-full "
              >
                <div className="project-wrapper bg-light-navy  raise shadow-md p-4 lg:p-6">
                  <img
                    src={each.image}
                    alt="project"
                    className=" w-full lg:h-32 "
                  />

                  <div className="lg:h-24 lg:h-20">
                    <Divider />
                    <div className="max-w-full font-bold text-white">
                      {each.title}
                    </div>
                    <ul className="max-w-full ">
                      {each.stack.map((each) => (
                        // <div className="text-xs inline-flex items-center font-bold leading-sm uppercase    rounded-full">
                        //   <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1   rounded-full">
                        //     <svg
                        //       xmlns="http://www.w3.org/2000/svg"
                        //       className="h-5 w-5"
                        //       viewBox="0 0 20 20"
                        //       fill="currentColor"
                        //     >
                        //       <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        //     </svg>
                        //     {each}
                        //   </div>
                        // </div>
						<li className="text-xs inline-flex px-3 capitalize py-2 leading-lg text-slate">{each}</li>
					  ))}
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <footer className="justify-center flex ">
        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h2 class="text-xl font-bold mb-6 sm:text-center xl:text-left name">
            Stay connected
          </h2>

          <motion.div
            variants={socialLinksVariants}
            className="flex  w-full justify-center"
          >
            <motion.a
              variants={socialLinks}
              href="https://github.com/newtronahmed"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 pb-1"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              variants={socialLinks}
              href="https://twitter.com/neutronahmed"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 pb-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              variants={socialLinks}
              href="https://github.com/newtronahmed"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 pb-1"
            >
              <GitHubIcon />{" "}
            </motion.a>
            <motion.a
              variants={socialLinks}
              href="tel:+23324778739"
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 pb-1"
            >
              <PhoneIcon />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
