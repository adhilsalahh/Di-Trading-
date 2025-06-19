import React from 'react';
import { Zap, Wrench, Shield, Cog, Wind, Package } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Zap,
      title: 'Electrical ',
      subtitle: 'Electro-Mechanical Consumables',
      description: 'Comprehensive range of electrical components and systems for residential, commercial, and industrial applications.',
      items: [
        'Cables & Wiring ',
        'Switches & industrial  socketes',
        'Load Centers & Circuit Breakers',
        'Lighting Solutions',
        'Tools And Equipments',
        'Conduits & Accessories'
      ],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      color: 'rose-700'
    },
    {
      icon: Cog,
      title: 'Mechanical ',
      subtitle: 'Precision Components & Industrial Solutions',
      description: 'High-quality mechanical components and systems for industrial machinery and equipment.',
      items: [
        'Valves',
        'Steel Flanges & Fittings',
        'Equipment',
        'Systems and Devices',
        'Motors and Generators',
        
      ],
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      color: 'blue-600'
    },
    {
      icon: Shield,
      title: 'Safety and Power Tools',
      subtitle: 'Reliable Tools & Safety Systems for Every Jobsite',
      description: 'Complete safety equipment and fire protection systems to ensure workplace security and compliance.',
      items: [
        'Fire Fighting &  Fire Alarm Systems',
       
        'Safety Equipmentt',
        'Power Tools',
        'Hand Tools',
        'Welding Equipment'
      ],
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      color: 'green-600'
    },
   
    {icon: Package,
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
  color: 'blue-700'
},


    
    
    {
      icon: Wind,
      title: 'HVAC Systems',
      subtitle: 'Climate Control Solutions',
      description: 'Complete heating, ventilation, and air conditioning systems for optimal indoor climate control.',
      items: [
        'Air Conditioning ',
        'Ventilation Systems',
        'Ductwork ',
        'Controls Systems',
    
      ],
      image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600',
      color: 'cyan-600'
    },

    {
      icon: Wrench,
      title: 'General Supplies',
      subtitle: 'Everyday Essentials for Business Operations',
      description: 'Essential tools, supplies, and consumables for smooth operations across offices, workshops, and industrial environments.'
,
      items: [
        'Specialized Supplies',
        'IT Goods and Services',
        'Office & Stationery Supplies',
        'Consumable Items',
      ],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      color: 'orange-600'
    },
   
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
            Comprehensive range of high-quality products we trade and supply to meet all your industrial and commercial requirements
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 right-4 p-3 bg-${category.color} rounded-lg shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-rose-700 mb-2">
                    {category.title}
                  </h3>
                  <p className={`text-sm font-medium text-${category.color} mb-3`}>
                    {category.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  
                  {/* Product Items */}
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View More Button */}
                  <button className={`w-full bg-${category.color} hover:bg-${category.color}/90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                    View Products
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-rose-700 to-rose-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto text-lg">
              Our expert team can help you find the perfect products and arrange bulk supply solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Request Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-rose-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;