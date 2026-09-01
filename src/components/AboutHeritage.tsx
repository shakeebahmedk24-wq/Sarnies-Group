import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Flame, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const AboutHeritage: React.FC = () => {
  const highlights = [
    {
      icon: Building2,
      tag: '150-Year Heritage',
      title: 'Preserved Charoen Krung Shophouse',
      desc: 'Occupying a restored 19th-century boat repair warehouse, featuring weathered exposed brickwork, rustic timber pillars, and natural skylights.',
    },
    {
      icon: Coffee,
      tag: 'Specialty Roastery',
      title: 'In-House Roasted Beans',
      desc: 'Sourcing single-origin beans and signature roast profiles, perfected for velvety Melbourne flat whites and our famous Longan Espresso Tonic.',
    },
    {
      icon: Flame,
      tag: 'Aus-Asian Craft',
      title: 'Punchy Flavors & Sourdough',
      desc: 'All-day brunch fusion highlighting Thai chilies, signature fiery Tom Yum hollandaise, juicy steak sarnies, and daily in-house baked pastries.',
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-20 bg-[#141312] border-t border-stone-800/90 overflow-hidden">
      {/* Subtle Warm Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#c97a3e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#c97a3e] mb-2 sm:mb-3">
            <span>The Sarnies Story</span>
            <span className="w-8 h-px bg-[#c97a3e]/60" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f2ede6] leading-tight">
            Where Australian Cafe Culture Meets <span className="font-serif-accent italic text-[#e69354] font-normal">Historic Bangkok.</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-stone-300 font-light leading-relaxed">
            Founded in Singapore and rooted in Bangkok's creative district of Bang Rak, Sarnies breathes energetic life into Charoen Krung Soi 44 with bold culinary innovation, craft sourdough, and world-class coffee roasting.
          </p>
        </motion.div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-xl overflow-hidden border border-stone-700/70 shadow-2xl bg-stone-900 group flex-1 min-h-[260px] sm:min-h-[340px]">
              <img
                src={BUSINESS_INFO.images.cafeVibe}
                alt="Sarnies Bangkok historic shophouse cafe interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/30 to-transparent" />
              
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1.5 sm:space-y-2">
                <span className="inline-block text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#e69354] bg-stone-950/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-stone-800 backdrop-blur-md">
                  Charoen Krung Soi 44 · Bang Rak
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                  150-Year Preserved Rustic Haven
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-300 font-light leading-relaxed">
                  Industrial charm, ambient natural light, and lively cafe energy in Old Bangkok.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Refined Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3 sm:gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 sm:p-5.5 rounded-xl bg-stone-900/60 border border-stone-800/90 hover:border-stone-700 transition-all hover:bg-stone-900/90 flex items-start gap-3.5 sm:gap-4 shadow-lg group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#c97a3e]/10 border border-[#c97a3e]/30 flex items-center justify-center text-[#c97a3e] group-hover:bg-[#c97a3e] group-hover:text-[#121110] transition-colors flex-shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#e69354] block">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-stone-100 group-hover:text-[#c97a3e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Details Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="p-3.5 sm:p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="flex flex-wrap gap-1.5 text-[11px] text-stone-300 font-medium">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Dine-in
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Takeout
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Daily Roasting
                </span>
              </div>

              <a
                href="#menu"
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#c97a3e] hover:text-[#e69354] transition-colors ml-auto"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
