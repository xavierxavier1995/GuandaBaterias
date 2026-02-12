import * as React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter, Mail, ChevronRight, Battery } from 'lucide-react';
import { BUSINESS_INFO, SOCIAL_LINKS, NAV_LINKS, PRODUCT_CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <Battery className="text-yellow-400" size={32} />
               <span className="text-2xl font-archivo font-bold text-white uppercase tracking-tighter">
                 Guanda
               </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Há mais de 30 anos fornecendo energia e confiança para Bauru e região. Revendedor autorizado das melhores marcas do mercado.
            </p>
            <div className="space-y-3">
               <div className="flex items-start gap-3">
                  <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
                  <span className="text-sm">{BUSINESS_INFO.address}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Phone className="text-blue-500 shrink-0" size={18} />
                  <span className="text-sm">{BUSINESS_INFO.phone}</span>
               </div>
               <div className="flex items-center gap-3">
                  <Mail className="text-blue-500 shrink-0" size={18} />
                  <span className="text-sm">contato@guandabaterias.com.br</span>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-400 pl-3">Navegação</h4>
             <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                   <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-sm">
                         <ChevronRight size={14} /> {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Products */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-blue-600 pl-3">Produtos</h4>
             <ul className="space-y-3">
                {PRODUCT_CATEGORIES.map((cat) => (
                   <li key={cat.id}>
                      <a href={`/${cat.slug}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm">
                         <ChevronRight size={14} /> {cat.title}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Socials & Hours */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-green-500 pl-3">Redes Sociais</h4>
             <div className="flex gap-4 mb-8">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                   <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
                   <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.x} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                   <Twitter size={20} />
                </a>
             </div>
             
             <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2">Horário de Funcionamento</p>
                <p className="text-white font-bold text-sm">Seg - Sex: 08:00 - 18:00</p>
                <p className="text-white font-bold text-sm">Sábado: 08:00 - 12:00</p>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <p>© {new Date().getFullYear()} Guanda Baterias. Todos os direitos reservados.</p>
           <p className="flex items-center gap-1">
             Desenvolvido com <span className="text-red-500">❤</span> para alta performance.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;