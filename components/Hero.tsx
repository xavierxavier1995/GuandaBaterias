import React from 'react';
import { ArrowRight, Zap, Star, Wrench, CreditCard } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[100dvh] flex flex-col justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Large Yellow Circle (Left) */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
        
        {/* Large Blue Circle (Right) */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
        {/* Content Column */}
        <div className="flex flex-col justify-center space-y-8 text-center lg:text-left h-full max-h-[800px]">
          
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-slate-600 text-xs font-bold tracking-wide uppercase">ENTREGA E INSTALAÇÃO GRÁTIS</span>
            </div>
          </div>

          {/* Redesigned Headline - Boxed Style - Reduced Size by ~35% */}
          <div className="relative">
             <h1 className="flex flex-col items-center lg:items-start font-sans font-black tracking-tighter leading-none uppercase">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-2">
                    NÃO FIQUE
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white bg-blue-600 px-3 pt-1 pb-2 shadow-sm inline-block">
                    NA MÃO.
                </span>
             </h1>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            A bateria arriou? A Guanda chega em minutos. 
            Energia premium com <span className="text-blue-700 font-bold">instalação grátis</span> e tecnologia de ponta para seu veículo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <a 
              href={`${BUSINESS_INFO.whatsappLink}&text=Preciso%20de%20socorro%20agora!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Pedir Socorro Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#product-lines"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-200 transition-all shadow-sm hover:border-blue-200"
            >
              Ver Linhas
            </a>
          </div>
          
          {/* Stats Row */}
          <div className="hidden md:grid grid-cols-4 gap-4 text-left pt-6 border-t border-slate-100 mt-4">
             <div className="text-center lg:text-left">
                <p className="text-xl font-black text-blue-700">30+</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase mt-0.5 leading-tight">Anos de Mercado</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <Wrench size={18} />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">Instalação Grátis</p>
             </div>
             <div className="text-center lg:text-left">
                 <div className="flex justify-center lg:justify-start text-yellow-400 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                 </div>
                 <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">518 Avaliações</p>
             </div>
             <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-1 text-blue-700">
                    <CreditCard size={18} />
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">Em até 10x</p>
             </div>
          </div>
        </div>

        {/* Visual Column - Pure Abstract Energy Composition */}
        <div className="relative hidden lg:flex items-center justify-center h-full w-full max-h-[600px] mx-auto lg:mx-0">
             
             {/* Dynamic Energy Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-300/20 via-transparent to-yellow-200/20 rounded-full blur-[80px] -z-20 animate-pulse"></div>
             
             {/* 1. Giant Yellow Bolt (Background Foundation) */}
             <div className="absolute text-yellow-400/10 z-0 transform rotate-[-15deg] scale-150 animate-pulse">
                <Zap size={400} fill="currentColor" />
             </div>

             {/* 2. Large Blue Neon Bolt (Main Focus) */}
             <div className="absolute text-blue-600 z-10 transform rotate-[10deg] drop-shadow-[0_0_50px_rgba(37,99,235,0.6)] animate-bounce-slow hover:text-blue-500 transition-colors">
                <Zap size={280} fill="currentColor" />
             </div>

             {/* 3. Secondary Blue Bolt (Crossing) */}
             <div className="absolute text-blue-400/80 z-20 transform rotate-[-25deg] translate-x-10 translate-y-10 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                <Zap size={180} fill="currentColor" />
             </div>

             {/* 4. Sharp Yellow Spark (Accent) */}
             <div className="absolute top-10 right-10 md:right-20 text-yellow-500 z-20 transform rotate-[45deg] animate-pulse">
                <Zap size={60} fill="currentColor" />
             </div>

             {/* 5. Small Blue Sparks (Floating) */}
             <div className="absolute bottom-20 left-10 md:left-20 text-blue-300 z-0 transform rotate-[15deg] blur-[1px]">
                <Zap size={40} fill="currentColor" />
             </div>
             
             <div className="absolute top-20 left-0 text-blue-200 z-0 transform rotate-[-45deg] opacity-50">
                <Zap size={30} fill="currentColor" />
             </div>

             {/* Decorative Rings/Orbits */}
             <div className="absolute inset-0 border border-blue-100/20 rounded-full w-[80%] h-[80%] top-[10%] left-[10%] animate-[spin_10s_linear_infinite] border-dashed"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;