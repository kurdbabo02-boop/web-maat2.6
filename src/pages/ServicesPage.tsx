import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

/* ─── SVG Icon Components ─── */
const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8l-2 4h12l-2-4z"/><path d="M12 11v4M10 13h4"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* ─── Service Card Interface ─── */
interface ServiceCard {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: React.FC;
  slug?: string;
}

interface ServiceCategory {
  label: string;
  title: string;
  cards: ServiceCard[];
}

/* ─── Main Component ─── */
const ServicesPage = () => {
  const { language } = useLanguage();

  const categories: ServiceCategory[] = [
    {
      label: language === 'nl' ? 'Maandelijkse Services' : 'Monthly Services',
      title: language === 'nl' ? 'Terugkerende diensten voor continue groei' : 'Recurring services for continuous growth',
      cards: [
        {
          title: 'Website Onderhoud',
          description: language === 'nl' ? 'Zorgeloos onderhoud met persoonlijke ondersteuning' : 'Carefree maintenance with personal support',
          price: language === 'nl' ? 'Vanaf €29/mnd' : 'From €29/mo',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
          icon: WrenchIcon,
          slug: 'website-onderhoud',
        },
        {
          title: language === 'nl' ? 'Hosting en E-mail' : 'Hosting & Email',
          description: language === 'nl' ? 'Snelle, betrouwbare hosting met persoonlijke support' : 'Fast, reliable hosting with personal support',
          price: language === 'nl' ? 'Vanaf €19/mnd' : 'From €19/mo',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
          icon: MonitorIcon,
          slug: 'hosting',
        },
        {
          title: language === 'nl' ? 'SEO en Zoekmachine Optimalisatie' : 'SEO & Search Engine Optimization',
          description: language === 'nl' ? 'Word gevonden door uw ideale klanten' : 'Get found by your ideal customers',
          price: language === 'nl' ? 'Vanaf €149/mnd' : 'From €149/mo',
          image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600',
          icon: SearchIcon,
          slug: 'seo',
        },
        {
          title: language === 'nl' ? 'Social Media Beheer' : 'Social Media Management',
          description: language === 'nl' ? 'Professionele aanwezigheid op alle platforms' : 'Professional presence on all platforms',
          price: language === 'nl' ? 'Vanaf €199/mnd' : 'From €199/mo',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
          icon: ShareIcon,
          slug: 'social-media',
        },
        {
          title: language === 'nl' ? 'Google en Meta Ads Beheer' : 'Google & Meta Ads Management',
          description: language === 'nl' ? 'Maximaal rendement uit uw advertentiebudget' : 'Maximum return on your ad budget',
          price: language === 'nl' ? 'Vanaf €249/mnd' : 'From €249/mo',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
          icon: ChartIcon,
          slug: 'ads-beheer',
        },
      ],
    },
    {
      label: language === 'nl' ? 'High-Value Diensten' : 'High-Value Services',
      title: language === 'nl' ? 'Volledige oplossingen voor maximaal resultaat' : 'Complete solutions for maximum results',
      cards: [
        {
          title: language === 'nl' ? 'Conversie Optimalisatie' : 'Conversion Optimization',
          description: language === 'nl' ? 'Meer klanten uit uw bestaande bezoekers' : 'More customers from your existing visitors',
          price: language === 'nl' ? 'Vanaf €499' : 'From €499',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
          icon: TargetIcon,
          slug: 'conversie-optimalisatie',
        },
        {
          title: 'Sales Funnels',
          description: language === 'nl' ? 'Geautomatiseerde verkoopsystemen die 24/7 werken' : 'Automated sales systems that work 24/7',
          price: language === 'nl' ? 'Vanaf €799' : 'From €799',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
          icon: TargetIcon,
          slug: 'sales-funnels',
        },
        {
          title: 'E-mail Marketing',
          description: language === 'nl' ? 'Direct contact met uw doelgroep' : 'Direct contact with your target audience',
          price: language === 'nl' ? 'Vanaf €399' : 'From €399',
          image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600',
          icon: MailIcon,
          slug: 'email-marketing',
        },
        {
          title: language === 'nl' ? 'Branding Pakket' : 'Branding Package',
          description: language === 'nl' ? 'Een sterk merk dat blijft hangen' : 'A strong brand that sticks',
          price: language === 'nl' ? 'Vanaf €599' : 'From €599',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
          icon: LayersIcon,
          slug: 'branding',
        },
        {
          title: 'AI Implementatie',
          description: language === 'nl' ? 'Onderscheid u met slimme AI oplossingen' : 'Stand out with smart AI solutions',
          price: language === 'nl' ? 'Vanaf €699' : 'From €699',
          image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=600',
          icon: CpuIcon,
          slug: 'ai-implementatie',
        },
      ],
    },
    {
      label: language === 'nl' ? 'Digitale Oplossingen' : 'Digital Solutions',
      title: language === 'nl' ? 'Geavanceerde systemen en applicaties' : 'Advanced systems and applications',
      cards: [
        {
          title: language === 'nl' ? 'Webdesign en Ontwikkeling' : 'Web Design & Development',
          description: language === 'nl' ? 'Websites die indruk maken en converteren' : 'Websites that impress and convert',
          price: language === 'nl' ? 'Vanaf €499' : 'From €499',
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
          icon: GlobeIcon,
          slug: 'webdesign',
        },
        {
          title: language === 'nl' ? 'E-commerce en Webshops' : 'E-commerce & Webshops',
          description: language === 'nl' ? 'Online verkopen zonder grenzen' : 'Online sales without limits',
          price: language === 'nl' ? 'Vanaf €799' : 'From €799',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
          icon: CartIcon,
          slug: 'webshop',
        },
        {
          title: language === 'nl' ? 'Web Applicaties' : 'Web Applications',
          description: language === 'nl' ? 'Krachtige apps die in de browser draaien' : 'Powerful apps that run in the browser',
          price: language === 'nl' ? 'Vanaf €1.499' : 'From €1,499',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
          icon: MonitorIcon,
          slug: 'web-applicaties',
        },
        {
          title: language === 'nl' ? 'Automatisering' : 'Automation',
          description: language === 'nl' ? 'Laat technologie het werk doen' : 'Let technology do the work',
          price: language === 'nl' ? 'Vanaf €499' : 'From €499',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
          icon: BoltIcon,
          slug: 'automatisering',
        },
        {
          title: language === 'nl' ? 'Mobiele Apps (PWA)' : 'Mobile Apps (PWA)',
          description: language === 'nl' ? 'App-ervaring zonder app store gedoe' : 'App experience without app store hassle',
          price: language === 'nl' ? 'Vanaf €999' : 'From €999',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
          icon: PhoneIcon,
          slug: 'mobiele-apps',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="pt-20">
        {/* Unique Modern Hero Section */}
        <section className="relative w-full py-24 overflow-hidden px-16 max-md:px-6 max-md:py-16 bg-[#f8fafc]">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0e7ff] to-transparent opacity-80 z-0" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0055FF]/10 rounded-full blur-3xl z-0" />
          
          <motion.div
            className="relative z-10 max-w-[800px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f4ff] border border-[#d6e0f5] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse" />
              <span className="text-[11px] font-bold text-[#1E4BA1] tracking-wider uppercase">
                {language === 'nl' ? 'Onze Expertise' : 'Our Expertise'}
              </span>
            </div>
            
            <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0F172A]">
              {language === 'nl' ? (
                <>
                  Ontdek onze <span className="text-[#0055FF]">Digitale</span> <br />
                  Diensten & Oplossingen
                </>
              ) : (
                <>
                  Explore our <span className="text-[#0055FF]">Digital</span> <br />
                  Services & Solutions
                </>
              )}
            </h1>
            
            {/* Minimalist accent line */}
            <motion.div 
              className="h-1.5 w-20 bg-[#0055FF] mt-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
        </section>

        {/* Services Content */}
        <div className="max-w-[1280px] mx-auto px-10 py-[60px] max-md:px-4 max-md:py-[30px]">
          {categories.map((category, catIndex) => (
            <div key={category.label}>
              {/* Category Header */}
              <section className="mb-[70px] max-md:mb-10">
                <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#1E4BA1] mb-2">
                  {category.label}
                </p>
                <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-[#0F172A] mb-8 max-md:text-[20px] max-md:mb-5">
                  {category.title}
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-5 gap-[18px] max-lg:grid-cols-3 max-lg:gap-3.5 max-md:grid-cols-2 max-md:gap-3 max-sm:gap-2.5">
                  {category.cards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <motion.article
                        key={card.title}
                        className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(30,75,161,0.08)] hover:-translate-y-[3px] group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {/* Card Image */}
                        <div className="relative h-[140px] max-md:h-[100px] max-sm:h-[80px] overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                          />
                          <div className="absolute -bottom-4 left-3.5 max-md:left-2.5 w-9 h-9 max-md:w-[30px] max-md:h-[30px] rounded-[9px] max-md:rounded-[7px] bg-[#1E4BA1] flex items-center justify-center shadow-[0_4px_12px_rgba(30,75,161,0.25)]">
                            <Icon />
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 pt-6 max-md:p-3 max-md:pt-5 max-sm:p-2.5 max-sm:pt-[18px] flex flex-col flex-1">
                          <h3 className="text-sm max-md:text-[12px] font-bold text-[#0F172A] tracking-[-0.01em] mb-1">
                            {card.title}
                          </h3>
                          <p className="text-[12px] max-md:text-[11px] text-[#475569] leading-[1.45] mb-3 max-md:mb-2 flex-1">
                            {card.description}
                          </p>
                          <span className="inline-block text-[11px] max-md:text-[10px] font-semibold text-[#1E4BA1] bg-[#f0f4ff] border border-[#d6e0f5] rounded-[5px] px-2.5 py-1 max-md:px-2 max-md:py-0.5 mb-3 max-md:mb-2 w-fit">
                            {card.price}
                          </span>
                          <Link
                            to={`/services/${card.slug}`}
                            className="text-[12px] max-md:text-[11px] font-semibold text-[#1E4BA1] no-underline inline-flex items-center gap-[5px] transition-all duration-200 hover:gap-2"
                          >
                            {language === 'nl' ? 'Meer info' : 'More info'} <ArrowIcon />
                          </Link>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </section>

              {/* Divider between categories */}
              {catIndex < categories.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent mb-[70px] max-md:mb-10" />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
