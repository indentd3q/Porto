import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-4">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div 
            className={`project w-full md:w-2/5 lg:w-1/3 p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            onMouseEnter={() => setHoveredProject(0)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="project1.jpg" 
                alt="Project 1" 
                className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" 
              />
              {hoveredProject === 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-lg mb-4">View Details</p>
                    <div className="flex gap-4 justify-center">
                      <a href="#" className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">Demo</a>
                      <a href="#" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition-colors">Code</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">Project 1</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Node.js</span>
            </div>
          </div>

          <div 
            className={`project w-full md:w-2/5 lg:w-1/3 p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="project2.jpg" 
                alt="Project 2" 
                className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" 
              />
              {hoveredProject === 1 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-lg mb-4">View Details</p>
                    <div className="flex gap-4 justify-center">
                      <a href="#" className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">Demo</a>
                      <a href="#" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition-colors">Code</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">Project 2</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;