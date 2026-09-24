import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Users, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { externalLinks } from '../data/content';

export const QuickBookingBar: React.FC = () => {
  const { t, language } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const getMinCheckOut = (inDate: string) => {
    if (!inDate) return undefined;
    const d = new Date(inDate);
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const handleCheckInChange = (val: string) => {
    setCheckIn(val);
    if (val) {
      const minOut = getMinCheckOut(val);
      if (checkOut && checkOut < (minOut || '')) {
        setCheckOut(minOut || '');
      }
    }
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = '';
    if (language === 'it') {
      text = `Salve! Vorrei richiedere informazioni e disponibilità per un soggiorno a Noce di Pietra Luxury Trulli (min. 2 notti)`;
      if (checkIn && checkOut) {
        text += ` dal ${checkIn} al ${checkOut}`;
      }
      text += ` per ${guests} ${guests === '1' ? 'ospite' : 'ospiti'}. Potreste indicarmi la tariffa riservata per prenotazione diretta? Grazie!`;
    } else {
      text = `Hello! I would like to request availability and rates for a stay at Noce di Pietra Luxury Trulli (min. 2 nights)`;
      if (checkIn && checkOut) {
        text += ` from ${checkIn} to ${checkOut}`;
      }
      text += ` for ${guests} ${guests === '1' ? 'guest' : 'guests'}. Could you please let me know your best direct booking rate? Thank you!`;
    }

    const url = `https://wa.me/${externalLinks.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="prenota-bar" className="py-12 sm:py-16 bg-[#161412] text-white border-y border-[#c5a880]/20 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#dfc299] font-sans block mb-1">
            {language === 'it' ? 'Prenotazione Diretta' : 'Direct Reservation'}
          </span>
          <h3 className="font-heading text-xl sm:text-2xl text-white font-normal">
            {language === 'it' ? 'Verifica la Tua Data' : 'Check Your Dates'}
          </h3>
          <div className="mt-1.5">
            <span className="inline-block text-[11px] text-[#dfc299] bg-white/5 border border-[#dfc299]/30 px-3 py-0.5 rounded-full font-medium">
              {language === 'it' ? '✦ Soggiorno minimo: 2 notti' : '✦ Minimum stay: 2 nights'}
            </span>
          </div>
        </div>

        <div className="bg-[#1e1b19] border border-[#c5a880]/30 rounded-2xl md:rounded-full p-4 sm:p-5 md:p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          
          {/* Check-In */}
          <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl md:rounded-full px-4 py-3 transition-colors">
            <Calendar className="w-5 h-5 text-[#dfc299] shrink-0" />
            <div className="flex-1">
              <label htmlFor="quick-checkin" className="block text-[10px] uppercase tracking-wider text-[#dfc299] font-medium">
                {t.bookingBar.checkIn}
              </label>
              <input
                id="quick-checkin"
                type="date"
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full bg-transparent text-xs text-[#faf6f0] focus:outline-none cursor-pointer [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl md:rounded-full px-4 py-3 transition-colors">
            <Calendar className="w-5 h-5 text-[#dfc299] shrink-0" />
            <div className="flex-1">
              <label htmlFor="quick-checkout" className="block text-[10px] uppercase tracking-wider text-[#dfc299] font-medium flex items-center justify-between">
                <span>{t.bookingBar.checkOut}</span>
                <span className="text-[9px] text-[#dfc299]/80 font-normal">Min. 2 notti</span>
              </label>
              <input
                id="quick-checkout"
                type="date"
                value={checkOut}
                min={getMinCheckOut(checkIn) || undefined}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-xs text-[#faf6f0] focus:outline-none cursor-pointer [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Guests Select */}
          <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl md:rounded-full px-4 py-3 transition-colors">
            <Users className="w-5 h-5 text-[#dfc299] shrink-0" />
            <div className="flex-1">
              <label htmlFor="quick-guests" className="block text-[10px] uppercase tracking-wider text-[#dfc299] font-medium">
                {t.bookingBar.guests}
              </label>
              <select
                id="quick-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-xs text-[#faf6f0] focus:outline-none cursor-pointer [color-scheme:dark]"
              >
                <option value="1" className="bg-[#1e1b19] text-white">1 {language === 'it' ? 'Ospite' : 'Guest'}</option>
                <option value="2" className="bg-[#1e1b19] text-white">2 {language === 'it' ? 'Ospiti (Coppia)' : 'Guests (Couple)'}</option>
                <option value="3" className="bg-[#1e1b19] text-white">3 {language === 'it' ? 'Ospiti' : 'Guests'}</option>
                <option value="4" className="bg-[#1e1b19] text-white">4 {language === 'it' ? 'Ospiti (Max)' : 'Guests (Max)'}</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full h-full min-h-[50px] bg-gradient-to-r from-[#b89360] via-[#c5a06d] to-[#9a7644] hover:from-[#c5a06d] hover:to-[#b89360] text-white font-medium text-xs tracking-[0.18em] uppercase rounded-xl md:rounded-full px-6 py-3 flex items-center justify-center gap-2.5 shadow-lg shadow-[#b89360]/20 hover:shadow-xl hover:shadow-[#b89360]/40 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>{t.bookingBar.checkAvailability}</span>
            </button>
          </div>

        </form>

        {/* Guarantee strip */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#e3dac9]/80 font-sans">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfc299]" />
            {language === 'it' ? 'Miglior Tariffa Garantita' : 'Best Direct Rate'}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfc299]" />
            {language === 'it' ? 'Minimo 2 Notti' : 'Min. 2 Nights'}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfc299]" />
            {language === 'it' ? 'Check-in 15:00–18:00 • Check-out 10:00' : 'Check-in 3:00–6:00 PM • Check-out 10:00 AM'}
          </span>
        </div>

        </div>
      </div>
    </section>
  );
};
