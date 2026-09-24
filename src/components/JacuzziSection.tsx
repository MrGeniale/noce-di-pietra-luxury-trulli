import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, Waves, ShieldCheck, Flame } from 'lucide-react';

interface JacuzziProps {
  onOpenBooking: () => void;
}

export const JacuzziSection: React.FC<JacuzziProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();

  return (
    <section id="idromassaggio" className="py-24 sm:py-32 bg-[#12100e] text-[#faf6f0] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1715] via-[#12100e] to-[#1a1715]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#1d3d63]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfc299]/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#dfc299]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
            <span>{t.jacuzzi.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            {t.jacuzzi.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#dfc299]">
            "{t.jacuzzi.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Visual Card */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-[#c5a880]/30 shadow-2xl">
            <img
              src="/images/jacuzzi-relax.jpg"
              alt="Vasca Idromassaggio Noce di Pietra Luxury Trulli"
              className="w-full h-[400px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Bottom floating badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 shadow-xl">
                <span className="text-xs uppercase tracking-widest text-[#dfc299] font-sans font-medium block">
                  Valle d'Itria Wellness
                </span>
                <h4 className="font-heading text-lg sm:text-xl text-white font-normal mt-0.5">
                  {language === 'it' ? 'Puro Relax & Benessere Esclusivo' : 'Pure Relaxation & Exclusive Wellness'}
                </h4>
              </div>
            </div>
          </div>

          {/* Details & Secondary Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Experience Description */}
            <div className="bg-[#1c1917] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#dfc299]/10 text-[#dfc299]">
                  <Waves className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-lg text-white font-medium">
                  {t.jacuzzi.highlightTitle}
                </h4>
              </div>
              <p className="text-sm text-[#cfc5b6] leading-relaxed font-light">
                {t.jacuzzi.description}
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-[#1c1917] border border-white/10 rounded-2xl p-6 space-y-3">
              {t.jacuzzi.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#ece4d8]">
                  <ShieldCheck className="w-5 h-5 text-[#dfc299] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp CTA Button */}
            <button
              onClick={onOpenBooking}
              className="w-full bg-gradient-to-r from-[#b89360] via-[#c5a06d] to-[#9a7644] hover:from-[#c5a06d] hover:to-[#b89360] text-white py-4 px-6 rounded-2xl font-medium tracking-[0.18em] uppercase text-xs flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>Prenota con Idromassaggio Esclusivo</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
