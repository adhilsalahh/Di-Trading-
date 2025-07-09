import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const Brands = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      logo: brand3,
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
      name: 'DeWalt',
      logo: brand7,
      category: 'Power Tools',
    },
    {
      name: 'Legrand',
      logo: brand8,
      category: 'Electrical Infrastructure',
    },
    {
      name: 'Philips',
      logo: brand9,
      category: 'Lighting Solutions',
    },
    {
      name: 'Fluke',
      logo: brand10,
      category: 'Testing Equipment',
    },
    {
      name: 'JCC Lighting',
      logo: brand11,
      category: 'LED Solutions',
    },
    {
      name: 'Mitsubishi',
      logo: brand12,
      category: 'Automation Systems',
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  React.useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-700 mb-4">
             Brands
          </h2>
         
        </div>

        {/* Brand Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              canScrollLeft
                ? 'bg-white hover:bg-rose-50 text-rose-700 hover:text-rose-800 cursor-pointer hover:scale-110'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll brands left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              canScrollRight
                ? 'bg-white hover:bg-rose-50 text-rose-700 hover:text-rose-800 cursor-pointer hover:scale-110'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll brands right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Brands Container */}
          <div className="mx-8 md:mx-16 relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={checkScrollButtons}
            >
              {brands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="w-14 h-10 sm:w-16 sm:h-10 md:w-20 md:h-10 lg:w-24 lg:h-12 xl:w-44 xl:h-32 bg-white rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center p-0 md:p-1 border border-gray-200 hover:border-rose-200 group-hover:scale-105 group-hover:shadow-lg hover:shadow-rose-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-110 px-1"
                    />
                  </div>
                  {/* Brand Name Tooltip */}
                
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${canScrollLeft ? 'bg-gray-300' : 'bg-rose-700'}`}></div>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${canScrollLeft && canScrollRight ? 'bg-rose-700' : 'bg-gray-300'}`}></div>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${canScrollRight ? 'bg-gray-300' : 'bg-rose-700'}`}></div>
          </div>
        </div>

        {/* Call to Action */}
      
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Brands;