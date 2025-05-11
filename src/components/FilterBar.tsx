import React from 'react';
import { EventCategory } from '../types/event';

interface FilterBarProps {
  activeCategory: EventCategory | 'all';
  onCategoryChange: (category: EventCategory | 'all') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: (EventCategory | 'all')[] = [
    'all', 'music', 'arts', 'sports', 'food', 'festivals', 'comedy', 'theatre', 'other'
  ];

  return (
    <div className="mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#1A2238] px-4 sm:px-0">
        Upcoming Events in Sydney
      </h2>
      <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap gap-2 mb-6 px-4 sm:px-0 pb-2 sm:pb-0 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-[#1A2238] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;