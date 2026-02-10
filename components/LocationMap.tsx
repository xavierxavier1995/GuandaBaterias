import React from 'react';
import { MapPin, Star, Navigation, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-archivo font-bold text-slate-800 mb-2">Visite Nossa Loja</h2>
           <p className="text-slate-600">O melhor atendimento de Bauru e região</p>
        </div>

        {/* Highlighted Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                 <MapPin size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Endereço</h3>
              <p className="text-slate-600 text-lg">{BUSINESS_INFO.address}</p>
           </div>
           
           <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                 <Phone size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Fale Conosco</h3>
              <p className="text-slate-800 text-2xl font-black">{BUSINESS_INFO.phone}</p>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                 <Clock size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Horário</h3>
              <p className="text-slate-600">Seg a Sex: 08h às 18h</p>
              <p className="text-slate-600">Sáb: 08h às 12h</p>
           </div>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
           {/* Floating Action Overlay */}
           <div className="absolute bottom-6 right-6 z-20">
              <a 
                 href="https://www.google.com/maps/dir//Guanda+Baterias+Bauru" 
                 target="_blank"
                 className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full font-bold text-lg transition-colors shadow-2xl"
              >
                 <Navigation size={20} />
                 Traçar Rota
              </a>
           </div>

           {/* Google Maps Embed */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.697529367294!2d-49.05267142491754!3d-22.327179079667793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67a57a5b3a4d%3A0x7d206248b6c4b2a4!2sGuanda%20Baterias!5e0!3m2!1sen!2sbr!4v1709230000000!5m2!1sen!2sbr" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen={true} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
           ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;