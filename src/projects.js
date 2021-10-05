import frontendMentor from './images/frontend.jpg'
import market from './images/market.png'
import robofriends from './images/robofriends (1).png'
import ecommerce from './images/ecommerce.png'
import inventory from './images/inventory.png'
import yelpcamp from './images/yelpcamp.png'
const projects = [
    {
        title: 'Frontend Mentor Joblisting Challenge',
        stack: ['react', 'styled-components', 'bootstrap',],
        image: frontendMentor,
        link: 'http://newtrojoblisting.netlify.app'

    },
    {
        title: 'React Laravel SPA + Laravel Sanctum Auth',
        stack: ['laravel', 'laravel-sanctum', 'react'],
        image: frontendMentor,
        link: 'https://github.com/newtronahmed'
    },
    {
        title: 'Laravel React Inventory Manager',
        stack: ['laravel', 'react', 'redux',],
        image: inventory,
        link: 'http://guarded-sierra-88803.herokuapp.com',
    },
    {
        title: 'React Commercejs Stripe Ecommerce Project',
        stack: ['react', 'redux', 'material-ui', 'stripe'],
        image: ecommerce,
        link: 'http://newtro-ecommerce.netlify.app',
    },
    {
        title: 'Udemy React Robofriends App',
        stack: ['react', 'tacyons'],
        image: robofriends,
        link: 'http://newtronahmed.netlify.app',
    },
    {
        title: ' House Market Project',
        stack: ['react', 'context-api', 'tailwind-css'],
        image: market,
        link: 'http://newtro-market.netlify.app',
    },
    {
        title: 'YelpCamp Express  Project',
        stack: ['Express', 'Ejs', 'PassportJs'],
        link: 'http://stormy-falls-57297.herokuapp.com',
        image: yelpcamp,
    },
    {
        title:'ConverX chat application',
        stack:['Expressjs','Socket.io','MongoDb','Material Ui'],
        link:'http://brave-visvesvaraya-2ba0ba.netlify.app',
        image:yelpcamp
    }
    


]
export default projects;