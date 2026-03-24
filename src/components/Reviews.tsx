import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Dev", role: "Friend", text: "Sid's thumbnails completely changed my channel's trajectory. The CTR bump is insane." },
  { name: "Ujjwal", role: "YouTuber", text: "Fast, reliable, and the quality is unmatched. Best thumbnail designer in the scene." },
  { name: "NotKaif", role: "Content Creator", text: "These thumbnails are actually good. My click-through rate went up by 5%." },
  { name: "Mishra JI", role: "Legend", text: "I've worked with many designers, but Sid always delivers the most clickable art." }
];

// Duplicate for seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  return (
    <div className="py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
          Client <span className="text-neon text-glow">Testimonials</span>
        </h2>
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 md:gap-8 px-4"
          >
            {duplicatedReviews.map((review, i) => (
              <div 
                key={i} 
                className="w-[300px] md:w-[400px] shrink-0 glass p-8 rounded-3xl border border-white/10 hover:border-neon/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,136,0.15)] flex flex-col gap-6 group cursor-pointer"
              >
                <div className="flex gap-1 text-neon group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)] transition-all">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-white/80 leading-relaxed text-lg italic">"{review.text}"</p>
                <div className="mt-auto pt-6 border-t border-white/10 group-hover:border-neon/30 transition-colors">
                  <p className="font-bold text-xl text-white">{review.name}</p>
                  <p className="text-neon text-sm uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
