// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";

import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

// backend
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import {
  RiVercelLine,
  RiLockLine,
  RiLinksLine,
  RiGithubFill,
} from "react-icons/ri";

import InfraAI from "./assets/work_logo/InfraAI.webp";
// import InfraAI_Landing from './assets/work_logo/InfraAI-landingPage.webp'
import SkillSphere from "./assets/work_logo/SkillSphere.webp";
import SyncChat from "./assets/work_logo/SyncChat.webp";
import ImageEditor from "./assets/work_logo/ImageEditor.webp";
import wearVerse from "./assets/work_logo/wearVerse.webp";


export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SCSS" },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "JWT Auth", logo: RiLockLine },
      { name: "REST APIs", logo: RiLinksLine },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: RiGithubFill },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "IntelliJ Idea" },
      { name: "Vercel", logo: RiVercelLine },
      { name: "Render" },
    ],
  },
];

export const projects = [
   {
    id: 0,
    title: "WearVerse",
    description: "",
    image: wearVerse,
    tags: ["MERN", "IMAGEKIT", "REDIS", "OAUTH", "JWT", "API"],
    webapp: "https://wear-verse-rho.vercel.app/",
  },
  {
    id: 1,
    title: "InfraAI",
    description:
      "An AI-powered chat application with real-time streaming, internet search capabilities, and persistent chat history. Features JWT authentication, Redis token blacklisting, and multi-model AI integration.",
    image: InfraAI,
    tags: ["MERN", "LangChain", "Redis", "Socket.IO", "JWT"],
    webapp: "https://infra-ai-psi.vercel.app",
  },

  {
    id: 2,
    title: "SkillSphere",
    description:
      "A comprehensive Technical Assessment platform featuring built-in anti-cheating mechanisms, integrated note-taking capabilities, and automated evaluation tools.",
    image: SkillSphere,
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "JWT", "API"],
    webapp: "https://skillsphere-frontend-nine.vercel.app/",
  },

  {
    id: 3,
    title: "SyncChat",
    description:
      "A real-time chat application enabling multi-user communication through room-based messaging, built using Socket.IO for instant message synchronization.",
    image: SyncChat,
    tags: ["ReactJS", "NodeJS", "ExpressJS", "Socket.IO"],
    webapp: "https://real-time-chat-app-kappa-kohl.vercel.app/",
  },

  {
    id: 4,
    title: "Image-Editor",
    description:
      "A high-performance image processing tool built with vanilla JavaScript and HTML5 Canvas, demonstrating complex state management and pixel manipulation without external frameworks.",
    image: ImageEditor,
    tags: ["HTML", "CSS", "JS", "canvas"],
    webapp: "https://image-editor-psi-jet.vercel.app/",
  },
];
