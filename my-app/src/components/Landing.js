import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Landing = () => {
    
    return (
        <div style={{
            backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
          }}>
            <header className="fixed top-0 left-0 w-full py-4 md:py-8 px-6 md:px-24 flex justify-between items-center z-50">
            <h2 className="text-xl md:text-2xl text-gray-700 cursor-default">
                <span className="text-purple-600">V</span>K
            </h2>
            <nav className="hidden md:flex ml-[-300px]">
                <Link to="/" className="text-sm md:text-lg text-gray-700 no-underline mr-4 md:mr-10 font-medium transition duration-300 hover:text-purple-600 hover:-translate-y-0.5">Home</Link>
                <Link to="/about" className="text-sm md:text-lg text-gray-700 no-underline mr-4 md:mr-10 font-medium transition duration-300 hover:text-purple-600 hover:-translate-y-0.5">About</Link>
                <Link to="/porto" className="text-sm md:text-lg text-gray-700 no-underline mr-4 md:mr-10 font-medium transition duration-300 hover:text-purple-600 hover:-translate-y-0.5">Portfolio</Link>
                <Link to="/blog" className="text-sm md:text-lg text-gray-700 no-underline mr-4 md:mr-10 font-medium transition duration-300 hover:text-purple-600 hover:-translate-y-0.5">Blog</Link>
                <Link to="/contact" className="text-sm md:text-lg text-gray-700 no-underline mr-4 md:mr-10 font-medium transition duration-300 hover:text-purple-600 hover:-translate-y-0.5">Contact</Link>
            </nav>
            <Link to="/contact" className="text-white no-underline py-1 md:py-2 px-6 md:px-14 bg-purple-600 rounded-lg border-2 border-purple-600 font-medium transition duration-300 hover:text-purple-600 hover:bg-transparent">Let's Talk</Link>
        </header>   
            <section className="relative w-full h-screen bg-cover bg-center flex items-center px-6 md:px-24" style={{ backgroundImage: "url('./background.jpg')" }}>
                <div className="max-w-lg md:max-w-xl text-gray-700">
                    <h2 className="text-2xl md:text-3xl"><span className="text-purple-600">Hi, I'm</span> Vincent Kurniawan</h2>
                    <h4 className="text-xl md:text-2xl">Frontend Developer</h4>
                    <p className="py-2 pb-6 md:pb-10 text-sm md:text-base">Hey there!! My name is Vincent and currently i'm an undergraduate student in Multimedia Nusantara University in Indonesia.</p>
                    <div className="flex flex-col md:flex-row items-center">
                        <Link to="/hire-me" className="text-white no-underline py-1 md:py-2 px-6 md:px-10 bg-purple-600 rounded-lg border-2 border-purple-600 font-medium transition duration-300 hover:text-purple-600 hover:bg-transparent mb-2 md:mb-0">Hire Me</Link>
                        <Link to="/porto" className="text-purple-600 no-underline py-1 md:py-2 px-6 md:px-8 bg-transparent rounded-lg border-2 border-purple-600 font-medium transition duration-300 ml-0 md:ml-7 hover:text-white hover:bg-purple-600">See Projects</Link>
                    </div>
                    <div className="absolute bottom-8 md:bottom-12 flex space-x-4 md:space-x-6">
                        <a href="https://www.linkedin.com/in/vincent-kurniawan" target="_blank" rel="noopener noreferrer" className="w-8 md:w-9 h-8 md:h-9 bg-purple-600 rounded-full flex justify-center items-center border border-white outline outline-2 outline-purple-600 transition duration-300 hover:translate-y-[-5px]">
                            <FaLinkedinIn className="text-white text-sm md:text-base" />
                        </a>
                        <a href="https://www.instagram.com/vincent__nwn" className="w-8 md:w-9 h-8 md:h-9 bg-purple-600 rounded-full flex justify-center items-center border border-white outline outline-2 outline-purple-600 transition duration-300 hover:translate-y-[-5px]">
                            <FaInstagram className="text-white text-sm md:text-base" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
