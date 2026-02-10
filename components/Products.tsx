'use client';

import React, { useState } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../constants';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const categories = ["Todas", "Automotiva", "Moto", "Pesada", "Som"];

  const filteredProducts = activeCategory === "Todas" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-3xl md:text-5xl font-archivo font-bold text-white mb-2">Catálogo 2025</h2>
              <p className="text-slate-400">Energia de alta performance para todos os tipos de veículos.</p>
           </div>
           
           {/* Category Filter */}
           <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-white text-slate-950 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {filteredProducts.map((product) => (
             <div key={product.id} className="group relative bg-slate-900 rounded-2xl border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] flex flex-col">
                {/* Tech Badge */}
                <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur border border-slate-700 px-3 py-1 rounded text-[10px] font-bold tracking-widest text-yellow-400 uppercase">
                   {product.tech}
                </div>

                {/* Image Area */}
                <div className="h-48 overflow-hidden rounded-t-2xl relative bg-slate-800/50">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                   <div className="mb-4">
                      <p className="text-slate-500 text-xs font-bold uppercase mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors">{product.name}</h3>
                   </div>

                   {/* Features List */}
                   <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                           <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                           {feat}
                        </li>
                      ))}
                   </ul>

                   <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 text-sm font-medium">Melhor Preço</span>
                      <a 
                        href={`${BUSINESS_INFO.whatsappLink}&text=Tenho%20interesse%20na%20bateria%20${product.name}`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 p-2 rounded-lg transition-colors"
                        aria-label="Comprar no WhatsApp"
                      >
                         <ShoppingCart size={20} />
                      </a>
                   </div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="#footer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                Ver tabela completa <ChevronRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Products;