import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-3' : 'bg-slate-900/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl blur opacity-30 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              {/* English Name */}
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl lg:text-3xl font-bold text-rose-700">
                  Distinguished Innovations
                </span>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-sm lg:text-lg font-medium text-white">Trading Company</span>
                 <div className="hidden md:block">
                <span className="text-lg text-white font-semibold" dir="rtl">
                  شركة الابتكارات المتميزة للتجارة
                </span>
              </div>
              </div>
              {/* Arabic Name - Hidden on mobile, shown on larger screens */}
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group rounded-lg hover:bg-white/10"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-rose-800 transition-all duration-300 group-hover:w-8 rounded-full"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="ml-4 bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-rose-700/25 transform hover:scale-105">
              Get Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          {/* Mobile Arabic Name - Centered */}
          <div className="text-center mb-4 pb-4 border-b border-gray-700">
            <span className="text-rose-400 font-medium text-sm" dir="rtl">
              شركة الابتكارات المتميزة للتجارة
            </span>
          </div>
          
          <nav className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="mt-2 bg-gradient-to-r from-rose-600 to-rose-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mx-4">
              Get Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;