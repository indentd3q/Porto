import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    gsap.to('header', { duration: 1, y: -100, ease: 'bounce' });
    gsap.to('header h1', { duration: 1, opacity: 0 });
    gsap.to('main', { duration: 1, y: -100, ease: 'bounce' });
    gsap.to('footer', { duration: 1, y: 100, ease: 'bounce' });
    gsap.to('footer p', { duration: 1, opacity: 0 });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;