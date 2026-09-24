import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + t.reviews.items.length) % t.reviews.items.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % t.reviews.items.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#1e1b19] text-[#faf6f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#dfc299]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            {t.reviews.title}
          </h2>
          
          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#dfc299] text-[#dfc299]" />
            ))}
          </div>
          <div className="text-sm text-[#dfc299] font-medium mt-2">
            {t.reviews.rating} • {t.reviews.basedOn}
          </div>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* Desktop View: 3-column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {t.reviews.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#272320] border border-[#c5a880]/20 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative hover:border-[#dfc299]/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-[#dfc299]/20 absolute top-6 right-6" />
              
              <div className="space-y-4">
                <div className="flex gap-1 text-[#dfc299]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="font-serif italic text-lg text-[#dfc299]">
                  «{item.highlight}»
                </h4>
                <p className="text-sm text-[#d4cbbe] leading-relaxed font-light font-sans">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="font-heading text-base text-white">{item.name}</div>
                <div className="text-xs text-[#a39788]">{item.country}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: 1-at-a-time Card Carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#272320] border border-[#c5a880]/30 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative min-h-[320px]"
            >
              <Quote className="w-8 h-8 text-[#dfc299]/20 absolute top-5 right-5" />
              
              <div className="space-y-3">
                <div className="flex gap-1 text-[#dfc299]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="font-serif italic text-base text-[#dfc299] leading-snug">
                  «{t.reviews.items[currentIndex].highlight}»
                </h4>
                <p className="text-xs text-[#d4cbbe] leading-relaxed font-light font-sans">
                  "{t.reviews.items[currentIndex].text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading text-sm text-white font-medium">
                    {t.reviews.items[currentIndex].name}
                  </div>
                  <div className="text-[11px] text-[#a39788]">
                    {t.reviews.items[currentIndex].country}
                  </div>
                </div>
                <div className="text-xs text-[#dfc299]/70 font-mono">
                  {currentIndex + 1} / {t.reviews.items.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Controls: Prev/Next Buttons + Dots */}
          <div className="flex items-center justify-between mt-5 px-2">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
              aria-label="Recensione precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {t.reviews.items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    dotIdx === currentIndex ? 'w-6 bg-[#dfc299]' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Vai alla recensione ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
              aria-label="Prossima recensione"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
