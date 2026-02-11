import React from 'react';
import { Target, Eye, Heart, CheckCircle, Map } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="bg-slate-50 overflow-hidden">
      
      {/* History Section */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Nossa História
            </div>
            <h2 className="text-4xl lg:text-5xl font-archivo font-bold text-slate-900 leading-tight">
              Uma trajetória de <span className="text-blue-700">energia e confiança</span> desde 1994.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                A <strong>Guanda Baterias</strong> foi fundada em novembro de 1994, pelo empresário Roberto Carlos Guandalini e sua esposa Maria Lucia Donato Guandalini. Com mais de 40 anos de experiência no setor, Roberto consolidou a empresa priorizando qualidade e laços sólidos com parceiros e clientes.
              </p>
              <p>
                O crescimento contínuo possibilitou a expansão para novas linhas, como baterias de moto, estacionárias e peças automotivas. Hoje, sediada em <strong>instalações modernas em Bauru/SP</strong>, contamos com logística de ponta e equipe especializada.
              </p>
              <p>
                Parceira dos maiores fabricantes do Brasil, oferecemos um mix variado de produtos e assistência técnica qualificada, atendendo desde o varejo individual até grandes demandas corporativas em todo o interior paulista.
              </p>
            </div>
          </div>
          
          <div className="relative">
             {/* Abstract Decorations */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
             
             {/* Images Grid */}
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                  alt="Estrutura Moderna" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                  alt="Equipe Guanda" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Mission Vision Values */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100 group">
                 <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Target size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                 <p className="text-slate-600 leading-relaxed">
                   Empreender com sustentabilidade e ética, visando rentabilidade aliada à satisfação dos clientes e colaboradores, cumprindo nosso objetivo social.
                 </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100 group">
                 <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                    <Eye size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                 <p className="text-slate-600 leading-relaxed">
                   Ser referência absoluta em distribuição de baterias no interior do estado de São Paulo, reconhecida pela excelência e agilidade.
                 </p>
              </div>

              {/* Values */}
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100 group">
                 <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Heart size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                 <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Integridade e Ética</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Transparência</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Valorização Humana</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Sustentabilidade</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>

      {/* Area of Operation (Map) */}
      <div className="py-24 bg-blue-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold uppercase text-xs tracking-wider mb-4">
                  <Map size={14} /> Cobertura Regional
               </div>
               <h2 className="text-3xl md:text-5xl font-archivo font-bold text-white mb-6">
                 Onde Atuamos
               </h2>
               <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                 Nossa logística eficiente nos permite atender com rapidez todo o interior do estado de São Paulo. Confira nossa abrangência:
               </p>
            </div>

            <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl shadow-blue-950/50">
               <img 
                 src="https://www.guandabaterias.com.br/wp-content/uploads/2020/02/Regioes-guanda-768x469.jpg" 
                 alt="Mapa de atuação Guanda Baterias no estado de SP" 
                 className="w-full h-auto object-contain rounded-xl mx-auto hover:scale-[1.02] transition-transform duration-500"
                 loading="lazy"
                 width="768"
                 height="469"
                 decoding="async"
               />
               <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {['Bauru', 'São José do Rio Preto', 'Araçatuba', 'Presidente Prudente', 'Marília', 'Araraquara', 'Itapeva'].map((city) => (
                    <div key={city} className="bg-slate-50 py-2 rounded-lg text-slate-700 font-bold text-sm border border-slate-200">
                      {city}
                    </div>
                  ))}
                  <div className="bg-yellow-100 py-2 rounded-lg text-yellow-800 font-bold text-sm border border-yellow-200">
                    E Região
                  </div>
               </div>
            </div>
         </div>
      </div>

    </section>
  );
};

export default AboutUs;