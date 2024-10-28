import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Database } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        setIsVisible(prev => ({ ...prev, [section.id]: isInViewport }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { icon: <Code size={24} />, title: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind"] },
    { icon: <Database size={24} />, title: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { icon: <Palette size={24} />, title: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] }
  ];

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile-first responsive design with modern animations",
      tags: ["React", "Tailwind", "Animation"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "E-commerce platform with payment integration",
      tags: ["React", "Stripe", "Firebase"],
      image: "/api/placeholder/400/250",
      link: "#"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 flex items-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-yellow-300 hover:text-yellow-200 transition-colors cursor-pointer">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-2 hover:text-yellow-300 transition-all transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="#" className="p-2 hover:text-yellow-300 transition-all transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="#" className="p-2 hover:text-yellow-300 transition-all transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl
                  ${isVisible['skills'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500
                  ${isVisible['projects'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm transform transition-transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    View Project 
                    <ExternalLink size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-900 text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible['contact'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;