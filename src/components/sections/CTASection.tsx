import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { bundles } from '@/data/services';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#29458e] text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
            {language === 'nl' ? 'Groepakketten' : 'Group Packages'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {language === 'nl' ? 'Kies het pakket dat past bij uw bedrijf' : 'Choose the package that fits your business'}
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            {language === 'nl' 
              ? 'Van snel online tot volledig maatwerk.' 
              : 'From quick online to complete custom work.'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bundles.map((bundle, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${
                bundle.popular 
                  ? 'border-[#29458e] bg-blue-50 md:scale-105 md:z-10' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Popular Badge */}
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#29458e] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  <span>⭐</span>
                  {language === 'nl' ? 'Meest gekozen' : 'Most popular'}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{bundle.name}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{bundle.description}</p>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-3 mb-8">
                {bundle.features.slice(0, 8).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-[#29458e] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#29458e]" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button 
                  asChild 
                  className="w-full h-11 rounded-lg font-bold text-sm uppercase tracking-widest transition-all bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                >
                  <Link to="/contact">
                    {language === 'nl' ? 'Meer informatie' : 'More information'}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full h-11 rounded-lg font-bold text-sm uppercase tracking-widest transition-all bg-[#29458e] text-white hover:bg-[#29458e] hover:shadow-lg"
                >
                  <Link to="/quote">
                    {language === 'nl' ? 'Offerte aanvragen' : 'Request quote'}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 text-sm font-medium">
            {language === 'nl' 
              ? 'Niet zeker welk pakket past? ' 
              : 'Not sure which package fits? '}
            <Link to="/contact" className="text-[#29458e] font-bold hover:underline transition-colors">
              {language === 'nl' ? 'Plan een gratis adviesgesprek' : 'Schedule a free consultation'}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
