import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Utensils, Sparkles, Navigation, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenOrder }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgTranslateY = Math.min(scrollY * 0.2, 100);
  const textTranslateY = Math.min(scrollY * 0.08, 50);

  return (
    <section id="hero-section" className="relative min-h-[92vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#121110]">
      {/* High-Res Static Hero Image Banner with Parallax */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden parallax-layer pointer-events-none"
        style={{
          transform: `translate3d(0, ${bgTranslateY}px, 0) scale(1.05)`,
        }}
      >
        <img
          src={BUSINESS_INFO.heroPoster}
          alt="Sarnies Bangkok shophouse cafe ambiance"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.08] saturate-[1.1]"
        />

        {/* Cinematic Vignette & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/45 to-[#121110]/80" />
      </div>

      {/* Hero Content Container - Generously Spaced & Scaled on Mobile */}
      <div
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          transform: `translate3d(0, ${textTranslateY}px, 0)`,
        }}
      >
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-stone-900/90 border border-stone-700/80 text-stone-200 text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 sm:mb-6 shadow-xl backdrop-blur-md whitespace-nowrap max-w-full"
        >
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c97a3e] shrink-0" />
          <span className="whitespace-nowrap truncate">Australian-Asian Fusion & Craft Brunch</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#f2ede6] uppercase leading-[0.95] drop-shadow-2xl"
        >
          SARNIES <br />
          <span className="font-serif-accent italic font-normal text-[#e69354] tracking-normal lowercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2 sm:mt-2.5">
            Bangkok
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-stone-200 max-w-xl mx-auto font-light leading-relaxed drop-shadow"
        >
          Chill, industrial-style outpost offering all-day brunch, Australian-Asian fusion fare & specialty coffee in a 150-year-old preserved shophouse.
        </motion.p>

        {/* Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-7 text-[11px] sm:text-xs font-semibold text-stone-200"
        >
          <span className="px-3 py-1 sm:px-3.5 sm:py-1 bg-stone-900/90 border border-stone-800 rounded-md backdrop-blur-sm">
            🍳 All-Day Brunch
          </span>
          <span className="px-3 py-1 sm:px-3.5 sm:py-1 bg-stone-900/90 border border-stone-800 rounded-md backdrop-blur-sm">
            ☕ Specialty Coffee
          </span>
          <span className="px-3 py-1 sm:px-3.5 sm:py-1 bg-stone-900/90 border border-stone-800 rounded-md backdrop-blur-sm">
            🍞 Artisan Sarnies
          </span>
          <span className="px-3 py-1 sm:px-3.5 sm:py-1 bg-stone-900/90 border border-stone-800 rounded-md backdrop-blur-sm">
            ฿200–600 / person
          </span>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <button
            onClick={onOpenReservation}
            id="hero-book-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-xl shadow-[#c97a3e]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#121110]" />
            <span>Reserve Table</span>
          </button>

          <a
            href="#menu"
            id="hero-menu-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-stone-100 font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-stone-700/80 transition-all hover:border-stone-500 backdrop-blur-sm"
          >
            <Utensils className="w-4 h-4 text-[#c97a3e]" />
            <span>Explore Menu</span>
          </a>

          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-directions-btn"
            className="hidden sm:flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3.5 bg-stone-900/70 hover:bg-stone-800/90 text-stone-300 hover:text-white font-semibold text-xs sm:text-sm rounded border border-stone-800 transition-all"
            title="Open Google Maps Directions"
          >
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c97a3e]" />
            <span>Directions</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        href="#about"
        className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-stone-500 hover:text-[#c97a3e] transition-colors flex-col items-center gap-1 text-[9px] uppercase tracking-widest"
        aria-label="Scroll to about section"
      >
        <span>Discover</span>
        <ArrowDown className="w-3 h-3 animate-bounce text-[#c97a3e]" />
      </motion.a>
    </section>
  );
};
