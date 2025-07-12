import React from 'react';
import aboutimage from '../assets/About (2).png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rose-700 mb-6">
            About 
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  
                 Established in 2013 with a vision to provide comprehensive trading and supply solutions, 
                  <strong className="text-rose-700"> Distinguished Innovations Trading Company</strong>  has grown to become a trusted name in the trade. We specialize in trading and supplying high-quality electrical and mechanical products, components, fire and safety Equpment, power tools and industrial supplies to businesses across various sectors.

                </p>
                
             
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our commitment to excellence, combined with deep industry expertise and customer-centric 
                  approach, has enabled us to build lasting relationships with clients ranging from small 
                  businesses to large industrial enterprises through our reliable trading and supply services.

                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">

                    We ensure that your projects are powered with our comprehensive support,
                    competitive pricing and delivery schedule.

                </p>
              </div>
              
              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-rose-700">
                  <h3 className="text-xl font-bold text-rose-700 mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                   To provide innovative trading and supply solutions that empower businesses to
                    achieve their goals with efficiency and reliability
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-rose-700">
                  <h3 className="text-xl font-bold text-rose-700 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                   To be the leading trading company for Electrical and Mechanical products,
                    General and Industrial supplies, known for quality products, innovation, 
                    and exceptional supply chain.
.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image and Features */}
            <div className="space-y-8">
              {/* Company Image */}
              <div className="relative">
                <img 
                  src={aboutimage}
                  alt="Industrial Equipment Trading"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-rose-700 mb-4">Why Choose Distinguished Innovations?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rose-700 rounded-full"></div>
                    <span className="text-gray-700">Extensive product range from trusted suppliers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Competitive pricing and delivery schedule </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Expert product knowledge and consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;