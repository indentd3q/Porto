import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useAnimations = () => {
  useEffect(() => {
    gsap.to('header', { duration: 1, y: -100, ease: 'bounce' });
    gsap.to('header h1', { duration: 1, opacity: 0 });
    gsap.to('main', { duration: 1, y: -100, ease: 'bounce' });
    gsap.to('footer', { duration: 1, y: 100, ease: 'bounce' });
  }, []);
};
