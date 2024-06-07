import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-gray-100 py-20">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <form action="#" method="POST" className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded">Send</button>
      </div>
    </form>
  </section>
);

export default Contact;
