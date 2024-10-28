import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile-first responsive design with modern animations",
      tags: ["React", "Tailwind", "Animation"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Project Three",
      description: "E-commerce platform with payment integration",
      tags: ["React", "Stripe", "Firebase"],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-yellow-300">Your Name</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:text-yellow-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-yellow-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-yellow-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="mb-8 text-gray-300">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;