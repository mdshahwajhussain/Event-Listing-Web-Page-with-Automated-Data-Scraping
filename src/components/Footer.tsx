import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2238] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sydney<span className="text-[#FF6B6B]">Events</span></h3>
            <p className="text-gray-300 mb-4">
              Your go-to source for discovering and booking the best events happening in Sydney.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Event Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Music</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Arts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Food & Drink</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Sports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Theatre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Get the latest events delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#4ECDC4] w-full"
              />
              <button
                type="submit"
                className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SydneyEvents. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;