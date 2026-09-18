import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import { externalLinks } from '../data/content';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.story, href: '#dimora' },
    { label: t.nav.spaces, href: '#spazi' },
    { label: t.nav.jacuzzi, href: '#idromassaggio' },
    { label: t.nav.amenities, href: '#servizi' },
    { label: t.nav.gallery, href: '#galleria' },
    { label: t.nav.location, href: '#posizione' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#151312]/92 backdrop-blur-md shadow-lg py-3 border-b border-[#c5a880]/20'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          
          {/* Brand / Logo on Left for Mobile & Left Anchor on Desktop */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center group py-0.5">
              <img
                src="/images/logo-white.png"
                alt="Noce di Pietra Luxury Trulli"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-md"
              />
            </a>
          </div>

          {/* Desktop Center Brand Location Tagline */}
          <div className="hidden lg:flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#dfc299]/80 font-sans border-b border-[#dfc299]/30 pb-0.5">
              Valle d’Itria • Alberobello • Puglia
            </span>
          </div>

          {/* Right Controls: Language Selector + Book Now CTA + Hamburger Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switch */}
            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-0.5 text-xs font-medium">
              <button
                onClick={() => setLanguage('it')}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] transition-all duration-300 ${
                  language === 'it'
                    ? 'bg-[#b89360] text-white shadow-sm font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                IT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-[#b89360] text-white shadow-sm font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Booking CTA - hidden on very small phones or compact */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#b89360] via-[#c5a06d] to-[#9a7644] hover:from-[#c5a06d] hover:to-[#b89360] text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.14em] uppercase shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              <span>{t.nav.bookNow}</span>
            </button>

            {/* Luxury Hamburger Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#faf6f0] text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none group shrink-0"
              aria-label="Apri Menu"
            >
              <span className="hidden md:inline group-hover:text-[#dfc299] transition-colors">Menu</span>
              <Menu className="w-4 sm:w-5 h-4 sm:h-5 group-hover:text-[#dfc299] transition-colors" />
            </button>

          </div>
        </div>
      </header>

      {/* Luxury Fullscreen/Slide Drawer for All Devices */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-[#161412] border-l border-[#c5a880]/30 h-full p-8 sm:p-10 flex flex-col justify-between z-10 shadow-2xl overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <img
                  src="/images/logo-white.png"
                  alt="Noce di Pietra"
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Chiudi Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-8 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#dfc299] font-sans block mb-4">
                  {language === 'it' ? 'Esplora la Tenuta' : 'Explore the Estate'}
                </span>
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-3 border-b border-white/5 font-heading text-lg sm:text-xl text-[#f3ece2] hover:text-[#dfc299] transition-colors"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#dfc299]/60 font-sans font-normal">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              {/* Drawer Bottom Details & WhatsApp Booking */}
              <div className="pt-6 border-t border-white/10 space-y-6">
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-[#b89360] via-[#c5a06d] to-[#9a7644] hover:from-[#c5a06d] hover:to-[#b89360] text-white rounded-full font-medium tracking-[0.16em] uppercase text-xs flex items-center justify-center gap-2.5 shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>{t.nav.bookNow}</span>
                </button>

                <div className="text-center text-xs text-[#b8ad9e] space-y-2">
                  <p className="text-[#dfc299] font-medium">Valle d’Itria • Martina Franca / Alberobello</p>
                  <div className="flex flex-col gap-1.5 items-center pt-1">
                    <a
                      href="https://wa.me/393347550635"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#dfc299] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Paola: <strong className="text-white">+39 334 755 0635</strong></span>
                    </a>
                    <a
                      href="https://wa.me/393275514513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#dfc299] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Francesco: <strong className="text-white">+39 327 551 4513</strong></span>
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-6 pt-2 text-[#dfc299]">
                  <a
                    href={externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#dfc299] hover:text-[#161412] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={externalLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#dfc299] hover:text-[#161412] transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={externalLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#dfc299] hover:text-[#161412] transition-colors"
                    aria-label="Google Maps"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
