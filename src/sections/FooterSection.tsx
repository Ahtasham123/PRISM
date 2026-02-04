import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Products: ['Price Comparison', 'Visual Search', 'Price History', 'Deal Alerts', 'Chrome Extension'],
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Resources: ['Price Comparison Guide', 'Best Shopping Tips', 'How to Use Visual Search', 'Price History Charts'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Affiliate Disclosure', 'GDPR'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      <div className="container-prism py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-nebula-purple" />
              <span className="font-display font-bold text-xl">PRISM</span>
            </a>
            
            <p className="text-slate-400 mb-6 max-w-xs">
              The smartest way to shop. AI-powered price comparison that sees what you see.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-3">Get price drop alerts</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field w-full pr-10 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 rounded-xl bg-nebula-purple hover:bg-deep-purple transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-cyber-cyan mt-2"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm relative group"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 Prism. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <span className="text-plasma-pink">💜</span> in the Future
          </p>
        </div>
      </div>
    </footer>
  );
}
