'use client';

import React from 'react';
import { ArrowRight, Zap, Star, Wrench, CreditCard, BatteryCharging, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-white pt-24 pb-12 lg:py-0">
      
      {/* Background Elements (Mobile & Desktop) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Large Yellow Circle (Left) */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-yellow-100/50 rounded-full blur-[60px] lg:blur-[100px] -z-10 opacity-60 will-change-transform"></div>
        
        {/* Large Blue Circle (Right) */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-100/50 rounded-full blur-[60px] lg:blur-[100px] -z-10 opacity-60 will-change-transform"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
        
        {/* Content Column */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left h-full z-20">
          
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-slate-600 text-[10px] md:text-xs font-bold tracking-wide uppercase">ENTREGA E INSTALAÇÃO GRÁTIS</span>
            </div>
          </div>

          {/* Headline */}
          <div className="relative">
             <div role="heading" aria-level={2} className="flex flex-col items-center lg:items-start font-sans font-black tracking-tighter leading-none uppercase">
                <span className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-2">
                    NÃO FIQUE
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl text-white bg-blue-600 px-3 pt-1 pb-2 shadow-lg inline-block transform -skew-x-6">
                    NA MÃO.
                </span>
             </div>
          </div>

          {/* Description */}
          <h1 className="text-slate-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-lg p-2 lg:p-0">
            A bateria arriou? A Guanda chega em minutos. 
            Energia premium com <span className="text-blue-700 font-bold">instalação grátis</span> e tecnologia de ponta para seu veículo.
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2 w-full">
            <a 
              href={`${BUSINESS_INFO.whatsappLink}&text=Preciso%20de%20socorro%20agora!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group border-b-4 border-yellow-500 active:border-b-0 active:translate-y-1"
            >
              Pedir Socorro Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#product-lines"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all shadow-sm hover:border-blue-200"
            >
              Ver Linhas
            </a>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-6 border-t border-slate-200/60 mt-4 bg-white/50 lg:bg-transparent rounded-xl p-4 lg:p-0">
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

        {/* Visual Column - Now visible on mobile as background watermark */}
        <div className="absolute inset-0 lg:static lg:flex items-center justify-center h-full w-full max-h-[600px] mx-auto lg:mx-0 perspective-1000 overflow-hidden lg:overflow-visible z-0 pointer-events-none lg:pointer-events-auto opacity-30 lg:opacity-100">
             
             {/* Dynamic Energy Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-to-tr from-blue-400/20 via-transparent to-yellow-300/20 rounded-full blur-[100px] -z-20 animate-pulse will-change-transform"></div>
             
             {/* Rotating Rings */}
             <div className="absolute inset-0 m-auto w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] border border-blue-200/40 rounded-full animate-[spin_30s_linear_infinite] border-dashed will-change-transform"></div>
             <div className="absolute inset-0 m-auto w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] border border-yellow-200/40 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dotted will-change-transform"></div>

             {/* Floating Particles */}
             {[...Array(5)].map((_, i) => (
                 <div key={i} className={`absolute bg-blue-400/30 rounded-full blur-[1px] animate-float-${i % 3}`} 
                      style={{
                          width: Math.random() * 15 + 5 + 'px',
                          height: Math.random() * 15 + 5 + 'px',
                          top: Math.random() * 70 + 15 + '%',
                          left: Math.random() * 70 + 15 + '%',
                          animationDelay: Math.random() * 2 + 's',
                          willChange: 'transform'
                      }}
                 ></div>
             ))}

             {/* 1. Giant Yellow Bolt (Background Foundation) */}
             <div className="absolute text-yellow-400/10 z-0 transform rotate-[-15deg] scale-150 animate-pulse lg:block">
                <Zap size={400} fill="currentColor" />
             </div>

             {/* Main Composition */}
             <div className="relative z-10 animate-float-slow group scale-75 lg:scale-100 origin-center will-change-transform">
                 
                 {/* 2. Large Blue Neon Bolt (Main Focus) */}
                 <div className="relative z-20 text-blue-600 transform rotate-[10deg] drop-shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-500 group-hover:scale-105">
                    <Zap size={300} fill="currentColor" />
                    {/* Inner highlight */}
                    <div className="absolute inset-0 text-blue-400 mix-blend-overlay animate-pulse">
                        <Zap size={300} fill="currentColor" />
                    </div>
                 </div>

                 {/* 3. Secondary Blue Bolt (Crossing) */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/80 z-30 transform rotate-[-25deg] translate-x-12 translate-y-12 drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">
                    <Zap size={180} fill="currentColor" />
                 </div>
                 
                 {/* Floating Cards / Elements - Hidden on mobile to reduce clutter */}
                 <div className="hidden lg:block absolute -top-12 -right-8 z-40 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] animate-bounce-slow border border-white/50 will-change-transform">
                    <BatteryCharging size={32} className="text-green-500" />
                 </div>
                 
                 <div className="hidden lg:block absolute -bottom-8 -left-12 z-40 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] animate-bounce-delayed border border-white/50 will-change-transform">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={24} className="text-blue-600" />
                        <span className="font-bold text-slate-800 text-xs uppercase">Original</span>
                    </div>
                 </div>
             </div>

             {/* 5. Electric Arcs - SVG Overlay */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 400 400">
                <path d="M 50 350 Q 200 200 350 50" stroke="url(#gradient-arc)" strokeWidth="2" fill="none" strokeDasharray="10,10" className="animate-dash" />
                <defs>
                    <linearGradient id="gradient-arc" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                    </linearGradient>
                </defs>
             </svg>
        </div>
      </div>
      
      {/* Styles for custom animations */}
      <style>{`
        @keyframes float-0 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes float-1 { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-15px) translateX(10px); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(20px); } }
        .animate-float-0 { animation: float-0 4s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 5s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-0 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: float-0 5s ease-in-out infinite; }
        .animate-bounce-delayed { animation: float-0 5s ease-in-out infinite 2.5s; }
        .animate-dash { stroke-dasharray: 10; animation: dash 30s linear infinite; }
        @keyframes dash { from { stroke-dashoffset: 500; } to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;