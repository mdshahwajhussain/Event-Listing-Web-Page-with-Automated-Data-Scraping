import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#1A2238] min-h-[500px] md:min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/627823/pexels-photo-627823.jpeg)', 
          opacity: 0.4 
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover Sydney's <span className="text-[#FF6B6B]">Best Events</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Find and book the most exciting events happening in Sydney. From music festivals to art exhibitions, we've got it all.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-3 rounded-md transition-colors text-lg font-medium">
              Explore Events
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A2238] px-6 py-3 rounded-md transition-colors text-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;