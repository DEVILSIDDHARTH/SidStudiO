import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-black tracking-widest text-white text-glow">
          Sid Studio
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-widest text-white/50">
          <Link to="/" className="hover:text-neon transition-colors">Home</Link>
          <Link to="/about" className="hover:text-neon transition-colors">About</Link>
          <Link to="/projects" className="hover:text-neon transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-neon transition-colors">Contact</Link>
        </div>
        <div className="text-white/30 text-sm">
          © {new Date().getFullYear()} Siddharth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
