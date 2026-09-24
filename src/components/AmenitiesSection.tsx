import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Car,
  Wifi,
  Flame,
  Wind,
  Tv,
  Coffee,
  ShieldCheck,
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const { t, language } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Car,
    Wifi,
    Flame,
    Wind,
    Tv,
    Coffee,
    ShieldCheck,
  };

  return (
    <section id="servizi" className="py-24 sm:py-32 bg-[#f5f1ea] text-[#2c2623] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/20 text-[#8f6a39] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.amenities.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231e1c] font-normal leading-tight">
            {t.amenities.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#8f6a39]">
            "{t.amenities.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* 8-Card Grid: Compact 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {t.amenities.list.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white border border-[#c5a880]/25 rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#c5a880]/60 transition-all duration-300 group flex flex-col justify-start"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#faf7f2] border border-[#c5a880]/30 flex items-center justify-center text-[#8f6a39] group-hover:bg-[#8f6a39] group-hover:text-white transition-colors duration-300 mb-3 sm:mb-5 shrink-0">
                  <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading text-xs sm:text-lg font-semibold text-[#231e1c] mb-1 sm:mb-2 group-hover:text-[#8f6a39] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#5d544f] leading-snug sm:leading-relaxed font-light font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Extra guarantee strip with Pet Policy */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-[#c5a880]/30 text-center max-w-4xl mx-auto shadow-md space-y-3">
          <p className="font-serif italic text-base sm:text-lg text-[#5d544f]">
            {language === 'it'
              ? '«Dalla cura della biancheria alla temperatura ideale dell\'acqua: ogni dettaglio è preparato con amore per il vostro arrivo.»'
              : '«From pristine linens to the ideal hot tub temperature: every single detail is prepared with love for your arrival.»'}
          </p>
          <div className="pt-2.5 border-t border-[#c5a880]/20 flex items-center justify-center gap-2 text-xs text-[#8f6a39] font-medium font-sans">
            <ShieldCheck className="w-4 h-4 text-[#b89360] shrink-0" />
            <span>
              {language === 'it'
                ? 'Nota: Per garantire il massimo livello di igiene e quiete della struttura, non sono ammessi animali domestici.'
                : 'Note: To ensure the highest standards of hygiene and tranquility, pets are not allowed.'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
