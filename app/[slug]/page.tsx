import React from 'react';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../constants';
import BlogPost from '../../components/BlogPost';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

// Gera os parâmetros estáticos para todas as slugs conhecidas
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Gera metadados dinâmicos para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Guanda Baterias',
    };
  }

  return {
    title: post.metaTitle || `${post.title} | Guanda Baterias Blog`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.image],
      url: `https://www.guandabaterias.com.br/${post.slug}`,
      type: 'article',
    },
  };
}

// Componente da página
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <BlogPost post={post} />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}