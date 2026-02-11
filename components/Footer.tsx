import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           {/* Brand */}
           <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col mb-6">
                 <div className="bg-white rounded-lg p-2 w-fit mb-4">
                    <img 
                      src="https://www.guandabaterias.com.br/wp-content/uploads/2019/10/cropped-logo-guanda-baterias-.png" 
                      alt="Guanda Baterias Logo" 
                      className="h-10 w-auto object-contain"
                      width="150"
                      height="40"
                      loading="lazy"
                      decoding="async"
                    />
                 </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Há 30 anos fornecendo energia e confiança para Bauru e região. Tecnologia de ponta, entrega rápida e o melhor atendimento da cidade.
              </p>
              <div className="flex gap-4">
                 <a 
                   href={SOCIAL_LINKS.instagram}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all"
                   aria-label="Siga-nos no Instagram"
                 >
                    <Instagram size={20} />
                 </a>
                 <a 
                   href={SOCIAL_LINKS.facebook}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all"
                   aria-label="Curta nossa página no Facebook"
                 >
                    <Facebook size={20} />
                 </a>
                 <a 
                   href={SOCIAL_LINKS.x}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all"
                   aria-label="Siga-nos no X (Twitter)"
                 >
                    <Twitter size={20} />
                 </a>
              </div>
           </div>

           {/* Contact */}
           <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <MapPin className="text-yellow-400 mt-1 shrink-0" size={18} />
                    <span className="text-slate-400 text-sm">
                       {BUSINESS_INFO.address}
                       <br />
                       <a 
                        href="https://maps.google.com" 
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-xs mt-1 inline-block"
                       >
                         Ver no mapa
                       </a>
                    </span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Phone className="text-yellow-400 shrink-0" size={18} />
                    <span className="text-slate-400 text-sm">{BUSINESS_INFO.phone}</span>
                 </li>
              </ul>
           </div>

           {/* Quick Links */}
           <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-2">
                 <li><a href="#hero" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Início</a></li>
                 <li><a href="#product-lines" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Produtos</a></li>
                 <li><a href="#services" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Serviços</a></li>
                 <li><a href="#ai-assistant" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Guanda AI</a></li>
              </ul>
           </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-600 text-xs text-center md:text-left">
             &copy; {new Date().getFullYear()} Guanda Baterias. Todos os direitos reservados.
           </p>
           <div className="flex gap-6">
              <span className="text-slate-600 text-xs">Privacidade</span>
              <span className="text-slate-600 text-xs">Termos</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;