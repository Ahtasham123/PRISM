import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Truck, Shield, Star, Bell } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    seller: string;
    rating: number;
    reviews: string;
    delivery: string;
    savings: number;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const savingsPercent = Math.round((product.savings / product.originalPrice) * 100);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="glass-card overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-glow-purple/30"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
              isSaved 
                ? 'bg-plasma-pink text-white' 
                : 'bg-void-black/60 text-white hover:bg-void-black/80'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsTracking(!isTracking);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
              isTracking 
                ? 'bg-cyber-cyan text-void-black' 
                : 'bg-void-black/60 text-white hover:bg-void-black/80'
            }`}
          >
            <Bell className={`w-4 h-4 ${isTracking ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Savings Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-plasma-pink/90 text-white text-xs font-bold">
          Save {savingsPercent}%
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Seller */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-slate-400">Best price at</span>
          <span className="text-xs font-medium text-cyber-cyan">{product.seller}</span>
        </div>

        {/* Name */}
        <h3 className="font-display font-semibold text-lg text-white mb-3 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-mono font-bold text-2xl text-white">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-sm text-slate-500 line-through">
            ${product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Price Comparison Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>vs average price</span>
            <span className="text-cyber-cyan">-${product.savings}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-nebula-purple to-cyber-cyan rounded-full"
              style={{ width: `${100 - savingsPercent}%` }}
            />
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-white">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="w-3 h-3 text-cyber-cyan" />
            <span>{product.delivery}</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Shield className="w-3 h-3 text-nebula-purple" />
            <span>Verified</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>In Stock</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
