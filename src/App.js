
import React ,{useEffect}from 'react';
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



const App = () => {
	useEffect(() => {
		new WOW.WOW({
		    live: false
		}).init();
	}, [])
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
		}
		
	]

  return (
	<div id='App' >
		<div className="w-full flex items-center top-0 sticky  h-12">
			<div className="flex mx-auto md:w-4/6 md:justify-between  items-center ">
				<a href="#" className='mx-2'><FacebookIcon />facebook</a>
				<a href="https://twitter.com/neutronahmed" className='mx-2'><TwitterIcon />twitter</a>
				<a href="https://github.com/newtronahmed" className='mx-2'><GitHubIcon /> <span>github</span></a>
				<a href='tel:+23324778739' className='mx-2'><PhoneIcon />+23324778739</a>
			</div>
		</div>
	      	<div className="w-full min-h-screen  bg-fixed bg-cover flex items-center justify-center flex-wrap   " id="banner" style={{alignContent:'center'}}>
				  <div className='text-white name'>Hi, i am</div>
	     		<div className='w-full flex justify-center'>
				 <div className='border-2 border-black md:text-2xl  bg-black  lg:bg-transparent text-white px-4 py-1 name font-bold tracking-widest'>Ahmed</div>
				<div className='border-2 border-white md:text-2xl text-white px-4 py-1 font-bold bg-black tracking-widest name '>Zubairu</div>
				</div>
				<div className=' text-white p-4 ' >
					I am a <span className='bg-black md:text-2xl'>Developer</span>
				</div>
				 
				
	      	</div>
	      
	      
          						{/*About Me Section*/}
          <Section title='Something About Me' svg={aboutMe} />
          <section className=' p-y-10 grid md:grid-cols-2 '>
          		<div className=' wow slideInLeft' >
          			<img src={programmer} alt="developer" className='w-full' />
          		</div>
          		<div className='md:p-16 p-8'>
          			
          			<div className='wow slideInRight '> I am a developer Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
					  Sed porttitor lectus nibh. Sed porttitor lectus nibh. Curabitur 
					  <div>
						  <div className='text-xl'>Experience</div>
						  <div>
							  Vielly
							  <li>
							  Development of UI of Car Pooling Application
								Working With a Other Frontend Developer teams
							  </li>
								<li>
									Integration of Apis
								</li>
						  </div>
						  <br/>
						  <div>
							  HotJobs Africa
							  <li> Develop wide range of web apps using Laravel and React</li>
							  <li>Modified existing software to optimize efficeincy</li>
							  <li>Application of software knowledge to solve problems in the community</li>
						  </div>
	
					  </div>
					  <div>
						  <div className='text-xl'>Education</div>
						  <div>
							  University Of Ghana
							  
								<br/>
							Udemy
							<li>Rob Percival's The Complete Web Developer 2.0</li>
							<li>Colt Steele's The Web Developer Bootcamp</li>
							<li>Andrei aneagoi's The Complete Web Develper Zero To Mastery</li>
							<li>Laracast</li>

							
						  </div>
					  </div>
					 
					  ipit tortor eget felis porttitor volutpat. Donec rutrum congue leo
					   eget malesuada.</div>
          		</div>
          </section>
          						{/*Resume Section */}
								  {/* <Section title='Journey' svg={portfolioSvg} />
				<div className='md:p-16 xs:p-8'>
				Coming Soon
				</div> */}
								{/* Skills Section */}
								<div style={{display:'flex',justifyContent:'space-around'}}>
				{
					skills.map(each=>{
						return (<div>
							<img src={each} className='w-12 h-12' alt='skill'/>
						</div>)
					})
				}
								</div>
		
          						{/*Works or Projects Section*/}
          <section className='p-10'>
          <Section title='Projects Over the Years' svg={portfolioSvg} />
		  
          	<div className='container flex md:justify-evenly flex-wrap    '>
			  {
			  projects.map(each=>(
					<div className='w-full  flex-col md:w-1/3 p-4'>
					<a href={each.link} target='_blank' rel='noopener noreferrer' className=' wow slideInUp' >
						<div className='project-wrapper  raise shadow-md p-4'>
						
							<img src={each.image} alt="project" className=' w-full h-32 ' />
						
						<div className='h-24 lg:h-20'  >
							<Divider />
							<div>
								{each.title}
							</div>
							<div>
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
