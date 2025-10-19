// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <header className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects
      </p>
    </header>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10 justify-between">
      {SkillsInfo.map(({ title, skills }) => (
        <div
          key={title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {title}
          </h3>

          <Tilt scale={1.05} transitionSpeed={1000} gyroscope>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-3xl py-2 px-2 bg-transparent"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
