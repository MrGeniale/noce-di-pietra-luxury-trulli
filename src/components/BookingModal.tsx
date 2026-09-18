import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, MessageCircle, Calendar, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { externalLinks } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = '';
    if (language === 'it') {
      text = `Salve! ${name ? `Sono ${name} e vorrei` : 'Vorrei'} richiedere informazioni e disponibilità per un soggiorno a Noce di Pietra Luxury Trulli`;
      if (checkIn && checkOut) {
        text += ` dal ${checkIn} al ${checkOut}`;
      }
      text += ` per ${guests} ${guests === '1' ? 'ospite' : 'ospiti'}.`;
      if (notes) {
        text += ` Note: ${notes}`;
      }
      text += `\nPotreste inviarmi la migliore tariffa riservata e i dettagli? Grazie!`;
    } else {
      text = `Hello! ${name ? `My name is ${name} and I would like` : 'I would like'} to request availability and rates for a stay at Noce di Pietra Luxury Trulli`;
      if (checkIn && checkOut) {
        text += ` from ${checkIn} to ${checkOut}`;
      }
      text += ` for ${guests} ${guests === '1' ? 'guest' : 'guests'}.`;
      if (notes) {
        text += ` Notes: ${notes}`;
      }
      text += `\nCould you please send me your best direct rate? Thank you!`;
    }

    const url = `https://wa.me/${externalLinks.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#1a1715] border border-[#c5a880]/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfc299]/10 text-[#dfc299] text-[11px] font-semibold uppercase tracking-widest mb-3 border border-[#dfc299]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'it' ? 'Prenotazione Diretta WhatsApp' : 'Direct WhatsApp Booking'}</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              {language === 'it' ? 'Richiedi Disponibilità' : 'Check Availability'}
            </h3>
            <p className="text-xs text-[#c9bfae] mt-1 font-light">
              {language === 'it'
                ? 'Compila le date per chattare direttamente con noi e ottenere il miglior prezzo garantito.'
                : 'Fill in your dates to chat directly with our host for the best guaranteed rate.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#dfc299] mb-1 font-medium">
                {language === 'it' ? 'Il tuo Nome' : 'Your Name'}
              </label>
              <input
                type="text"
                placeholder={language === 'it' ? 'Es. Marco Rossi' : 'e.g. John Doe'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#dfc299] transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#dfc299] mb-1 font-medium">
                  {language === 'it' ? 'Check-in' : 'Check-in'}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#dfc299] transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#dfc299] mb-1 font-medium">
                  {language === 'it' ? 'Check-out' : 'Check-out'}
                </label>
                <input
                  type="date"
                  min={checkIn || undefined}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#dfc299] transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#dfc299] mb-1 font-medium">
                {language === 'it' ? 'Numero di Ospiti' : 'Number of Guests'}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#dfc299] transition-colors [color-scheme:dark]"
              >
                <option value="1" className="bg-[#1a1715]">1 {language === 'it' ? 'Ospite' : 'Guest'}</option>
                <option value="2" className="bg-[#1a1715]">2 {language === 'it' ? 'Ospiti (Coppia)' : 'Guests (Couple)'}</option>
                <option value="3" className="bg-[#1a1715]">3 {language === 'it' ? 'Ospiti' : 'Guests'}</option>
                <option value="4" className="bg-[#1a1715]">4 {language === 'it' ? 'Ospiti (Max 4)' : 'Guests (Max 4)'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#dfc299] mb-1 font-medium">
                {language === 'it' ? 'Note o Richieste Particolari' : 'Special Notes / Requests'}
              </label>
              <textarea
                rows={2}
                placeholder={language === 'it' ? 'Es. orario di arrivo, richieste per idromassaggio...' : 'e.g. arrival time, hot tub preferences...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#dfc299] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2bf376] hover:to-[#17a594] text-white py-3.5 px-6 rounded-2xl font-semibold tracking-[0.18em] uppercase text-xs flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-900/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{language === 'it' ? 'Invia Richiesta su WhatsApp' : 'Send Request on WhatsApp'}</span>
            </button>
          </form>

          {/* Guarantee footer */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-[#dfc299]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{language === 'it' ? 'Nessun pagamento anticipato richiesto ora' : 'No advance payment required right now'}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
