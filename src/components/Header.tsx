import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1A2238]">
            Sydney<span className="text-[#FF6B6B]">Events</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Home</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Events</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">About</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1A2238]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-3 py-4 px-4 absolute left-0 right-0">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search events..."
              className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
            <Search className="absolute left-7 text-gray-400" size={18} />
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Home</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Events</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">About</a>
            <a href="#" className="text-[#1A2238] hover:text-[#FF6B6B] transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;