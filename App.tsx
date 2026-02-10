import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ResellerAndProducts from './components/ResellerAndProducts';
import AboutUs from './components/AboutUs';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import AiAssistant from './components/AiAssistant';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingMobileMenu from './components/FloatingMobileMenu';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('home');
  const [activePost, setActivePost] = useState<typeof BLOG_POSTS[0] | null>(null);

  useEffect(() => {
    if (currentView === 'home') {
      document.title = "Guanda Baterias | Energia em Minutos - Bauru e Região";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', "Baterias automotivas, moto e estacionárias em Bauru. Entrega e instalação grátis em minutos. Revendedor oficial Heliar, Cral, Moura e mais.");
      }
    }

    // Check if user navigated to /blog or /blog/ and scroll there automatically
    // This handles the user request for /blog/ link while maintaining SPA context if not using real router
    const path = window.location.pathname;
    if (path === '/blog' || path === '/blog/') {
        setTimeout(() => {
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); // Small delay to ensure render
    }

  }, [currentView]);

  const handlePostClick = (post: typeof BLOG_POSTS[0]) => {
    setActivePost(post);
    setCurrentView('article');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActivePost(null);
    setTimeout(() => {
       const blogSection = document.getElementById('blog');
       if (blogSection) blogSection.scrollIntoView();
    }, 100);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-yellow-400 selection:text-blue-900 font-sans">
      <Navbar onNavigate={handleBackToHome} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <ProductShowcase />
            <ResellerAndProducts />
            <AboutUs />
            <AiAssistant />
            <LocationMap />
            <BlogSection onPostClick={handlePostClick} />
          </>
        ) : (
          activePost && (
            <BlogPost 
              post={activePost} 
              onBack={handleBackToHome} 
              onNavigatePost={handlePostClick}
            />
          )
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingMobileMenu />
    </div>
  );
};

export default App;