import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, MessageCircle, Sparkles, Shield, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const heroSlides = [
  {
    image: '/images/img_8196.jpg',
    caption: 'Noce di Pietra – Valle d’Itria',
  },
  {
    image: '/images/img_8224.jpg',
    caption: 'Vasca Idromassaggio Riscaldata Privata',
  },
  {
    image: '/images/img_8203.jpg',
    caption: 'Suite Matrimoniale sotto la Volta in Pietra',
  },
  {
    image: '/images/img_8222.jpg',
    caption: 'Relax Esclusivo e Silenzio Immerso negli Ulivi',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#12100e]">
      {/* Background Slideshow with crossfade */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.caption}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out will-change-opacity scale-105 transform motion-safe:duration-1000 ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Cinematic Vignette Overlay with Enhanced Darkness for 100% Text Clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-black/60 to-black/75 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/65 to-black/90 z-20" />

      {/* Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-16">
        
        {/* Luxury Monogram & Sub-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#dfc299]/50 text-[#faf6f0] text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-6 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
          <span>Valle d'Itria • Puglia</span>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.08] tracking-[0.02em] max-w-4xl drop-shadow-[0_6px_25px_rgba(0,0,0,0.95)]"
        >
          <span className="block font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f3d7b0] font-serif italic mb-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Noce di Pietra
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.12em] font-light text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Luxury Trulli
          </span>
        </motion.h1>

        {/* Subtitle / Poetic Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 font-serif text-base sm:text-xl md:text-2xl text-white/95 max-w-2xl font-light italic leading-relaxed drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]"
        >
          "{t.hero.subtitle}"
        </motion.p>

        {/* Highlight Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden sm:flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8"
        >
          {t.hero.features.map((feat, i) => (
            <span
              key={i}
              className="px-3.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/15 text-xs text-[#e8ded1] tracking-wider"
            >
              ✦ {feat}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#b89360] via-[#c5a06d] to-[#9a7644] hover:from-[#c5a06d] hover:to-[#b89360] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase shadow-2xl hover:shadow-[0_0_25px_rgba(197,160,109,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 animate-pulse" />
            <span>{t.hero.bookDirect}</span>
          </button>

          <a
            href="#dimora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-[#faf6f0] px-7 py-3.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-[#dfc299]" />
            <span>{t.hero.explore}</span>
          </a>
        </motion.div>

        {/* Slideshow Pagination Dots */}
        <div className="flex items-center gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === currentSlide ? 'w-8 bg-[#dfc299]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 z-30 left-1/2 transform -translate-x-1/2 text-center">
        <a
          href="#prenota-bar"
          className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-[#dfc299]/80 hover:text-[#dfc299] transition-colors"
        >
          <span>{t.hero.scrollDown}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
