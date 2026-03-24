import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-32 md:pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
}
