import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/di_logo-1-removebg-preview.png';

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
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-slate-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Brand Text */}
          <div className="flex items-start space-x-2 sm:space-x-3">
            {/* Logo */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14  bg-white rounded-xl flex items-center justify-center shadow-md">
              <img
                src={logo}
                alt="DI Logo"
                className="w-6 h-6 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-rose-700 font-rounded whitespace-nowrap">
                Distinguished Innovations
              </span>
              <div className="flex flex-wrap gap-x-1 text-sm sm:text-sm md:text-base lg:text-lg font-medium font-rounded">
                <span className="text-white">Trading Company</span>
                <span className="text-rose-700" dir="rtl">
                  شركة الابتكارات المتميزة للتجارة
                </span>
              </div>
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
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
