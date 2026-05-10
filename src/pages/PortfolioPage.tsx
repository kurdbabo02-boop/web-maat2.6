import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <section className="py-32 px-6 md:px-16 bg-[#0a0c10] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                {language === 'nl' ? 'Portfolio' : 'Portfolio'}
              </h1>
            </div>
          </section>
          <section className="py-40 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">
                {language === 'nl' ? 'Geen projecten gevonden' : 'No projects found'}
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#0a0c10]">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0c10] -z-10" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-10 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                {language === 'nl' ? 'Onze Selectie' : 'Our Selection'}
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                {language === 'nl' ? 'Digitale\nMeesterwerken' : 'Digital\nMasterpieces'}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed pt-4">
                {language === 'nl' 
                  ? 'Een gecureerde collectie van hoogwaardige oplossingen die grenzen verleggen.'
                  : 'A curated collection of high-end solutions that push boundaries.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-32 px-6 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                >
                  <Link to={`/portfolio/${project.id}`} className="block space-y-8">
                    {/* Project Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#0a0c10] text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {typeof project.category === 'string' 
                            ? project.category 
                            : (language === 'nl' ? project.category.nl : project.category.en)}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div className="flex items-end justify-between border-b border-slate-100 pb-6">
                        <div className="space-y-2">
                          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0c10]">
                            {project.title}
                          </h3>
                          <p className="text-slate-500 text-sm max-w-md font-medium">
                            {typeof project.description === 'string'
                              ? project.description
                              : (language === 'nl' ? project.description.nl : project.description.en)}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0a0c10] group-hover:border-[#0a0c10] group-hover:text-white transition-all duration-500 shrink-0">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
                          {project.tags.slice(0, 4).map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] text-slate-400 font-bold uppercase tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Minimalist Stats Section */}
        <section className="py-32 px-6 md:px-16 bg-[#fcfcfc] border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#0a0c10]">150+</div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  {language === 'nl' ? 'Projecten' : 'Projects'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#0a0c10]">98%</div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  {language === 'nl' ? 'Tevredenheid' : 'Satisfaction'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#0a0c10]">12+</div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  {language === 'nl' ? 'Awards' : 'Awards'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#0a0c10]">24u</div>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  {language === 'nl' ? 'Response' : 'Response'}
                </p>
              </div>
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
