import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#141210] text-[#faf6f0] relative overflow-hidden border-t border-[#c5a880]/20">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#dfc299]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            {t.faq.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#dfc299]">
            "{t.faq.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1e1b19] border border-[#c5a880]/25 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#dfc299]/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-white/5 text-[#dfc299] shrink-0 border border-white/10">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg text-white font-medium leading-snug">
                      {item.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#dfc299] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#d4cbbe] leading-relaxed font-light font-sans border-t border-white/5">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
