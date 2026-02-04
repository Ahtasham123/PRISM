import { motion } from 'framer-motion';
import { Users, Zap, Eye } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import SearchInterface from '../components/SearchInterface';

const trustBadges = [
  { icon: Users, text: 'Trusted by 2M+ smart shoppers' },
  { icon: Zap, text: 'Real-time price tracking' },
  { icon: Eye, text: 'AI Visual Recognition' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-void-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-prism pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="text-sm text-slate-300">Now comparing 2.4M products across 850+ retailers</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Find the Universe's{' '}
            <span className="text-gradient">Best Deals</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            <span className="text-white font-medium">AI-powered price comparison</span> that sees what you see. 
            Upload a photo, type a product, or speak—Prism scans the entire internet in real-time to find your perfect price.
          </motion.p>

          {/* Search Interface */}
          <SearchInterface />

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <badge.icon className="w-4 h-4 text-cyber-cyan" />
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-cyber-cyan"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
