import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { bundles } from '@/data/services';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 px-6 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            {language === 'nl' ? 'Kies het pakket dat bij u past' : 'Choose the package that fits you'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'nl' ? 'Transparante Pakketten' : 'Transparent Packages'}
          </h2>
          <p className="text-blue-100/60 text-lg max-w-2xl mx-auto font-medium">
            {language === 'nl' 
              ? 'Complete oplossingen voor elke fase van uw onderneming.' 
              : 'Complete solutions for every stage of your business.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-10 rounded-2xl border transition-all duration-500 ${
                bundle.popular 
                  ? 'bg-white/5 border-white/20 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-transparent border-white/10 hover:border-white/20 text-white'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Meest Gekozen
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-2 text-white">{bundle.name}</h3>
                <p className="text-sm mb-8 font-medium text-blue-100/50">{bundle.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter text-white">{bundle.price}</span>
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {bundle.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-blue-100/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className={`w-full h-14 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                  bundle.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Link to="/quote">
                  {language === 'nl' ? 'Nu Starten' : 'Start Now'}
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <p className="text-blue-100/40 text-xs font-bold uppercase tracking-widest">
            {language === 'nl' 
              ? 'Niet zeker welk pakket past? ' 
              : 'Not sure which package fits? '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 hover:underline ml-2 transition-colors">
              {language === 'nl' ? 'Plan een gratis adviesgesprek' : 'Schedule a free consultation'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
