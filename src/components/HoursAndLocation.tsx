import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Navigation, Train, Ship, ExternalLink, Calendar, CheckCircle, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO, POPULAR_TIMES_DATA } from '../data/businessData';

interface HoursAndLocationProps {
  onOpenReservation: () => void;
}

export const HoursAndLocation: React.FC<HoursAndLocationProps> = ({ onOpenReservation }) => {
  const [copied, setCopied] = useState(false);
  const [bkkTime, setBkkTime] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Bangkok',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setBkkTime(formatter.format(now));

        const bkkHour = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getHours();
        setIsOpen(bkkHour >= BUSINESS_INFO.openHour && bkkHour < BUSINESS_INFO.closeHour);
      } catch {
        setBkkTime('8:00 AM - 10:00 PM');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const schedule = [
    { day: 'Monday', hours: '8:00 AM – 10:00 PM', highlight: false },
    { day: 'Tuesday', hours: '8:00 AM – 10:00 PM', highlight: false },
    { day: 'Wednesday', hours: '8:00 AM – 10:00 PM', highlight: false },
    { day: 'Thursday', hours: '8:00 AM – 10:00 PM', highlight: false },
    { day: 'Friday', hours: '8:00 AM – 10:00 PM', highlight: true },
    { day: 'Saturday', hours: '8:00 AM – 10:00 PM', highlight: true },
    { day: 'Sunday', hours: '8:00 AM – 10:00 PM', highlight: true },
  ];

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#171614] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto pb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#c97a3e] mb-3">
            <span>Find Us in Bang Rak</span>
            <span className="w-8 h-px bg-[#c97a3e]/60" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f2ede6] leading-tight">
            Hours & Location
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400 font-light">
            Conveniently nestled in Charoen Krung Soi 44, steps away from the Chao Phraya River and BTS Saphan Taksin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Popular Times */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55 }}
              className="bg-stone-900/90 border border-stone-800 rounded-lg p-5 sm:p-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-md shrink-0 ${isOpen ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-amber-950/80 text-amber-400 border border-amber-800/60'}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm sm:text-base font-bold text-stone-100 uppercase tracking-wide whitespace-nowrap">
                        {isOpen ? 'Open Today' : 'Closed Now'}
                      </span>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">
                      Bangkok Time: <span className="text-stone-200 font-semibold">{bkkTime}</span>
                    </p>
                  </div>
                </div>
                <div className="self-start sm:self-center">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-stone-800 text-[#e69354] rounded whitespace-nowrap inline-block">
                    8 AM – 10 PM
                  </span>
                </div>
              </div>

              {/* Weekly Schedule */}
              <div className="mt-4 divide-y divide-stone-800/60 text-xs">
                {schedule.map((item) => (
                  <div key={item.day} className="py-2.5 flex items-center justify-between text-stone-300">
                    <span className="font-semibold text-stone-300">{item.day}</span>
                    <span className="font-mono text-stone-400">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md shadow-[#c97a3e]/20 cursor-pointer"
                >
                  Book Table for Today
                </button>
              </div>
            </motion.div>

            {/* Popular Times Graph */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-stone-900/90 border border-stone-800 rounded-lg p-6 shadow-xl"
            >
              <h3 className="font-display text-sm font-bold text-stone-100 uppercase tracking-wide flex items-center justify-between">
                <span>Popular Visiting Hours</span>
                <span className="text-[10px] text-stone-400 font-normal">Based on Google Maps Data</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                Brunch rush peaks between 10:00 AM and 1:00 PM. Evenings are relaxed with comfort dinner and wine.
              </p>

              {/* Bar Chart */}
              <div className="mt-6 grid grid-cols-7 gap-2 items-end h-28 pt-4 pb-1 border-b border-stone-800">
                {POPULAR_TIMES_DATA.filter((_, idx) => idx % 2 === 0).map((pt, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950 text-[#e69354] text-[9px] font-bold px-1.5 py-0.5 rounded border border-stone-700 pointer-events-none whitespace-nowrap z-10">
                      {pt.label}
                    </div>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${pt.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
                      className={`w-full rounded-t transition-colors ${
                        pt.value > 80
                          ? 'bg-[#c97a3e] group-hover:bg-[#e69354]'
                          : 'bg-stone-700 group-hover:bg-stone-600'
                      }`}
                    />
                    <span className="text-[9px] font-semibold text-stone-400">
                      {pt.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Address, Map, Transit, & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Address & Fast Contact Card */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-lg p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-stone-800">
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-100 uppercase tracking-wide">
                    Sarnies Bangkok
                  </h3>
                  <p className="text-sm text-stone-300 mt-1 font-light leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#e69354] font-mono mt-1">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>

                <button
                  onClick={copyAddress}
                  className="flex items-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded border border-stone-700 self-start transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Action Buttons Row */}
              <div className="py-6 border-b border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-[#c97a3e] hover:bg-[#b86d34] text-[#121110] font-bold text-xs uppercase tracking-wider rounded shadow-md shadow-[#c97a3e]/20 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#121110]" />
                  <span>Get Google Maps Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  id="location-call-btn"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold text-xs uppercase tracking-wider rounded border border-stone-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c97a3e]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Transit & Arrival Guide */}
              <div className="pt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  How to Get Here:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-md flex items-start gap-3">
                    <Train className="w-4 h-4 text-[#c97a3e] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-200 block">BTS Skytrain</strong>
                      <span className="text-stone-400 font-light">Saphan Taksin Station (Exit 3), then a 5-minute walk down Charoen Krung.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-md flex items-start gap-3">
                    <Ship className="w-4 h-4 text-[#c97a3e] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-200 block">Chao Phraya Express Boat</strong>
                      <span className="text-stone-400 font-light">Sathorn Pier (Central Pier), 6-minute stroll through the heritage alley.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview Graphic */}
              <div className="mt-6 rounded-lg overflow-hidden border border-stone-800 bg-stone-950 relative aspect-[16/8] group">
                <iframe
                  title="Sarnies Bangkok Google Map"
                  src="https://maps.google.com/maps?q=Sarnies+Bangkok+101+103+Charoen+Krung+44+Alley+Bangkok&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert contrast-[0.9] opacity-75 group-hover:opacity-95 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121110]/90 hover:bg-[#121110] text-[#e69354] text-xs font-bold rounded shadow border border-stone-700 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
