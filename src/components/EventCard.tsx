import React from 'react';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';
import { Event } from '../types/event';
import { formatDate } from '../utils/dateFormatter';

interface EventCardProps {
  event: Event;
  onGetTickets: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onGetTickets }) => {
  const formattedDate = formatDate(event.date);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-white px-3 py-1 m-3 rounded-full text-sm font-medium text-gray-700">
          {event.category}
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
          <CalendarDays size={16} className="text-[#4ECDC4] flex-shrink-0" />
          <span className="truncate">{formattedDate} • {event.time}</span>
        </div>
        
        <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#1A2238] line-clamp-2 min-h-[2.5rem]">
          {event.title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3">
          <MapPin size={16} className="text-[#4ECDC4] flex-shrink-0" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">
          {event.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <span className="font-semibold text-[#1A2238] text-lg">{event.price}</span>
          <button 
            onClick={() => onGetTickets(event)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            <Ticket size={18} />
            <span>Get Tickets</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;