import React from 'react';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../../constants';
import BlogPost from '../../../components/BlogPost';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.id.toString() === params.id);

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