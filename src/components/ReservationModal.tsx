import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Phone, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('11:30');
  const [seating, setSeating] = useState('Main Shophouse Hall');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const times = [
    '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '17:00', '18:00', '19:00', '20:00'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#121110]/90 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-stone-900 border border-stone-800 rounded-xl shadow-2xl max-w-lg w-full max-h-[88vh] flex flex-col overflow-hidden text-left relative my-auto"
          >
            
            {/* Header */}
            <div className="p-4 sm:p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black text-base sm:text-lg shrink-0">
                  S
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-stone-100 uppercase tracking-wide">
                    Reserve a Table
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-400">
                    Sarnies Bangkok · Charoen Krung 44
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close reservation modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold text-stone-100">
                Table Request Received!
              </h4>
              <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name || 'Guest'}</strong>. We have noted your reservation for <strong className="text-[#e69354]">{guests} guests</strong> on <strong className="text-stone-200">{date}</strong> at <strong className="text-stone-200">{time}</strong>.
              </p>
              <div className="p-4 bg-stone-950 border border-stone-800 rounded-md text-xs text-stone-400 max-w-sm mx-auto text-left space-y-1">
                <p>• We hold tables for 15 minutes past booking time.</p>
                <p>• For immediate confirmations, you can also book via Chope below.</p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BUSINESS_INFO.chopeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded inline-flex items-center justify-center gap-2"
                >
                  <span>Verify on Chope</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs uppercase tracking-wider rounded"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Partner Booking Handoff Banner */}
              <div className="p-3 bg-stone-950/80 border border-stone-800 rounded-md flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Sparkles className="w-4 h-4 text-[#c97a3e] flex-shrink-0" />
                  <span>Instant confirmation also available via <strong>Chope Bangkok</strong></span>
                </div>
                <a
                  href={BUSINESS_INFO.chopeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-[#e69354] font-bold text-[11px] rounded flex-shrink-0 inline-flex items-center gap-1"
                >
                  <span>Chope</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#c97a3e]" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {['1', '2', '4', '6', '8+'].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setGuests(num)}
                      className={`py-2 text-xs font-bold rounded border transition-all ${
                        guests === num
                          ? 'bg-[#c97a3e] text-[#121110] border-[#c97a3e]'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {num} {num === '1' ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c97a3e]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded text-xs text-stone-100 focus:outline-none focus:border-[#c97a3e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c97a3e]" />
                    <span>Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded text-xs text-stone-100 focus:outline-none focus:border-[#c97a3e]"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t} {parseInt(t) < 12 ? 'AM' : 'PM'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Seating Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Main Shophouse Hall', 'Mezzanine Loft', 'Bar Counter'].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setSeating(area)}
                      className={`py-2 px-1 text-[11px] font-semibold rounded border text-center transition-all ${
                        seating === area
                          ? 'bg-[#c97a3e]/20 text-[#e69354] border-[#c97a3e]'
                          : 'bg-stone-950 text-stone-400 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#c97a3e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+66..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#c97a3e]"
                  />
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Dietary / Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vegetarian, High chair needed, Birthday"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-[#c97a3e]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded shadow-lg shadow-[#c97a3e]/20 transition-all"
                >
                  Confirm Table Request
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="text-center py-2 text-xs font-semibold text-stone-400 hover:text-stone-200 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c97a3e]" />
                  <span>Call directly for large parties ({BUSINESS_INFO.phone})</span>
                </a>
              </div>

            </form>
          )}
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
