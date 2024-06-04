import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Header() {
  useEffect(() => {
    gsap.to('header', { duration: 1, y: -100, ease: 'bounce' });
  }, []);

  return (
    <header className="flex justify-between items-center py-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <a href="#about" className="text-lg mx-4 hover:text-gray-200">About</a>
        <a href="#projects" className="text-lg mx-4 hover:text-gray-200">Projects</a>
        <a href="#blog" className="text-lg mx-4 hover:text-gray-200">Blog</a>
        <a href="#contact" className="text-lg mx-4 hover:text-gray-200">Contact</a>
      </nav>
      <button className="mobile-nav-button bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </header>
  );
}

export default Header;