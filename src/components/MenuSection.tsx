import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Utensils,
  Coffee,
  Sandwich,
  Sparkles,
  Flame,
  Search,
  FileText,
  ShoppingBag,
  ArrowUpRight,
  Plus,
  Minus,
  Check
} from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { CartItem, MenuItem } from '../types';

interface MenuSectionProps {
  onOpenOrder: () => void;
  cart?: CartItem[];
  onAddToCart?: (item: MenuItem) => void;
  onUpdateQuantity?: (itemId: string, delta: number) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenOrder,
  cart = [],
  onAddToCart = (_item: MenuItem) => {},
  onUpdateQuantity = (_itemId: string, _delta: number) => {},
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'brunch' | 'sarnies' | 'coffee' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings', icon: Sparkles },
    { id: 'brunch', label: 'All-Day Brunch', icon: Utensils },
    { id: 'sarnies', label: 'Artisan Sarnies', icon: Sandwich },
    { id: 'coffee', label: 'Specialty Coffee', icon: Coffee },
    { id: 'desserts', label: 'Desserts & Shakes', icon: Flame },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || item.tags?.includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  const popularTags = ['Popular on Maps', 'House Signature', 'Thai-Aus Fusion', 'Specialty Coffee'];

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const getItemQuantity = (itemId: string) => {
    const match = cart.find((ci) => ci.item.id === itemId);
    return match ? match.quantity : 0;
  };

  return (
    <section id="menu" className="relative py-14 sm:py-24 bg-[#121110] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-stone-800/80"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#c97a3e] mb-2 sm:mb-3">
              <span>Freshly Prepared Daily</span>
              <span className="w-8 h-px bg-[#c97a3e]/60" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f2ede6] leading-tight">
              The Sarnies Menu
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-stone-400 max-w-xl font-light">
              Australian cafe soul meets bold Bangkok flavors. Featuring house-roasted specialty coffee, in-house baked sourdough, and vibrant all-day comfort.
            </p>
          </div>

          {/* External Menu Links & Order Trigger */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={BUSINESS_INFO.menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#c97a3e]" />
              <span>PDF Menu</span>
              <ArrowUpRight className="w-3 h-3 text-stone-500" />
            </a>

            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] rounded shadow-lg shadow-[#c97a3e]/20 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#121110]" />
              <span>
                {totalCartCount > 0 ? `Cart (${totalCartCount}) · ฿${totalCartPrice}` : 'Order Takeaway'}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as any);
                    setSelectedTag(null);
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c97a3e] text-[#121110] shadow-md shadow-[#c97a3e]/20'
                      : 'bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brunch, coffee, sarnies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-900/80 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 placeholder-stone-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Quick Tag Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2"
        >
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-500 mr-1">
            Quick Filters:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:py-1 rounded-full border transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#c97a3e]/20 text-[#e69354] border-[#c97a3e]'
                  : 'bg-stone-900/50 text-stone-400 border-stone-800 hover:border-stone-700'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-[10px] sm:text-[11px] text-[#c97a3e] underline font-semibold hover:text-[#e69354] cursor-pointer"
            >
              Clear filter
            </button>
          )}
        </motion.div>

        {/* Menu Items Grid with Animated Transitions - 2 columns parallel on mobile */}
        <motion.div
          layout
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const qty = getItemQuantity(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
                  className="group bg-stone-900/60 hover:bg-stone-900 border border-stone-800/80 hover:border-stone-700/90 rounded-lg sm:rounded-xl overflow-hidden transition-colors duration-300 flex flex-col justify-between shadow-xl"
                >
                  {/* Dish Thumbnail */}
                  {item.image && (
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-stone-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-80" />
                      {item.popular && (
                        <span className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-[#c97a3e] text-[#121110] text-[8px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 sm:px-2 rounded shadow">
                          Popular
                        </span>
                      )}
                    </div>
                  )}

                  {/* Item Content */}
                  <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-1.5 sm:gap-2">
                        <h3 className="font-display text-xs sm:text-base font-bold text-stone-100 group-hover:text-[#c97a3e] transition-colors leading-snug line-clamp-2">
                          {item.name}
                        </h3>
                        <span className="text-[11px] sm:text-sm font-bold text-[#e69354] font-mono whitespace-nowrap bg-stone-950 px-1.5 py-0.5 sm:px-2 rounded border border-stone-800 shrink-0">
                          ฿{item.price}
                        </span>
                      </div>

                      <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-stone-400 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Ordering Action Buttons on Every Card */}
                    <div className="pt-2 sm:pt-3 border-t border-stone-800/80 flex items-center justify-between gap-1 sm:gap-2">
                      {item.tags && item.tags.length > 0 ? (
                        <span className="text-[9px] sm:text-[10px] text-stone-500 font-medium truncate max-w-[60px] sm:max-w-[140px] hidden xs:inline sm:inline">
                          {item.tags[0]}
                        </span>
                      ) : (
                        <span className="hidden xs:inline" />
                      )}

                      {qty > 0 ? (
                        <div className="flex items-center bg-stone-950 border border-[#c97a3e]/50 rounded overflow-hidden w-full xs:w-auto justify-between xs:justify-start">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                            title="Decrease quantity"
                          >
                            <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                          <span className="px-1.5 sm:px-2 text-[11px] sm:text-xs font-bold text-[#e69354] font-mono">
                            {qty}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                            title="Increase quantity"
                          >
                            <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-full xs:w-auto inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-stone-800 hover:bg-[#c97a3e] text-stone-200 hover:text-[#121110] rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors border border-stone-700 hover:border-[#c97a3e] cursor-pointer"
                        >
                          <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                          <span className="truncate">Add<span className="hidden sm:inline"> to Order</span></span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Floating Cart Alert / Quick Order Bar (When items in basket) */}
        <AnimatePresence>
          {totalCartCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="mt-8 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-stone-900 to-stone-950 border border-[#c97a3e]/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {totalCartCount} item{totalCartCount > 1 ? 's' : ''} in your order basket
                  </span>
                  <span className="text-xs text-[#e69354] font-mono font-bold">
                    Total: ฿{totalCartPrice}
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded shadow-lg shadow-[#c97a3e]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Review Order & Checkout</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
