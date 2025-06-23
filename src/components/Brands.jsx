import React from 'react';
import brand1 from '../assets/brands_-_Copy-05_1.webp';
import brand2 from '../assets/brands_-_Copy-07_1.webp';
import brand3 from '../assets/brands_-_Copy-11_1.webp';
import brand4 from '../assets/brands_-_Copy-12_1.webp';
import brand5 from '../assets/brands_-_Copy-14_2.webp'
import brand6 from '../assets/brands_-_Copy-28_1.webp'
import brand7 from '../assets/dewalt.webp'
import brand8 from '../assets/legrand_new-08.webp'
import brand9 from '../assets/philips.webp'
import brand11 from '../assets/JCC-header-Logo.webp'
import brand10 from '../assets/download.jpg'
import brand12 from '../assets/brands_-_Copy-04_1 (2).webp'

const 
Brands = () => {
  const brands = [
    {
      name: 'Schneider Electric',
      logo: brand1,
      category: 'Electrical Solutions',
    },
    {
      name: 'ABB',
      logo: brand2,
      category: 'Industrial Automation',
    },
    {
      name: 'Siemens',
      logo:brand3,
      category: 'Engineering Excellence',
    },
    {
      name: 'General Electric',
      logo: brand4,
      category: 'Power Solutions',
    },
    {
      name: 'Honeywell',
      logo: brand5,
      category: 'Building Technologies',
    },
    {
      name: 'Bosch',
      logo: brand6,
      category: 'Industrial Tools',
    },
    {
      name: 'Mitsubishi Electric',
      logo:brand7,
      category: 'Automation Systems',
    },
    {
      name: 'Rockwell Automation',
      logo:brand8,
      category: 'Industrial Automation',
    },
    {
      name: 'Rockwell Automation',
      logo:brand9,
      category: 'Industrial Automation',
    },{
      name: 'Rockwell Automation',
      logo:brand10,
      category: 'Industrial Automation',
    },{
      name: 'Rockwell Automation',
      logo:brand11,
      category: 'Industrial Automation',
    },{
      name: 'Rockwell Automation',
      logo:brand12,
      category: 'Industrial Automation',
    },
  ];

  // Duplicate list for infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
     <div className="relative overflow-hidden">
  <div className="flex w-[200%] animate-scroll-brands">
    {[...brands, ...brands].map((brand, index) => (
      <div
        key={`${brand.name}-${index}`}
        className="flex-shrink-0 mx-4 md:mx-6 group cursor-pointer"
      >
        <div className="w-20 h-15 md:w-36 md:h-24 bg-white rounded-xl transition duration-500 flex items-center justify-center p-4 border border-gray-200 hover:border-rose-200 group-hover:scale-110">
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-w-full max-h-12 md:max-h-14 object-contain transition duration-500"
          />
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Brands;
