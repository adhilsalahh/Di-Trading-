import React, { useState, useEffect } from 'react';
import { ArrowRight, Package, ShieldCheck, Award, Download, Play, Pause } from 'lucide-react';
import gen from '../assets/Gena.png'

import indust from '../assets/Industrial Supplies.png'
const Hero = () => {
  // Professional industrial/electrical equipment images for the carousel
  const carouselImages = [
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', // Electrical control panel
    'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', 
    gen,
    indust,

  ];

  // Background images for the full hero section
  const backgroundImages = [
    'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    gen,
    indust,

  ];

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    // Initialize with random starting images
    setCurrentCarouselIndex(Math.floor(Math.random() * carouselImages.length));
    setCurrentBackgroundIndex(Math.floor(Math.random() * backgroundImages.length));

    const carouselInterval = setInterval(() => {
      if (!isCarouselPaused) {
        setCurrentCarouselIndex((prevIndex) =>
          (prevIndex + 1) % carouselImages.length
        );
      }
    }, 4000); // Change carousel every 4 seconds

    const backgroundInterval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000); // Change background every 8 seconds

    return () => {
      clearInterval(carouselInterval);
      clearInterval(backgroundInterval);
    };
  }, [isCarouselPaused]);

  const handleDownloadProfile = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Distinguished Innovations Trading Company _11zon.pdf';
      link.download = 'Distinguished-Innovations-Company-Profile.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/Distinguished Innovations Trading Company _11zon.pdf', '_blank');
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextCarouselImage = () => {
    setCurrentCarouselIndex((prevIndex) =>
      (prevIndex + 1) % carouselImages.length
    );
  };

  const prevCarouselImage = () => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out"
          style={{ backgroundImage: `url('${backgroundImages[currentBackgroundIndex]}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Text Section - Now at the top */}
        <div className="text-center text-white mb-12 lg:mb-16">
          {/* <div className="flex items-center justify-center space-x-2 mb-6">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-rose-700" />
            <span className="text-rose-700 font-semibold text-sm sm:text-lg">Trading & Supply Excellence</span>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight font-rounded">
            <span className="text-rose-700 block">Innovative Solutions,</span>
            <span className="text-white block mt-2">Trusted Trade</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Your trusted expertise partner for comprehensive electrical and mechanical products,
            components, safety equipment, power tools and industrial supplies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToProducts}
              className="group bg-rose-600 hover:bg-rose-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-rose-600/25 transform hover:scale-105"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handleDownloadProfile}
              className="border-2 border-rose-700 hover:bg-rose-700 text-white hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download Profile</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-white text-sm sm:text-base">Quality Products</p>
                <p className="text-xs sm:text-sm text-gray-300">Certified Supplies</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-white text-sm sm:text-base">15+ Years</p>
                <p className="text-xs sm:text-sm text-gray-300">Trading Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Package className="w-6 h-6 sm:w-8 sm:h-8 text-rose-700 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-white text-sm sm:text-base">Fast Delivery</p>
                <p className="text-xs sm:text-sm text-gray-300">Reliable Supply</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel Section - Now below text */}
       
      </div>

      {/* Background Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentBackgroundIndex
                ? 'bg-transparent scale-125'
                : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;