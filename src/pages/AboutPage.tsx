import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Palette, Headphones, TrendingUp, Users, Target, CheckCircle2, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const { language, t } = useLanguage();

  const values = [
    { 
      icon: Award, 
      title: t.about.experience.title, 
      description: t.about.experience.description,
      color: 'text-blue-600'
    },
    { 
      icon: Palette, 
      title: t.about.custom.title, 
      description: t.about.custom.description,
      color: 'text-indigo-600'
    },
    { 
      icon: Headphones, 
      title: t.about.support.title, 
      description: t.about.support.description,
      color: 'text-cyan-600'
    },
    { 
      icon: TrendingUp, 
      title: t.about.results.title, 
      description: t.about.results.description,
      color: 'text-emerald-600'
    },
    { 
      icon: Users, 
      title: language === 'nl' ? 'Klantgericht' : 'Client Focused', 
      description: language === 'nl' ? 'Uw succes staat centraal in alles wat we doen.' : 'Your success is central to everything we do.',
      color: 'text-violet-600'
    },
    { 
      icon: Target, 
      title: language === 'nl' ? 'Doelgericht' : 'Goal Oriented', 
      description: language === 'nl' ? 'Websites die uw bedrijfsdoelen bereiken.' : 'Websites that achieve your business goals.',
      color: 'text-rose-600'
    },
  ];

  const processSteps = [
    {
      icon: Zap,
      title: language === 'nl' ? 'Strategie & Planning' : 'Strategy & Planning',
      description: language === 'nl' ? 'We duiken diep in uw doelen en doelgroep om een winnend plan te maken.' : 'We dive deep into your goals and audience to create a winning plan.',
    },
    {
      icon: Palette,
      title: language === 'nl' ? 'Design & Concept' : 'Design & Concept',
      description: language === 'nl' ? 'Unieke ontwerpen die uw merkidentiteit versterken en indruk maken.' : 'Unique designs that strengthen your brand identity and impress.',
    },
    {
      icon: Rocket,
      title: language === 'nl' ? 'Ontwikkeling & Lancering' : 'Development & Launch',
      description: language === 'nl' ? 'Hoogwaardige code en een vlekkeloze lancering van uw nieuwe platform.' : 'High-quality code and a flawless launch of your new platform.',
    },
    {
      icon: ShieldCheck,
      title: language === 'nl' ? 'Groei & Support' : 'Growth & Support',
      description: language === 'nl' ? 'Continue optimalisatie en ondersteuning om uw succes te waarborgen.' : 'Continuous optimization and support to ensure your success.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-20">
        {/* Modern Minimalist Hero */}
        <section className="relative py-20 overflow-hidden px-16 max-md:px-6 bg-slate-900 text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent z-0" />
          
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold text-blue-400 tracking-wider uppercase">
                {language === 'nl' ? 'Over Web-Maat' : 'About Web-Maat'}
              </span>
            </div>
            
            <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6">
              {language === 'nl' ? (
                <>Wij bouwen de <span className="text-blue-500">digitale toekomst</span></>
              ) : (
                <>Building the <span className="text-blue-500">digital future</span></>
              )}
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t.pages.about.heroSubtitle}
            </p>
          </motion.div>
        </section>

        {/* Story & Vision Section */}
        <section className="py-24 px-16 max-md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  {language === 'nl' ? 'Onze visie op digitaal succes' : 'Our vision on digital success'}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Bij Web-Maat geloven we dat een website meer is dan alleen een online visitekaartje. Het is de motor van uw groei, een platform dat vertrouwen wekt en resultaten levert.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    language === 'nl' ? 'Maatwerk zonder compromissen' : 'Custom work without compromises',
                    language === 'nl' ? 'Focus op conversie en resultaat' : 'Focus on conversion and results',
                    language === 'nl' ? 'Persoonlijke betrokkenheid' : 'Personal involvement',
                    language === 'nl' ? 'Toekomstbestendige technologie' : 'Future-proof technology'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-semibold text-slate-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section - Modern List Style */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'nl' ? 'Hoe wij het verschil maken' : 'How we make the difference'}
              </h2>
              <p className="text-slate-400 text-lg">
                Een gestroomlijnd proces van eerste kennismaking tot een succesvolle lancering.
              </p>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className="flex gap-8 items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Clean Grid, No Cards */}
        <section className="py-24 px-16 max-md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Onze Kernwaarden</h2>
              <p className="text-slate-600">De fundamenten van onze samenwerking</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className={`mb-6 ${value.color}`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
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

export default AboutPage;
