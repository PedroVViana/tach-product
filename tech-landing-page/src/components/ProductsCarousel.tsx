import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const products = [
  { id: 1, name: 'Product 1', price: '$99.99', image: 'https://via.placeholder.com/150', rating: 4 },
  { id: 2, name: 'Product 2', price: '$149.99', image: 'https://via.placeholder.com/150', rating: 5 },
  { id: 3, name: 'Product 3', price: '$199.99', image: 'https://via.placeholder.com/150', rating: 3 },
  { id: 4, name: 'Product 4', price: '$299.99', image: 'https://via.placeholder.com/150', rating: 4 },
  { id: 5, name: 'Product 5', price: '$399.99', image: 'https://via.placeholder.com/150', rating: 5 },
  { id: 6, name: 'Product 6', price: '$499.99', image: 'https://via.placeholder.com/150', rating: 4 },
  { id: 7, name: 'Product 7', price: '$599.99', image: 'https://via.placeholder.com/150', rating: 5 },
  { id: 8, name: 'Product 8', price: '$699.99', image: 'https://via.placeholder.com/150', rating: 3 },
  { id: 9, name: 'Product 9', price: '$799.99', image: 'https://via.placeholder.com/150', rating: 4 },
  { id: 10, name: 'Product 10', price: '$899.99', image: 'https://via.placeholder.com/150', rating: 5 },
];

const ProductsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= products.length - 3 ? 0 : prevIndex + 3));
  };

  return (
    <section id="products" className="py-16 bg-primary px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Our Products</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                >
                  <div className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded"/>
                    <h3 className="text-xl text-white font-semibold mb-2">{product.name}</h3>
                    <p className="text-lg text-white mb-2">{product.price}</p>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <a href="#" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-400">Eu Quero</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white text-bold p-3 rounded-full hover:bg-yellow-500"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full hover:bg-yellow-500"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
