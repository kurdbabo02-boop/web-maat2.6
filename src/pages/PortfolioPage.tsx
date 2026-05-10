import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { language } = useLanguage();

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen bg-[#f1f5f9]">
        <Header />
        <main className="pt-20">
          <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1E4BA1] via-[#2563eb] to-[#1E4BA1]">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {language === 'nl' ? 'Ons Portfolio' : 'Our Portfolio'}
              </h1>
            </div>
          </section>
          <section className="py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-slate-600">{language === 'nl' ? 'Geen projecten gevonden' : 'No projects found'}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1E4BA1] via-[#2563eb] to-[#1E4BA1]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'nl' ? 'Ons Portfolio' : 'Our Portfolio'}
            </h1>
            <p className="text-lg text-blue-100">
              {language === 'nl' 
                ? 'Ontdek de projecten waar we trots op zijn en die resultaten hebben opgeleverd.'
                : 'Discover the projects we\'re proud of and the results they\'ve delivered.'}
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        {/* Projects Grid */}
        <section className="py-20 px-6 md:px-16 bg-[#f1f5f9]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
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
                          {typeof project.category === 'string' 
                            ? project.category 
                            : (language === 'nl' ? project.category.nl : project.category.en)}
                        </p>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1E4BA1] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {typeof project.description === 'string'
                        ? project.description
                        : (language === 'nl' ? project.description.nl : project.description.en)}
                    </p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
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
                    )}

                    {/* CTA */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-[#1E4BA1] font-bold text-sm hover:gap-3 transition-all group/link"
                    >
                      {language === 'nl' ? 'Bekijk project' : 'View project'}
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        {/* Stats Section */}
        <section className="py-16 px-6 md:px-16 bg-[#f0f4ff]">
          <div className="max-w-5xl mx-auto">
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
          </div>
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
