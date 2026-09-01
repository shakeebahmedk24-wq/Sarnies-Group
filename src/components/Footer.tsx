import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Calendar, ExternalLink, Instagram, Heart, ArrowUp, Navigation, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenOrder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0c0b0a] text-stone-300 border-t border-stone-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black text-xl border border-[#e69354]">
                S
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-widest text-[#f2ede6] uppercase block leading-none">
                  SARNIES
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                  Bangkok · Charoen Krung 44
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Chill, industrial-style outpost offering all-day brunch, Australian-Asian fusion fare & specialty coffee in a 150-year-old preserved shophouse.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                4.5 ★ Rating (3,736+ Reviews)
              </span>
              <span className="text-[11px] font-bold px-2.5 py-1 bg-stone-900 border border-stone-800 rounded text-stone-300">
                ฿200–600 / person
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-[#c97a3e] transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#c97a3e] transition-colors">All-Day Brunch Menu</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#c97a3e] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c97a3e] transition-colors">Atmosphere Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#c97a3e] transition-colors">Hours & Directions</a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-200">
              Opening Hours
            </h4>
            <div className="space-y-1.5 text-xs text-stone-400">
              <p className="flex items-center gap-2 text-stone-300 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#c97a3e]" />
                <span>Daily: 8:00 AM – 10:00 PM</span>
              </p>
              <p className="text-[11px] text-stone-500">
                All-day brunch served from 8 AM. Evening comfort food & wine until 10 PM.
              </p>
            </div>

            <div className="pt-3 space-y-2">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-200">
                Direct Contact
              </h4>
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 text-xs font-semibold text-[#e69354] hover:text-[#c97a3e] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+66 65 816 1655 (Tap to Call)</span>
              </a>
            </div>
          </div>

          {/* Location & Actions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-200">
              Location
            </h4>
            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-stone-400 hover:text-stone-200 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#c97a3e] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {BUSINESS_INFO.address}
              </span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#121110]" />
                <span>Book Table (Chope)</span>
              </button>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 font-bold text-xs uppercase tracking-wider rounded border border-stone-800 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c97a3e]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Sarnies Bangkok. All rights reserved.
          </div>

          {/* External Group Links */}
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors flex items-center gap-1"
            >
              <span>Linktree</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.chopeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors flex items-center gap-1"
            >
              <span>Chope</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors flex items-center gap-1"
            >
              <span>Digital Menu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-stone-200 transition-colors text-xs font-semibold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c97a3e]" />
          </button>
        </div>

      </motion.div>
    </footer>
  );
};
