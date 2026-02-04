import { useState, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, List, ChevronDown, Loader2 } from 'lucide-react';
import ProductCard, { Product } from '../components/ProductCard';

const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
    image: '/images/products/sony-headphones.jpg',
    price: 348,
    originalPrice: 399,
    seller: 'Amazon',
    rating: 4.8,
    reviews: '2.4K',
    delivery: '2-day free',
    savings: 51,
  },
  {
    id: 2,
    name: 'MacBook Air M3 13" - Midnight',
    image: '/images/products/macbook-air.jpg',
    price: 1049,
    originalPrice: 1199,
    seller: 'Best Buy',
    rating: 4.9,
    reviews: '8.2K',
    delivery: 'Same-day',
    savings: 150,
  },
  {
    id: 3,
    name: 'Nintendo Switch OLED Model with White Joy-Cons',
    image: '/images/products/nintendo-switch.jpg',
    price: 299,
    originalPrice: 349,
    seller: 'Target',
    rating: 4.7,
    reviews: '12K',
    delivery: '1-3 days',
    savings: 50,
  },
];

const sortOptions = ['Price: Low to High', 'Price: High to Low', 'Best Rating', 'Most Reviewed', 'Fastest Delivery'];

interface DashboardSectionProps {
  products?: Product[];
  isSearching: boolean;
}

export default function DashboardSection({ products, isSearching }: DashboardSectionProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const displayProducts = products || defaultProducts;

  if (isSearching) {
    return (
      <section className="relative section-padding bg-gradient-to-b from-void-black via-deep-purple/5 to-void-black min-h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-cyber-cyan animate-spin" />
          <p className="text-slate-400 text-lg">Scanning the universe for deals...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative section-padding bg-gradient-to-b from-void-black via-deep-purple/5 to-void-black">
      <div className="container-prism">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="text-sm text-cyber-cyan">Live Price Comparison</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {products ? 'Found Deals' : 'Scanning'} <span className="text-gradient">847 retailers</span>...
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time price updates from across the web. Find the best deals instantly.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 mb-8 sticky top-24 z-30"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: Filters */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
                >
                  <span>Sort: {selectedSort}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>

                {sortOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass-card py-2 z-50">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedSort(option);
                          setSortOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors ${selectedSort === option ? 'text-cyber-cyan' : 'text-slate-300'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: View Toggle */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid'
                  ? 'bg-nebula-purple text-white'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list'
                  ? 'bg-nebula-purple text-white'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
          }`}>
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Results
          </button>
        </motion.div>
      </div>
    </section>
  );
}
