import React, { useState } from 'react';
import { Camera, Code, Coffee, Heart, Music, Palette } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const interests = [
    { icon: <Code className="w-6 h-6" />, label: 'Coding', color: 'text-blue-500' },
    { icon: <Music className="w-6 h-6" />, label: 'Music', color: 'text-purple-500' },
    { icon: <Camera className="w-6 h-6" />, label: 'Photography', color: 'text-green-500' },
    { icon: <Coffee className="w-6 h-6" />, label: 'Coffee', color: 'text-amber-700' },
    { icon: <Palette className="w-6 h-6" />, label: 'Art', color: 'text-pink-500' },
    { icon: <Heart className="w-6 h-6" />, label: 'Travel', color: 'text-red-500' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/api/placeholder/128/128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Aing Suree
          </h1>
          <p className="text-gray-600 text-lg">Creative Developer & Digital Artist</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {['intro', 'journey', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeSection === section
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {activeSection === 'intro' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Hello World! 👋</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate creator who believes in the power of technology and art to make the world a better place. 
                When I'm not coding or designing, you'll find me exploring new coffee shops, capturing moments through my 
                camera lens, or working on my latest side project.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className={interest.color}>{interest.icon}</span>
                    <span className="text-gray-700">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'journey' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">My Journey 🚀</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">2024 - Present</h3>
                  <p className="text-gray-600">Senior Creative Developer at Future Corp</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">2022 - 2024</h3>
                  <p className="text-gray-600">UI/UX Designer at Design Studio</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">2020 - 2022</h3>
                  <p className="text-gray-600">Freelance Web Developer</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise 💪</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'React', level: 90 },
                  { name: 'UI/UX Design', level: 85 },
                  { name: 'Node.js', level: 80 },
                  { name: 'Photography', level: 75 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Let's create something amazing together!</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;