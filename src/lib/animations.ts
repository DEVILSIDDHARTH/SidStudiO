import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const staggerTextReveal = (element: HTMLElement | Element | null) => {
  if (!element) return;
  return gsap.fromTo(
    element.children,
    { y: 100, opacity: 0, rotateX: -90 },
    { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, transformOrigin: '50% 50% -50px', ease: 'power4.out' }
  );
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
