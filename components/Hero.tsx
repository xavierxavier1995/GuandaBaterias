import React from 'react';
import { ArrowRight, Zap, Star, Wrench, CreditCard } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20 bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Blue Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        {/* Soft Yellow Blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-blue-900 text-xs font-bold tracking-wide uppercase">Entrega e Instalação Grátis</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-archivo font-black text-slate-900 leading-[1.1] tracking-tight">
            NÃO FIQUE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">NA MÃO.</span>
          </h1>

          <p className="text-slate-600 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            A bateria arriou? A Guanda chega em minutos. 
            Energia premium com <span className="text-blue-700 font-bold">instalação grátis</span> e tecnologia de ponta para seu veículo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href={`${BUSINESS_INFO.whatsappLink}&text=Preciso%20de%20socorro%20agora!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Pedir Socorro Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#product-lines"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all shadow-sm"
            >
              Ver Linhas
            </a>
          </div>
          
          {/* Stats Row - Updated */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200">
             <div className="text-center lg:text-left">
                <p className="text-2xl font-archivo font-bold text-blue-700">30+</p>
                <p className="text-slate-500 text-xs font-bold uppercase mt-1">Anos de Mercado</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <Wrench size={24} />
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase">Instalação Grátis</p>
             </div>
             <div className="text-center lg:text-left">
                 <div className="flex justify-center lg:justify-start text-yellow-500 mb-1">
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                 </div>
                 <p className="text-slate-500 text-xs font-bold uppercase">518 Avaliações</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <CreditCard size={24} />
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase">Em até 10x</p>
             </div>
          </div>
        </div>

        {/* Visual Column - 3D Battery Presentation */}
        <div className="hidden lg:flex relative items-center justify-center perspective-1000">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
           
           <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl border border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)]"></div>
              
              <img 
                src="https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-automotivas.png" 
                alt="Bateria Premium Guanda" 
                className="w-[90%] h-auto object-contain transform transition-transform duration-700 group-hover:scale-105 z-20 drop-shadow-2xl"
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute top-6 left-6 z-30 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                    <Zap size={16} className="text-yellow-500" />
                    <span className="text-xs font-bold text-blue-900 tracking-widest">TECNOLOGIA EFB</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;