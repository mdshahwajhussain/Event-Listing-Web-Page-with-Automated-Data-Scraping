import React, { useState, useEffect } from 'react';
import { Event, EventCategory } from '../types/event';
import EventCard from './EventCard';
import { fetchEvents } from '../data/mockEvents';
import TicketModal from './TicketModal';
import FilterBar from './FilterBar';
import LoadingState from './LoadingState';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<EventCategory | 'all'>('all');

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const data = await fetchEvents();
        setEvents(data);
        setFilteredEvents(data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  const handleGetTickets = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Reset the selected event after a short delay to allow modal animation to complete
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleCategoryChange = (category: EventCategory | 'all') => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#4ECDC4] text-white px-4 py-2 rounded-md hover:bg-[#44b8b0]"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterBar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">No events found for the selected category.</p>
          <button 
            onClick={() => handleCategoryChange('all')}
            className="mt-4 bg-[#4ECDC4] text-white px-4 py-2 rounded-md hover:bg-[#44b8b0]"
          >
            View All Events
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onGetTickets={handleGetTickets} 
            />
          ))}
        </div>
      )}

      {selectedEvent && (
        <TicketModal 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          event={selectedEvent} 
        />
      )}
    </div>
  );
};

export default EventList;