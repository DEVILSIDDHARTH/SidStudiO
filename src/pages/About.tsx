import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { ArrowUpRight, MonitorPlay, MousePointerClick, Image as ImageIcon, Sparkles, Target, Layers } from 'lucide-react';
import Image from '../components/Image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        
        {/* Introduction Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-8">
            Welcome to <span className="text-neon text-glow">Sid Studio</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-3xl">
            I'm Sid, a dedicated digital artist and the creative force behind Sid Studio. I specialize in crafting high-conversion thumbnails for all types of content that capture attention, tell a story, and drive massive viewership for content creators.
          </motion.p>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight">
              My <span className="text-neon">Experience</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Over the years, I've worked across diverse content ecosystems including gaming, lifestyle, educational, and entertainment niches. I understand different algorithms, audiences, and exactly what makes viewers stop scrolling and click.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              From intense gaming moments to educational content, from lifestyle vlogs to entertainment series, I've designed thumbnails for various content types. My process involves deep research into current trends across platforms, ensuring every design is both fresh and highly optimized for maximum engagement.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="order-1 md:order-2 aspect-square rounded-3xl overflow-hidden glass border border-neon/20 relative group">
            <Image
              src="/images/about.png"
              alt="Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent flex items-end p-8">
              <div className="w-full h-1 bg-neon/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-neon shadow-[0_0_10px_#00ff88]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* What Makes My Thumbnails Unique */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-12 text-center uppercase tracking-tight">
            What Makes My Art <span className="text-neon text-glow">Unique</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Vibrant Composition", desc: "I use color theory and dynamic lighting to make subjects pop off the screen, ensuring visibility even on small mobile displays." },
              { icon: Target, title: "Story-Driven", desc: "A good thumbnail asks a question the content answers. I design visual narratives that spark immediate curiosity." },
              { icon: Layers, title: "Flawless Blending", desc: "Seamlessly combining 3D renders with 2D digital painting techniques for a polished, premium look across all content types." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-8 rounded-3xl border border-white/10 hover:border-neon/40 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-6 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-12 text-center uppercase tracking-tight">
            Core <span className="text-neon">Skills</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: ImageIcon, name: "Photoshop" },
              { icon: MousePointerClick, name: "CTR Optimization" },
              { icon: MonitorPlay, name: "Content Thumbnails" }
            ].map((skill, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass px-8 py-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-neon hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all cursor-default"
              >
                <skill.icon className="text-neon" size={24} />
                <span className="text-xl font-bold tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="glass p-12 md:p-20 rounded-3xl border border-neon/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter">Ready to <span className="text-neon text-glow">Level Up?</span></h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
            Let's collaborate to create thumbnails that make your videos impossible to scroll past.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-neon text-background font-black uppercase tracking-widest rounded-full hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:scale-105"
          >
            Start a Project <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}
