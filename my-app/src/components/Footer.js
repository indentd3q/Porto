import React from 'react';

const Footer = () => (
  <footer className="bg-indigo-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <p className="text-lg">&copy; 2024 Vue Cent. All rights reserved.</p>
      <div className="flex items-center">
    
        <div className="flex items-center mx-4">
          <a href="https://www.linkedin.com/in/vincent-kurniawan" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 8h3m5 0h3M6 9h.01M6 15h.01"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/vincent__nwn/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm4 6v4m0 0h-4m0 0H8m0 0V9m0 0h4m0 0l4-4"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
