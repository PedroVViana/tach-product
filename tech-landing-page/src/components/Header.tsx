
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white p-6 md:p-4 fixed w-full z-50" >
      <nav className="container mx-auto flex items-center justify-between relative">
        <div className="text-2xl font-bold">Tech Products</div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 fixed inset-x-0 top-0 bg-gray-800 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-16' : '-translate-y-full'} md:translate-y-0 md:relative md:bg-transparent md:flex md:space-x-4 md:top-auto md:bottom-auto`}>
          <li className="md:mr-1 py-3 md:px-0 px-6"><a href="#features" className="text-custom-lg font-bold hover:text-gray-400">Features</a></li>
          <li className="md:mr-4 py-3 md:px-1 px-6"><a href="#products" className="text-custom-lg font-bold hover:text-gray-400">Products</a></li>
          <li className="md:mr-4 py-3 md:px-1 px-6"><a href="#contact" className="text-custom-lg font-bold hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

