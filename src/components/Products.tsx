import React from 'react';
import { Zap, Wrench, Lightbulb, FileText, Shield, Wind } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Zap,
      title: 'Electrical & Plumbing Engineering',
      subtitle: 'Electro Mechanical Consumables',
      description: 'Complete range of electrical components, wiring accessories, and plumbing solutions for industrial and commercial applications.',
      items: ['Cables & Wires', 'Switches & Sockets', 'MCBs & RCCBs', 'Pipes & Fittings'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: Lightbulb,
      title: 'Lightning Products',
      subtitle: 'Illumination Solutions',
      description: 'Energy-efficient lighting solutions including LED fixtures, street lights, and specialized industrial lighting systems.',
      items: ['LED Lights', 'Street Lighting', 'Industrial Fixtures', 'Emergency Lights'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    {
      icon: FileText,
      title: 'Office Stationery',
      subtitle: 'Business Essentials',
      description: 'Complete office supplies and stationery items to keep your business operations running smoothly.',
      items: ['Paper Products', 'Writing Instruments', 'Filing Solutions', 'Office Accessories'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: Shield,
      title: 'Safety & Power Tools',
      subtitle: 'Protection & Equipment',
      description: 'Professional safety equipment and high-quality power tools for construction and industrial applications.',
      items: ['Safety Gear', 'Power Drills', 'Hand Tools', 'Measuring Instruments'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: Wind,
      title: 'HVAC Solutions',
      subtitle: 'Climate Control Systems',
      description: 'Heating, ventilation, and air conditioning systems and components for optimal climate control.',
      items: ['Air Conditioners', 'Ventilation Fans', 'Ductwork', 'Control Systems'],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    },
    {
      icon: Wrench,
      title: 'Industrial Equipment',
      subtitle: 'Heavy-Duty Solutions',
      description: 'Specialized industrial equipment and machinery components for manufacturing and production facilities.',
      items: ['Motors & Drives', 'Control Panels', 'Automation Components', 'Industrial Supplies'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of products we trade and supply to meet all your project requirements
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg ${category.hoverColor} 
                  transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                  group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{category.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  {/* Product Items */}
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View More Button */}
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm 
                    group-hover:underline transition-colors duration-300">
                    View All Products →
                  </button>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent 
                  group-hover:border-gradient-to-br group-hover:${category.color.replace('to-', 'via-')} 
                  transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Bulk Supply Solutions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our expert trading team can help you find the perfect products and arrange bulk supply for your specific requirements.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold 
              transition-all duration-300 hover:shadow-lg">
              Get Trading Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;