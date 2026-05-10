import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Handle scroll for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    closeDrawer();
  }, [location.pathname]);

  return (
    <div className="font-['Inter',sans-serif]">
      {/* Fixed Navigation Bar - Updated to White Glassy Look */}
      <nav 
        className={`fixed top-0 left-0 w-full h-20 z-[2000] flex items-center justify-between px-6 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' 
            : 'bg-white/40 backdrop-blur-sm border-b border-white/10'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline h-full">
          <img src={logo} alt="Web-Maat Creations" className="h-20 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(450%) hue-rotate(200deg) brightness(98%)' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-slate-700 no-underline text-sm font-semibold transition-colors duration-300 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            to="/quote"
            className="bg-[#29458e] text-white px-6 py-2.5 rounded-md text-sm font-bold no-underline transition-colors hover:bg-[#29458e]"
          >
            {language === 'nl' ? 'Offerte aanvragen' : 'Request a quote'}
          </Link>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className="lg:hidden w-10 h-10 border-0 bg-transparent cursor-pointer relative z-[3000]"
          onClick={toggleDrawer}
          aria-label="Menu openen"
        >
          <span
            className={`absolute left-2 w-6 h-0.5 bg-[#29458e] transition-all duration-500 ease-in-out ${
              isDrawerOpen ? 'top-[19px] rotate-45' : 'top-[14px]'
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-[#29458e] transition-all duration-500 ease-in-out ${
              isDrawerOpen ? 'opacity-0 scale-x-0' : 'top-[20px] opacity-100 scale-x-100'
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-[#29458e] transition-all duration-500 ease-in-out ${
              isDrawerOpen ? 'top-[19px] -rotate-45' : 'top-[26px]'
            }`}
          />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-all duration-300 z-[2498] ${
          isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 w-full md:w-[340px] h-screen bg-white z-[2500] flex flex-col p-6 border-l border-black/5 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-transform duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5">
          <Link to="/" className="text-[#0f172a] no-underline text-2xl font-bold tracking-[1px]" onClick={closeDrawer}>
            WEB-MAAT<span className="text-[#3b82f6]">.</span>
          </Link>
          <button
            className="w-11 h-11 bg-black/[0.04] border-0 rounded-xl text-[#0f172a] text-[28px] cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-[rgba(59,130,246,0.1)] hover:text-[#3b82f6]"
            onClick={closeDrawer}
            aria-label="Menu sluiten"
          >
            &times;
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/5 w-full my-2.5" />

        {/* Mobile Navigation Links - Two columns for better layout */}
        <div className="flex-1 py-8">
          <ul className="grid grid-cols-2 gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="flex items-center justify-center h-16 bg-slate-50 rounded-xl text-[#0f172a] no-underline text-sm font-bold uppercase tracking-wider transition-all hover:bg-blue-50 hover:text-[#1E4BA1] border border-slate-100"
                  onClick={closeDrawer}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/5 w-full my-2.5" />

        {/* Drawer Footer */}
        <div className="pb-2.5">
          <div className="mb-6 flex flex-col items-center">
            <a
              href="tel:+31645457394"
              className="flex items-center gap-3 text-[#475569] no-underline text-sm mb-3.5 transition-colors duration-300 hover:text-[#29458e]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +31 6 45457394
            </a>
            <a
              href="mailto:info@web-maat.nl"
              className="flex items-center gap-3 text-[#475569] no-underline text-sm mb-3.5 transition-colors duration-300 hover:text-[#29458e]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@web-maat.nl
            </a>
          </div>

          <Link
            to="/quote"
            className="block w-full bg-[#29458e] text-white text-center py-[18px] rounded-md no-underline font-bold text-sm uppercase transition-colors duration-300 hover:bg-[#29458e]"
            onClick={closeDrawer}
          >
            {language === 'nl' ? 'Offerte aanvragen' : 'Request a quote'}
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Header;
