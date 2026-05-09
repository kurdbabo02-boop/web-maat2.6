import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Palette, Headphones, TrendingUp, Users, Target, Star, Quote, ArrowRight, CheckCircle2, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const AboutPage = () => {
  const { language, t } = useLanguage();

  const values = [
    { 
      icon: Award, 
      title: t.about.experience.title, 
      description: t.about.experience.description,
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      icon: Palette, 
      title: t.about.custom.title, 
      description: t.about.custom.description,
      color: 'bg-indigo-50 text-indigo-600'
    },
    { 
      icon: Headphones, 
      title: t.about.support.title, 
      description: t.about.support.description,
      color: 'bg-cyan-50 text-cyan-600'
    },
    { 
      icon: TrendingUp, 
      title: t.about.results.title, 
      description: t.about.results.description,
      color: 'bg-emerald-50 text-emerald-600'
    },
    { 
      icon: Users, 
      title: language === 'nl' ? 'Klantgericht' : 'Client Focused', 
      description: language === 'nl' ? 'Uw succes staat centraal in alles wat we doen.' : 'Your success is central to everything we do.',
      color: 'bg-violet-50 text-violet-600'
    },
    { 
      icon: Target, 
      title: language === 'nl' ? 'Doelgericht' : 'Goal Oriented', 
      description: language === 'nl' ? 'Websites die uw bedrijfsdoelen bereiken.' : 'Websites that achieve your business goals.',
      color: 'bg-rose-50 text-rose-600'
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

  const stats = [
    { value: '150+', label: language === 'nl' ? 'Projecten' : 'Projects' },
    { value: '98%', label: language === 'nl' ? 'Tevredenheid' : 'Satisfaction' },
    { value: '5+', label: language === 'nl' ? 'Jaar Ervaring' : 'Years Experience' },
    { value: '24u', label: language === 'nl' ? 'Response' : 'Response' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Modern Minimalist Hero */}
        <section className="relative py-24 overflow-hidden px-16 max-md:px-6 bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent z-0" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl z-0" />
          
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
                {language === 'nl' ? 'Maak kennis met Web-Maat' : 'Meet Web-Maat'}
              </span>
            </div>
            
            <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-900 mb-8">
              {language === 'nl' ? (
                <>Wij bouwen de <span className="text-blue-600">digitale toekomst</span> van uw onderneming</>
              ) : (
                <>Building the <span className="text-blue-600">digital future</span> of your business</>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t.pages.about.heroSubtitle}
            </p>
          </motion.div>
        </section>

        {/* Stats Strip */}
        <section className="py-12 border-y border-slate-100 bg-slate-50/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story & Vision Section */}
        <section className="py-24 px-16 max-md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {language === 'nl' ? 'Onze visie op digitaal succes' : 'Our vision on digital success'}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Bij Web-Maat geloven we dat een website meer is dan alleen een online visitekaartje. Het is de motor van uw groei, een platform dat vertrouwen wekt en resultaten levert.
                </p>
                
                <div className="space-y-4">
                  {[
                    language === 'nl' ? 'Maatwerk zonder compromissen' : 'Custom work without compromises',
                    language === 'nl' ? 'Focus op conversie en resultaat' : 'Focus on conversion and results',
                    language === 'nl' ? 'Persoonlijke betrokkenheid bij elk project' : 'Personal involvement in every project',
                    language === 'nl' ? 'Toekomstbestendige technologie' : 'Future-proof technology'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{item}</span>
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
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full z-0 opacity-10 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600 rounded-full z-0 opacity-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'nl' ? 'Hoe wij het verschil maken' : 'How we make the difference'}
              </h2>
              <p className="text-slate-400 text-lg">
                Een gestroomlijnd proces van eerste kennismaking tot een succesvolle lancering en daarna.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  <div className="absolute top-8 right-8 text-4xl font-black text-white/5">{i + 1}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 px-16 max-md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Onze Kernwaarden</h2>
              <p className="text-slate-600">De fundamenten van onze samenwerking</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${value.color}`}>
                        <value.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
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
