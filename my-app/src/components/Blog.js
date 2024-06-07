import React from 'react';

const Blog = () => (
  <section id="blog" className="bg-white py-20">
    <h2 className="text-3xl font-bold mb-4">My Blog</h2>
    <div className="flex flex-wrap justify-center">
      <div className="blog-post w-1/2 md:w-1/3 xl:w-1/4 p-4">
        <img src="blog1.jpg" alt="Blog Post 1" className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-bold mb-2">Blog Post 1</h3>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <a href="#" className="text-lg font-bold text-indigo-600 hover:text-indigo-900">Read More</a>
      </div>
      <div className="blog-post w-1/2 md:w-1/3 xl:w-1/4 p-4">
        <img src="blog2.jpg" alt="Blog Post 2" className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-bold mb-2">Blog Post 2</h3>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <a href="#" className="text-lg font-bold text-indigo-600 hover:text-indigo-900">Read More</a>
      </div>
    </div>
  </section>
);

export default Blog;
