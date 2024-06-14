import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Landing = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full py-8 px-24 flex justify-between items-center z-100 bg-white shadow-md">
                <h2 className="text-2xl text-gray-700 cursor-default">
                    <span className="text-purple-600">J</span>oe.
                </h2>
                <nav className="ml-[-300px]">
                    <a href="#" className="text-lg text-gray-700 no-underline mr-10 font-medium transition duration-300 hover:text-purple-600">Home</a>
                    <a href="#" className="text-lg text-gray-700 no-underline mr-10 font-medium transition duration-300 hover:text-purple-600">About</a>
                    <a href="#" className="text-lg text-gray-700 no-underline mr-10 font-medium transition duration-300 hover:text-purple-600">Portfolio</a>
                    <a href="#" className="text-lg text-gray-700 no-underline mr-10 font-medium transition duration-300 hover:text-purple-600">Blog</a>
                    <a href="#" className="text-lg text-gray-700 no-underline mr-10 font-medium transition duration-300 hover:text-purple-600">Contact</a>
                </nav>
                <a href="#" className="text-white no-underline py-2 px-14 bg-purple-600 rounded-lg border-2 border-purple-600 font-medium transition duration-300 hover:text-purple-600 hover:bg-transparent">Let's Talk</a>
            </header>

            <section className="relative w-full h-screen bg-cover bg-center flex items-center px-24" style={{ backgroundImage: "url('background.jpg')" }}>
                <div className="max-w-xl text-gray-700">
                    <h2 className="text-3xl"><span className="text-purple-600">Hi, I'm</span> Vincent Kurniawan</h2>
                    <h4 className="text-2xl">Frontend Developer</h4>
                    <p className="py-2 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse totam provident voluptas similique. Impedit incidunt atque recusandae rem quam.</p>
                    <div className="flex items-center">
                        <a href="#" className="text-white no-underline py-2 px-10 bg-purple-600 rounded-lg border-2 border-purple-600 font-medium transition duration-300 hover:text-purple-600 hover:bg-transparent">Hire Me</a>
                        <a href="#" className="text-purple-600 no-underline py-2 px-8 bg-transparent rounded-lg border-2 border-purple-600 font-medium transition duration-300 ml-7 hover:text-white hover:bg-purple-600">See Projects</a>
                    </div>
                    <div className="absolute bottom-12 flex">
                        <a href="#" className="w-9 h-9 bg-purple-600 rounded-full mr-6 flex justify-center items-center border border-white outline outline-2 outline-purple-600 transition duration-300 hover:translate-y-[-5px]"><FaLinkedinIn className="text-white" /></a>
                        <a href="#" className="w-9 h-9 bg-purple-600 rounded-full mr-6 flex justify-center items-center border border-white outline outline-2 outline-purple-600 transition duration-300 hover:translate-y-[-5px]"><FaFacebookF className="text-white" /></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
