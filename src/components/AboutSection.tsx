import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="dimora" className="py-24 sm:py-32 bg-[#faf7f2] relative overflow-hidden">
      {/* Subtle Warm Accent Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b89360]/15 border border-[#b89360]/30 text-[#845d27] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b89360]" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1715] font-light leading-tight tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#b89360] mx-auto mt-6" />
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/img_8198.jpg"
                alt="Noce di Pietra Luxury Trulli"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Secondary Floating Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 h-60 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/img_8201.jpg"
                alt="Dettaglio pietra Noce di Pietra"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Gold Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-[#161412] text-[#dfc299] border border-[#dfc299]/40 rounded-2xl p-4 sm:p-5 shadow-2xl">
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-[#dfc299]">Privacy & Relax</div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy with High Contrast */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1a1715] font-normal italic leading-relaxed">
              "{t.about.lead}"
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#3d3632] leading-relaxed font-sans font-light">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* High Contrast Quote box */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-[#b89360] shadow-md">
              <p className="font-serif italic text-base sm:text-lg text-[#1a1715] font-medium leading-relaxed">
                «{t.about.quote}»
              </p>
            </div>

            {/* Key stats in High Contrast Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#c5a880]/30 shadow-sm">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-heading text-2xl sm:text-3xl font-semibold text-[#845d27]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#2c2623] uppercase tracking-wider font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
