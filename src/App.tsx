import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import DashboardSection from './sections/DashboardSection';
import USPSection from './sections/USPSection';
import SocialProofSection from './sections/SocialProofSection';
import TechnologySection from './sections/TechnologySection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-void-black text-starlight-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection />
        <DashboardSection />
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
