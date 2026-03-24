import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl glass rounded-full px-6 py-4 flex items-center justify-between border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-md"
      >
        <Link to="/" className="text-xl md:text-2xl font-display font-black tracking-widest z-50 relative group text-white text-glow hover:text-neon transition-colors">
          Sid Studio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "group relative text-sm font-medium uppercase tracking-widest transition-colors py-1",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Hover Underline */}
                {!isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-neon origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
                
                {/* Active Underline */}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-neon box-glow"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Available for Work Indicator */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
          </span>
          Available for Work
        </div>

        {/* Mobile Toggle (Animated Hamburger) */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300 absolute", isOpen ? "rotate-45" : "-translate-y-2")} />
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300 absolute", isOpen ? "opacity-0" : "opacity-100")} />
          <span className={cn("w-6 h-[2px] bg-white transition-all duration-300 absolute", isOpen ? "-rotate-45" : "translate-y-2")} />
        </button>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "relative group text-4xl font-display font-bold uppercase tracking-widest",
                      isActive ? "text-white" : "text-white/70"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-2 left-0 h-[3px] bg-neon transition-all duration-300",
                      isActive ? "w-full box-glow" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
