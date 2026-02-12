import React from 'react';
import { Send, TrendingUp, Truck, ShieldCheck, Wrench, Handshake, CheckCircle2, Package, Battery, BarChart3, Users, Megaphone } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Alta Rentabilidade",
    description: "Tabelas exclusivas para revenda com margens atrativas para alavancar o lucro da sua oficina ou loja."
  },
  {
    icon: Truck,
    title: "Logística Expressa",
    description: "Frota própria com rotas diárias em Bauru e região. Reposição de estoque rápida para você não perder vendas."
  },
  {
    icon: ShieldCheck,
    title: "Garantia Simplificada",
    description: "Resolvemos garantias diretamente com agilidade. Sem burocracia excessiva, mantendo seu cliente satisfeito."
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Acesso direto aos nossos especialistas e materiais de apoio para treinar sua equipe de vendas."
  }
];

const targetSegments = [
  "Auto Elétricas", 
  "Centros Automotivos", 
  "Lojas de Autopeças", 
  "Moto Peças", 
  "Transportadoras", 
  "Frotistas"
];

const brands = [
  "Heliar", "Cral", "Lubax", "América", "Strada", "Optima", "Freedom", "Secpower"
];

const ResellerAndProducts: React.FC = () => {
  return (
    <section id="reseller" className="bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      {/* Hero Strip */}
      <div className="relative z-10 border-b border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                 <Handshake size={14} /> Área B2B
              </div>
              <h2 className="text-4xl md:text-5xl font-archivo font-bold text-slate-900 mb-6 leading-tight">
                Expanda seu negócio com a <span className="text-blue-700">Guanda Baterias</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Mais do que um distribuidor, somos parceiros do seu crescimento. 
                Tenha as melhores marcas (<strong>Heliar, Cral, Lubax, América, Strada, Optima, Freedom, Secpower</strong>) na sua prateleira com condições comerciais imbatíveis.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                 {targetSegments.map((segment, i) => (
                    <span key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-600 text-sm shadow-sm">
                       <CheckCircle2 size={14} className="text-green-500" /> {segment}
                    </span>
                 ))}
              </div>

              {/* Brands Grid (Visual Mask) */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Marcas Parceiras</p>
                <div className="flex flex-wrap gap-4 items-center">
                  {brands.map((brand, idx) => (
                    <div key={idx} className="group relative">
                      <div className="px-4 py-2 bg-slate-100 rounded-lg border border-slate-200 text-slate-400 font-archivo font-black text-lg uppercase tracking-tighter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-blue-700 group-hover:shadow-md cursor-default select-none">
                        {brand}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>

           {/* Stats / Trust */}
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform">
                 <h3 className="text-3xl font-bold text-blue-700 mb-1">30+</h3>
                 <p className="text-slate-500 text-sm">Anos de liderança no mercado regional</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform">
                 <div className="flex items-center gap-2 mb-1">
                    <Package className="text-yellow-500" size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-1">Pronta Entrega</h3>
                 <p className="text-slate-500 text-sm">Estoque robusto à disposição</p>
              </div>
              <div className="bg-blue-700 p-6 rounded-2xl border border-blue-600 shadow-xl col-span-2 text-white">
                 <div className="flex items-center gap-3 mb-2">
                    <Battery className="text-yellow-400" />
                    <h3 className="text-2xl font-bold">100% Original</h3>
                 </div>
                 <p className="text-blue-100 text-sm">Produtos com nota fiscal e garantia de fábrica assegurada.</p>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Persuasive Arguments Block */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <BarChart3 size={24} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-4">Aumente seu Faturamento</h4>
               <p className="text-slate-600 leading-relaxed">
                  Não perca vendas por falta de produto. Com nosso mix completo de baterias (motos, carros, caminhões e estacionárias), sua loja atende 100% da demanda. Oferecemos preços competitivos para que sua margem seja saudável.
               </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
               <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-blue-900 mb-6">
                  <Megaphone size={24} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-4">Marketing Cooperado</h4>
               <p className="text-slate-600 leading-relaxed">
                  Revendedor Guanda não está sozinho. Oferecemos suporte em materiais de ponto de venda (banners, expositores) e campanhas para atrair clientes para a sua porta. Sua marca cresce junto com a nossa.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
               <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6">
                  <Users size={24} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-4">Consultoria Especializada</h4>
               <p className="text-slate-600 leading-relaxed">
                  Dúvidas sobre qual bateria aplicar em um carro start-stop novo? Nossa equipe técnica está a uma ligação de distância. Treinamos seus funcionários para que eles vendam com confiança e precisão.
               </p>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           {benefits.map((item, idx) => (
             <div key={idx} className="bg-white hover:bg-slate-50 p-6 rounded-t-3xl rounded-b-none border border-slate-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <item.icon size={24} />
                </div>
                <h4 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
             </div>
           ))}
        </div>

        {/* Form Container */}
        <div className="flex justify-center">
           <div className="w-full max-w-2xl bg-white rounded-2xl p-4 md:p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              
              {/* Lahar Iframe */}
              <iframe 
                title="Formex Formulário Site - contato" 
                name="iframe_formex_lahar" 
                width="100%" 
                height="660px" 
                style={{ background: 'none', border: 'none' }} 
                allowTransparency={true} 
                src="https://forms.lahar.com.br/formularios-externos/acessa/formulariodecontatohome-hzsLrktW1fatXO9B4v83LjsarF"
              >
                Seu navegador não possui suporte para iframes.
              </iframe>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ResellerAndProducts;