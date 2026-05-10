import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { bundles } from '@/data/services';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
            {language === 'nl' ? 'Kies het pakket dat bij u past' : 'Choose the package that fits you'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {language === 'nl' ? 'Transparante Pakketten' : 'Transparent Packages'}
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            {language === 'nl' 
              ? 'Complete oplossingen voor elke fase van uw onderneming.' 
              : 'Complete solutions for every stage of your business.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bundles.map((bundle, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-500 ${
                bundle.popular 
                  ? 'bg-slate-900 border-slate-800 text-slate-900 shadow-xl scale-105 z-10' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Meest Gekozen
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{bundle.name}</h3>
                <p className="text-sm mb-6 font-medium text-slate-600">{bundle.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tighter text-slate-900">{bundle.price}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {bundle.features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className={`w-full h-12 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                  bundle.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <Link to="/quote">
                  {language === 'nl' ? 'Nu Starten' : 'Start Now'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            {language === 'nl' 
              ? 'Niet zeker welk pakket past? ' 
              : 'Not sure which package fits? '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 hover:underline ml-2 transition-colors">
              {language === 'nl' ? 'Plan een gratis adviesgesprek' : 'Schedule a free consultation'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
