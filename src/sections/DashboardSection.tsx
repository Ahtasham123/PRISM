import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, List, ChevronDown, Loader2, Search } from 'lucide-react';
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
  error: string | null;
}

export default function DashboardSection({ products, isSearching, error }: DashboardSectionProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  // Scanning Animation State
  const [scanStep, setScanStep] = useState(0);
  const scanMessages = [
    "Connecting to global retailers...",
    "Scanning Amazon database...",
    "Checking Best Buy inventory...",
    "Comparing authorized sellers...",
    "Analyzing shipping costs...",
    "Verifying discount codes...",
    "Finalizing best deals..."
  ];

  useEffect(() => {
    if (isSearching) {
      const interval = setInterval(() => {
        setScanStep((prev) => (prev + 1) % scanMessages.length);
      }, 800);
      return () => clearInterval(interval);
    } else {
      setScanStep(0);
    }
  }, [isSearching]);

  const displayProducts = products || defaultProducts;
  const isDefaultView = !products;
  const hasNoResults = products && products.length === 0;

  if (isSearching) {
    return (
      <section className="relative section-padding bg-gradient-to-b from-void-black via-deep-purple/5 to-void-black min-h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 max-w-md w-full px-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-white/5 border-t-cyber-cyan animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-cyber-cyan/50 animate-pulse" />
            </div>
          </div>

          <div className="text-center space-y-2 w-full">
            <h3 className="text-xl font-display font-bold text-white min-h-[1.75rem]">
              {scanMessages[scanStep]}
            </h3>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shimmer-effect"
              />
            </div>
            <p className="text-slate-500 text-sm">Processing 850+ sources</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative section-padding bg-gradient-to-b from-void-black via-deep-purple/5 to-void-black min-h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2 border border-red-500/20">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Search Failed</h3>
          <p className="text-slate-400 max-w-md">{error}</p>
        </div>
      </section>
    );
  }

  if (hasNoResults) {
    return (
      <section className="relative section-padding bg-gradient-to-b from-void-black via-deep-purple/5 to-void-black min-h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center max-w-lg mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-2">
            <Search className="w-10 h-10 text-slate-500" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">No results found</h3>
            <p className="text-slate-400">
              We scoured the known universe but couldn't find any matches for your search.
              Try adjusting your keywords or checking for typos.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary mt-4"
          >
            Clear Search
          </button>
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
            {products ? 'Found Deals' : 'Featured Drops'} <span className="text-gradient">847 retailers</span>
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
