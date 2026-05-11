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
          <img src={logo} alt="Web-Maat Creations" className="h-20 w-auto" />
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
        className={`fixed inset-0 bg-black/28 transition-all duration-500 z-[2498] ${
          isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[50vw] min-w-[280px] max-w-[420px] bg-white z-[2500] flex flex-col px-6 py-5 border-l border-slate-200 shadow-[-16px_0_40px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5">
          <Link to="/" className="flex items-center" onClick={closeDrawer}>
            <img src={logo} alt="Web-Maat Creations" className="h-14 w-auto" />
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-slate-100 text-[24px] text-[#0f172a] transition-colors duration-300 hover:bg-slate-200"
            onClick={closeDrawer}
            aria-label="Menu sluiten"
          >
            &times;
          </button>
        </div>

        {/* Divider */}
        <div className="my-2.5 h-px w-full bg-slate-200" />

        {/* Mobile Navigation Links */}
        <div className="py-8">
          <ul className="flex list-none flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block text-[#0f172a] no-underline text-[18px] font-semibold transition-colors duration-300 hover:text-[#29458e]"
                  onClick={closeDrawer}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="my-2.5 h-px w-full bg-slate-200" />

        {/* Drawer Footer */}
        <div className="mt-auto pb-3">
          <div className="mb-4 flex flex-col items-start">
            <a
              href="tel:+31645457394"
              className="mb-3 flex items-center gap-3 text-[13px] text-[#475569] no-underline transition-colors duration-300 hover:text-[#29458e]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +31 6 45457394
            </a>
            <a
              href="mailto:info@web-maat.nl"
              className="mb-3 flex items-center gap-3 text-[13px] text-[#475569] no-underline transition-colors duration-300 hover:text-[#29458e]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@web-maat.nl
            </a>
          </div>

          <Link
            to="/quote"
            className="block w-full rounded-md bg-[#29458e] py-4 text-center text-sm font-bold text-white no-underline uppercase transition-colors duration-300 hover:bg-[#29458e]"
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
