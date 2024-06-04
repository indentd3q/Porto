import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Footer() {
  useEffect(() => {
    gsap.to('footer', { duration: 1, y: 100, ease: 'bounce' });
  }, []);

  return (
    <footer className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">&copy; 2022 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;