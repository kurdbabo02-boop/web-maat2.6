import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const PortfolioPage = () => {
  const { language } = useLanguage();

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen" style={{ background: '#EBEBEB' }}>
        <Header />
        <main className="pt-20">
          <section className="py-20 px-6 md:px-16 bg-[#1a2235] text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#1a2235]" style={{ background: '#EBEBEB' }}>
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a2235] -z-10" />
          <div className="absolute top-0 right-0 w-[35%] h-full -z-10 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[#29458e] blur-[100px] rounded-full" />
          </div>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="block text-[#7a9fd4] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
                {language === 'nl' ? 'Onze Projecten' : 'Our Projects'}
              </span>
              <h1 className="text-3xl md:text-[44px] font-bold text-white tracking-tight leading-tight mb-3">
                {language === 'nl' ? 'Gerealiseerd Werk' : 'Realized Work'}
              </h1>
              <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
                {language === 'nl'
                  ? 'Een selectie van projecten die we met zorg hebben opgeleverd.'
                  : 'A selection of projects we delivered with care.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-14 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
            >
              {projects.map((project, index) => {
                const hasMock = Boolean(project.screenshot);
                const imgSrc = hasMock ? project.screenshot : project.image;

                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className={`group ${index % 2 === 1 ? 'md:mt-8' : ''}`}
                  >
                    <Link to={`/portfolio/${project.id}`} className="block">
                      {/* Image card — zelfde grijs als de mock achtergronden */}
                      <div
                        className="relative w-full overflow-hidden rounded-xl"
                        style={{ background: '#EBEBEB', aspectRatio: '4/3' }}
                      >
                        <img
                          src={imgSrc as string}
                          alt={project.title}
                          className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${
                            hasMock
                              ? 'object-contain p-4'
                              : 'object-cover'
                          }`}
                        />
                        <div className="absolute inset-0 bg-[#1a2235]/0 group-hover:bg-[#1a2235]/10 transition-colors duration-500 rounded-xl" />

                        {/* Category */}
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#1a2235] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                            {typeof project.category === 'string'
                              ? project.category
                              : language === 'nl'
                              ? project.category.nl
                              : project.category.en}
                          </span>
                        </div>

                        {/* Arrow on hover */}
                        <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#1a2235]" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="mt-4 px-0.5">
                        <h3 className="text-base font-semibold text-[#1a2235] tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1 leading-relaxed line-clamp-2">
                          {typeof project.description === 'string'
                            ? project.description
                            : language === 'nl'
                            ? project.description.nl
                            : project.description.en}
                        </p>
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-x-3 mt-2.5">
                            {project.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6 md:px-16" style={{ background: '#1a2235' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '150+', label: language === 'nl' ? 'Projecten' : 'Projects' },
                { num: '98%', label: language === 'nl' ? 'Tevredenheid' : 'Satisfaction' },
                { num: '12+', label: language === 'nl' ? 'Awards' : 'Awards' },
                { num: '24u', label: language === 'nl' ? 'Response' : 'Response' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.num}</div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.18em] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
