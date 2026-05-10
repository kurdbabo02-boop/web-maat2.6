import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/projects';

const PortfolioSection = () => {
  const { language } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  // Use projects that have screenshots (case studies)
  const displayProjects = projects.filter((p) => p.screenshot);

  // Build project items for the slider
  const projectItems = displayProjects.map((p) => ({
    id: p.id,
    title: p.title,
    screenshot: p.screenshot!,
  }));

  return (
    <section className="bg-[#E5E7EB] pt-[70px] pb-[50px]">
      <motion.div
        ref={ref}
        className="max-w-[1200px] mx-auto px-7"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="text-center mb-[50px]" variants={fadeInUp}>
          <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.03em] text-[#0F172A]">
            {language === 'nl' ? 'Onze Projecten' : 'Our Projects'}
          </h2>
          <p className="mt-2.5 text-[15px] font-normal text-[#475569]">
            {language === 'nl' ? 'Gerealiseerd door Web-Maat.' : 'Realized by Web-Maat.'}
          </p>
        </motion.div>
      </motion.div>

      {/* Slider viewport */}
      <div
        className="w-full overflow-hidden py-5 pb-[50px]"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div className="flex gap-[60px] max-md:gap-10 max-sm:gap-[30px] w-max animate-[marquee-projects_80s_linear_infinite] hover:[animation-play-state:paused] items-end">
          {/* Original + duplicate for seamless loop */}
          {[...projectItems, ...projectItems].map((project, index) => (
            <div key={`${project.id}-${index}`} className="flex-shrink-0">
              <div
                className="w-[400px] max-md:w-[300px] max-sm:w-[240px] rounded-2xl overflow-hidden flex items-center justify-center p-4"
                style={{ background: '#EBEBEB' }}
              >
                <img
                  src={project.screenshot}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-[280px] max-md:max-h-[210px] max-sm:max-h-[170px]"
                />
              </div>
              <p className="mt-3 text-center text-[13px] font-semibold text-[#1a2235] tracking-tight">{project.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-2.5">
        <Link
          to="/portfolio"
          className="inline-block bg-[#29458e] text-white no-underline px-[26px] py-3 rounded-lg text-sm font-semibold transition-colors duration-250 hover:bg-[#1e3368]"
        >
          {language === 'nl' ? 'Bekijk Recente Projecten' : 'View Recent Projects'}
        </Link>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-1/2 max-w-[500px] mx-auto mt-10 bg-gradient-to-r from-transparent via-[rgba(30,75,161,0.15)] to-transparent" />
    </section>
  );
};

export default PortfolioSection;
