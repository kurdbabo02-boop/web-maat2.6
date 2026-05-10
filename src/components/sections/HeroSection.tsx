import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const heroBgUrl =
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    badge: language === 'nl' ? 'Web-Maat 2026' : 'Web-Maat 2026',
    title: language === 'nl' ? 'Digitale groei' : 'Digital growth',
    titleAccent: language === 'nl' ? 'Zonder gedoe.' : 'Without hassle.',
    subtitle:
      language === 'nl'
        ? 'Wij bouwen websites die werken voor uw onderneming.'
        : 'We build websites that work for your business.',
    ctaPrimary: language === 'nl' ? 'Onze diensten' : 'Our services',
    ctaSecondary: language === 'nl' ? 'Start project' : 'Start project',
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden px-16 md:px-16 px-6 max-md:px-6 max-md:h-[60vh] max-md:min-h-[400px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[#0A1120]">
        <img
          src={heroBgUrl}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - stronger on mobile for readability */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.7) 40%, rgba(15,23,42,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,10,21,0.3) 0%, rgba(5,10,21,0.7) 50%, rgba(5,10,21,1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[850px] mt-[5vh] max-md:mt-0"
        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Badge */}
        <div className="flex items-center gap-2.5 text-white text-[13px] font-semibold tracking-[0.1em] uppercase opacity-80 mb-6 max-md:text-[12px] max-md:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#29458e]" />
          {content.badge}
        </div>

        {/* Title */}
        <h1 className="text-[clamp(36px,5.5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-5 max-md:text-[34px] max-md:mb-3">
          {content.title}
          <span className="block mt-1 font-normal tracking-[-0.01em] opacity-90">
            {content.titleAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base text-white/65 leading-relaxed mb-9 max-w-[480px] font-normal max-md:text-base max-md:mb-7 max-md:max-w-[340px]">
          {content.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 max-md:flex-row max-md:gap-3">
          <Link
            to="/services"
            className="bg-[#29458e] text-white rounded-md px-[26px] py-[13px] text-sm font-semibold no-underline transition-colors duration-250 hover:bg-[#29458e] max-md:px-5 max-md:py-3 max-md:text-[13px]"
          >
            {content.ctaPrimary}
          </Link>
          <Link
            to="/contact"
            className="text-white border border-white/20 rounded-md px-[26px] py-[13px] text-sm font-medium no-underline transition-colors duration-250 hover:border-white/50 bg-transparent max-md:px-5 max-md:py-3 max-md:text-[13px]"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
