import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const { language } = useLanguage();

  const processSteps = [
    {
      id: '01',
      title: language === 'nl' ? 'Analyse en strategie' : 'Analysis and strategy',
      description: language === 'nl' ? 'Inzicht in uw bedrijf, doelgroep en doelstellingen vormt de basis van het ontwerp.' : 'Insight into your business, target audience and objectives forms the basis of the design.',
    },
    {
      id: '02',
      title: language === 'nl' ? 'Demo en feedback' : 'Demo and feedback',
      description: language === 'nl' ? 'Voor de livegang ontvangt u een demo om de website te beoordelen, testen en feedback te geven.' : 'Before going live, you will receive a demo to review, test and provide feedback on the website.',
    },
    {
      id: '03',
      title: language === 'nl' ? 'Structuur en design' : 'Structure and design',
      description: language === 'nl' ? 'Een unieke website met duidelijke structuur en professionele uitstraling, volledig afgestemd op uw organisatie.' : 'A unique website with a clear structure and professional appearance, fully tailored to your organization.',
    },
    {
      id: '04',
      title: language === 'nl' ? 'Resultaatgericht' : 'Result-oriented',
      description: language === 'nl' ? 'Ontwikkeld met focus op vertrouwen, conversie en duurzame groei.' : 'Developed with a focus on trust, conversion and sustainable growth.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <Header />
      <main className="pt-20">
        {/* Story Section - Smaller, Darker, Less White */}
        <section className="py-12 px-6 md:px-16 bg-[#f1f5f9]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <span className="text-[#1E4BA1] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                  {language === 'nl' ? 'ONS VERHAAL' : 'OUR STORY'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {language === 'nl' ? 'Van idee naar resultaat' : 'From idea to result'}
                </h2>
                <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed max-w-xl">
                  {language === 'nl' 
                    ? 'Van eerste strategie tot livegang: we bouwen niet alleen een mooie site, maar een digitale basis die past bij uw bedrijf en klaar is voor groei.'
                    : 'From initial strategy to launch: we don\'t just build a beautiful site, but a digital foundation that fits your business and is ready for growth.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  {/* Image with overlay/gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
                    alt="Team working" 
                    className="w-full h-[280px] md:h-[320px] object-cover"
                  />
                  {/* Stats Overlay - Compact & Darker */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex justify-around items-center border border-slate-200 z-20">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#1E4BA1]">150+</div>
                      <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">
                        {language === 'nl' ? 'Projecten' : 'Projects'}
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#1E4BA1]">98%</div>
                      <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">
                        {language === 'nl' ? 'Tevreden' : 'Satisfied'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>

        {/* Process Steps - Darker text for mobile readability */}
        <section className="py-16 px-6 md:px-16 bg-[#f1f5f9]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4 text-[#1E4BA1] font-bold text-xs">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1E4BA1] transition-colors">{step.title}</h3>
                  <p className="text-slate-800 text-xs leading-relaxed">{step.description}</p>
                  
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}
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

export default AboutPage;
