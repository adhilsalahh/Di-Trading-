import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: MapPin, value: '10+', label: 'Cities Served', color: 'text-orange-600', bgColor: 'bg-orange-50' }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl ${stat.bgColor} ${stat.color} mb-4 
                  group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;