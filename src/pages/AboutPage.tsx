import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Zap, Palette, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Story Section - Based on provided image */}
        <section className="py-20 px-16 max-md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
                  {language === 'nl' ? 'ONS VERHAAL' : 'OUR STORY'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {language === 'nl' ? 'Van idee naar resultaat' : 'From idea to result'}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  {language === 'nl' 
                    ? 'Van eerste strategie tot livegang: we bouwen niet alleen een mooie site, maar een digitale basis die past bij uw bedrijf en klaar is voor groei.'
                    : 'From initial strategy to launch: we don\'t just build a beautiful site, but a digital foundation that fits your business and is ready for growth.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                    alt="Team working" 
                    className="w-full h-[400px] object-cover"
                  />
                  {/* Stats Overlay - Based on image */}
                  <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-[320px] bg-white rounded-2xl p-6 shadow-xl flex justify-around items-center border border-slate-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">150+</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {language === 'nl' ? 'Projecten Afgerond' : 'Projects Completed'}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {language === 'nl' ? 'Tevreden Klanten' : 'Satisfied Clients'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Divider with Gradient */}
        <div className="max-w-7xl mx-auto px-16 max-md:px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        {/* Process Steps - Based on image */}
        <section className="py-20 px-16 max-md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-sm">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider with Gradient */}
        <div className="max-w-7xl mx-auto px-16 max-md:px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
