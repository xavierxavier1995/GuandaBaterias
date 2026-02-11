import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeBanner from '../components/MarqueeBanner';
import ProductShowcase from '../components/ProductShowcase';
import ResellerAndProducts from '../components/ResellerAndProducts';
import AboutUs from '../components/AboutUs';
import BlogSection from '../components/BlogSection';
import AiAssistant from '../components/AiAssistant';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FloatingMobileMenu from '../components/FloatingMobileMenu';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <ProductShowcase />
      <ResellerAndProducts />
      <AboutUs />
      <AiAssistant />
      <LocationMap />
      <BlogSection />
      <Footer />
      <FloatingWhatsApp />
      <FloatingMobileMenu />
    </main>
  );
}