import { motion } from 'framer-motion';
import { Check, TrendingDown, Calendar, Package, Tag } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const visualSearchFeatures = [
  'Partial visibility (cropped photos)',
  'Different angles (shelf vs. online photo)',
  'Varying lighting conditions',
  'Multiple items in frame (auto-crop selection)',
];

const predictionFactors = [
  { icon: TrendingDown, label: 'Historical pricing patterns across 3 years' },
  { icon: Package, label: 'Inventory levels at major retailers' },
  { icon: Calendar, label: 'Seasonal demand fluctuations' },
  { icon: Tag, label: 'Coupon cycle timing' },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative section-padding overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-prism relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-6">
            THE TECHNOLOGY
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Behind the <span className="text-gradient">Magic</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cutting-edge AI and machine learning power every search, comparison, and prediction.
          </p>
        </motion.div>

        {/* Feature Block 1: Neural Visual Search */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card p-6 relative overflow-hidden">
              {/* Scanning Animation */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Mock Product Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-nebula-purple/30 to-cyber-cyan/30 flex items-center justify-center">
                    <span className="text-4xl">🎧</span>
                  </div>
                </div>
                
                {/* Scanning Line */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-glow-cyan"
                />
                
                {/* Bounding Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-cyber-cyan/50 rounded-xl"
                >
                  {/* Corner Markers */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan" />
                </motion.div>
                
                {/* Confidence Score */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-4 right-4 glass-card px-3 py-1.5"
                >
                  <span className="text-xs text-slate-400">Confidence</span>
                  <span className="ml-2 text-sm font-mono font-bold text-cyber-cyan">98.7%</span>
                </motion.div>
              </div>
              
              {/* Recognition Results */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-slate-300">Sony WH-1000XM5</span>
                  <span className="text-sm font-mono text-cyber-cyan">98.7%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-sm text-slate-300">Bose QuietComfort 45</span>
                  <span className="text-sm font-mono text-slate-500">23.4%</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-nebula-purple/10 blur-3xl -z-10 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
              Neural Visual Search
            </h3>
            <p className="text-slate-400 text-lg mb-6">
              Traditional search: Type → Guess → Scroll.
              <br />
              <span className="text-white">Prism search: See → Recognize → Compare.</span>
            </p>
            <p className="text-slate-400 mb-8">
              Our convolutional neural network trained on 15M+ product images identifies objects even with:
            </p>
            
            <ul className="space-y-4">
              {visualSearchFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyber-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-cyber-cyan" />
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button className="btn-neon mt-8">
              Try Visual Search
            </button>
          </motion.div>
        </div>

        {/* Feature Block 2: Predictive Price Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
              Predictive Price Intelligence
            </h3>
            <p className="text-slate-400 text-lg mb-6">
              We don't just show today's price—we <span className="text-white">predict tomorrow's</span>.
            </p>
            <p className="text-slate-400 mb-8">
              Machine learning models analyze:
            </p>
            
            <ul className="space-y-4">
              {predictionFactors.map((factor, index) => (
                <motion.li
                  key={factor.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-nebula-purple/20 flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-5 h-5 text-nebula-purple" />
                  </div>
                  <span className="text-slate-300">{factor.label}</span>
                </motion.li>
              ))}
            </ul>

            {/* Accuracy Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-4 glass-card px-6 py-4"
            >
              <div className="text-center">
                <div className="font-mono font-bold text-3xl text-nebula-purple">
                  <AnimatedCounter end={89} suffix="%" />
                </div>
                <div className="text-xs text-slate-400">Accuracy</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-sm text-slate-300">
                in predicting price drops<br />within 7 days
              </div>
            </motion.div>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-6">
              {/* Price History Graph */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">Price History: Sony WH-1000XM5</span>
                <span className="text-xs text-cyber-cyan">Live</span>
              </div>
              
              <div className="relative h-48 mb-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-white/5" />
                  ))}
                </div>
                
                {/* Price Line */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M0,120 Q50,100 100,110 T200,90 T300,100 T400,60 T500,70"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M0,120 Q50,100 100,110 T200,90 T300,100 T400,60 T500,70 L500,200 L0,200 Z"
                    fill="url(#priceGradient)"
                    stroke="none"
                  />
                  
                  {/* Prediction Line (dashed) */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2 }}
                    d="M500,70 Q550,50 600,55"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
                
                {/* Current Price Point */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 2.5 }}
                  className="absolute right-0 top-[35%] -translate-y-1/2"
                >
                  <div className="w-3 h-3 rounded-full bg-nebula-purple shadow-glow-purple" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-mono text-white">$348</span>
                  </div>
                </motion.div>
                
                {/* Prediction Point */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 3 }}
                  className="absolute right-0 top-[27%] -translate-y-1/2"
                >
                  <div className="w-3 h-3 rounded-full bg-cyber-cyan shadow-glow-cyan" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-mono text-cyber-cyan">$299</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-nebula-purple" />
                  <span className="text-slate-400">Historical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-cyber-cyan border-dashed" style={{ background: 'repeating-linear-gradient(90deg, #06b6d4, #06b6d4 3px, transparent 3px, transparent 6px)' }} />
                  <span className="text-slate-400">Predicted</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-cyber-cyan/10 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
