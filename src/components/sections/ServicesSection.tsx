import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { useEffect, useRef } from 'react';

interface ServiceCardData {
  key: string;
  title: string;
  description: string;
  image: string;
  badge?: { label: string; type: 'popular' | 'new' | 'pro' };
  icon: React.ReactNode;
  href: string;
}

const ServicesSection = () => {
  const { language } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const gridRef = useRef<HTMLDivElement>(null);

  const cards: ServiceCardData[] =
    language === 'nl'
      ? [
          {
            key: 'webdesign',
            title: 'High-End Webdesign',
            description: 'Op maat gemaakte websites die indruk maken en converteren.',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
            badge: { label: 'Populair', type: 'popular' },
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            ),
            href: '/services/webdesign',
          },
          {
            key: 'ecommerce',
            title: 'E-commerce en Webshops',
            description: 'Krachtige online winkels met soepele checkout en hoge conversie.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            ),
            href: '/services/webshop',
          },
          {
            key: 'seo',
            title: 'SEO en Vindbaarheid',
            description: 'Hoger in Google, meer bezoekers, meer omzet. Duurzaam groeiend.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
            badge: { label: 'Pro', type: 'pro' },
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            ),
            href: '/services/seo',
          },
        ]
      : [
          {
            key: 'webdesign',
            title: 'High-End Web Design',
            description: 'Custom-built websites that impress and convert.',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
            badge: { label: 'Popular', type: 'popular' },
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            ),
            href: '/services/webdesign',
          },
          {
            key: 'ecommerce',
            title: 'E-commerce & Webshops',
            description: 'Powerful online stores with smooth checkout and high conversion.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            ),
            href: '/services/webshop',
          },
          {
            key: 'seo',
            title: 'SEO & Visibility',
            description: 'Rank higher on Google, attract more visitors, grow revenue.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
            badge: { label: 'Pro', type: 'pro' },
            icon: (
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#1E4BA1] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            ),
            href: '/services/seo',
          },
        ];

  // Duplicate cards for mobile marquee
  useEffect(() => {
    const handleResize = () => {
      if (!gridRef.current) return;
      const grid = gridRef.current;
      const cardElements = grid.querySelectorAll('[data-service-card]');
      if (window.innerWidth <= 768 && cardElements.length <= cards.length) {
        // Cards are duplicated via render below
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cards.length]);

  const getBadgeClasses = (type: 'popular' | 'new' | 'pro') => {
    const base =
      'absolute top-3 right-3 z-[3] text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/25 text-white';
    switch (type) {
      case 'popular':
        return `${base} bg-[rgba(30,75,161,0.85)]`;
      case 'new':
        return `${base} bg-[rgba(16,185,129,0.85)]`;
      case 'pro':
        return `${base} bg-[rgba(245,158,11,0.85)]`;
    }
  };

  const renderCard = (card: ServiceCardData, index: number) => (
    <article
      key={`${card.key}-${index}`}
      data-service-card
      className="group relative bg-white/[0.92] backdrop-blur-[12px] rounded-[20px] overflow-hidden flex flex-col border border-[rgba(209,213,219,0.7)] shadow-[0_2px_8px_rgba(30,75,161,0.07)] transition-all duration-[350ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_20px_60px_rgba(30,75,161,0.18)] max-md:min-w-[250px] max-md:max-w-[250px] max-md:flex-shrink-0 max-md:hover:translate-y-0 max-md:hover:scale-100 max-md:hover:shadow-[0_2px_8px_rgba(30,75,161,0.07)]"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1E4BA1] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] z-[2]" />

      {/* Image */}
      <div className="h-[190px] max-md:h-[150px] overflow-hidden relative">
        {card.badge && (
          <span className={getBadgeClasses(card.badge.type)}>{card.badge.label}</span>
        )}
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,23,42,0.25)]" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.25) 100%)' }} />
      </div>

      {/* Content */}
      <div className="p-[18px] pb-5 flex flex-col flex-1 gap-2.5">
        <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[rgba(30,75,161,0.1)] to-[rgba(59,130,246,0.1)] border border-[rgba(30,75,161,0.15)] flex items-center justify-center flex-shrink-0">
          {card.icon}
        </div>
        <h3 className="text-[15px] font-bold text-[#0F172A] tracking-[-0.01em] leading-[1.3]">
          {card.title}
        </h3>
        <p className="text-[12.5px] text-[#475569] leading-relaxed flex-1">
          {card.description}
        </p>
        <Link
          to={card.href}
          className="flex items-center justify-center gap-1.5 bg-[#1E4BA1] text-white no-underline py-2.5 rounded-md text-[13px] font-semibold transition-colors duration-250 hover:bg-[#153a80]"
        >
          {language === 'nl' ? 'Bekijk details' : 'View details'}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-[3px]" />
        </Link>
      </div>
    </article>
  );

  return (
    <section className="relative pt-14 max-md:pt-9 bg-[#E5E7EB] overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute w-[420px] h-[420px] rounded-full blur-[80px] opacity-[0.18] pointer-events-none z-0 -top-[60px] -left-[100px] bg-[radial-gradient(circle,#1E4BA1,transparent_70%)]" />
      <div className="absolute w-[360px] h-[360px] rounded-full blur-[80px] opacity-[0.18] pointer-events-none z-0 top-5 -right-[80px] bg-[radial-gradient(circle,#3B82F6,transparent_70%)]" />

      <motion.div
        ref={ref}
        className="max-w-[1200px] mx-auto px-7 relative z-[1]"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="text-center mb-11 max-md:mb-7" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase text-[#1E4BA1] bg-[rgba(30,75,161,0.08)] border border-[rgba(30,75,161,0.18)] rounded-full px-3.5 py-[5px] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E4BA1] animate-pulse" />
            {language === 'nl' ? 'Wat wij bieden' : 'What we offer'}
          </div>
          <h2 className="text-[clamp(30px,4.5vw,44px)] max-md:text-[28px] font-extrabold tracking-[-0.035em] leading-[1.15] text-[#0F172A]">
            {language === 'nl' ? 'Onze Diensten' : 'Our Services'}
          </h2>
        </motion.div>

        {/* Desktop grid (3 columns) */}
        <motion.div
          ref={gridRef}
          className="hidden md:grid grid-cols-3 gap-6 lg:gap-6 pb-16 relative z-[1]"
          variants={staggerContainer}
        >
          {cards.map((card, i) => (
            <motion.div key={card.key} variants={fadeInUp}>
              {renderCard(card, i)}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile marquee */}
        <div className="md:hidden overflow-hidden pb-12 relative z-[1]">
          <div className="flex gap-3.5 animate-[marquee-mobile_18s_linear_infinite] w-max hover:[animation-play-state:paused]">
            {[...cards, ...cards].map((card, i) => renderCard(card, i))}
          </div>
        </div>

        {/* More button */}
        <motion.div className="text-center pb-12 max-md:pb-8" variants={fadeInUp}>
          <Link
            to="/services"
            className="inline-block text-sm font-semibold text-[#1E4BA1] border-[1.5px] border-[#1E4BA1] px-7 py-[11px] rounded-md transition-colors duration-250 hover:bg-[#1E4BA1] hover:text-white no-underline"
          >
            {language === 'nl' ? 'Bekijk alle diensten' : 'View all services'}
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="h-px w-[60%] max-w-[600px] mx-auto bg-gradient-to-r from-transparent via-[rgba(30,75,161,0.2)] to-transparent rounded-[1px]" />
    </section>
  );
};

export default ServicesSection;
