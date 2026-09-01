import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHeritage } from './components/AboutHeritage';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { HoursAndLocation } from './components/HoursAndLocation';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderModal } from './components/OrderModal';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121110] text-[#f2ede6] flex flex-col selection:bg-[#c97a3e] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenReservation={() => setReservationOpen(true)}
        onOpenOrder={() => setOrderOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Bespoke Cinematic Video & Multi-Layer Depth */}
        <Hero
          onOpenReservation={() => setReservationOpen(true)}
          onOpenOrder={() => setOrderOpen(true)}
        />

        {/* 2. Heritage, Australian-Asian Fusion & Preserved 150-Year Shophouse */}
        <AboutHeritage />

        {/* 3. Authentic Verified Menu & Specialty Coffee */}
        <MenuSection
          onOpenOrder={() => setOrderOpen(true)}
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        {/* 4. Verbatim Google Maps Reviews & Rating Breakdown */}
        <ReviewsSection />

        {/* 5. Atmosphere, Vibe & Photo Gallery */}
        <AtmosphereGallery />

        {/* 6. Hours, Popular Times, Transit & Google Maps Location */}
        <HoursAndLocation
          onOpenReservation={() => setReservationOpen(true)}
        />
      </main>

      {/* Footer with Tap-to-Call and Business Info */}
      <Footer
        onOpenReservation={() => setReservationOpen(true)}
        onOpenOrder={() => setOrderOpen(true)}
      />

      {/* Interactive Reservation Assistant Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Interactive Takeout & Delivery Modal */}
      <OrderModal
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
