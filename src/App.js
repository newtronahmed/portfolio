
import React ,{useEffect}from 'react';
import {motion} from 'framer-motion'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import market from './images/market.png'
import robofriends from './images/robofriends (1).png'
import ecommerce from './images/ecommerce.png'
import inventory from './images/inventory.png'
// import market from './images/market.png'
import portfolioSvg from './images/portfolio.svg'
import aboutMe from './images/aboutMe.svg'
import programmer from './images/programmer.png'
import frontendMentor from './images/frontend.jpg'
import Section from './components/section'
import WOW from 'wowjs'
import { Divider} from '@material-ui/core';
// import css from './images/css.png';
import javascript from './images/javascript.png'
import laravel from './images/laravel.png'
import react from './images/react.png'
import mysql from './images/mysql.png'
import  sass from './images/sass.png'
import nodejs from './images/nodejs.png'
import yelpcamp from './images/yelpcamp.png'


const containerVariants = {
	init:{
		opacity:0,
	},
	end:{
		opacity:1,
		transition:{
			when:'beforeChildren',
			type:'tween',
			duration:1.3,
			staggerChildren:0.6,
		}
	},
}
const childrenVariant ={
	init:{
		opacity:0,
		y:100,
	},
	end:{
		opacity:1,
		y:0,
		transition:{
			duration:1.3,
		}
	}
}
const experienceVariant = {
	init:{
		
	},
	end:{
		
		transition:{
			when:'beforeChildren',
			staggerChildren:1,

		}
	}
}
const fadeVariant ={
	init:{
		opacity:0,
	},
	end:{
		opacity:1,
	}
}

const App = () => {
	// useEffect(() => {
	// 	new WOW.WOW({
	// 	    live: false
	// 	}).init();
	// }, [])
	const skills = [nodejs,javascript,laravel,react,mysql,sass]
	const projects = [
		{
			title: 'Frontend Mentor Joblisting Challenge',
			stack: ['react','styled-components', 'bootstrap',],
			image: frontendMentor,
			link: 'http://newtrojoblisting.netlify.app'

		},
		{
			title: 'React Laravel SPA + Laravel Sanctum Auth',
			stack: ['laravel','laravel-sanctum','react'],
			image: frontendMentor,
			link: 'https://github.com/newtronahmed'
		},
		{
			title: 'Laravel React Inventory Manager',
			stack: ['laravel','react','redux',],
			image: inventory,
			link: 'http://guarded-sierra-88803.herokuapp.com',
		},
		{
			title: 'React Commercejs Stripe Ecommerce Project',
			stack: ['react','redux','material-ui','stripe','commercejs'],
			image:ecommerce,
			link:'http://newtro-ecommerce.netlify.app',
		},
		{
			title: 'Udemy React Robofriends App',
			stack:['react','tacyons'],
			image:robofriends,
			link:'http://newtronahmed.netlify.app',
		},
		{
			title:'React House Market Project',
			stack:['react','context-api','tailwind-css'],
			image:market,
			link:'http://newtro-market.netlify.app',
		},
		{
			title:'YelpCamp Express  Project',
			stack:['Express', 'Ejs', 'PassportJs'],
			link:'http://stormy-falls-57297.herokuapp.com',
			image:yelpcamp,
		}
		
	]

  return (
	<div id='App' >
		<div className="w-full flex items-center top-0 sticky  h-12">
			<div className="flex mx-auto md:w-4/6 md:justify-between  items-center ">
				<a href="https://github.com/newtronahmed" className='mx-2'><FacebookIcon />facebook</a>
				<a href="https://twitter.com/neutronahmed" className='mx-2'><TwitterIcon />twitter</a>
				<a href="https://github.com/newtronahmed" className='mx-2'><GitHubIcon /> <span>github</span></a>
				<a href='tel:+23324778739' className='mx-2'><PhoneIcon />+23324778739</a>
			</div>
		</div>
	      	<motion.div variants={containerVariants} initial='init' animate='end' className="w-full min-h-screen  bg-fixed bg-cover flex items-center justify-center flex-wrap   " id="banner" style={{alignContent:'center'}}>
				  <motion.div variants={childrenVariant} className='text-white name'>Hi, i am</motion.div>
	     		<motion.div variants={childrenVariant} className='w-full flex justify-center'>
				 <div className='border-2 border-black md:text-2xl  bg-black  lg:bg-transparent text-white px-4 py-1 name font-bold tracking-widest'>Ahmed</div>
				<div className='border-2 border-white md:text-2xl text-white px-4 py-1 font-bold bg-black tracking-widest name '>Zubairu</div>
				</motion.div>
				<motion.div variants={childrenVariant} className=' text-white p-4 ' >
				 <span className='bg-black md:text-2xl p-2 name'>I am a Developer</span>
				</motion.div>
				
	      	</motion.div>
	      
	      
          						{/*About Me Section*/}
          <Section title='Something About Me' svg={aboutMe} />
          <section className=' p-y-10 grid md:grid-cols-2 '>
          		<div className=' wow slideInLeft' >
          			<img src={programmer} alt="developer" className='w-full' />
          		</div>
          		<div className='md:p-16 p-8 '>
          			
          			<div  > 
					  <div className='m-6 wow slideInRight'>
						  My name is Ahmed Zubairu. I am a mid-level professional webdeveloper and a student of the University of Ghana . I am a hardworking , creative , and very honest .
						   I am very passionate about software development . Infact I am a self-taught web developer and as you may know it takes more than just passion to be a self-taught developer. 
						   I have hands on experience in building complex react or larvel applictions . 
						    I also worked in a team of react-native developers in developing the interface of a car-pooling application popularly known as Vielly.  
						    I free-lance using the skills i have acquired from platforms like Udemy and Freecodecamp. Currently I am learning nodejs and  mongoDB. Lastly , I am open to job opportunities.
					  </div> 
					  <div>
						  
						  <motion.div variants={experienceVariant} initial='init' animate='end'>
						  	<motion.div variants={fadeVariant}  className='text-xl my-2 font-bold wow '>Experience</motion.div>
							  <motion.div variants={fadeVariant}  className='text-lg my-2 wow'>Vielly</motion.div>
							  <motion.li variants={fadeVariant} className='wow '>
							  Development of UI of Car Pooling Application
								Working With a Other Frontend Developer teams
							  </motion.li>
								<motion.li variants={fadeVariant} className='wow '>
									Integration of Apis
								</motion.li>
						  	</motion.div>
						  <br/>
						  <motion.div variants={experienceVariant} initial='init' animate='end' className='my-2'>
							  <motion.div variants={fadeVariant} className='text-lg my-2 wow slideInRight'>Freelancing</motion.div>
							  <motion.li variants={fadeVariant} className='wow fadeIn'> Develop wide range of web apps using Laravel and React</motion.li>
							  <motion.li variants={fadeVariant} className='wow fadeIn'>Modified existing software to optimize efficeincy</motion.li>
							  <motion.li variants={fadeVariant} className='wow fadeIn'>Application of software knowledge to solve problems in the community</motion.li>
						  </motion.div>
	
					  </div>
					  <div>
						  <div className='text-xl my-2 font-bold wow slideInLeft'>Education</div>
						  <div >
							
							  <div className="text-lg wow slideInRight ">  University Of Ghana</div>
							  
								<br/>
							<div className='text-lg my-2 wow slideInRight'>Udemy</div>
							<li className='wow fadeIn'>Rob Percival's The Complete Web Developer 2.0</li>
							<li className='wow fadeIn'>Colt Steele's The Web Developer Bootcamp</li>
							<li className='wow fadeIn'>Andrei aneagoi's The Complete Web Develper Zero To Mastery</li>
							<li className='wow fadeIn'>Laracast</li>

							
						  </div>
					  </div>
					 
					  </div>
          		</div>
          </section>
          						{/*Resume Section */}
								  {/* <Section title='Journey' svg={portfolioSvg} />
				<div className='md:p-16 xs:p-8'>
				Coming Soon
				</div> */}
								{/* Skills Section */}
								<Section  title='Skills' svg={portfolioSvg}/>
								<div style={{display:'flex',justifyContent:'space-around'}}>
				{
					skills.map(each=>{
						return (<div>
							<img src={each} className='w-12 h-12' alt='skill'/>
						</div>)
					})
				}
								</div>
							
								{/* what i can do

								Design What you want
								develop what you need - fast and
								help you to grow  -increase traffic*/}
          						{/*Works or Projects Section*/}
          <section className='py-5 md:p-5'>
          <Section title='Projects Over the Years' svg={portfolioSvg} />
		  
          	<div className='container flex md:justify-evenly flex-col md:flex-row flex-wrap    '>
			  {
			  projects.map(each=>(
					<div className='w-full   md:w-1/3 p-6 wow slideInUp'>
					<a href={each.link} target='_blank' rel='noopener noreferrer' className='max-w-full ' >
						<div className='project-wrapper  raise shadow-md p-4 lg:p-6'>
						
							<img src={each.image} alt="project" className=' w-full h-32 ' />
						
						<div className='h-24 lg:h-20'  >
							<Divider />
							<div className='max-w-full'>
								{each.title}
							</div>
							<div className='max-w-full'>
								{
									each.stack.map(each=>(<span className='text-bold rounded m-2'>#{each}</span>))
								}
							</div>
						</div>
						
						</div>
						
					 </a>
					 </div>
          		
			  ))
		  }
          	</div>	
          </section>


	</div>
	)
}

export default App;
