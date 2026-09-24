import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon, BookingIcon, TikTokIcon } from './Icons';
import { externalLinks } from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#12100e] text-[#f2ede4] pt-20 pb-12 border-t border-[#c5a880]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-white.png"
                alt="Noce di Pietra Luxury Trulli"
                className="h-16 w-auto object-contain filter drop-shadow-lg"
              />
            </div>
            <p className="text-sm text-[#beb5a7] font-light leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfc299] hover:bg-[#dfc299] hover:text-[#12100e] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={externalLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfc299] hover:bg-[#dfc299] hover:text-[#12100e] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={externalLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfc299] hover:bg-[#dfc299] hover:text-[#12100e] transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={externalLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#dfc299] hover:bg-[#dfc299] hover:text-[#12100e] transition-all duration-300"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-[#dfc299]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#cfc5b6]">
              <li>
                <a href="#dimora" className="hover:text-[#dfc299] transition-colors">{t.nav.story}</a>
              </li>
              <li>
                <a href="#spazi" className="hover:text-[#dfc299] transition-colors">{t.nav.spaces}</a>
              </li>
              <li>
                <a href="#idromassaggio" className="hover:text-[#dfc299] transition-colors">{t.nav.jacuzzi}</a>
              </li>
              <li>
                <a href="#servizi" className="hover:text-[#dfc299] transition-colors">{t.nav.amenities}</a>
              </li>
              <li>
                <a href="#galleria" className="hover:text-[#dfc299] transition-colors">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#posizione" className="hover:text-[#dfc299] transition-colors">{t.nav.location}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Booking */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-[#dfc299]">
              {t.footer.contacts}
            </h4>
            <div className="space-y-3.5 text-sm text-[#cfc5b6] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#dfc299] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              
              {/* Host 1: Paola */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#dfc299] font-medium">Paola</span>
                  <span className="text-[10px] text-[#beb5a7]">{language === 'it' ? 'Prenotazioni & Info' : 'Reservations'}</span>
                </div>
                <div className="flex items-center gap-4 text-xs pt-1">
                  <a
                    href="https://wa.me/393347550635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors font-sans"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+39 334 755 0635</span>
                  </a>
                </div>
              </div>

              {/* Host 2: Francesco */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#dfc299] font-medium">Francesco</span>
                  <span className="text-[10px] text-[#beb5a7]">{language === 'it' ? 'Accoglienza & Assistenza' : 'Host & Concierge'}</span>
                </div>
                <div className="flex items-center gap-4 text-xs pt-1">
                  <a
                    href="https://wa.me/393275514513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors font-sans"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+39 327 551 4513</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#b89360] hover:bg-[#c5a06d] text-white px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest shadow-md transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>{language === 'it' ? 'Contattaci su WhatsApp' : 'Contact Us on WhatsApp'}</span>
              </button>

              <a
                href={externalLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <span>Booking.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#dfc299]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8276] gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Noce di Pietra – Luxury Trulli. {t.footer.rights}
          </div>
          <div className="text-[11px] text-[#dfc299]/80 font-sans">
            Valle d’Itria • Puglia
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Pill (Bottom Right - Visible only after scrolling down) */}
      <button
        onClick={onOpenBooking}
        className={`fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#22c35e] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-500 border-2 border-white/30 ${
          isScrolled
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-8 pointer-events-none scale-90'
        }`}
        aria-label="Contatta su WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
        <span className="hidden sm:inline font-medium text-xs tracking-wider uppercase font-sans">
          {language === 'it' ? 'WhatsApp Prenotazioni' : 'WhatsApp Booking'}
        </span>
      </button>
    </footer>
  );
};
