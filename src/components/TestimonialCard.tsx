import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
    highlight: string;
    highlightLabel: string;
  };
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="glass-card p-6 relative group hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Quote */}
      <div className="mb-6">
        <span className="text-4xl text-nebula-purple/30 font-display">"</span>
        <p className="text-slate-300 leading-relaxed -mt-4">
          {testimonial.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar with Glow Ring */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyber-cyan/30 blur-md animate-pulse-glow" />
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="relative w-12 h-12 rounded-full object-cover border-2 border-white/10"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-void-black rounded-full flex items-center justify-center">
            <BadgeCheck className="w-4 h-4 text-cyber-cyan" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-display font-semibold text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-slate-400">
            {testimonial.role}
          </p>
        </div>

        {/* Highlight */}
        <div className="text-right">
          <div className="font-mono font-bold text-plasma-pink text-lg">
            {testimonial.highlight}
          </div>
          <div className="text-xs text-slate-500">
            {testimonial.highlightLabel}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
