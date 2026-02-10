'use client';

import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const AiAssistant: React.FC = () => {
  const [question, setQuestion] = useState('');

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const encodedMessage = encodeURIComponent(question);
    const whatsappUrl = `${BUSINESS_INFO.whatsappLink}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setQuestion('');
  };

  return (
    <section id="ai-assistant" className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
       <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30 animate-pulse">
                <MessageCircle size={40} className="text-white" />
             </div>
             <h2 className="text-3xl md:text-5xl font-archivo font-bold text-slate-900 mb-4">
               Guanda Tech Advisor
             </h2>
             <p className="text-slate-600 text-lg max-w-2xl">
               Tem dúvidas sobre qual bateria escolher ou problemas no seu veículo? 
               Escreva abaixo e fale diretamente com nossos especialistas no WhatsApp.
             </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-4 ring-slate-50">
             
             <div className="mb-6">
                <p className="text-slate-500 font-medium mb-2 text-sm uppercase tracking-wide">Exemplos de perguntas:</p>
                <div className="flex flex-wrap gap-2">
                   <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors" onClick={() => setQuestion("Qual bateria serve no Honda Civic 2020?")}>
                     "Qual bateria serve no Honda Civic 2020?"
                   </span>
                   <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors" onClick={() => setQuestion("Meu carro não liga, o que pode ser?")}>
                     "Meu carro não liga, o que pode ser?"
                   </span>
                   <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors" onClick={() => setQuestion("Vocês entregam no centro agora?")}>
                     "Vocês entregam no centro agora?"
                   </span>
                </div>
             </div>

             {/* Input Form */}
             <form onSubmit={handleConsultation} className="relative">
                <textarea 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Descreva sua dúvida ou problema aqui..."
                  rows={3}
                  className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 rounded-xl py-4 pl-4 pr-16 focus:outline-none focus:border-green-500 focus:ring-0 transition-colors shadow-inner resize-none text-lg"
                />
                <button 
                  type="submit"
                  disabled={!question}
                  className="absolute right-3 bottom-3 h-12 w-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:scale-105"
                  title="Enviar para WhatsApp"
                >
                   <Send size={24} />
                </button>
             </form>
             
             <p className="text-center text-slate-400 text-xs mt-4">
               Ao clicar em enviar, você será redirecionado para o WhatsApp da Guanda Baterias.
             </p>
          </div>
       </div>
    </section>
  );
};

export default AiAssistant;