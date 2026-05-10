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
            <div key={`${project.id}-${index}`} className="flex items-end flex-shrink-0">
              {/* MacBook mockup */}
              <div className="relative w-[440px] max-md:w-[320px] max-sm:w-[260px]">
                <img
                  src={project.screenshot}
                  alt={`${project.title} Desktop`}
                  loading="lazy"
                  className="absolute top-[5.2%] left-[11.2%] w-[77.6%] h-[76%] object-cover object-top z-[1] rounded-[2px]"
                />
                <img
                  src="https://www.pngplay.com/wp-content/uploads/7/Apple-MacBook-Pro-Transparent-Images.png"
                  alt=""
                  className="w-full block relative z-[2] pointer-events-none"
                />
              </div>
              {/* iPhone mockup */}
              <div className="relative w-[105px] max-md:w-[80px] max-sm:w-[65px] -ml-[35px] max-md:-ml-[25px] max-sm:-ml-5 z-[3]">
                <img
                  src={project.screenshot}
                  alt={`${project.title} Mobiel`}
                  loading="lazy"
                  className="absolute top-[3.5%] left-[6.5%] w-[87%] h-[93%] object-cover object-top z-[3] rounded-[28px] max-md:rounded-[22px] max-sm:rounded-[18px]"
                />
                <img
                  src="https://pngimg.com/d/iphone_14_PNG3.png"
                  alt=""
                  className="w-full block relative z-[4] pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-2.5">
        <Link
          to="/portfolio"
          className="inline-block bg-[#1E4BA1] text-white no-underline px-[26px] py-3 rounded-lg text-sm font-semibold transition-colors duration-250 hover:bg-[#153a80]"
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
