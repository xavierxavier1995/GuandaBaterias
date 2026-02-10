import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ResellerAndProducts from './components/ResellerAndProducts';
import AboutUs from './components/AboutUs';
import BlogSection from './components/BlogSection';
import AiAssistant from './components/AiAssistant';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-yellow-400 selection:text-blue-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <ResellerAndProducts />
        <AboutUs />
        <BlogSection />
        <AiAssistant />
        <LocationMap />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;