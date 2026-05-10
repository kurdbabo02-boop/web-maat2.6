import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
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
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="Web-Maat" 
                className="h-12 w-auto" 
                style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(450%) hue-rotate(200deg) brightness(98%)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs font-medium">
              {language === 'nl' 
                ? 'Exclusieve digitale ervaringen die uw visie transformeren naar een tastbaar online meesterwerk.' 
                : 'Exclusive digital experiences that transform your vision into a tangible online masterpiece.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:border-[#29458e] hover:text-[#29458e] transition-all text-slate-400 shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:border-[#29458e] hover:text-[#29458e] transition-all text-slate-400 shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links and Services Columns - Grid within Grid for Mobile Side-by-Side */}
          <div className="grid grid-cols-2 lg:col-span-2 gap-8 lg:gap-16">
            {/* Links Column */}
            <div>
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">{language === 'nl' ? 'Ontdekken' : 'Explore'}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="hover:text-[#29458e] transition-colors flex items-center gap-2 group">{t.nav.home}</Link></li>
                <li><Link to="/services" className="hover:text-[#29458e] transition-colors flex items-center gap-2 group">{t.nav.services}</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#29458e] transition-colors flex items-center gap-2 group">{t.nav.portfolio}</Link></li>
                <li><Link to="/about" className="hover:text-[#29458e] transition-colors flex items-center gap-2 group">{t.nav.about}</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">{language === 'nl' ? 'Expertise' : 'Expertise'}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/services/webdesign" className="hover:text-[#29458e] transition-colors">Premium Webdesign</Link></li>
                <li><Link to="/services/webshop" className="hover:text-[#29458e] transition-colors">E-commerce</Link></li>
                <li><Link to="/services/seo" className="hover:text-[#29458e] transition-colors">Digital SEO</Link></li>
                <li><Link to="/services/ai-implementatie" className="hover:text-[#29458e] transition-colors">AI Innovation</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#29458e]" />
                <a href="mailto:info@web-maat.nl" className="hover:text-[#29458e] transition-colors">info@web-maat.nl</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#29458e]" />
                <a href="tel:+31645457394" className="hover:text-[#29458e] transition-colors">+31 6 45457394</a>
              </li>
              <li className="pt-4">
                <Link to="/quote" className="inline-flex items-center px-6 py-3 bg-[#29458e] text-white font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all rounded-lg">
                  {language === 'nl' ? 'Start Project' : 'Start Project'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold">
          <p>© {new Date().getFullYear()} Web-Maat Creations. Crafting Digital Excellence.</p>
          <div className="flex gap-8">
            <button onClick={() => openLegalDialog('privacy')} className="hover:text-[#29458e] transition-colors">Privacy</button>
            <button onClick={() => openLegalDialog('terms')} className="hover:text-[#29458e] transition-colors">Terms</button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      <Dialog open={isLegalDialogOpen} onOpenChange={setIsLegalDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] bg-white border-slate-200 text-slate-600">
          <DialogHeader>
            <DialogTitle className="text-slate-900">{activeLegalTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full pr-4">
            <div className="py-6 text-sm text-slate-500 leading-relaxed">
              {language === 'nl' 
                ? 'Onze juridische documenten worden momenteel bijgewerkt naar onze nieuwe kwaliteitsstandaard. Neem contact met ons op voor de meest recente versie.' 
                : 'Our legal documents are currently being updated to our new quality standards. Please contact us for the latest version.'}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
