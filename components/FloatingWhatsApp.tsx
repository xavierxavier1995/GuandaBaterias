import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={BUSINESS_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      // Added 'mb-24 md:mb-0' to lift the button on mobile so it doesn't overlap with the bottom CTA bar
      className="fixed bottom-6 right-6 mb-20 md:mb-0 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute -top-10 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
        Estamos Online! ⚡
      </span>
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center border-2 border-green-400">
          <MessageCircle size={28} fill="white" />
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;