import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, Eye } from 'lucide-react';

interface BlogSectionProps {
  onPostClick?: (post: typeof BLOG_POSTS[0]) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onPostClick }) => {
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
            <a 
              key={post.id} 
              href={`/blog/${post.id}`}
              onClick={(e) => {
                if (onPostClick) {
                  e.preventDefault();
                  onPostClick(post);
                }
              }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 cursor-pointer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;