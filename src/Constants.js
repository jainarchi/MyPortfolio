// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';

import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// backend
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import { RiVercelLine , RiLockLine ,RiLinksLine , RiGithubFill  } from "react-icons/ri";

// Project Section Logo's
// import {Flutter , MetaverseExplorer , Netflix , PassVault , SkillSphere, Studio} from './assets/work_logo'

import SkillSphere from './assets/work_logo/skillSphere.webp'
import PassVault from './assets/work_logo/PassVault.webp'
import ImageEditor from './assets/work_logo/ImageEditor.webp'
import SnakeGame from './assets/work_logo/SnakeGame.webp'
import Golf from './assets/work_logo/Golf.webp'
import Metaverse from './assets/work_logo/Metaverse.webp'
import Studio from './assets/work_logo/Studio.webp'
import Flutter from './assets/work_logo/Flutter.webp'
import Netflix from './assets/work_logo/Netflix.webp'

export const SkillsInfo = [
   {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      {name : 'JWT Auth' , logo: RiLockLine  },
      {name : "REST APIs" , logo : RiLinksLine  }
    ],
  },
 
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: RiGithubFill   },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'IntelliJ Idea' }, 
      {name : "Vercel" , logo: RiVercelLine},
      {name: 'Render'}
    ],
  },
];



export const projects = [ 
  {
    id: 0,
    title: "SkillSphere",
    description:
      "A comprehensive Technical Assessment platform featuring built-in anti-cheating mechanisms, integrated note-taking capabilities, and automated evaluation tools.",
    image: SkillSphere,
    tags: ['ReactJS' , 'NodeJS', 'ExpressJS', 'MongoDB' , 'JWT' , 'API'],
    webapp: "https://skillsphere-frontend-nine.vercel.app/",
  }, 
  
  {
    id: 1,
    title: "PassVault",
    description:
      "A secure password management web application featuring robust JWT-based authentication and industry-standard Bcrypt hashing for end-to-end credential protection.",
    image: PassVault,
    tags: ["RectJS" , 'NodeJS' , 'ExpressJS' , 'MongoDB' , 'JWT'],
    webapp: "https://pass-vault-lime.vercel.app/",
  }, 
  
  {
    id: 2,
    title: "Image-Editor",
    description:
      "A high-performance image processing tool built with vanilla JavaScript and HTML5 Canvas, demonstrating complex state management and pixel manipulation without external frameworks.",
    image: ImageEditor,
    tags: ["HTML", "CSS" , 'JS' , 'canvas'],
    webapp: "https://image-editor-psi-jet.vercel.app/",
  }, 
  

  {
    id: 3,
    title: "Snake Game",
    description:
      "A classic arcade game reconstruction focusing on core JavaScript logic, collision detection algorithms, and real-time state synchronization.",
    image: SnakeGame,
    tags: ["HTML", "CSS" , "JS"],
    webapp: "https://snake-game-ochre-kappa.vercel.app/",
  },

   {
    id: 4,
    title: "Awwward Level Website",
    description:
      "A high-performance landing page inspired by award-winning designs, featuring advanced cinematic animations and smooth parallax effects powered by GSAP and ScrollTrigger.",
    image: Golf ,
    tags: ["HTML", "CSS" , 'GSAP' , 'ScrollTriger'],
    webapp: "https://animating-website-liard.vercel.app/",
  },



  {
    id: 5,
    title: "The Metaverse Explorer",
    description:
      "A modern, fully responsive web experience that showcases adaptive layout techniques and fluid design principles across all device screen sizes.",
    image: Metaverse,
    tags: ["HTML", "CSS"],
    webapp: "https://light-the-metaverse-explorer.vercel.app",
  },
  {
    id: 6,
    title: "Studio",
    description:
      "A professional-grade platform built for large screens and mobile alike, featuring a clean, high-end design and pixel-perfect responsiveness.",
    image: Studio,
    tags: ["HTML", "JS", "SCSS"],
    webapp: "https://studio-gamma-five-58.vercel.app/",
  },
  {
    id: 7,
    title: "Flutter Ecosystem",
    description:
      "A clean and organized resource hub for developers, built to be fast, responsive, and easy to use on any screen size.",
    image: Flutter,
    tags: ["HTML", "CS", "JS"],
    webapp: "https://flutter-dev-ecosystem.vercel.app/",
  },
  

  { id: 8,
    title: "Netflix Clone",
    description:
      "A pixel-perfect frontend clone of the Netflix interface, demonstrating proficiency in modern CSS layouts, dynamic data rendering, and high-fidelity UI replication.",
    image: Netflix,
    tags: ["HTML", "CS", "JS"],
    webapp: "https://netflix-clone-mu-sage.vercel.app/",
  },








];  


