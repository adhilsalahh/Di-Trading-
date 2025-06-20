import React, { useState, useEffect } from 'react';
import { ArrowRight, Package, ShieldCheck, Award, Download } from 'lucide-react';

const Hero = () => {
  const heroImages = [
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * heroImages.length));
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleProfileDownload = () => {
    // This will trigger the PDF download - you can upload the PDF to the public folder
    const link = document.createElement('a');
    link.href = '/Distinguished-Innovations-Trading-Company.pdf'; // You'll need to upload the PDF here
    link.download = 'Distinguished-Innovations-Trading-Company.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 transition-all duration-1000"
          style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-rose-50/95"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-rose-700/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-rose-700/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-gray-900">
            <div className="flex items-center space-x-2 mb-6">
              <Package className="w-8 h-8 text-rose-700" />
              <span className="text-rose-700 font-semibold text-lg">Trading & Supply Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-rose-700">Distinguished Innovations</span>
              <span className="block text-gray-900 mt-2">
                Trading Company
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted partner for comprehensive electrical equipment, mechanical components, 
              safety tools, and industrial supplies. With years of expertise in trading and 
              supply chain management, we serve businesses across Saudi Arabia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-rose-700 hover:bg-rose-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-rose-700/25 transform hover:scale-105">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={handleProfileDownload}
                className="border-2 border-rose-700 hover:bg-rose-700 text-rose-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Profile Download</span>
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Quality Products</p>
                  <p className="text-sm text-gray-600">Certified Supplies</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">15+ Years</p>
                  <p className="text-sm text-gray-600">Trading Experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Package className="w-8 h-8 text-rose-700" />
                <div>
                  <p className="font-semibold text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-gray-600">Reliable Supply</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xl">
                <img 
                  src={heroImages[(currentImageIndex + 1) % heroImages.length]}
                  alt="Electrical Products - Wires, Cables, Lights & Tools"
                  className="w-full h-64 object-cover rounded-lg mb-6 transition-all duration-1000"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-rose-700 mb-2">Wide Range of Products</h3>
                  <p className="text-gray-600">Electrical, mechanical, safety & industrial supplies</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-700 to-rose-800 rounded-2xl blur-xl opacity-10"></div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-rose-700 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;