import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import FloatingMobileMenu from '../../components/FloatingMobileMenu';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../../constants';
import { ShoppingCart, Server } from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Baterias Estacionárias | Guanda Baterias',
  description: 'Energia confiável para nobreaks, sistemas solares e telecomunicações.',
};

export default function StationaryBatteriesPage() {
  const category = PRODUCT_CATEGORIES.find(c => c.id === 'estacionaria');
  
  if (!category) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-12 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center px-6">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-700 mb-6">
                <Server size={40} />
             </div>
             <h1 className="text-4xl md:text-5xl font-archivo font-bold text-slate-900 mb-4">
                {category.title}
             </h1>
             <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                {category.description}
             </p>
             <p className="text-slate-500 mb-8">Em breve o catálogo completo estará disponível aqui.</p>
             <a 
                href={`${BUSINESS_INFO.whatsappLink}&text=Gostaria de consultar baterias estacionárias`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
             >
                <ShoppingCart size={20} />
                Falar com Consultor
             </a>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingMobileMenu />
    </div>
  );
}