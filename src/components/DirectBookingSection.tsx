import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { externalLinks } from '../data/content';

interface DirectBookingProps {
  onOpenBooking: () => void;
}

export const DirectBookingSection: React.FC<DirectBookingProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#faf7f2] text-[#2c2623] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#1e1b19] to-[#12100e] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] border border-[#dfc299]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
              <span>{t.directBooking.badge}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
              {t.directBooking.title}
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#dfc299] max-w-2xl mx-auto">
              "{t.directBooking.subtitle}"
            </p>

            <p className="text-sm sm:text-base text-[#d6cdbf] font-light max-w-2xl mx-auto leading-relaxed">
              {t.directBooking.desc}
            </p>

            {/* 4 Perks Grid: Compact 2x2 on mobile, 4-col on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 pt-2 sm:pt-4 text-left">
              {t.directBooking.perks.map((perk, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:bg-white/10 transition-colors flex flex-col justify-start">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfc299] mb-1.5 sm:mb-3 shrink-0" />
                  <h4 className="font-heading text-xs sm:text-sm font-semibold text-white mb-1 leading-snug">{perk.title}</h4>
                  <p className="text-[10px] sm:text-xs text-[#bcb2a3] font-light leading-snug sm:leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2bf376] hover:to-[#17a594] text-white px-8 py-4 rounded-full text-xs font-semibold tracking-[0.18em] uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.directBooking.ctaWhatsApp}</span>
              </button>

              <a
                href={externalLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-[#faf6f0] px-7 py-4 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300"
              >
                <span>{t.directBooking.ctaBooking}</span>
                <ExternalLink className="w-4 h-4 text-[#dfc299]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
