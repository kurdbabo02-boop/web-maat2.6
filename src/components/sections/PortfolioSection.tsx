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
    <section className="bg-white pt-20 pb-16">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-16"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            {language === 'nl' ? 'Onze Projecten' : 'Our Projects'}
          </h2>
          <p className="text-base text-slate-600 font-medium">
            {language === 'nl' ? 'Gerealiseerd door Web-Maat.' : 'Realized by Web-Maat.'}
          </p>
        </motion.div>
      </motion.div>

      {/* Slider viewport */}
      <div
        className="w-full overflow-hidden py-8 pb-16"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex gap-20 md:gap-24 w-max animate-[marquee-projects_100s_linear_infinite] hover:[animation-play-state:paused] items-end px-6">
          {/* Original + duplicate for seamless loop */}
          {[...projectItems, ...projectItems].map((project, index) => (
            <div key={`${project.id}-${index}`} className="flex items-end flex-shrink-0 group">
              {/* MacBook mockup */}
              <div className="relative w-96 md:w-[500px] transition-transform duration-300 group-hover:scale-105">
                <img
                  src={project.screenshot}
                  alt={`${project.title} Desktop`}
                  loading="lazy"
                  className="absolute top-[5.2%] left-[11.2%] w-[77.6%] h-[76%] object-cover object-top z-10 rounded-sm"
                />
                <img
                  src="https://www.pngplay.com/wp-content/uploads/7/Apple-MacBook-Pro-Transparent-Images.png"
                  alt=""
                  className="w-full block relative z-20 pointer-events-none drop-shadow-lg"
                />
              </div>
              {/* iPhone mockup */}
              <div className="relative w-28 md:w-32 -ml-8 md:-ml-12 z-30 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={project.screenshot}
                  alt={`${project.title} Mobiel`}
                  loading="lazy"
                  className="absolute top-[3.5%] left-[6.5%] w-[87%] h-[93%] object-cover object-top z-30 rounded-3xl"
                />
                <img
                  src="https://pngimg.com/d/iphone_14_PNG3.png"
                  alt=""
                  className="w-full block relative z-40 pointer-events-none drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          to="/portfolio"
          className="inline-block bg-slate-900 text-white no-underline px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-blue-900 hover:shadow-lg hover:-translate-y-0.5"
        >
          {language === 'nl' ? 'Bekijk Recente Projecten' : 'View Recent Projects'}
        </Link>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-1/2 max-w-md mx-auto mt-16 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default PortfolioSection;
