import React from 'react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter';

// import profileImage from '../../assets/profile2.png';




const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mr-8 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-6">
            Hi, I am Archi Jain
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={['MERN Stack Developer', 'Java Programmer', 'Curious Coder']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>


          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            I’m a developer with a strong foundation in Java and object-oriented programming, driven by a curiosity for how things work in memory. Currently building applications using the MERN stack. I thrive on solving real-world problems through thoughtful, efficient code.

          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              // src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
