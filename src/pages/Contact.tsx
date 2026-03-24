import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';
import Image from '../components/Image';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
            Let's <span className="text-neon text-glow">Connect</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to elevate your channel? Reach out directly through Email or Discord for quick responses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info with Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold mb-8 uppercase tracking-tight">Contact Info</h2>
            
            {/* About Image */}
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-neon/20 relative group">
              <Image
                src="/images/about.png"
                alt="Contact"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
            
            <a href="mailto:sidxd1843@gmail.com" className="flex items-center gap-6 group glass p-6 rounded-3xl border border-white/10 hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 group-hover:bg-neon group-hover:text-background transition-all duration-300">
                <Mail size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1 font-bold">Email</p>
                <p className="text-xl font-medium text-white group-hover:text-neon transition-colors">sidxd1843@gmail.com</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-neon group-hover:text-background transition-all duration-300">
                <ExternalLink size={20} />
              </div>
            </a>

            <a href="https://discord.com/users/siddharth_god" target="_blank" rel="noreferrer" className="flex items-center gap-6 group glass p-6 rounded-3xl border border-white/10 hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] group-hover:scale-110 group-hover:bg-[#5865F2] group-hover:text-white transition-all duration-300">
                <MessageSquare size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1 font-bold">Discord</p>
                <p className="text-xl font-medium text-white group-hover:text-[#5865F2] transition-colors">siddharth_god</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#5865F2] transition-all duration-300">
                <ExternalLink size={20} />
              </div>
            </a>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            
            <h3 className="text-3xl font-display font-bold mb-8 text-white">How to Reach Me</h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-neon mb-3 flex items-center gap-3">
                  <Mail size={24} />
                  Email Contact
                </h4>
                <p className="text-white/70 mb-4">
                  Send me an email directly at <span className="text-neon font-mono">sidxd1843@gmail.com</span> for project inquiries, collaborations, or general questions.
                </p>
                <a
                  href="mailto:sidxd1843@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-background font-bold rounded-xl hover:bg-white transition-all hover:scale-105"
                >
                  <Mail size={18} />
                  Go to Email
                </a>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-[#5865F2] mb-3 flex items-center gap-3">
                  <MessageSquare size={24} />
                  Discord Contact
                </h4>
                <p className="text-white/70 mb-4">
                  Add me on Discord with username <span className="text-[#5865F2] font-mono">siddharth_god</span> for quick responses and real-time communication.
                </p>
                <a
                  href="https://discord.com/users/siddharth_god"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all hover:scale-105"
                >
                  <MessageSquare size={18} />
                  Contact from Discord
                </a>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-neon/10 to-[#5865F2]/10 rounded-2xl border border-neon/20">
                <h4 className="text-xl font-bold text-white mb-3">Response Time</h4>
                <p className="text-white/70">
                  I typically respond within 24 hours for emails and much faster on Discord for urgent matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
