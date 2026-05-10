import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Palette, Headphones, TrendingUp, Users, Target, CheckCircle2, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="pt-20">
        {/* Compact Modern Hero - No white text, less white space */}
        <section className="relative py-16 overflow-hidden px-16 max-md:px-6 bg-[#f0f4ff]">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent z-0" />
          
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] font-bold text-blue-800 tracking-wider uppercase">
                {language === 'nl' ? 'Over Web-Maat' : 'About Web-Maat'}
              </span>
            </div>
            
            <h1 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.2] tracking-[-0.03em] text-slate-900 mb-4">
              {language === 'nl' ? (
                <>Wij bouwen de <span className="text-blue-600">digitale toekomst</span></>
              ) : (
                <>Building the <span className="text-blue-600">digital future</span></>
              )}
            </h1>
            
            <p className="text-base md:text-lg text-slate-700 max-w-2xl leading-relaxed">
              {t.pages.about.heroSubtitle}
            </p>
          </motion.div>
        </section>

        {/* Stats Strip - Darker background, dark text */}
        <section className="py-10 border-y border-slate-200 bg-slate-100/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story & Vision Section */}
        <section className="py-20 px-16 max-md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                  {language === 'nl' ? 'Onze visie op digitaal succes' : 'Our vision on digital success'}
                </h2>
                <p className="text-base text-slate-700 mb-6 leading-relaxed">
                  Bij Web-Maat geloven we dat een website meer is dan alleen een online visitekaartje. Het is de motor van uw groei, een platform dat vertrouwen wekt en resultaten levert.
                </p>
                
                <div className="space-y-3">
                  {[
                    language === 'nl' ? 'Maatwerk zonder compromissen' : 'Custom work without compromises',
                    language === 'nl' ? 'Focus op conversie en resultaat' : 'Focus on conversion and results',
                    language === 'nl' ? 'Persoonlijke betrokkenheid bij elk project' : 'Personal involvement in every project',
                    language === 'nl' ? 'Toekomstbestendige technologie' : 'Future-proof technology'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="font-semibold text-slate-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Dark background, but NO white text (using slate-300/400) */}
        <section className="py-20 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">
                {language === 'nl' ? 'Hoe wij het verschil maken' : 'How we make the difference'}
              </h2>
              <p className="text-slate-400 text-base">
                Een gestroomlijnd proces van eerste kennismaking tot een succesvolle lancering en daarna.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div 
                  key={i}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-200">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 px-16 max-md:px-6 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Onze Kernwaarden</h2>
              <p className="text-slate-600 text-sm">De fundamenten van onze samenwerking</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="h-full border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
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
