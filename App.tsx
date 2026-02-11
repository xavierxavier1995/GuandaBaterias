import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import ProductShowcase from './components/ProductShowcase';
import ResellerAndProducts from './components/ResellerAndProducts';
import AboutUs from './components/AboutUs';
import BlogSection from './components/BlogSection';
import AiAssistant from './components/AiAssistant';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingMobileMenu from './components/FloatingMobileMenu';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Guanda Baterias | Energia em Minutos - Bauru e Região";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Baterias automotivas, moto e estacionárias em Bauru. Entrega e instalação grátis em minutos. Revendedor oficial Heliar, Cral, Moura e mais.");
    }

    // Handle scroll to blog on initial load if hash is present
    const handleInitialScroll = () => {
        const hash = window.location.hash;
        if (hash === '#blog') {
            setTimeout(() => {
                const blogSection = document.getElementById('blog');
                if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 600);
        }
    };

    handleInitialScroll();

  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-yellow-400 selection:text-blue-900 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <MarqueeBanner />
        <ProductShowcase />
        <ResellerAndProducts />
        <AboutUs />
        <AiAssistant />
        <LocationMap />
        <BlogSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingMobileMenu />
    </div>
  );
};

export default App;