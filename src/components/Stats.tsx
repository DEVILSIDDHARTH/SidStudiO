import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

const stats = [
  { value: 80, suffix: '+', label: 'Projects Done' },
  { value: 42, suffix: '+', label: 'Clients' },
  { value: 5, suffix: '★', label: 'Reviews' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [value, suffix, inView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <div className="py-20 my-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="glass p-10 rounded-3xl border border-neon/30 shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:border-neon/50 transition-all duration-500 flex flex-col items-center justify-center gap-4 relative overflow-hidden group"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="text-5xl md:text-7xl font-display font-black text-neon text-glow relative z-10">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm md:text-base uppercase tracking-widest text-white/70 font-bold relative z-10">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
