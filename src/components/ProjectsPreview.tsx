import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from './Image';

const projects = [
  { id: 1, title: "100 Days Zombie", category: "Thumbnail Design", image: "/images/100 days zombie.png" },
  { id: 2, title: "Apple MC", category: "Thumbnail Design", image: "/images/applemc.png" },
  { id: 3, title: "Become Freddy", category: "Thumbnail Design", image: "/images/Become Freddy.png" },
  { id: 4, title: "Eating Challenge", category: "Thumbnail Design", image: "/images/eating challenge style thumbnail.png" },
  { id: 5, title: "Fortnite Gameplay", category: "Thumbnail Design", image: "/images/fortnite gameplay thumbnail.png" },
  { id: 6, title: "Friend Base Explosion", category: "Thumbnail Design", image: "/images/friend base explosion.png" },
];

function TiltCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -20); // max 10 deg
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Parallax effect based on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Stagger parallax slightly based on column
  const y = useTransform(scrollYProgress, [0, 1], [50 + (index % 3) * 20, -50 - (index % 3) * 20]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative cursor-pointer group perspective-1000"
      onClick={() => navigate('/projects')}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
          className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 group-hover:border-neon/50 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-colors duration-300"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">{project.title}</h3>
            <p className="text-neon text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPreview() {
  return (
    <div className="py-32 flex flex-col items-center justify-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-display font-black mb-20 text-center uppercase tracking-tighter"
      >
        Featured <span className="text-neon text-glow">Projects</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 md:px-12">
        {projects.map((project, i) => (
          <TiltCard key={project.id} project={project} index={i} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20"
      >
        <Link to="/projects" className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-neon hover:text-background hover:border-neon hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] flex items-center gap-2">
          <span className="relative z-10 flex items-center gap-2">
            See All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
