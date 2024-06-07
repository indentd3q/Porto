import React from 'react';

const Projects = () => (
  <section id="projects" className="bg-gray-100 py-20">
    <h2 className="text-3xl font-bold mb-4">My Projects</h2>
    <div className="flex flex-wrap justify-center">
      <div className="project w-1/2 md:w-1/3 xl:w-1/4 p-4">
        <img src="project1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-bold mb-2">Project 1</h3>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <a href="#" className="text-lg font-bold text-indigo-600 hover:text-indigo-900">View Project</a>
      </div>
      <div className="project w-1/2 md:w-1/3 xl:w-1/4 p-4">
        <img src="project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-bold mb-2">Project 2</h3>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <a href="#" className="text-lg font-bold text-indigo-600 hover:text-indigo-900">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
