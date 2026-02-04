import { motion } from 'framer-motion';
import { Apple, Chrome, Smartphone } from 'lucide-react';
import Starfield from '../components/Starfield';

const floatingPills = [
  { text: 'Mike saved $32 just now', position: 'top-[20%] left-[10%]', delay: 0 },
  { text: 'Price drop on AirPods', position: 'top-[30%] right-[15%]', delay: 1 },
  { text: '2,847 comparing now', position: 'bottom-[25%] left-[15%]', delay: 2 },
  { text: 'New deal: iPad $89 off', position: 'bottom-[35%] right-[10%]', delay: 3 },
];

export default function CTASection() {
  return (
    <section id="cta" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <Starfield />

      {/* Converging Lines Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={50 + Math.cos((i * 30 * Math.PI) / 180) * 80}
              y1={50 + Math.sin((i * 30 * Math.PI) / 180) * 80}
              x2="50"
              y2="50"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
            />
          ))}
        </svg>
      </div>

      {/* Floating Pills */}
      {floatingPills.map((pill, index) => (
        <motion.div
          key={pill.text}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: pill.delay * 0.3 }}
          className={`absolute ${pill.position} z-[2] hidden lg:block`}
          style={{
            animation: `float ${4 + index}s ease-in-out infinite`,
            animationDelay: `${pill.delay * 0.5}s`,
          }}
        >
          <div className="glass-card px-4 py-2 text-sm text-slate-300 whitespace-nowrap">
            {pill.text}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container-prism text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Headline */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Stop Overpaying.
            <br />
            <span className="text-gradient">Start Prism.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto">
            Join 2 million+ smart shoppers who've saved $47M+ and counting.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <button 
              className="btn-neon text-lg py-5 px-10 relative group"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <span className="relative z-10">Get Started Free — No Credit Card</span>
              <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple via-cyber-cyan to-plasma-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>
          </motion.div>

          {/* Platform Availability */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-slate-500 mb-8"
          >
            Available on iOS, Android, and Web. Chrome extension included.
          </motion.p>

          {/* Platform Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Apple className="w-5 h-5" />
              <span className="text-sm">iOS</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm">Android</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Chrome className="w-5 h-5" />
              <span className="text-sm">Chrome</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
