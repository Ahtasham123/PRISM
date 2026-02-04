import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import DashboardSection from './sections/DashboardSection';
import USPSection from './sections/USPSection';
import SocialProofSection from './sections/SocialProofSection';
import TechnologySection from './sections/TechnologySection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';
import { Product } from './components/ProductCard';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[] | undefined>(undefined);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    // Scroll to dashboard
    const dashboard = document.getElementById('dashboard');
    if (dashboard) {
      dashboard.scrollIntoView({ behavior: 'smooth' });
    }

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data.shopping_results) {
        const mapped: Product[] = data.shopping_results.map((item: any, idx: number) => ({
          id: idx,
          name: item.title,
          image: item.thumbnail,
          price: parseFloat(item.price?.replace(/[^0-9.]/g, '') || '0'),
          originalPrice: item.old_price
            ? parseFloat(item.old_price.replace(/[^0-9.]/g, ''))
            : (parseFloat(item.price?.replace(/[^0-9.]/g, '') || '0') * 1.1),
          seller: item.source,
          rating: item.rating || 4.5,
          reviews: item.reviews ? `${item.reviews}` : '100+',
          delivery: item.delivery || 'Free delivery',
          savings: 0 // Will calculate in component
        })).map((p: any) => ({
          ...p,
          savings: Math.round(p.originalPrice - p.price)
        }));
        setSearchResults(mapped);
      } else {
        setSearchResults([]);
      }
    } catch (e) {
      console.error(e);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-void-black text-starlight-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection onSearch={handleSearch} />
        <div id="dashboard">
          <DashboardSection products={searchResults} isSearching={isSearching} />
        </div>
        <USPSection />
        <SocialProofSection />
        <TechnologySection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
