import React, { useState } from 'react';
import { Github, Globe, ArrowRight, Code2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      tags: ["React", "Tailwind", "Node.js"],
      demoLink: "#",
      codeLink: "#",
      stats: {
        stars: 124,
        forks: 35
      }
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      image: "/api/placeholder/600/400",
      category: "Mobile App",
      tags: ["TypeScript", "Next.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      stats: {
        stars: 89,
        forks: 23
      }
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      tags: ["Vue.js", "Firebase", "TailwindCSS"],
      demoLink: "#",
      codeLink: "#",
      stats: {
        stars: 56,
        forks: 12
      }
    }
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Desktop App'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 rounded mb-8"></div>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Explore my latest works and side projects. Each project is built with passion and attention to detail.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                } border border-gray-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <p className="text-lg font-semibold mb-4">View Project</p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href={project.demoLink}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          <Globe size={16} />
                          <span>Demo</span>
                        </a>
                        <a
                          href={project.codeLink}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-gray-600">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <Code2 className="text-indigo-600" size={20} />
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 3.293a1 1 0 011.414 0L10 4.586l1.293-1.293a1 1 0 111.414 1.414L11.414 6l1.293 1.293a1 1 0 01-1.414 1.414L10 7.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 6 7.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{project.stats.forks}</span>
                    </div>
                  </div>
                  <a
                    href={project.demoLink}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 text-sm font-medium"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;