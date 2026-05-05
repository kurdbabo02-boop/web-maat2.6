import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const heroBgUrl =
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    badge: language === 'nl' ? 'Nu beschikbaar' : 'Now available',
    title: language === 'nl' ? 'Websites die' : 'Websites that',
    titleAccent: language === 'nl' ? 'Indruk maken.' : 'Make an impact.',
    subtitle:
      language === 'nl'
        ? 'High-end digitale ervaringen die uw merk versterken.'
        : 'High-end digital experiences that strengthen your brand.',
    ctaPrimary: language === 'nl' ? 'Onze diensten' : 'Our services',
    ctaSecondary: language === 'nl' ? 'Start project' : 'Start project',
  };

  return (
    <section className="relative w-full h-[95vh] min-h-[650px] flex items-center overflow-hidden px-16 max-md:px-6 max-md:h-[85vh] max-md:min-h-[550px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[#0A1120]">
        <img
          src={heroBgUrl}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,10,21,0.2) 0%, rgba(5,10,21,0.5) 40%, rgba(5,10,21,0.85) 70%, rgba(5,10,21,1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[850px] mt-[5vh] max-md:mt-0 max-md:text-center max-md:flex max-md:flex-col max-md:items-center"
        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Badge */}
        <div className="flex items-center gap-2.5 text-white text-[13px] font-semibold tracking-[0.1em] uppercase opacity-80 mb-6 max-md:justify-center max-md:text-[11px] max-md:mb-5">
          <span className="w-2 h-2 rounded-full bg-[#0055FF]" />
          {content.badge}
        </div>

        {/* Title */}
        <h1 className="text-[clamp(36px,5.5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-5 max-md:text-[30px] max-md:mb-3.5">
          {content.title}
          <span className="block mt-1 font-normal tracking-[-0.01em] opacity-90">
            {content.titleAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base text-white/65 leading-relaxed mb-9 max-w-[480px] font-normal max-md:text-[15px] max-md:mb-[30px] max-md:max-w-[300px]">
          {content.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 max-md:flex-col max-md:w-full max-md:max-w-[280px] max-md:gap-3">
          <Link
            to="/services"
            className="bg-[#003366] text-white rounded-md px-[26px] py-[13px] text-sm font-semibold no-underline transition-colors duration-250 hover:bg-[#004488] max-md:w-full max-md:text-center max-md:px-5 max-md:py-3 max-md:text-[13px]"
          >
            {content.ctaPrimary}
          </Link>
          <Link
            to="/contact"
            className="text-white border border-white/20 rounded-md px-[26px] py-[13px] text-sm font-medium no-underline transition-colors duration-250 hover:border-white/50 bg-transparent max-md:w-full max-md:text-center max-md:px-5 max-md:py-3 max-md:text-[13px]"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
