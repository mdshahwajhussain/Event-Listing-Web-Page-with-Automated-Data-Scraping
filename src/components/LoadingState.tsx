import React from 'react';

const LoadingState: React.FC = () => {
  // Create an array of 6 items to simulate the loading cards
  const loadingItems = Array.from({ length: 6 });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse mb-6"></div>
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loadingItems.map((_, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-5">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-9 w-28 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;