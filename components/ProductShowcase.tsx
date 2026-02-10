import React from 'react';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../constants';
import { ShoppingCart } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <div id="product-lines" className="bg-slate-50 space-y-12 py-12 scroll-mt-24">
      {PRODUCT_CATEGORIES.map((category, index) => (
        <section 
          key={category.id} 
          id={category.id} 
          className={`scroll-mt-32 ${index % 2 === 1 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Category Header with Hero Image */}
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-archivo font-bold text-slate-900 mb-6 uppercase">
                  {category.title}
                </h2>
                <div className="h-1 w-24 bg-yellow-400 rounded-full mb-6 mx-auto lg:mx-0"></div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-8">
                  <a 
                    href={`${BUSINESS_INFO.whatsappLink}&text=Olá, gostaria de saber mais sobre ${category.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <ShoppingCart size={20} />
                    Consultar Preços
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 relative group perspective-1000">
                 <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
                 <img 
                    src={category.heroImage} 
                    alt={category.title} 
                    className="relative z-10 w-full max-h-[400px] object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105"
                 />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductShowcase;