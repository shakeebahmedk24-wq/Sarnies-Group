import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ATMOSPHERE_GALLERY } from '../data/businessData';
import { AtmospherePhoto } from '../types';

export const AtmosphereGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<AtmospherePhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'heritage', label: 'Historic Shophouse' },
    { id: 'food', label: 'Food & Brunch' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'vibe', label: 'Atmosphere' },
  ];

  const filteredPhotos = ATMOSPHERE_GALLERY.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#121110] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-800/80"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#c97a3e] mb-3">
              <span>The Charoen Krung Vibe</span>
              <span className="w-8 h-px bg-[#c97a3e]/60" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f2ede6] leading-tight">
              Atmosphere & Craft
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-400 font-light max-w-xl">
              Immerse yourself in our raw industrial aesthetic, sunlit timber dining spaces, and artisanal culinary creations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#c97a3e] text-[#121110] shadow-md shadow-[#c97a3e]/20'
                    : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photos Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.25) }}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-lg overflow-hidden bg-stone-900 border border-stone-800/80 shadow-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Caption & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-sm font-bold text-stone-100 uppercase tracking-wide">
                      {photo.title}
                    </h3>
                    <Maximize2 className="w-4 h-4 text-[#c97a3e] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2 font-light">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121110]/95 backdrop-blur-xl"
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-stone-900/90 text-stone-300 hover:text-white border border-stone-700 z-10 transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 transition-colors z-10 hidden sm:block cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 transition-colors z-10 hidden sm:block cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full bg-stone-900 rounded-lg overflow-hidden border border-stone-800 shadow-2xl"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] bg-stone-950 flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-100 uppercase tracking-wide">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 font-light">
                    {activePhoto.caption}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-wider px-3 py-1 bg-stone-800 text-[#e69354] rounded font-semibold w-fit">
                  {activePhoto.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
