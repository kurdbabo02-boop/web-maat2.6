import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
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
    <footer
      className="relative isolate block w-full border-t border-slate-200 bg-slate-50 px-4 pb-5 pt-8 text-slate-600 md:px-6 md:pb-10 md:pt-20"
      style={{
        backgroundColor: '#f8fafc',
        borderTopColor: '#e2e8f0',
        color: '#475569',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-8 md:mb-20 md:gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4 md:space-y-8">
            <div className="flex items-start gap-3 md:block">
              <Link to="/" className="inline-block shrink-0 group">
                <img 
                  src={logo} 
                  alt="Web-Maat" 
                  className="h-10 w-auto md:h-12" 
                  style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(450%) hue-rotate(200deg) brightness(98%)' }}
                />
              </Link>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-500">
                {language === 'nl' 
                  ? 'Exclusieve digitale ervaringen die uw visie transformeren naar een tastbaar online meesterwerk.' 
                  : 'Exclusive digital experiences that transform your vision into a tangible online masterpiece.'}
              </p>
            </div>
          </div>

          {/* Links and Services Columns - Grid within Grid for Mobile Side-by-Side */}
          <div className="grid grid-cols-2 gap-8 md:gap-10 lg:col-span-2 lg:gap-16">
            {/* Links Column */}
            <div>
              <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 md:mb-6">{language === 'nl' ? 'Ontdekken' : 'Explore'}</h4>
              <ul className="space-y-2 text-sm font-medium md:space-y-4">
                <li><Link to="/" className="flex items-center gap-2 transition-colors hover:text-[#29458e] group">{t.nav.home}</Link></li>
                <li><Link to="/services" className="flex items-center gap-2 transition-colors hover:text-[#29458e] group">{t.nav.services}</Link></li>
                <li><Link to="/portfolio" className="flex items-center gap-2 transition-colors hover:text-[#29458e] group">{t.nav.portfolio}</Link></li>
                <li><Link to="/about" className="flex items-center gap-2 transition-colors hover:text-[#29458e] group">{t.nav.about}</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 md:mb-6">{language === 'nl' ? 'Expertise' : 'Expertise'}</h4>
              <ul className="space-y-2 text-sm font-medium md:space-y-4">
                <li><Link to="/services/webdesign" className="transition-colors hover:text-[#29458e]">Premium Webdesign</Link></li>
                <li><Link to="/services/webshop" className="transition-colors hover:text-[#29458e]">E-commerce</Link></li>
                <li><Link to="/services/seo" className="transition-colors hover:text-[#29458e]">Digital SEO</Link></li>
                <li><Link to="/services/ai-implementatie" className="transition-colors hover:text-[#29458e]">AI Innovation</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 md:mb-6">Connect</h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium md:block md:space-y-4">
              <a href="mailto:info@web-maat.nl" className="flex items-center gap-2 transition-colors hover:text-[#29458e]">
                <Mail className="h-4 w-4 shrink-0 text-[#29458e]" />
                <span>info@web-maat.nl</span>
              </a>
              <a href="tel:+31645457394" className="flex items-center gap-2 transition-colors hover:text-[#29458e]">
                <Phone className="h-4 w-4 shrink-0 text-[#29458e]" />
                <span>+31 6 45457394</span>
              </a>
              <Link to="/quote" className="inline-flex items-center rounded-lg bg-[#29458e] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:shadow-lg md:px-6 md:py-3">
                {language === 'nl' ? 'Start Project' : 'Start Project'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-10">
          <p>© {new Date().getFullYear()} Web-Maat Creations.</p>
          <div className="flex gap-5">
            <button onClick={() => openLegalDialog('privacy')} className="transition-colors hover:text-[#29458e]">
              {language === 'nl' ? 'Privacy' : 'Privacy'}
            </button>
            <button onClick={() => openLegalDialog('terms')} className="transition-colors hover:text-[#29458e]">
              {language === 'nl' ? 'Voorwaarden' : 'Terms'}
            </button>
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
