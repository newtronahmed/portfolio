import frontendMentor from "./images/frontend.jpg";
import market from "./images/market.png";
import neutrohomes from "./images/neutro-homes.png";
import ecommerce from "./images/ecommerce.png";
import inventory from "./images/inventory.png";
import yelpcamp from "./images/yelpcamp.png";
import ahmedzona from "./images/ahmedzona.png";
const projects = [
  {
    title: "Laravel React Inventory Manager",
    stack: ["laravel", "react", "redux"],
    image: inventory,
    link: "http://guarded-sierra-88803.herokuapp.com",
  },

  {
    title: "Nextjs Ecommerce website + paypal integration",
    stack: ["nextjs", "material-ui", "paypal", "vercel"],
    image: ahmedzona,
    link: "https://ahmedzona.vercel.app",
  },
  {
    title: "React Commercejs Stripe Ecommerce Project",
    stack: ["react", "redux", "material-ui", "stripe"],
    image: ecommerce,
    link: "http://newtro-ecommerce.netlify.app",
  },
  {
    title: "Find Home Site",
    stack: ["Sass"],
    image : neutrohomes,
    link: "http://neutro-homes.netlify.app"

  },
  {
    title: "React Laravel SPA + Laravel Sanctum Auth",
    stack: ["laravel/laravel-sanctum", "react"],
    image: frontendMentor,
    link: "https://github.com/newtronahmed",
  },
  {
    title: " House Market Project",
    stack: ["react", "context-api", "tailwind-css"],
    image: market,
    link: "http://newtro-market.netlify.app",
  },
  {
    title: "YelpCamp Express  Project",
    stack: ["Express", "Ejs", "PassportJs"],
    link: "http://stormy-falls-57297.herokuapp.com",
    image: yelpcamp,
  },
  {
    title: "ConverX chat application",
    stack: ["Expressjs", "Socket.io", "MongoDb", "Material Ui"],
    link: "http://brave-visvesvaraya-2ba0ba.netlify.app",
    image: yelpcamp,
  },
  {
    title: "Frontend Mentor Joblisting Challenge",
    stack: ["styled-components", "bootstrap"],
    image: frontendMentor,
    link: "http://newtrojoblisting.netlify.app",
  },
  
];
export default projects;
