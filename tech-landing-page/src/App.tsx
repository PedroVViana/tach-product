import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductsCarousel from './components/ProductsCarousel';  // Importar o carrossel de produtos
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsCarousel /> {/* Adicionar o carrossel de produtos */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
