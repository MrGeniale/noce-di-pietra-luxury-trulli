import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { externalLinks } from '../data/content';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="posizione" className="py-24 sm:py-32 bg-[#faf7f2] text-[#2c2623] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/20 text-[#8f6a39] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231e1c] font-normal leading-tight">
            {t.location.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#8f6a39]">
            "{t.location.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Places list */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#524944] leading-relaxed font-light">
              {t.location.desc}
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#c5a880]/30 shadow-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8f6a39] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8f6a39] font-semibold block">
                  Indirizzo & Coordinate
                </span>
                <span className="text-sm text-[#2c2623] font-medium">
                  {t.location.address}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-base uppercase tracking-wider text-[#231e1c]">
                {t.location.placesTitle}
              </h4>
              <div className="space-y-2.5">
                {t.location.places.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/70 border border-[#c5a880]/20 flex items-center justify-between hover:bg-white transition-colors"
                  >
                    <div>
                      <div className="font-medium text-sm text-[#231e1c]">{place.name}</div>
                      <div className="text-xs text-[#70655f] font-light">{place.desc}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#c5a880]/15 text-[#8f6a39] text-xs font-semibold whitespace-nowrap ml-4">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={externalLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#8f6a39] hover:bg-[#78572d] text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase shadow-md transition-all duration-300"
              >
                <Navigation className="w-4 h-4 text-emerald-300" />
                <span>{t.location.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="relative h-[480px] bg-[#1a1715] flex flex-col justify-between p-8 text-white">
              {/* Background map texture image */}
              <img
                src="/images/img_8196.jpg"
                alt="Valle d'Itria Map"
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-[#151312]/70 to-black/60" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs text-[#dfc299] tracking-widest uppercase">
                  Valle d'Itria • Puglia
                </div>
                <div className="bg-[#b89360] p-3 rounded-full shadow-lg">
                  <Compass className="w-6 h-6 text-white animate-spin-slow" />
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                  <h3 className="font-heading text-xl text-[#dfc299]">Noce di Pietra</h3>
                  <p className="text-xs text-[#e8ded1] mt-1">
                    A soli 5,3 km da Alberobello e dalle bellezze della Valle d'Itria.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#dfc299]">Coordinate GPS:</span>
                    <span className="text-white font-mono">40.7656° N, 17.2758° E</span>
                  </div>
                </div>

                <a
                  href={externalLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white text-[#231e1c] hover:bg-[#faf6f0] rounded-xl font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#8f6a39]" />
                  <span>Apri Navigatore su Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
