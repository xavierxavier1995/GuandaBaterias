'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BatteryCharging, ChevronDown, Loader2 } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO, PRODUCT_CATEGORIES } from '../constants';

interface NavbarProps {
  onNavigate?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (e?: React.MouseEvent, href?: string) => {
    // If it's the home link and we have an onNavigate prop (SPA mode), call it.
    if ((href === '/' || href === '/#') && onNavigate) {
       e?.preventDefault();
       onNavigate();
    }
    setMobileMenuOpen(false);
  };

  const handleWhatsappClick = (e: React.MouseEvent<HTMLAnchorElement>, message: string) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    
    setTimeout(() => {
        const url = `${BUSINESS_INFO.whatsappLink}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsLoading(false);
    }, 1000);
  };

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm py-2 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2 group"
          aria-label="Voltar para página inicial"
        >
          <div className="relative transition-transform group-hover:scale-105">
             <img 
              src="https://www.guandabaterias.com.br/wp-content/uploads/2019/10/cropped-logo-guanda-baterias-.png" 
              alt="Guanda Baterias Logo - Distribuidora de Baterias em Bauru" 
              className="w-auto object-contain h-12 md:h-14"
              width="180"
              height="60"
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase"
          >
            Início
          </Link>

          {/* Produtos Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-slate-700 group-hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase py-2"
            >
              Produtos
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 w-64 overflow-hidden">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/#${cat.id}`}
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-sm font-bold transition-colors cursor-pointer"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.filter(l => l.name !== 'Início' && l.name !== 'Blog').map((link) => (
            <Link 
              key={link.name} 
              href={link.href.startsWith('#') ? `/${link.href}` : link.href} 
              className="text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          {/* Link for Blog */}
           <Link 
              href="/#blog" 
              onClick={(e) => handleLinkClick(e, '/#blog')}
              className="text-slate-700 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors uppercase cursor-pointer"
            >
              Blog
            </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="#"
            onClick={(e) => handleWhatsappClick(e, "Olá, gostaria de pedir uma bateria!")}
            className={`flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-700/30 transition-all group ${isLoading ? 'cursor-wait opacity-90' : ''}`}
          >
            {isLoading ? (
                <Loader2 size={18} className="text-yellow-400 animate-spin" />
            ) : (
                <BatteryCharging size={18} className="text-yellow-400 group-hover:animate-pulse" />
            )}
            <span className="font-bold text-sm">
                {isLoading ? 'INICIANDO...' : 'PEDIR BATERIA'}
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <Link 
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="text-slate-800 text-lg font-bold py-3 border-b border-slate-100 hover:text-blue-700 cursor-pointer"
          >
            Início
          </Link>
          
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
                    <Link 
                      key={cat.id} 
                      href={`/#${cat.id}`}
                      onClick={() => handleLinkClick()}
                      className="block text-slate-600 font-medium py-2"
                    >
                      {cat.title}
                    </Link>
                  ))}
               </div>
             )}
          </div>

          {NAV_LINKS.filter(l => l.name !== 'Início').map((link) => (
            <Link 
              key={link.name} 
              href={link.href.startsWith('#') ? `/${link.href}` : link.href}
              onClick={() => handleLinkClick()}
              className="text-slate-800 text-lg font-bold py-3 border-b border-slate-100 hover:text-blue-700"
            >
              {link.name}
            </Link>
          ))}
          
          <a 
             href="#"
             onClick={(e) => handleWhatsappClick(e, "Olá, gostaria de pedir uma bateria!")}
             className={`mt-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl text-center shadow-lg flex justify-center items-center gap-2 ${isLoading ? 'opacity-80' : ''}`}
          >
            {isLoading ? <Loader2 size={24} className="animate-spin" /> : null}
            {isLoading ? 'Conectando...' : 'Pedir Bateria'}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;