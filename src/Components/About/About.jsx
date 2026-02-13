import React from 'react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter';



const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] lg:px-[20vw] font-sans h-[80vh] flex justify-center items-center "
    >

        <div className=" h-100 w-100 text-center flex flex-col gap-12 items-center">
          
          <div>
          <h1 className="text-2xl md:text-5xl text-white leading-tight mb-4">
            Hi, I'm Archi Jain, a
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-2xl sm:text-2xl md:text-5xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-[#8245ec]">
              <Typewriter
                words={['MERN Stack Developer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h3>
          </div>


          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
           I bring value to web development by combining technical expertise with creativity and design as a MERN Stack Developer.
          </p>

          <a
            href="./Archi_Jain_MERN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 max-w-fit"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download CV
          </a>
        </div>

      
    </section>
  );
};

export default About;
