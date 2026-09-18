import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/content';

export const GallerySection: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterButtons = [
    { id: 'all', label: t.gallery.all },
    { id: 'exterior', label: t.gallery.exterior },
    { id: 'bedroom', label: t.gallery.bedroom },
    { id: 'jacuzzi', label: t.gallery.jacuzzi },
    { id: 'living', label: t.gallery.living },
    { id: 'details', label: t.gallery.details },
  ];

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="galleria" className="py-24 sm:py-32 bg-[#171513] text-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#dfc299] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#dfc299]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc299]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#dfc299]">
            "{t.gallery.subtitle}"
          </p>
          <div className="w-16 h-[2px] bg-[#c5a880] mx-auto mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                setFilter(btn.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                filter === btn.id
                  ? 'bg-[#b89360] text-white shadow-lg shadow-[#b89360]/30'
                  : 'bg-white/5 hover:bg-white/10 text-[#cfc5b6] border border-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#231f1c] border border-white/10 shadow-lg"
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.title[language]}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Text & Icon */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#dfc299] font-sans">
                  {img.subtitle[language]}
                </span>
                <h4 className="font-heading text-lg text-white font-medium">
                  {img.title[language]}
                </h4>
              </div>

              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
              }}
              className="absolute left-4 sm:left-8 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title[language]}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl text-white">
                  {filteredImages[lightboxIndex].title[language]}
                </h3>
                <p className="text-xs text-[#dfc299] uppercase tracking-widest mt-1">
                  {filteredImages[lightboxIndex].subtitle[language]} ({lightboxIndex + 1} / {filteredImages.length})
                </p>
              </div>
            </div>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
              }}
              className="absolute right-4 sm:right-8 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
