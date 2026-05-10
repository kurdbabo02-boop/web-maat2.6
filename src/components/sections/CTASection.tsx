import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { bundles } from '@/data/services';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 px-6 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            {language === 'nl' ? 'Investering' : 'Investment'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0c10] mb-6 tracking-tight">
            {language === 'nl' ? 'Kies uw groeipad' : 'Choose your growth path'}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            {language === 'nl' 
              ? 'Transparante prijzen voor buitengewone digitale resultaten.' 
              : 'Transparent pricing for extraordinary digital results.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {bundles.map((bundle, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-10 rounded-sm border transition-all duration-500 ${
                bundle.popular 
                  ? 'bg-[#0a0c10] border-[#0a0c10] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border-slate-100 hover:border-slate-200 text-[#0a0c10]'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-3 left-10 bg-white text-black text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Popular Choice
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-xl font-bold mb-2 ${bundle.popular ? 'text-white' : 'text-[#0a0c10]'}`}>{bundle.name}</h3>
                <p className={`text-sm mb-8 font-medium ${bundle.popular ? 'text-slate-400' : 'text-slate-500'}`}>{bundle.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter">{bundle.price}</span>
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {bundle.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${bundle.popular ? 'text-white' : 'text-slate-900'}`} />
                    <span className={`text-sm font-medium ${bundle.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className={`w-full h-14 rounded-none font-bold text-xs uppercase tracking-widest transition-all ${
                  bundle.popular 
                    ? 'bg-white hover:bg-slate-200 text-black' 
                    : 'bg-[#0a0c10] hover:bg-slate-800 text-white'
                }`}
              >
                <Link to="/quote">
                  {language === 'nl' ? 'Project Starten' : 'Start Project'}
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            {language === 'nl' 
              ? 'Behoefte aan maatwerk? ' 
              : 'Need something custom? '}
            <Link to="/contact" className="text-[#0a0c10] hover:underline ml-2">
              {language === 'nl' ? 'Plan een strategiegesprek' : 'Schedule a strategy session'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
