import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, Clock, ShoppingBag, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenOrder, cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bkkTimeStr, setBkkTimeStr] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bangkok local time tracker
  useEffect(() => {
    const updateStatus = () => {
      try {
        const now = new Date();
        const bkkDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));
        setBkkTimeStr(
          bkkDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })
        );
      } catch {
        setBkkTimeStr('');
      }
    };
    updateStatus();
    const interval = setInterval(updateStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Heritage', href: '#about' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Atmosphere', href: '#gallery' },
    { label: 'Hours & Location', href: '#location' },
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* 1. Top Bar: Timings, Address, Direct Dial */}
      <div className="bg-[#0e0d0c] border-b border-stone-800/80 text-[11px] text-stone-300 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Operating Hours */}
          <div className="flex items-center gap-2 truncate">
            <span className="text-stone-300 font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c97a3e] flex-shrink-0" />
              <span>{BUSINESS_INFO.hoursDisplay}</span>
            </span>
            {bkkTimeStr && (
              <span className="text-stone-500 hidden sm:inline">
                (Bangkok {bkkTimeStr})
              </span>
            )}
          </div>

          {/* Center: Location */}
          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-stone-400 hover:text-[#c97a3e] transition-colors truncate max-w-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c97a3e] flex-shrink-0" />
            <span className="truncate">Charoen Krung Soi 44, Bang Rak</span>
          </a>

          {/* Right: Phone Call & Order Quick Links */}
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              id="topbar-call-link"
              className="flex items-center gap-1.5 font-semibold text-[#e69354] hover:text-[#c97a3e] transition-colors py-0.5"
              title="Tap to call Sarnies Bangkok"
            >
              <Phone className="w-3.5 h-3.5 text-[#c97a3e]" />
              <span className="font-mono tracking-tight">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white font-medium transition-colors"
            >
              <div className="relative">
                <ShoppingBag className="w-3.5 h-3.5 text-[#c97a3e]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-[#c97a3e] text-[#121110] text-[9px] font-black rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Order Takeout</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121110]/95 backdrop-blur-md border-b border-stone-800/80 shadow-2xl py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#121110]/95 via-[#121110]/70 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black text-base sm:text-xl tracking-tighter border border-[#e69354] group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-display text-lg sm:text-2xl font-bold tracking-widest text-[#f2ede6] uppercase group-hover:text-[#c97a3e] transition-colors block leading-none">
                SARNIES
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mt-0.5">
                Bangkok · Charoen Krung
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-[13px] font-medium text-stone-300 hover:text-[#c97a3e] transition-colors uppercase tracking-wider whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Right Controls: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenOrder}
              className="p-2 rounded-md text-stone-300 hover:text-white bg-stone-900 border border-stone-800 relative"
              aria-label="Open order basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#c97a3e]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c97a3e] text-[#121110] text-[9px] font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              id="mobile-menu-toggle"
              className="p-2 rounded-md text-stone-300 hover:text-white bg-stone-900 border border-stone-800"
              aria-label="Open mobile navigation drawer"
            >
              <MenuIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Off-Canvas Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-xs bg-[#121110] border-l border-stone-800 p-5 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black text-sm">
                  S
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold text-stone-100 uppercase tracking-wider">
                    SARNIES BANGKOK
                  </h3>
                  <span className="text-[9px] text-stone-400">Charoen Krung Soi 44</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2.5 bg-stone-900/90 border border-stone-800 rounded flex items-center gap-2 text-[11px] text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#c97a3e] flex-shrink-0" />
              <span>{BUSINESS_INFO.hoursDisplay}</span>
            </div>

            <nav className="space-y-0.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded text-stone-300 hover:text-white hover:bg-stone-900 text-xs font-medium transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-stone-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold bg-[#c97a3e] text-[#121110] rounded shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Takeaway {cartCount > 0 ? `(${cartCount})` : ''}</span>
            </button>
            <div className="grid grid-cols-2 gap-1.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-1 py-2 text-[11px] font-bold bg-stone-900 text-stone-200 border border-stone-700 rounded"
              >
                <Phone className="w-3 h-3 text-[#c97a3e]" />
                <span>Call</span>
              </a>
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2 text-[11px] font-bold bg-stone-900 text-stone-200 border border-stone-700 rounded"
              >
                <MapPin className="w-3 h-3 text-[#c97a3e]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
