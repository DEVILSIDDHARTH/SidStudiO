import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProjectsPreview from '../components/ProjectsPreview';
import Reviews from '../components/Reviews';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.gsap-scroll-section');
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={containerRef}>
        <Hero />
        <div className="gsap-scroll-section"><Stats /></div>
        <div className="gsap-scroll-section"><ProjectsPreview /></div>
        <div className="gsap-scroll-section"><Reviews /></div>
      </div>
    </PageTransition>
  );
}
