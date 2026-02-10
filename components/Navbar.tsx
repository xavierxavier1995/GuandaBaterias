import React, { useState } from 'react';
import { Menu, X, BatteryCharging, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO, PRODUCT_CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Fixed Size (approx 15% smaller than previous max) */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative transition-transform group-hover:scale-105">
             <img 
              src="https://www.guandabaterias.com.br/wp-content/uploads/2019/10/cropped-logo-guanda-baterias-.png" 
              alt="Guanda Baterias" 
              className="w-auto object-contain h-16 md:h-20"
             />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#hero" 
            className="text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase"
          >
            Início
          </a>

          {/* Produtos Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-slate-700 group-hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase py-2"
            >
              Produtos
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 w-64 overflow-hidden">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-sm font-bold transition-colors"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.filter(l => l.name !== 'Início').map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href={`${BUSINESS_INFO.whatsappLink}&text=Olá, gostaria de pedir uma bateria!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-700/30 transition-all group"
          >
            <BatteryCharging size={18} className="text-yellow-400 group-hover:animate-pulse" />
            <span className="font-bold text-sm">PEDIR BATERIA</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <a 
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-800 text-lg font-bold py-3 border-b border-slate-100 hover:text-blue-700"
          >
            Início
          </a>
          
          {/* Mobile Product Submenu */}
          <div className="py-2 border-b border-slate-100">
             <button 
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center justify-between w-full text-slate-800 text-lg font-bold py-1"
             >
                Produtos
                <ChevronDown size={20} className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
             </button>
             {productsDropdownOpen && (
               <div className="pl-4 mt-2 space-y-2">
                  {PRODUCT_CATEGORIES.map(cat => (
                    <a 
                      key={cat.id} 
                      href={`#${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-slate-600 font-medium py-2"
                    >
                      {cat.title}
                    </a>
                  ))}
               </div>
             )}
          </div>

          {NAV_LINKS.filter(l => l.name !== 'Início').map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 text-lg font-bold py-3 border-b border-slate-100 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <a 
             href={`${BUSINESS_INFO.whatsappLink}&text=Olá, gostaria de pedir uma bateria!`}
             target="_blank"
             rel="noopener noreferrer"
             className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl text-center shadow-lg"
          >
            Pedir Bateria
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;