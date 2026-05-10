import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const PortfolioPage = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1E4BA1] via-[#2563eb] to-[#1E4BA1]">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'nl' ? 'Ons Portfolio' : 'Our Portfolio'}
            </h1>
            <p className="text-lg text-blue-100">
              {language === 'nl' 
                ? 'Ontdek de projecten waar we trots op zijn en die resultaten hebben opgeleverd.'
                : 'Discover the projects we\'re proud of and the results they\'ve delivered.'}
            </p>
          </motion.div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        {/* Projects Grid - Modern Card Layout */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-[#1E4BA1] text-xs font-bold uppercase tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1E4BA1] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 bg-blue-50 text-[#1E4BA1] text-xs rounded-full font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-[#1E4BA1] font-bold text-sm hover:gap-3 transition-all group/link"
                    >
                      {language === 'nl' ? 'Bekijk project' : 'View project'}
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        {/* Stats Section */}
        <section className="py-16 px-6 md:px-16 bg-[#f0f4ff]">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E4BA1] mb-2">150+</div>
                <p className="text-slate-700 font-semibold uppercase tracking-wider text-sm">
                  {language === 'nl' ? 'Projecten' : 'Projects'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E4BA1] mb-2">98%</div>
                <p className="text-slate-700 font-semibold uppercase tracking-wider text-sm">
                  {language === 'nl' ? 'Tevredenheid' : 'Satisfaction'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E4BA1] mb-2">24u</div>
                <p className="text-slate-700 font-semibold uppercase tracking-wider text-sm">
                  {language === 'nl' ? 'Response' : 'Response'}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
