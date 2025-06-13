import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldCheck, Award } from 'lucide-react';

const Hero = () => {
  const heroImages = [
    'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set random initial image
    setCurrentImageIndex(Math.floor(Math.random() * heroImages.length));
    
    // Change image every 10 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 transition-all duration-1000"
          style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-lg">Powering Your Projects</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                Electrical Solutions
              </span>
              for Every Need
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              DI Trading Company is your trusted partner for comprehensive electrical equipment, 
              plumbing solutions, and industrial supplies. With years of expertise and commitment 
              to quality, we power businesses across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="border-2 border-cyan-400/50 hover:border-cyan-400 text-white hover:bg-cyan-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Get Quote
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div>
                  <p className="font-semibold">Quality Assured</p>
                  <p className="text-sm text-gray-400">Certified Products</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">15+ Years</p>
                  <p className="text-sm text-gray-400">Industry Experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-gray-400">Expert Assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <img 
                  src={heroImages[(currentImageIndex + 1) % heroImages.length]}
                  alt="Electrical Equipment"
                  className="w-full h-64 object-cover rounded-lg mb-6 transition-all duration-1000"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Professional Grade Equipment</h3>
                  <p className="text-gray-300">From basic electrical components to advanced industrial solutions</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20"></div>
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
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;