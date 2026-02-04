import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const activities = [
  { name: 'Sarah', action: 'saved $47 on', item: 'headphones' },
  { name: 'Mike', action: 'found', item: 'MacBook Air $150 off' },
  { name: 'Emma', action: 'tracked price for', item: 'Nintendo Switch' },
  { name: 'David', action: 'saved $89 on', item: 'air fryer' },
  { name: 'Lisa', action: 'found deal on', item: 'Sony TV' },
  { name: 'John', action: 'saved $234 on', item: 'iPad Pro' },
  { name: 'Anna', action: 'price dropped on', item: 'AirPods Pro' },
  { name: 'Tom', action: 'saved $56 on', item: 'kitchen mixer' },
];

export default function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-nebula-purple/10 border-y border-nebula-purple/20 py-3 overflow-hidden">
      <div className="container-prism">
        <div className="flex items-center justify-center gap-4">
          <span className="text-xs uppercase tracking-wider text-nebula-purple font-medium">
            Live Activity
          </span>
          <div className="h-4 w-px bg-nebula-purple/30" />
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-slate-300"
          >
            <span className="text-white font-medium">{activities[currentIndex].name}</span>
            {' '}{activities[currentIndex].action}{' '}
            <span className="text-cyber-cyan">{activities[currentIndex].item}</span>
          </motion.div>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
