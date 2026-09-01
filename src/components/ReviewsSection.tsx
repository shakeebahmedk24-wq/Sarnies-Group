import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  const reviewTags = [
    { label: 'Eggs Benedict', count: 126 },
    { label: 'Brownie', count: 66 },
    { label: 'Matcha Brownie', count: 19 },
    { label: 'Specialty Coffee', count: 85 },
    { label: 'Atmosphere & Decor', count: 114 },
    { label: 'Live Music & Vibe', count: 11 },
  ];

  // Duplicate reviews for seamless continuous marquee loop
  const marqueeReviews = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section id="reviews" className="relative py-14 sm:py-24 bg-[#171614] border-t border-stone-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Google Rating Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b border-stone-800/80">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#c97a3e] mb-2 sm:mb-3">
              <span>Google Maps Verified Reviews</span>
              <span className="w-8 h-px bg-[#c97a3e]/60" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f2ede6] leading-tight">
              Loved by Locals & Travelers Alike
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-stone-400 font-light max-w-xl">
              Authentic feedback from our community in Bangkok and coffee travelers from around the world.
            </p>
          </motion.div>

          {/* Rating Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 bg-stone-900/90 border border-stone-700/80 p-4 sm:p-5 rounded-lg flex items-center justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-black text-stone-100">4.5</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-400">/ 5.0</span>
              </div>
              <div className="flex items-center text-amber-400 text-xs sm:text-sm mt-1">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-[11px] sm:text-xs text-stone-400 mt-1 font-medium">
                Based on <strong className="text-stone-200">{BUSINESS_INFO.reviewCount.toLocaleString()}</strong> reviews
              </p>
            </div>

            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex flex-col items-center gap-1 transition-colors text-center"
            >
              <ExternalLink className="w-4 h-4 text-[#c97a3e]" />
              <span>View Maps</span>
            </a>
          </motion.div>
        </div>

        {/* Popular Review Topics (Hidden on mobile devices) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 hidden sm:flex flex-wrap items-center gap-1.5 sm:gap-2"
        >
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-stone-500 mr-1 sm:mr-2">
            Frequent Mentions:
          </span>
          {reviewTags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs bg-stone-900/80 border border-stone-800 text-stone-300"
            >
              <span className="font-medium">{tag.label}</span>
              <span className="text-[9px] sm:text-[10px] text-[#c97a3e] font-bold bg-[#c97a3e]/10 px-1 py-0.2 rounded">
                {tag.count}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* 1. Mobile Infinite Animated Marquee (lg:hidden) */}
      <div className="mt-8 lg:hidden w-full overflow-hidden relative">
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#171614] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#171614] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-4 px-4 hover:[animation-play-state:paused]">
          {marqueeReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[280px] sm:w-[320px] flex-shrink-0 bg-stone-900/80 border border-stone-800 rounded-lg p-4 flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="w-6 h-6 text-stone-800/80 absolute top-3 right-3 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-amber-400 text-xs tracking-wider">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-500 font-medium">{rev.timeAgo}</span>
                </div>
                <p className="font-serif-accent italic text-sm text-stone-100 font-medium leading-snug mb-2 line-clamp-2">
                  "{rev.quote}"
                </p>
                {rev.fullText && (
                  <p className="text-[11px] text-stone-400 font-light leading-relaxed line-clamp-3 mb-2">
                    {rev.fullText}
                  </p>
                )}
              </div>
              <div className="pt-2.5 border-t border-stone-800/80 flex items-center justify-between mt-auto">
                <div className="truncate pr-2">
                  <h4 className="text-[11px] font-bold text-stone-200 truncate">
                    {rev.author}
                  </h4>
                  {rev.badge && (
                    <p className="text-[9px] text-stone-500 font-medium truncate">
                      {rev.badge}
                    </p>
                  )}
                </div>
                <ShieldCheck className="w-3.5 h-3.5 text-[#c97a3e] flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Desktop Grid Layout with Staggered Scroll Entrance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 hidden lg:grid grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-stone-900/70 border border-stone-800/80 hover:border-stone-700 rounded-lg p-6 flex flex-col justify-between shadow-xl transition-all hover:bg-stone-900/90 relative"
            >
              <Quote className="w-8 h-8 text-stone-800/60 absolute top-4 right-4 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400 text-xs tracking-wider">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium">{rev.timeAgo}</span>
                </div>

                <p className="font-serif-accent italic text-base sm:text-lg text-stone-100 font-medium leading-snug mb-3">
                  "{rev.quote}"
                </p>

                {rev.fullText && (
                  <p className="text-xs sm:text-[13px] text-stone-400 font-light leading-relaxed mb-4">
                    {rev.fullText}
                  </p>
                )}
              </div>

              <div className="pt-3.5 border-t border-stone-800/80 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-xs font-bold text-stone-200">
                    {rev.author}
                  </h4>
                  {rev.badge && (
                    <p className="text-[10px] text-stone-500 font-medium mt-0.5">
                      {rev.badge}
                    </p>
                  )}
                </div>
                <ShieldCheck className="w-4 h-4 text-[#c97a3e]" title="Verified Review" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c97a3e]" />
            <span>Read All 3,736+ Google Reviews</span>
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-500" />
          </a>
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded shadow-lg shadow-[#c97a3e]/20 transition-all"
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#121110]" />
            <span>Write a Review</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
