import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#1e1b19] text-[#faf6f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
};
