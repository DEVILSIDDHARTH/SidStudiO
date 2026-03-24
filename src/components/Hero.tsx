import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, User } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerTextReveal } from '../lib/animations';

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const anim = staggerTextReveal(textRef.current);
    return () => { anim?.kill(); };
  }, []);

  // Generate random particles for the background
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center relative pt-20">
      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-neon/40 shadow-[0_0_10px_rgba(0,255,136,0.5)]"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{
              y: [0, -150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Logo Floating */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-5xl md:text-7xl font-display font-black tracking-widest mb-6 text-white text-glow"
      >
        Sid Studio
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-12 border-neon/30 text-white text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,136,0.15)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon box-glow"></span>
        </span>
        Available for Work
      </motion.div>

      {/* Heading */}
      <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-[1.1] mb-6 perspective-1000">
        <div className="overflow-hidden pb-2"><span className="inline-block">All-Rounder</span></div>
        <div className="overflow-hidden pb-2"><span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Thumbnail</span></div>
        <div className="overflow-hidden pb-2"><span className="inline-block text-neon text-glow">Designer</span></div>
      </h1>

      {/* Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
      >
        Creating High CTR Thumbnails For All Types Of Content
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
      >
        <Link to="/projects" className="group relative px-8 py-4 bg-neon text-background font-bold uppercase tracking-widest rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
          <span className="relative z-10 flex items-center gap-2">
            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </Link>
        <Link to="/contact" className="group px-8 py-4 glass text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
          <Mail size={18} className="text-neon" /> Contact Me
        </Link>
        <Link to="/about" className="group px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors flex items-center gap-2">
          <User size={18} className="text-white/50 group-hover:text-neon transition-colors" /> About
        </Link>
      </motion.div>
    </div>
  );
}
