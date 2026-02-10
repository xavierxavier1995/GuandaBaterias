import React from 'react';
import { ArrowRight, Zap, Star, Wrench, CreditCard } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Large Yellow Circle (Left) */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
        
        {/* Large Blue Circle (Right) */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Column */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-slate-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">ENTREGA E INSTALAÇÃO GRÁTIS</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-archivo font-black text-slate-900 leading-[0.9] tracking-tighter">
            NÃO FIQUE <br />
            <span className="bg-blue-600 text-white px-4 pt-1 pb-2 inline-block mt-2">NA MÃO.</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            A bateria arriou? A Guanda chega em minutos. 
            Energia premium com <span className="text-blue-700 font-bold">instalação grátis</span> e tecnologia de ponta para seu veículo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href={`${BUSINESS_INFO.whatsappLink}&text=Preciso%20de%20socorro%20agora!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Pedir Socorro Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#product-lines"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-200 transition-all shadow-sm"
            >
              Ver Linhas
            </a>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-slate-200 w-full my-8"></div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-left">
             <div className="text-center lg:text-left">
                <p className="text-2xl font-archivo font-black text-blue-700">30+</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase mt-1 leading-tight">Anos de Mercado</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <Wrench size={20} />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">Instalação Grátis</p>
             </div>
             <div className="text-center lg:text-left">
                 <div className="flex justify-center lg:justify-start text-yellow-400 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                 </div>
                 <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">518 Avaliações</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <CreditCard size={20} />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">Em até 10x</p>
             </div>
          </div>
        </div>

        {/* Visual Column - Composition of Batteries */}
        <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0 h-[400px] md:h-[500px] w-full max-w-[600px] mx-auto lg:mx-0">
             
             {/* Abstract Background Blurs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/40 rounded-full blur-[80px] -z-20"></div>
             <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-100/60 rounded-full blur-[60px] -z-10 animate-pulse"></div>

             {/* Moto Battery (Back Left) */}
             <div className="absolute top-10 -left-4 md:-left-12 w-40 md:w-56 z-10 opacity-90 transform -rotate-6 transition-transform hover:scale-105 duration-500">
                <img 
                   src="https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-de-moto.png" 
                   alt="Bateria de Moto" 
                   className="w-full h-auto drop-shadow-2xl"
                />
                 {/* Small Badge */}
                 <div className="absolute -bottom-4 left-4 bg-white/90 backdrop-blur py-1 px-3 rounded-lg shadow-lg border border-slate-100 hidden md:block">
                    <p className="text-[10px] font-bold text-slate-900 uppercase">Linha Moto</p>
                 </div>
             </div>

             {/* Stationary Battery (Back Right) */}
             <div className="absolute top-20 -right-4 md:-right-8 w-40 md:w-56 z-0 opacity-80 transform rotate-6 transition-transform hover:scale-105 duration-500">
                <img 
                   src="https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-estacionarias.png" 
                   alt="Bateria Estacionária" 
                   className="w-full h-auto drop-shadow-2xl grayscale-[0.3]"
                />
             </div>

             {/* Main Automotive Battery (Front Center) */}
             <div className="absolute bottom-10 md:bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80 lg:w-96 z-20 transition-transform hover:scale-105 duration-500">
                 <img 
                    src="https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-automotivas.png" 
                    alt="Bateria Automotiva Premium" 
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(29,78,216,0.3)]"
                    fetchPriority="high"
                  />
                  
                  {/* Floating Main Badge */}
                  <div className="absolute -top-6 -right-6 md:-right-12 bg-white/90 backdrop-blur-md shadow-2xl border border-white/50 rounded-2xl p-4 flex items-center gap-3 animate-bounce-slow hover:animate-none">
                    <div className="bg-yellow-400 p-2 rounded-full text-blue-900">
                       <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Tecnologia</p>
                        <p className="text-base font-black text-slate-900 leading-none">EFB / AGM</p>
                    </div>
                </div>

                {/* Additional floating tag */}
                <div className="absolute bottom-8 -left-8 md:-left-16 bg-blue-600/90 backdrop-blur-md shadow-xl border border-blue-500 rounded-xl py-2 px-4 text-white transform rotate-3 hidden md:block">
                   <p className="text-xs font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Pronta Entrega
                   </p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;