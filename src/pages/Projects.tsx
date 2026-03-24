import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { X, ZoomIn } from 'lucide-react';
import Image from '../components/Image';

const categories = ['All', 'Minecraft', 'Gaming', 'Other'];

const projects = [
  { id: 1, title: "100 Days Zombie", category: "Minecraft", image: "/images/100 days zombie.png" },
  { id: 2, title: "Apple MC", category: "Minecraft", image: "/images/applemc.png" },
  { id: 3, title: "Become Freddy", category: "Minecraft", image: "/images/Become Freddy.png" },
  { id: 4, title: "Eating Challenge", category: "Other", image: "/images/eating challenge style thumbnail.png" },
  { id: 5, title: "Fortnite Gameplay", category: "Gaming", image: "/images/fortnite gameplay thumbnail.png" },
  { id: 6, title: "Friend Base Explosion", category: "Minecraft", image: "/images/friend base explosion.png" },
  { id: 7, title: "Huggy Attack", category: "Minecraft", image: "/images/Huggy Attack.png" },
  { id: 8, title: "Live Stream", category: "Minecraft", image: "/images/live.jpg" },
  { id: 9, title: "Screenshot", category: "Minecraft", image: "/images/Screenshot 2025-07-24 180746.png" },
  { id: 10, title: "Thanos Crafting", category: "Minecraft", image: "/images/thanos hand crafting.png" },
  { id: 11, title: "Timeline of Thanos", category: "Minecraft", image: "/images/Timeline of Thanos.png" },
  { id: 12, title: "3 People", category: "Other", image: "/images/3 People.png" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
            Project <span className="text-neon text-glow">Gallery</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
            A showcase of high-performing thumbnails designed to capture attention and drive clicks.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300",
                activeCategory === cat 
                  ? "bg-neon text-background shadow-[0_0_20px_rgba(0,255,136,0.4)]" 
                  : "glass border border-white/10 text-white/60 hover:text-white hover:border-neon/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 cursor-pointer hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-500"
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <ZoomIn size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">{project.title}</h3>
                    <p className="text-neon text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-background/90 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl glass border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-neon hover:text-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <X size={24} />
                </button>
                <div className="aspect-video w-full relative">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-5xl font-display font-black text-white mb-2"
                    >
                      {selectedProject.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-neon uppercase tracking-widest font-bold"
                    >
                      {selectedProject.category}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
