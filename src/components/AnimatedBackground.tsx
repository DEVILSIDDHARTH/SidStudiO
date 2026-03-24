import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the light
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      
      {/* Minecraft-style Grid Glow */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ff88 1px, transparent 1px),
            linear-gradient(to bottom, #00ff88 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      {/* Moving Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-neon rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -150, 0],
          scale: [1, 1.5, 1],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-500 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-purple-500 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Mouse-follow Light */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
