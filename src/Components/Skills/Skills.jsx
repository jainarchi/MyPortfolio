// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../Constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <header className="text-center mb-8 ">
      <span className="text-gray-400">TECH STACK</span>
      <h2 className="text-3xl sm:text-5xl text-white m-4">Technologies</h2>
      <h3 className="text-3xl sm:text-4xl text-purple-500">I Work With</h3>
    
      <p className="text-gray-400 mt-4 text-lg ">
       A curated set of tools and technologies that help me build scalable, performant and visually engaging web experiences.
      </p>
    </header>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10 justify-between">
      {SkillsInfo.map(({ title, skills }) => 
      (
        <div
          key={title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full sm:w-[48%] rounded-2xl border border-gray-400 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mb-10 flex flex-col items-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-6 text-center">
            {title}
          </h3>

          <Tilt scale={1.05} transitionSpeed={1000} gyroscope>
            <div className="flex flex-wrap gap-3">
              {/* {skills.map(({ name, logo }) => (
                
                <div
                  key={name}
                  className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-2xl py-2 px-2 bg-transparent"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">{name}</span>
                </div>
              ))} */}

              {skills.map(({ name, logo }) => {
  // 1. Create a capitalized variable for the component if it's an icon
  const IconComponent = logo;

  return (
    <div
      key={name}
      className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-2xl py-2 px-3 bg-transparent hover:border-purple-500 transition-colors"
    >
      {logo ? (
        typeof logo === 'string' ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
        ) : (
          <IconComponent className="text-xl sm:text-2xl text-white" />
        )
      ) : (
      
        <div className="w-1 h-1 bg-gray-600 rounded-full" />
      )}

      <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
})}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
