'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, MessageCircle, List, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { BLOG_POSTS, BUSINESS_INFO } from '../constants';

interface BlogPostProps {
  post: typeof BLOG_POSTS[0];
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Helper to generate IDs for headings
  const generateId = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  // Memoize headings for Table of Contents
  const tableOfContents = useMemo(() => {
    const headings: { id: string; text: string }[] = [];
    post.content.split('\n').forEach((line) => {
      const cleanLine = line.trim();
      // Identify headers: lines starting with **
      if (cleanLine.startsWith('**')) {
        const text = cleanLine.replace(/\*\*/g, '');
        headings.push({ id: generateId(text), text });
      }
    });
    return headings;
  }, [post.content]);

  // Scroll Spy Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    const headingElements = document.querySelectorAll('h3[id]');
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [post.content]);

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

      // Render Headings (H3)
      if (cleanLine.startsWith('**')) {
         const text = cleanLine.replace(/\*\*/g, '');
         const id = generateId(text);
         return (
            <h3 id={id} key={idx} className="scroll-mt-32 text-2xl md:text-3xl font-archivo font-bold text-slate-900 mt-14 mb-6 pl-4 border-l-4 border-yellow-400 tracking-tight leading-tight">
              {text}
            </h3>
         );
      }
      
      // Render List Items
      if (cleanLine.startsWith('*')) {
         return (
            <div key={idx} className="flex gap-4 mb-4 ml-2 group">
               <span className="shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-3 group-hover:scale-125 transition-transform"></span>
               <p className="text-lg text-slate-700 leading-relaxed font-normal">
                  {parseBold(cleanLine.replace(/^\*\s*/, ''))}
               </p>
            </div>
         );
      }

      // Render Paragraphs
      return (
         <p key={idx} className="mb-8 text-lg leading-8 text-slate-600 font-normal">
            {parseBold(cleanLine)}
         </p>
      );
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileTocOpen(false);
      }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12 animate-in fade-in duration-300">
       
       {/* Breadcrumb / Back Link */}
       <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:shadow-md"
          >
             <ArrowLeft size={16} />
             <span>Voltar para o Blog</span>
          </Link>
       </div>

       {/* Article Hero */}
       <div className="w-full h-[350px] md:h-[500px] relative mb-12 lg:mb-16 group">
          <img 
            src={post.image} 
            alt={`Imagem principal do artigo: ${post.title}`} 
            className="w-full h-full object-cover"
            fetchPriority="high"
            width="1280"
            height="720"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex-1">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-4 inline-block shadow-lg shadow-yellow-400/20">
                        Dica Guanda
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-archivo font-black text-white leading-tight mb-6 drop-shadow-xl max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-white/90 font-medium">
                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <Calendar size={16} className="text-yellow-400"/> 
                            Atualizado recentemente
                        </span>
                    </div>
                </div>
              </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
             <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
                {/* Mobile ToC (Visible on small screens) */}
                {tableOfContents.length > 0 && (
                  <div className="lg:hidden mb-10 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                      <button 
                        onClick={() => setMobileTocOpen(!mobileTocOpen)}
                        className="w-full flex items-center justify-between p-4 font-bold text-slate-800 bg-white"
                      >
                         <div className="flex items-center gap-2">
                            <List size={20} className="text-blue-600" />
                            <span>Neste Artigo</span>
                         </div>
                         {mobileTocOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${mobileTocOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <nav className="p-4 space-y-1">
                            {tableOfContents.map((heading) => (
                               <a 
                                  key={heading.id} 
                                  href={`#${heading.id}`}
                                  onClick={(e) => handleTocClick(e, heading.id)}
                                  className={`block py-3 px-3 rounded-lg text-sm font-medium transition-colors border-l-4 ${
                                    activeSection === heading.id 
                                    ? 'bg-blue-100 text-blue-800 border-blue-600' 
                                    : 'text-slate-600 hover:bg-slate-100 border-transparent'
                                  }`}
                               >
                                  {heading.text}
                               </a>
                            ))}
                         </nav>
                      </div>
                  </div>
                )}

                {/* Intro / Excerpt */}
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium mb-12 pb-10 border-b border-slate-100">
                    {post.excerpt}
                </p>

                {/* Dynamic Content */}
                <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                    {renderContent(post.content)}
                </div>

                {/* CTA Box */}
                <div className="mt-16 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left shadow-sm">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                        <MessageCircle size={36} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Ficou com alguma dúvida?</h4>
                        <p className="text-slate-600 text-lg">Nossos especialistas estão prontos para te ajudar no WhatsApp.</p>
                    </div>
                    <a 
                        href={`${BUSINESS_INFO.whatsappLink}&text=Li o artigo sobre "${post.title}" e tenho uma dúvida.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1 whitespace-nowrap"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             
             {/* Table of Contents - Sticky Desktop */}
             {tableOfContents.length > 0 && (
                <div className="hidden lg:block bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-24">
                   <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                      <List size={20} className="text-blue-600" />
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Neste Artigo</h4>
                   </div>
                   <nav className="space-y-1">
                      {tableOfContents.map((heading) => (
                         <a 
                            key={heading.id} 
                            href={`#${heading.id}`}
                            onClick={(e) => handleTocClick(e, heading.id)}
                            className={`block py-2 px-3 rounded-lg text-sm font-medium transition-all border-l-2 ${
                                activeSection === heading.id 
                                ? 'bg-blue-50 text-blue-700 border-blue-600 shadow-sm' 
                                : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50 border-transparent hover:border-blue-300'
                            }`}
                         >
                            {heading.text}
                         </a>
                      ))}
                   </nav>
                </div>
             )}

             {/* Related Posts */}
             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-b border-slate-200 pb-2">Leia Também</h4>
                <div className="space-y-6">
                   {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                      <Link 
                         key={related.id} 
                         href={`/blog/${related.id}`}
                         className="group flex gap-4 items-start"
                      >
                         <div className="shrink-0 overflow-hidden rounded-lg w-24 h-24">
                            <img 
                                src={related.image} 
                                alt={related.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                            />
                         </div>
                         <div className="flex flex-col justify-center h-24">
                            <h5 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                              {related.title}
                            </h5>
                            <span className="text-xs text-blue-500 font-bold uppercase tracking-wide group-hover:underline">Ler artigo</span>
                         </div>
                      </Link>
                   ))}
                </div>
             </div>

             {/* Back to Top Mobile */}
             <button 
                onClick={scrollToTop}
                className="lg:hidden w-full bg-white border border-slate-200 text-slate-600 font-bold py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
             >
                <ArrowUp size={16} /> Voltar ao topo
             </button>
          </div>
       </div>
    </div>
  );
};

export default BlogPost;