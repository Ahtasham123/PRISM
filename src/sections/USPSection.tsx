import { motion } from 'framer-motion';
import FloatingCard from '../components/FloatingCard';

const uspData = [
  {
    icon: '/images/icons/ai-recognition.png',
    title: 'See It. Find It. Save It.',
    description: 'Point your camera at any product—online, in-store, or in a magazine. Our neural network identifies it instantly and hunts down every seller on the internet.',
    stats: ['0.3s recognition speed', '98.7% accuracy', 'Works on partial images'],
    color: 'cyber-cyan',
  },
  {
    icon: '/images/icons/real-time.png',
    title: "The Internet's Pulse, in Real-Time",
    description: 'Prices change 2.3 billion times daily. Prism monitors live inventories across 850+ retailers, catching drops the moment they happen.',
    stats: ['Live inventory sync', 'Price drop alerts', 'Historical price prediction'],
    color: 'nebula-purple',
  },
  {
    icon: '/images/icons/smart-filter.png',
    title: 'Your Perfect Deal, Your Way',
    description: "Don't just sort by price. Optimize for your life—filter by delivery speed, seller reputation, warranty terms, or total cost including shipping.",
    stats: ['12 intelligent filters', 'Total cost calculator', 'Delivery time guarantee'],
    color: 'plasma-pink',
  },
  {
    icon: '/images/icons/trust.png',
    title: 'Zero Hidden Surprises',
    description: 'We show the true cost: shipping, taxes, fees, and available coupons applied. Every seller rated by real transaction history, not just stars.',
    stats: ['Verified seller scores', 'Total price transparency', 'Buyer protection tracking'],
    color: 'cyber-cyan',
  },
];

export default function USPSection() {
  return (
    <section id="features" className="relative section-padding overflow-hidden">
      {/* Background Constellation Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="rgba(99, 102, 241, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-prism relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-6">
            WHY PRISM?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            The Future of <span className="text-gradient">Smart Shopping</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powered by cutting-edge AI, Prism transforms how you discover and compare prices across the internet.
          </p>
        </motion.div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {uspData.map((usp, index) => (
            <FloatingCard key={usp.title} delay={index * 0.15}>
              {/* Icon */}
              <div className="relative w-20 h-20 mb-6">
                <div className={`absolute inset-0 rounded-2xl bg-${usp.color}/20 blur-xl`} />
                <img
                  src={usp.icon}
                  alt={usp.title}
                  className="relative w-full h-full object-contain rounded-2xl"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4">
                {usp.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {usp.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {usp.stats.map((stat) => (
                  <span
                    key={stat}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-${usp.color}/10 text-${usp.color} border border-${usp.color}/20`}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
