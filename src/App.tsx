import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { AboutSection } from './components/AboutSection';
import { SpacesSection } from './components/SpacesSection';
import { JacuzziSection } from './components/JacuzziSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { DirectBookingSection } from './components/DirectBookingSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { GateAnimation } from './components/GateAnimation';

export function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showGate, setShowGate] = useState(true);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c2623] flex flex-col font-sans">
      {showGate && <GateAnimation onComplete={() => setShowGate(false)} />}
      
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <QuickBookingBar />
        <AboutSection />
        <SpacesSection />
        <JacuzziSection onOpenBooking={() => setIsBookingOpen(true)} />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <ReviewsSection />
        <FAQSection />
        <DirectBookingSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
