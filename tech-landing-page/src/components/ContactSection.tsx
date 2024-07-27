import React from 'react';
import ctaImage from '../assets/images/cta.jpg'; // Ajuste o caminho conforme necessário

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-secondary py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-6">Contact</h2>
        <p className="mb-8 text-white text-lg">
          Want to know more about our products? Contact us or explore our products section.
        </p>
        <div 
          className="relative bg-cover bg-center text-white py-16 px-6 md:px-12 lg:px-24 mb-8 rounded-lg parallax" 
          style={{ backgroundImage: `url(${ctaImage})` }} // Use a imagem importada
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay para melhor contraste */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Explore Our Products</h3>
            <a 
              href="#products" 
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              See Our Products
            </a>
          </div>
        </div>
        <div className="bg-primary p-8 rounded-lg shadow-md">
          <h3 className="text-2xl text-white font-bold mb-4">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-left text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                placeholder="Your name" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                placeholder="Your email" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" 
                id="message" 
                rows={4} 
                placeholder="Your Message" 
              />
            </div>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Contact us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
