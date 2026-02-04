import { motion } from 'framer-motion';
import { Shield, Lock, Globe } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import LiveTicker from '../components/LiveTicker';
import AnimatedCounter from '../components/AnimatedCounter';

const testimonials = [
  {
    quote: "I took a photo of a couch in a boutique and found it for $400 less with same-day delivery. Prism doesn't just compare—it sees.",
    name: 'Alex Chen',
    role: 'Interior Designer',
    avatar: '/images/avatars/alex-chen.jpg',
    highlight: '$1,247',
    highlightLabel: 'this month',
  },
  {
    quote: "The 'Best Time to Buy' feature alone saved me $180 on a GPU. It predicted the drop to the exact day.",
    name: 'Marcus Johnson',
    role: 'Tech Enthusiast',
    avatar: '/images/avatars/marcus-johnson.jpg',
    highlight: '23',
    highlightLabel: 'products tracked',
  },
  {
    quote: "As a busy mom, I don't have time to check 5 sites. Prism found the diapers I needed, cheapest, delivered tomorrow. Game changer.",
    name: 'Elena Rodriguez',
    role: 'Parent & Small Business Owner',
    avatar: '/images/avatars/elena-rodriguez.jpg',
    highlight: '3 hrs',
    highlightLabel: 'saved weekly',
  },
];

const publications = ['TechCrunch', 'Wired', 'The Verge'];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      {/* Live Activity Ticker */}
      <div className="absolute top-0 left-0 right-0">
        <LiveTicker />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-plasma-pink/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-prism relative z-10 pt-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Loved by <span className="text-gradient">Smart Shoppers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Join millions of users who trust Prism to find the best deals every day.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-mono font-bold text-3xl md:text-4xl text-white mb-1">
                <AnimatedCounter end={2.4} suffix="M+" decimals={1} />
              </div>
              <div className="text-sm text-slate-400">Products tracked daily</div>
            </div>
            <div className="text-center">
              <div className="font-mono font-bold text-3xl md:text-4xl text-white mb-1">
                $<AnimatedCounter end={47} suffix="M+" />
              </div>
              <div className="text-sm text-slate-400">Saved by users this year</div>
            </div>
            <div className="text-center">
              <div className="font-mono font-bold text-3xl md:text-4xl text-white mb-1">
                <AnimatedCounter end={850} suffix="+" />
              </div>
              <div className="text-sm text-slate-400">Retailers monitored</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured In */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-400 mb-4">Featured in</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                {publications.map((pub) => (
                  <span key={pub} className="font-display font-semibold text-slate-300">
                    {pub}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Badges */}
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-4">Security & Compliance</p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-nebula-purple" />
                  <span className="text-sm">SOC 2</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Lock className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-sm">GDPR Ready</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe className="w-4 h-4 text-plasma-pink" />
                  <span className="text-sm">256-bit</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400 mb-4">User Rating</p>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-mono font-bold text-white">4.9</span>
                <span className="text-sm text-slate-400">(12.4K reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
