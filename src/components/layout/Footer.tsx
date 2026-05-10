import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import logo from '@/assets/logo.png';

type LegalTab = 'privacy' | 'terms';

const Footer = () => {
  const { t, language } = useLanguage();
  const [isLegalDialogOpen, setIsLegalDialogOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('privacy');

  const openLegalDialog = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setIsLegalDialogOpen(true);
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Web-Maat" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {language === 'nl' 
                ? 'Wij bouwen hoogwaardige digitale oplossingen die uw bedrijf helpen groeien in het digitale tijdperk.' 
                : 'We build high-quality digital solutions that help your business grow in the digital age.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E4BA1]/20 flex items-center justify-center hover:bg-[#1E4BA1] hover:text-white transition-all text-[#1E4BA1]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E4BA1]/20 flex items-center justify-center hover:bg-[#1E4BA1] hover:text-white transition-all text-[#1E4BA1]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-[#1E4BA1] font-bold mb-6 uppercase tracking-wider text-xs">{language === 'nl' ? 'Navigatie' : 'Navigation'}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#1E4BA1] font-bold mb-6 uppercase tracking-wider text-xs">{language === 'nl' ? 'Diensten' : 'Services'}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/webdesign" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">Webdesign</Link></li>
              <li><Link to="/services/webshop" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">Webshops</Link></li>
              <li><Link to="/services/seo" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">SEO Optimalisatie</Link></li>
              <li><Link to="/services/ai-implementatie" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">AI Implementatie</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[#1E4BA1] font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1E4BA1]" />
                <a href="mailto:info@web-maat.nl" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">info@web-maat.nl</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1E4BA1]" />
                <a href="tel:+31645457394" className="text-slate-400 hover:text-[#1E4BA1] transition-colors">+31 6 45457394</a>
              </li>
              <li className="pt-4">
                <Link to="/quote" className="inline-flex items-center gap-2 text-[#1E4BA1] font-bold hover:gap-3 transition-all">
                  {language === 'nl' ? 'Vraag een offerte aan' : 'Request a quote'}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E4BA1]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Web-Maat Creations. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => openLegalDialog('privacy')} className="text-slate-400 hover:text-[#1E4BA1] transition-colors">Privacy Policy</button>
            <button onClick={() => openLegalDialog('terms')} className="text-slate-400 hover:text-[#1E4BA1] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Legal Dialog (Simplified for now) */}
      <Dialog open={isLegalDialogOpen} onOpenChange={setIsLegalDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>{activeLegalTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full pr-4">
            <div className="py-4 text-sm text-slate-600 leading-relaxed">
              {language === 'nl' 
                ? 'Onze juridische documenten worden momenteel bijgewerkt. Neem contact met ons op voor de meest recente versie.' 
                : 'Our legal documents are currently being updated. Please contact us for the latest version.'}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
