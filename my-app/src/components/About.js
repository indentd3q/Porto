import React, { useState } from 'react';
import { Camera, Code, Coffee, Heart, Music, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const navigate = useNavigate();

  const interests = [
    { icon: <Code className="w-6 h-6" />, label: 'Coding', color: 'text-blue-500' },
    { icon: <Music className="w-6 h-6" />, label: 'Music', color: 'text-purple-500' },
    { icon: <Camera className="w-6 h-6" />, label: 'Photography', color: 'text-green-500' },
    { icon: <Coffee className="w-6 h-6" />, label: 'Coffee', color: 'text-amber-700' },
    { icon: <Palette className="w-6 h-6" />, label: 'Art', color: 'text-pink-500' },
    { icon: <Heart className="w-6 h-6" />, label: 'Travel', color: 'text-red-500' },
  ];

  return (
    <section className="min-h-screen py-20 px-4" style={{ backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)' }}>
      <div className="max-w-4xl mx-auto relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 bg-white text-gray-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-all shadow-md"
        >
          ← Back
        </button>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg" 
                  alt="Vincent Kurniawan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/default-avatar.png'; 
                  }}
                />
              </div>
            </div>
            {/* Optional: Add a decorative element */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
              ✨
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vincent Kurniawan
          </h1>
          <p className="text-gray-600 text-lg">Data Enthusiast & Front-end Developer</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Hello Everyone👋</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate creator who believes in the power of technology and art to make the world a better place. 
                When I'm not coding or designing, you'll find me sipping on a cup of coffee, reading a good book, or maybe playing with random cat in the neighborhood.
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
                  <p className="text-gray-600">Research Assistant of Predictive modelling</p>
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
                  { name: 'Python', level: 80 },
                  { name: 'Data Visualization', level: 80 },
                  { name: 'Data Analyst', level: 85 },
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