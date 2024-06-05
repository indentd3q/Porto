import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center py-4 bg-gray-800 text-white">
      <nav className={`flex justify-between items-center ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <a href="#about" className="text-lg mx-4 hover:text-gray-200">About</a>
        <a href="#projects" className="text-lg mx-4 hover:text-gray-200">Projects</a>
        <a href="#blog" className="text-lg mx-4 hover:text-gray-200">Blog</a>
        <a href="#contact" className="text-lg mx-4 hover:text-gray-200">Contact</a>
      </nav>
      <button onClick={toggleMenu} className="mobile-nav-button bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </header>
  );
};

export default Header;