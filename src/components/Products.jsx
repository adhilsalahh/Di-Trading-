import React from 'react';
import { Zap, Wrench, Shield, Cog, Wind, Package } from 'lucide-react';
import Mechanical from '../assets/Mechanical.jpg'
import SafetyandPowerTools from '../assets/Safety and Power Tools.jpg'


const Products = () => {
  const categories = [
    {
      icon: Zap,
      title: 'Electrical',
      subtitle: 'Electro-Mechanical Consumables',
      description: 'Comprehensive range of electrical components and systems for residential, commercial, and industrial applications.',
      items: [
        'Cables & Wiring',
        'Switches & Industrial Socketes',
        'Load Centers & Circuit Breakers',
        'Lighting Solutions',
        'Tools And Equipments',
        'Conduits & Accessories'
      ],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    },
    {
      icon: Cog,
      title: 'Mechanical',
      subtitle: 'Precision Components & Industrial Solutions',
      description: 'High-quality mechanical components and systems for industrial machinery and equipment.',
      items: [
        'Valves',
        'Steel Flanges & Fittings',
        'Equipment',
        'Systems and Devices',
        'Motors and Generators',
      ],
      image:Mechanical,
         colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    },
    {
      icon: Shield,
      title: 'Safety and Power Tools',
      subtitle: 'Reliable Tools & Safety Systems for Every Jobsite',
      description: 'Complete safety equipment and fire protection systems to ensure workplace security and compliance.',
      items: [
        'Fire Fighting & Fire Alarm Systems',
        'Safety Equipment',
        'Power Tools',
        'Hand Tools',
        'Welding Equipment'
      ],
      image:SafetyandPowerTools ,
       colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    },
    {
      icon: Package,
      title: 'Industrial Supplies',
      subtitle: 'Powering Productivity with Advanced Industrial Solutions',
      description: 'High-performance industrial components and systems designed to enhance efficiency, automation, and heavy-duty operations.',
      items: [
        'Control Panels',
        'Motors & Drives',
        'Automation Components',
        'Lifting Equipment'
      ],
      image: 'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    },
    {
      icon: Wind,
      title: 'HVAC Systems',
      subtitle: 'Climate Control Solutions',
      description: 'Complete heating, ventilation, and air conditioning systems for optimal indoor climate control.',
      items: [
        'Air Conditioning',
        'Ventilation Systems',
        'Ductwork',
        'Controls Systems'
      ],
      image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600',
      colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    },
    {
      icon: Wrench,
      title: 'General Supplies',
      subtitle: 'Everyday Essentials for Business Operations',
      description: 'Essential tools, supplies, and consumables for smooth operations across offices, workshops, and industrial environments.',
      items: [
        'Specialized Supplies',
        'IT Goods and Services',
        'Office & Stationery Supplies',
        'Consumable Items'
      ],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        colorClass: 'text-rose-700',
      bgClass: 'bg-rose-700',
      dotClass: 'bg-rose-700'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rose-700 mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality products we trade and supply to meet all your industrial and commercial requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full robject-cove group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 "></div>
                 
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${category.colorClass}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${category.colorClass}`}>
                    {category.subtitle}
                  </p>
                  <p className="text-black mb-4 leading-relaxed text-sm">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6 text-black ">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${category.dotClass}`}></div>
                        <span className={`text-sm ${category}`}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full ${category.bgClass} hover:opacity-90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                    View Products
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      
       
      </div>
    </section>
  );
};

export default Products;
