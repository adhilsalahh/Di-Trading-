import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import logo from '../assets/di_logo-1-removebg-preview.png';

const Footer = () => {
  const productCategories = [
    'Electrical',
    'Mechanical',
    'Safety and Power Tools',
    'Industrial Supplies',
    'HVAC Systems',
    'General Supplies'
  ];

  const quickLinks = [
    'About Us',
    'Our Products',
    'Trading Services',
    'Contact Us',
    'Careers',
    'Support'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
  {/* Company Info - spans 2 columns */}
  <div className="md:col-span-2  ">
    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 ">
      <div className="group w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
        <img
          src={logo}
          alt="DI Logo"
          className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base sm:text-lg lg:text-lg font-bold text-rose-700 font-rounded">
          Distinguished Innovations
        </span>
        <div className="flex flex-wrap gap-x-1 font-rounded text-xs sm:text-sm">
          <span className="text-white">Trading Company</span>
          <span className="text-rose-700" dir="rtl">
            شركة الابتكارات المتميزة للتجارة
          </span>
        </div>
      </div>
    </div>
    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
      Your trusted partner for comprehensive trading and supply of electrical equipment,
      mechanical components, safety tools, and industrial supplies.
    </p>
    <div className="flex space-x-4">
      {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
        <a
          key={idx}
          href="#"
          className="w-9 h-9 bg-rose-700/20 hover:bg-rose-700 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  </div>

  {/* Product Categories */}
  <div>
    <h3 className="text-xl font-bold mb-6 text-rose-700">Product Categories</h3>
    <ul className="space-y-3">
      {productCategories.map((category, index) => (
        <li key={index}>
          <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center space-x-2 group">
            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span>{category}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="text-xl font-bold mb-6 text-rose-700">Quick Links</h3>
    <ul className="space-y-3">
      {quickLinks.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center space-x-2 group">
            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span>{link}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Contact Info */}
  <div>
    <h3 className="text-xl font-bold mb-6 text-rose-700">Contact Information</h3>
    <div className="space-y-4 text-sm">
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-rose-700 mt-1 flex-shrink-0" />
        <p className="text-gray-300">Jeddah 45155<br />PO Box: 52145</p>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-rose-700 flex-shrink-0" />
        <a href="tel:+966545155050" className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
          +966 54515 5050
        </a>
      </div>
      <div className="flex items-start space-x-3">
        <Mail className="w-5 h-5 text-rose-700 flex-shrink-0 mt-1" />
        <div className="flex flex-col">
          <a href="mailto:n.rashid@di-trading.com" className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
            n.rashid@di-trading.com
          </a>
          <a href="mailto:info@di-trading.com" className="text-gray-300 hover:text-rose-400 transition-colors duration-300">
            info@di-trading.com
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Clock className="w-5 h-5 text-rose-700 flex-shrink-0" />
        <p className="text-gray-300">Sun - Thu: 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Distinguished Innovations Trading Company. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
