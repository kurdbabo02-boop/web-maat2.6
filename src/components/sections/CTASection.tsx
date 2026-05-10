import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {language === 'nl' ? 'Klaar voor de volgende stap?' : 'Ready for the next step?'}
              </h2>
              <p className="text-slate-400 text-base">
                {language === 'nl' 
                  ? 'Ontvang binnen 24 uur een vrijblijvende offerte voor uw project.' 
                  : 'Receive a no-obligation quote for your project within 24 hours.'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-14">
                <Link to="/quote">
                  {language === 'nl' ? 'Vraag Offerte Aan' : 'Request Quote'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 h-14">
                <Link to="/contact">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  {language === 'nl' ? 'Contact' : 'Contact Us'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
