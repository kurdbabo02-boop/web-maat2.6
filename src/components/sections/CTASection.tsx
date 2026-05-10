import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { bundles } from '@/data/services';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 bg-[#f0f4ff]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {language === 'nl' ? 'Kies het pakket dat bij u past' : 'Choose the package that fits you'}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Transparante prijzen en complete oplossingen voor elke fase van uw onderneming.' 
              : 'Transparent pricing and complete solutions for every stage of your business.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                bundle.popular 
                  ? 'bg-white border-[#d6e0f5] shadow-xl shadow-[#1E4BA1]/10 scale-105 z-10' 
                  : 'bg-slate-50/50 border-slate-200 hover:border-blue-100'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E4BA1] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Meest Gekozen
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{bundle.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{bundle.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">{bundle.price}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {bundle.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1E4BA1] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild 
                className={`w-full h-12 rounded-xl font-bold transition-all ${
                  bundle.popular 
                    ? 'bg-[#1E4BA1] hover:bg-[#163a7a] text-white' 
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
      </div>

      {/* Consultation CTA */}
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <p className="text-slate-600 text-sm mb-4">
          {language === 'nl' 
            ? 'Niet zeker welk pakket past? ' 
            : 'Not sure which package fits? '}
          <Link to="/contact" className="text-[#1E4BA1] font-bold hover:underline">
            {language === 'nl' ? 'Plan een gratis adviesgesprek' : 'Schedule a free consultation'}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
