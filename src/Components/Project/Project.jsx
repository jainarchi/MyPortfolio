import { projects } from '../../Constants';

const Work = () => {
  return (
    <section
      id="projects"
      className="py-16 pb-24 px-[4vw] md:px-[7vw] lg:px-[20vw] font-sans relative "
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border border-gray-700 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 my-10 gap-6 py-4 flex flex-col md:flex-row ${project.id % 2 !== 0 && 'md:flex-row-reverse'}`}
          >
            <div className="p-4 md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-md aspect-video bg-red-200"
              />
            </div>

            <div className="p-6 md:w-1/2">
              <h3 className="text-2xl md:text-3xl text-purple-50 mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-6 mt-4">{project.description}</p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#3f3c4270] text-sm text-purple-500 rounded-lg px-3 py-2 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-purple-400"
              >
                View Live 
              </a>

              <div></div>
            </div>



          </div>
        ))}
      </div>

      {/* Modal Container 
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
    
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto bg-purple-700 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    */}
    </section>
  );
};

export default Work;
