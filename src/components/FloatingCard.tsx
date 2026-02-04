import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`glass-card p-8 relative group ${className}`}
      style={{
        animation: `float ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay * 500}ms`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-nebula-purple/10 via-transparent to-cyber-cyan/10" />
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-nebula-purple/30" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
