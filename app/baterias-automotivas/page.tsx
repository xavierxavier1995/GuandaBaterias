import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import FloatingMobileMenu from '../../components/FloatingMobileMenu';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../../constants';
import { ShoppingCart } from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Baterias Automotivas | Guanda Baterias',
  description: 'Gama completa de baterias automotivas Heliar, Cral, Moura e mais. Qualidade e custo-benefício para seu veículo.',
};

export default function AutomotiveBatteriesPage() {
  const category = PRODUCT_CATEGORIES.find(c => c.id === 'automotiva');
  
  if (!category) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-archivo font-bold text-slate-900 mb-6 uppercase">
                        {category.title}
                    </h1>
                    <div className="h-1 w-24 bg-yellow-400 rounded-full mb-6"></div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {category.description}
                    </p>
                    <a 
                      href={`${BUSINESS_INFO.whatsappLink}&text=Olá, gostaria de um orçamento de bateria automotiva`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
                    >
                        <ShoppingCart size={20} />
                        Falar com Especialista
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src={category.heroImage} 
                        alt="Bateria Automotiva Destaque" 
                        className="max-w-full h-auto max-h-[400px] object-contain drop-shadow-2xl"
                        width="500"
                        height="400"
                    />
                </div>
            </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.brands?.map((product, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
                        <div className="w-full h-48 mb-6 relative flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden">
                             <img 
                                src={product.img} 
                                alt={product.name} 
                                className="max-w-full max-h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                width="200"
                                height="200"
                             />
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-6">{product.name}</h3>
                        
                        <a 
                            href={`${BUSINESS_INFO.whatsappLink}&text=Gostaria de saber mais sobre a bateria ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto w-full bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm uppercase tracking-wide border border-blue-100"
                        >
                            Ver Mais Informações
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingMobileMenu />
    </div>
  );
}