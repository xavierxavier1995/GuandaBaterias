import React, { useState } from 'react';
import { BLOG_POSTS, BUSINESS_INFO } from '../constants';
import { X, ArrowRight, MessageCircle, Calendar, Share2, Eye } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  const openPost = (post: typeof BLOG_POSTS[0]) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="py-24 bg-white relative">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-64 bg-slate-50 border-b border-slate-100"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold uppercase text-xs tracking-wider mb-4">
             Dicas & Conteúdo
          </div>
          <h2 className="text-3xl md:text-5xl font-archivo font-bold text-slate-900 mb-4">
            Blog da Guanda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Informação técnica, cuidados com seu veículo e novidades do mundo automotivo.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 cursor-pointer"
              onClick={() => openPost(post)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white text-sm font-bold flex items-center gap-2">
                     <Eye size={16} /> Ler Artigo
                   </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-3">
                   <Calendar size={12} /> Dica de Especialista
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-sm group-hover:underline">Ler completo</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-5xl h-full md:h-[90vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-50 duration-300">
              
              {/* Modal Header Controls */}
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none">
                 <button 
                  onClick={closePost} 
                  className="pointer-events-auto bg-white/20 hover:bg-white text-white hover:text-slate-900 p-2 rounded-full backdrop-blur-md transition-all"
                >
                    <X size={24} />
                 </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                 {/* Article Hero */}
                 <div className="relative h-[40vh] md:h-[50vh]">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                       <h2 className="text-3xl md:text-5xl font-archivo font-black text-white mb-4 leading-tight">
                         {selectedPost.title}
                       </h2>
                       <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                          <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded font-bold">Guanda Blog</span>
                          <span className="flex items-center gap-1"><Calendar size={14}/> Atualizado recentemente</span>
                       </div>
                    </div>
                 </div>

                 {/* Article Body */}
                 <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-8 md:p-12">
                       <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                          {selectedPost.content.split('\n').map((paragraph, idx) => (
                             <p key={idx} className="mb-4 leading-relaxed">
                                {paragraph.trim().startsWith('*') ? (
                                  <li className="list-disc ml-4 font-medium text-slate-800">{paragraph.replace('*', '').trim()}</li>
                                ) : paragraph.trim().startsWith('**') ? (
                                  <h4 className="text-xl font-bold text-slate-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '').trim()}</h4>
                                ) : (
                                  paragraph
                                )}
                             </p>
                          ))}
                       </div>
                       
                       {/* In-Article CTA */}
                       <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                             <MessageCircle size={32} />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900 mb-1">Ficou com alguma dúvida?</h4>
                             <p className="text-slate-600">Nossos especialistas podem te ajudar agora mesmo pelo WhatsApp.</p>
                          </div>
                          <a 
                            href={`${BUSINESS_INFO.whatsappLink}&text=Li o artigo sobre "${selectedPost.title}" e tenho uma dúvida.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all whitespace-nowrap md:ml-auto"
                          >
                             Falar no Zap
                          </a>
                       </div>
                    </div>

                    {/* Sidebar / See Also */}
                    <div className="lg:w-1/3 bg-slate-50 p-8 border-l border-slate-200">
                       <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Veja Também</h4>
                       <div className="space-y-6">
                          {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 3).map(related => (
                             <div 
                                key={related.id} 
                                className="group cursor-pointer flex gap-4 items-start"
                                onClick={() => {
                                   // Smooth switch
                                   closePost();
                                   setTimeout(() => openPost(related), 50);
                                }}
                             >
                                <img 
                                  src={related.image} 
                                  alt={related.title} 
                                  className="w-20 h-20 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-all" 
                                />
                                <div>
                                   <h5 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-blue-700 transition-colors mb-1">
                                     {related.title}
                                   </h5>
                                   <span className="text-xs text-blue-500 font-medium">Ler artigo</span>
                                </div>
                             </div>
                          ))}
                       </div>

                       <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-center text-white">
                          <h4 className="font-bold text-xl mb-2 text-yellow-400">Guanda Baterias</h4>
                          <p className="text-sm text-slate-400 mb-4">A energia que você precisa, quando você precisa.</p>
                          <a 
                            href={BUSINESS_INFO.whatsappLink}
                            className="block w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                          >
                            Pedir Bateria
                          </a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;