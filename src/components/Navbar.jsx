import React, { useState } from 'react';
import Icon from './common/Icon'; // Assuming you have an Icon component for SVG icons

const Navbar = ({ currentPage, navigateTo, pages }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={() => handleNavClick('home')} className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
              <Icon name="building" className="text-indigo-600 h-8 w-8" />
              <span>{import.meta.env.VITE_COMPANY_NAME}</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map(page => (
                <a
                  key={page.id}
                  href="#"
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === page.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <Icon name="x" className="block h-6 w-6" /> : <Icon name="menu" className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {pages.map(page => (
                <a
                  key={page.id}
                  href="#"
                  onClick={() => handleNavClick(page.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    currentPage === page.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {page.name}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;