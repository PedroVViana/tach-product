import React from 'react';
import heroImage from '../assets/images/hero.jpg';  // Adicione a foto de fundo

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center parallax" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10">
        <h2 className="text-4xl font-bold mb-4">Discover the Latest in Tech</h2>
        <p className="text-lg mb-6">Explore our cutting-edge products and stay ahead of the curve.</p>
        <a href="#products" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-400">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
