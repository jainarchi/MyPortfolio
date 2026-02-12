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
import image_search from './assets/work_logo/image_search.png';

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
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data .",
    image: image_search,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: image_search,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: image_search,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },



];  