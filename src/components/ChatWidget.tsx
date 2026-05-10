import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import whatsappIcon from '@/assets/whatsapp-icon.svg';

const ChatWidget = () => {
  const { language } = useLanguage();
  const whatsappNumber = '31612345678';

  const openWhatsApp = () => {
    const presetText = language === 'nl'
      ? 'Hallo Web-Maat, ik heb een vraag over jullie diensten.'
      : 'Hi Web-Maat, I have a question about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(presetText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:bg-[#20c55a] transition-colors"
      aria-label={language === 'nl' ? 'Contact via WhatsApp' : 'Contact via WhatsApp'}
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" className="w-7 h-7 md:w-8 md:h-8" />
      
      {/* Tooltip-like badge */}
      <div className="absolute -top-12 right-0 bg-white text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md border border-slate-100 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        {language === 'nl' ? 'Chat met ons' : 'Chat with us'}
      </div>
    </motion.button>
  );
};

export default ChatWidget;
