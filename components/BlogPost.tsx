'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, MessageCircle } from 'lucide-react';
import { BLOG_POSTS, BUSINESS_INFO } from '../constants';

interface BlogPostProps {
  post: typeof BLOG_POSTS[0];
  onBack?: () => void;
  onNavigatePost?: (post: typeof BLOG_POSTS[0]) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack, onNavigatePost }) => {
  
  const handleBackClick = (e: React.MouseEvent) => {
    if (onBack) {
        e.preventDefault();
        onBack();
    }
  };

  const handleSidebarPostClick = (e: React.MouseEvent, relatedPost: typeof BLOG_POSTS[0]) => {
    if (onNavigatePost) {
        e.preventDefault();
        onNavigatePost(relatedPost);
    }
  };

  // Helper to parse bold markdown and render content structure
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, idx) => {
      const cleanLine = paragraph.trim();
      if (!cleanLine) return null;

      // Helper for inline bolding
      const parseBold = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
      };

      if (cleanLine.startsWith('**')) {
         return (
            <h3 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-l-4 border-yellow-400 pl-4">
              {parseBold(cleanLine.replace(/\*\*/g, ''))}
            </h3>
         );
      }
      
      if (cleanLine.startsWith('*')) {
         return (
            <li key={idx} className="list-none ml-4 pl-4 relative mb-2 text-slate-700">
               <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
               {parseBold(cleanLine.replace(/^\*\s*/, ''))}
            </li>
         );
      }

      return (
         <p key={idx} className="mb-4 leading-relaxed text-slate-700">
            {parseBold(cleanLine)}
         </p>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 animate-in fade-in duration-300">
       
       <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/#blog"
            onClick={handleBackClick}
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold mb-8 transition-colors"
          >
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <ArrowLeft size={16} />
             </div>
             Voltar para o Blog
          </Link>
       </div>

       {/* Article Hero */}
       <div className="w-full h-[400px] md:h-[500px] relative mb-12">
          <img 
            src={post.image} 
            alt={`Imagem principal do artigo: ${post.title}`} 
            className="w-full h-full object-cover"
            width="1200"
            height="500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
              <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded font-bold text-sm uppercase tracking-wide mb-4 inline-block">
                Dica Guanda
              </span>
              <h1 className="text-3xl md:text-5xl font-archivo font-black text-white leading-tight mb-4 drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-white/80">
                 <span className="flex items-center gap-2"><Calendar size={16}/> Atualizado recentemente</span>
              </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
             <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                {renderContent(post.content)}
             </div>

             {/* CTA Box */}
             <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                   <MessageCircle size={32} />
                </div>
                <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-1">Ficou com alguma dúvida?</h4>
                   <p className="text-slate-600">Nossos especialistas podem te ajudar agora mesmo.</p>
                </div>
                <a 
                  href={`${BUSINESS_INFO.whatsappLink}&text=Li o artigo sobre "${post.title}" e tenho uma dúvida.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all whitespace-nowrap md:ml-auto"
                >
                   Entrar em contato
                </a>
             </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-b border-slate-200 pb-2">Outros Artigos</h4>
                <div className="space-y-6">
                   {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 4).map(related => (
                      <Link 
                         key={related.id} 
                         href={`/blog/${related.id}`}
                         onClick={(e) => handleSidebarPostClick(e, related)}
                         className="group cursor-pointer flex gap-4 items-start"
                      >
                         <img 
                           src={related.image} 
                           alt={related.title} 
                           className="w-20 h-20 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-all"
                           width="80"
                           height="80"
                         />
                         <div>
                            <h5 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-blue-700 transition-colors mb-1 line-clamp-2">
                              {related.title}
                            </h5>
                            <span className="text-xs text-blue-500 font-medium group-hover:underline">Ler artigo</span>
                         </div>
                      </Link>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default BlogPost;