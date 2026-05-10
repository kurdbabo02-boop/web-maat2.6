import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[2000] flex items-center justify-between px-6 bg-slate-900 backdrop-blur-[12px] border-b border-white/10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline h-full">
          <img src={logo} alt="Web-Maat Creations" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-slate-300 no-underline text-sm font-medium transition-colors duration-300 hover:text-[#3b82f6]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (mobile) */}
        <button
          className="lg:hidden w-10 h-10 border-0 bg-transparent cursor-pointer relative"
          onClick={toggleDrawer}
          aria-label="Menu openen"
        >
          <span
            className={`absolute left-2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isDrawerOpen ? 'top-[19px] rotate-45' : 'top-[14px]'
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isDrawerOpen ? 'opacity-0' : 'top-[20px]'
            }`}
          />
          <span
            className={`absolute left-2 w-6 h-0.5 bg-white transition-all duration-300 ${
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
        className={`fixed top-0 right-0 w-[340px] h-screen bg-white z-[2500] flex flex-col p-6 border-l border-black/5 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-transform duration-[400ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
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

        {/* Mobile Navigation Links */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <ul className="list-none text-center">
            {navLinks.map((link) => (
              <li key={link.href} className="mb-[30px] last:mb-0">
                <Link
                  to={link.href}
                  className="text-[#0f172a] no-underline text-xl font-bold uppercase tracking-[0.05em] transition-colors duration-300 hover:text-[#2563eb]"
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
              href="tel:+31600000000"
              className="flex items-center gap-3 text-[#475569] no-underline text-sm mb-3.5 transition-colors duration-300 hover:text-[#2563eb]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +31 6 00000000
            </a>
            <a
              href="mailto:info@web-maat.nl"
              className="flex items-center gap-3 text-[#475569] no-underline text-sm mb-3.5 transition-colors duration-300 hover:text-[#2563eb]"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3b82f6]">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@web-maat.nl
            </a>
          </div>

          <Link
            to="/quote"
            className="block w-full bg-[#3b82f6] text-white text-center py-[18px] rounded-xl no-underline font-bold text-sm uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:bg-[#2563eb] hover:shadow-[0_6px_20px_rgba(59,130,246,0.35)] hover:-translate-y-px"
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
