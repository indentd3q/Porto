import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "blog1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Blog Post 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    image: "blog2.jpg",
    link: "#",
  },
  // Add more blog posts here
];

const Blog = () => (
  <section id="blog" className="bg-white py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Blog</h2>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a href={post.link} className="text-indigo-600 hover:text-indigo-900 font-bold">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
