import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { CartItem, MenuItem } from '../types';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/businessData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart?: CartItem[];
  onUpdateQuantity?: (itemId: string, delta: number) => void;
  onRemoveItem?: (itemId: string) => void;
  onClearCart?: () => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart = [],
  onUpdateQuantity = (_itemId: string, _delta: number) => {},
  onRemoveItem = (_itemId: string) => {},
  onClearCart = () => {},
  onAddToCart = (_item: MenuItem) => {},
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [activeTab, setActiveTab] = useState<'direct' | 'platforms'>('direct');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('As soon as possible (15–20 mins)');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'promptpay' | 'card' | 'cash'>('promptpay');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 50 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const refCode = `SBK-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderReference(refCode);
    setOrderSubmitted(true);
  };

  const handleReset = () => {
    setOrderSubmitted(false);
    onClearCart();
    onClose();
  };

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
            className="bg-[#181715] border border-stone-800 rounded-xl shadow-2xl max-w-xl w-full max-h-[88vh] flex flex-col text-left overflow-hidden relative my-auto"
          >
            
            {/* Modal Header */}
            <div className="p-3.5 sm:p-5 bg-[#121110] border-b border-stone-800 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#c97a3e] flex items-center justify-center text-[#121110] font-black shrink-0">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-lg font-bold text-stone-100 uppercase tracking-wide">
                    Direct Order & Takeaway
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-400">
                    Sarnies Bangkok · Freshly Packaged
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close order modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

        {/* Tab Switcher: Direct Website Ordering vs Third-Party Platforms */}
        {!orderSubmitted && (
          <div className="flex border-b border-stone-800 bg-stone-950/60 flex-shrink-0">
            <button
              onClick={() => setActiveTab('direct')}
              className={`flex-1 py-2.5 sm:py-3 px-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 sm:gap-2 border-b-2 whitespace-nowrap ${
                activeTab === 'direct'
                  ? 'border-[#c97a3e] text-[#e69354] bg-stone-900/50'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>Direct Order ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
            </button>
            <button
              onClick={() => setActiveTab('platforms')}
              className={`flex-1 py-2.5 sm:py-3 px-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 sm:gap-2 border-b-2 whitespace-nowrap ${
                activeTab === 'platforms'
                  ? 'border-[#c97a3e] text-[#e69354] bg-stone-900/50'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>Grab / LINE MAN</span>
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-5">
          {orderSubmitted ? (
            /* Order Success State */
            <div className="py-6 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e69354]">
                  Order Confirmed
                </span>
                <h4 className="font-display text-2xl font-bold text-white mt-1">
                  We're Preparing Your Food!
                </h4>
                <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
                  Your order has been received by the kitchen at Sarnies Bangkok (Charoen Krung Soi 44).
                </p>
              </div>

              {/* Order Ticket Details */}
              <div className="p-4 bg-stone-900/90 border border-stone-800 rounded-lg text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Order Reference:</span>
                  <span className="font-mono font-bold text-[#e69354]">{orderReference}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Type:</span>
                  <span className="font-semibold text-stone-200 uppercase">{orderType}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Estimated Ready Time:</span>
                  <span className="font-semibold text-stone-200">{pickupTime}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-stone-100">
                  <span>Total Amount:</span>
                  <span className="text-[#e69354] font-mono text-sm">฿{total}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-bold text-xs uppercase tracking-wider rounded text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c97a3e]" />
                  <span>Call Kitchen</span>
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 px-4 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded text-center"
                >
                  Done
                </button>
              </div>
            </div>
          ) : activeTab === 'platforms' ? (
            /* External Platforms Hub */
            <div className="space-y-4">
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Prefer delivery couriers? You can also order directly via our partner apps across central Bangkok:
              </p>

              <div className="space-y-2.5">
                <a
                  href={BUSINESS_INFO.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-stone-700 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div>
                    <h5 className="text-xs font-bold text-stone-100 group-hover:text-[#c97a3e]">
                      Sarnies Group Linktree & Specials
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Seasonal bakery releases, cold brews & merchandise
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#c97a3e]" />
                </a>

                <a
                  href={BUSINESS_INFO.chopeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-stone-700 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div>
                    <h5 className="text-xs font-bold text-stone-100 group-hover:text-[#c97a3e]">
                      Chope Bangkok Takeaway
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Schedule pick-up times and digital vouchers
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#c97a3e]" />
                </a>

                <a
                  href="https://grab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-stone-700 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div>
                    <h5 className="text-xs font-bold text-stone-100 group-hover:text-[#c97a3e]">
                      GrabFood & LINE MAN
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      On-demand motorcycle delivery to your door
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#c97a3e]" />
                </a>
              </div>
            </div>
          ) : (
            /* Direct In-App Product Cart & Checkout */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 bg-stone-950 p-1 rounded-lg border border-stone-800">
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 px-2 sm:px-3 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                    orderType === 'pickup'
                      ? 'bg-[#c97a3e] text-[#121110] shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Pick-up Takeaway</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 px-2 sm:px-3 rounded text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                    orderType === 'delivery'
                      ? 'bg-[#c97a3e] text-[#121110] shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Bangkok Delivery</span>
                </button>
              </div>

              {/* Items in Cart */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Your Selected Items ({cart.length})
                  </span>
                  {cart.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="text-[11px] text-stone-500 hover:text-rose-400 transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="p-6 bg-stone-900/40 border border-dashed border-stone-800 rounded-lg text-center space-y-3">
                    <p className="text-xs text-stone-400">Your basket is currently empty.</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {MENU_ITEMS.slice(0, 3).map((dish) => (
                        <button
                          key={dish.id}
                          type="button"
                          onClick={() => onAddToCart(dish)}
                          className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] rounded border border-stone-700 flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3 text-[#c97a3e]" />
                          <span>{dish.name} (฿{dish.price})</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {cart.map((ci) => (
                      <div
                        key={ci.item.id}
                        className="p-3 bg-stone-900/80 border border-stone-800 rounded-lg flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {ci.item.image && (
                            <img
                              src={ci.item.image}
                              alt={ci.item.name}
                              className="w-10 h-10 rounded object-cover flex-shrink-0 bg-stone-950"
                            />
                          )}
                          <div className="truncate">
                            <h5 className="text-xs font-bold text-stone-100 truncate">
                              {ci.item.name}
                            </h5>
                            <span className="text-[11px] text-[#e69354] font-mono">
                              ฿{ci.item.price} each
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="flex items-center bg-stone-950 border border-stone-800 rounded">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(ci.item.id, -1)}
                              className="p-1 text-stone-400 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-stone-200 font-mono">
                              {ci.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(ci.item.id, 1)}
                              className="p-1 text-stone-400 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="w-14 text-right text-xs font-bold text-stone-100 font-mono">
                            ฿{ci.item.price * ci.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(ci.item.id)}
                            className="p-1 text-stone-500 hover:text-rose-400"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Customer Info Form Fields */}
              <div className="space-y-3 pt-2 border-t border-stone-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 081 234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Delivery Address in Bangkok *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Condo/Hotel name, Room number, Street"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 focus:outline-none"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Requested Time
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 focus:outline-none"
                    >
                      <option>As soon as possible (15–20 mins)</option>
                      <option>In 30 minutes</option>
                      <option>In 45 minutes</option>
                      <option>In 1 hour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('promptpay')}
                        className={`p-1.5 rounded text-[10px] font-bold border flex flex-col items-center gap-0.5 ${
                          paymentMethod === 'promptpay'
                            ? 'bg-[#c97a3e]/20 border-[#c97a3e] text-[#e69354]'
                            : 'bg-stone-900 border-stone-800 text-stone-400'
                        }`}
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>PromptPay</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-1.5 rounded text-[10px] font-bold border flex flex-col items-center gap-0.5 ${
                          paymentMethod === 'card'
                            ? 'bg-[#c97a3e]/20 border-[#c97a3e] text-[#e69354]'
                            : 'bg-stone-900 border-stone-800 text-stone-400'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cash')}
                        className={`p-1.5 rounded text-[10px] font-bold border flex flex-col items-center gap-0.5 ${
                          paymentMethod === 'cash'
                            ? 'bg-[#c97a3e]/20 border-[#c97a3e] text-[#e69354]'
                            : 'bg-stone-900 border-stone-800 text-stone-400'
                        }`}
                      >
                        <Banknote className="w-3.5 h-3.5" />
                        <span>Cash</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                    Kitchen Notes / Dietary (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Oat milk, no ice, extra spicy, dressing on side"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-900 border border-stone-800 focus:border-[#c97a3e] rounded text-xs text-stone-100 focus:outline-none"
                  />
                </div>
              </div>

              {/* Order Total & Submit Button */}
              <div className="pt-3 border-t border-stone-800 space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal:</span>
                    <span className="font-mono text-stone-200">฿{subtotal}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-stone-400">
                      <span>Delivery Fee:</span>
                      <span className="font-mono text-stone-200">฿{deliveryFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-stone-100 pt-1 border-t border-stone-800/60">
                    <span>Total (incl. VAT):</span>
                    <span className="text-[#e69354] font-mono text-base">฿{total}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className={`w-full py-3 px-4 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    cart.length > 0
                      ? 'bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] shadow-lg shadow-[#c97a3e]/25 cursor-pointer'
                      : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Place Order · ฿{total}</span>
                </button>
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
