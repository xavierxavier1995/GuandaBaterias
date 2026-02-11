'use client';

import React, { useEffect, useState } from 'react';
import { BatteryCharging, Briefcase } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FloatingMobileMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show after scrolling past the hero section (approx 500px)
          if (window.scrollY > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToReseller = () => {
    const element = document.getElementById('reseller');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-40 bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] px-4 py-3 md:hidden transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-3">
        <button 
          onClick={scrollToReseller}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-800 py-3 rounded-lg border border-blue-100 transition-colors"
        >
          <Briefcase size={20} />
          <span className="text-xs font-bold uppercase tracking-wide">Revender</span>
        </button>

        <a 
          href={`${BUSINESS_INFO.whatsappLink}&text=Olá, preciso pedir uma bateria agora!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex flex-col items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg shadow-md transition-colors"
        >
          <BatteryCharging size={20} className="text-yellow-400" />
          <span className="text-xs font-bold uppercase tracking-wide text-yellow-50">Pedir Bateria</span>
        </a>
      </div>
      {/* Safe area for iPhone home bar */}
      <div className="h-2 w-full"></div>
    </div>
  );
};

export default FloatingMobileMenu;