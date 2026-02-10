import React from 'react';
import { FEATURES } from '../constants';

const BentoGrid: React.FC = () => {
  const MainIcon = FEATURES[0].icon;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-archivo font-bold text-slate-900 mb-4">Por que escolher a Guanda?</h2>
           <p className="text-slate-600 max-w-2xl mx-auto font-medium">Não somos apenas uma loja de baterias. Somos seu parceiro de energia automotiva em Bauru.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Main Feature - Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group bg-blue-600 transition-all hover:shadow-2xl hover:-translate-y-1">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-yellow-300 mb-6 backdrop-blur-sm">
                   <MainIcon size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{FEATURES[0].title}</h3>
                  <p className="text-blue-100 text-lg">{FEATURES[0].description}</p>
                </div>
                <div className="mt-8">
                   <span className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-bold text-sm shadow-lg">
                     Tempo Recorde
                   </span>
                </div>
             </div>
             {/* Decorative Map BG */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[url('https://picsum.photos/id/1/600/600')] bg-cover mix-blend-overlay"></div>
          </div>

          {/* Secondary Features */}
          {FEATURES.slice(1).map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={idx} className="rounded-3xl p-6 relative overflow-hidden group bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl">
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <FeatureIcon size={100} className="text-blue-900" />
                 </div>
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm border border-slate-100 text-blue-700`}>
                   <FeatureIcon size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;