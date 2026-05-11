import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HeroBenefitsStrip from '@/components/sections/HeroBenefitsStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PremiumPositioningSection from '@/components/sections/PremiumPositioningSection';
import CTASection from '@/components/sections/CTASection';
import StatsMiniSection from '@/components/sections/StatsMiniSection';

const Index = () => {
  return (
    <>
      <div className="home-dark min-h-screen bg-[#0F172A]">
        <Header />
        <main className="bg-[#0F172A]">
          <HeroSection />
          <div className="section-divider" />
          <StatsMiniSection />
          <div className="section-divider" />
          <ServicesSection />
          <div className="section-divider" />
          <HeroBenefitsStrip />
          <div className="section-divider" />
          <PremiumPositioningSection />
          <div className="section-divider" />
          <PortfolioSection />
          <div className="section-divider" />
          <CTASection />
        </main>
      </div>
      <div className="w-full bg-slate-50">
        <Footer />
      </div>
    </>
  );
};

export default Index;
