import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/di logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-2 sm:py-3'
          : 'bg-slate-900/90 backdrop-blur-sm py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Brand Text */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            {/* Logo Container - Fixed size for consistency */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                <img
                  src={logo}
                  alt="DI Logo"
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-15 md:h-15 lg:w-12 lg:h-12 object-contain"
                />
              </div>
            </div>

            {/* Text Container - Responsive and flexible */}
            <div className="flex flex-col leading-tight min-w-0 flex-1">
              {/* Main Company Name */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1">
                <span className="text-base sm:text-base md:text-lg lg:text-3xl xl:text-2xl font-bold text-rose-700 font-rounded whitespace-nowrap">
                  Distinguished Innovations
                </span>
               
              </div>
              
              {/* Arabic Text - Hidden on very small screens, shown on larger mobile */}
              <div className=" xs:block sm:block ">
                 <span className="text-xs sm:text-sm md:text-base mr-2 lg:text-lg font-medium text-white font-rounded whitespace-nowrap">
                  Trading Company 
                </span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white font-rounded" dir="rtl">
                  شركة الابتكارات المتميزة للتجارة
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 lg:px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group rounded-lg hover:bg-white/10"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-800 transition-all duration-300 group-hover:w-8 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-gradient-to-r from-rose-600 to-rose-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mx-4 text-center text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;