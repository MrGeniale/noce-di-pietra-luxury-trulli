import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCircle, Bed, Sofa, Utensils, Trees } from 'lucide-react';

export const SpacesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Bed, Sofa, Utensils, Trees];

  return (
    <section id="spazi" className="py-24 sm:py-32 bg-[#1a1715] text-[#faf6f0] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dfc299_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#dfc299]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
            <span>{t.spaces.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#faf6f0] font-normal leading-tight">
            {t.spaces.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#dfc299]">
            "{t.spaces.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {t.spaces.items.map((item, index) => {
            const IconComponent = icons[index] || Bed;
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#b89360] to-[#9a7644] text-white shadow-lg shadow-[#b89360]/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-[#d6cdbf] border border-white/10'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#dfc299]'}`} />
                <span>{item.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {t.spaces.items.map((item, index) => {
              if (index !== activeTab) return null;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#231f1c] border border-[#c5a880]/20 rounded-3xl p-6 sm:p-10 shadow-2xl"
                >
                  {/* Image Column */}
                  <div className="lg:col-span-7 overflow-hidden rounded-2xl relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[360px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[11px] text-[#dfc299] font-medium tracking-widest uppercase">
                      {item.tag}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#dfc299] font-sans">
                      Noce di Pietra Luxury Trulli
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl text-white font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#d1c6b5] leading-relaxed font-light">
                      {item.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      {item.features.map((feat, fi) => (
                        <div key={fi} className="flex items-center gap-3 text-sm text-[#f0eae0]">
                          <CheckCircle className="w-4 h-4 text-[#dfc299] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
