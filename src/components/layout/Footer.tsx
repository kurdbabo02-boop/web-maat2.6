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
    <footer className="bg-[#050b1a] text-blue-100/60 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <img src={logo} alt="Web-Maat" className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm leading-relaxed text-blue-100/50 max-w-xs font-medium">
              {language === 'nl' 
                ? 'Exclusieve digitale ervaringen die uw visie transformeren naar een tastbaar online meesterwerk.' 
                : 'Exclusive digital experiences that transform your vision into a tangible online masterpiece.'}
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 hover:text-white transition-all text-blue-100/40">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 hover:text-white transition-all text-blue-100/40">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[10px]">{language === 'nl' ? 'Ontdekken' : 'Explore'}</h4>
            <ul className="space-y-5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2 group">{t.nav.home} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2 group">{t.nav.services} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors flex items-center gap-2 group">{t.nav.portfolio} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 group">{t.nav.about} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[10px]">{language === 'nl' ? 'Expertise' : 'Expertise'}</h4>
            <ul className="space-y-5 text-sm">
              <li><Link to="/services/webdesign" className="hover:text-white transition-colors">Premium Webdesign</Link></li>
              <li><Link to="/services/webshop" className="hover:text-white transition-colors">E-commerce Excellence</Link></li>
              <li><Link to="/services/seo" className="hover:text-white transition-colors">Digital Authority (SEO)</Link></li>
              <li><Link to="/services/ai-implementatie" className="hover:text-white transition-colors">AI Innovation</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-white/60" />
                </div>
                <a href="mailto:info@web-maat.nl" className="hover:text-white transition-colors">info@web-maat.nl</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white/60" />
                </div>
                <a href="tel:+31645457394" className="hover:text-white transition-colors">+31 6 45457394</a>
              </li>
              <li className="pt-6">
                <Link to="/quote" className="inline-flex items-center px-6 py-3 bg-[#29458e] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1e3368] transition-all rounded-sm">
                  {language === 'nl' ? 'Start Project' : 'Start Project'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.15em] text-blue-100/30 font-medium">
          <p>© {new Date().getFullYear()} Web-Maat Creations. Crafting Digital Excellence.</p>
          <div className="flex gap-10">
            <button onClick={() => openLegalDialog('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => openLegalDialog('terms')} className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      <Dialog open={isLegalDialogOpen} onOpenChange={setIsLegalDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] bg-[#050b1a] border-white/10 text-blue-100/70">
          <DialogHeader>
            <DialogTitle className="text-white">{activeLegalTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full pr-4">
            <div className="py-6 text-sm text-blue-100/60 leading-relaxed">
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
