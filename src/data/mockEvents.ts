import { Event } from '../types/event';

// Mock data to simulate scraped events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Sydney Opera House - Symphony Under the Stars',
    description: 'Experience the magic of classical music performed by the Sydney Symphony Orchestra under the stars at the iconic Sydney Opera House.',
    date: '2025-02-15',
    time: '7:30 PM',
    location: 'Sydney Opera House, Bennelong Point',
    imageUrl: 'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg',
    ticketUrl: 'https://example.com/tickets/symphony-stars',
    price: '₹3,245 - ₹7,095',
    category: 'music',
  },
  {
    id: '2',
    title: 'Bondi Food & Wine Festival',
    description: 'Indulge in a weekend of culinary delights featuring Sydney\'s top chefs, wine tastings, and beachside views at the annual Bondi Food & Wine Festival.',
    date: '2025-02-21',
    time: '12:00 PM - 9:00 PM',
    location: 'Bondi Beach',
    imageUrl: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
    ticketUrl: 'https://example.com/tickets/bondi-festival',
    price: '₹1,375 Early Bird',
    category: 'food',
  },
  {
    id: '3',
    title: 'Sydney Contemporary Art Fair',
    description: 'Discover works from established and emerging artists at Australia\'s premier international art fair showcasing contemporary art from around the world.',
    date: '2025-03-05',
    time: '10:00 AM - 6:00 PM',
    location: 'Carriageworks, Eveleigh',
    imageUrl: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
    ticketUrl: 'https://example.com/tickets/art-fair',
    price: '₹1,760 General Admission',
    category: 'arts',
  },
  {
    id: '4',
    title: 'Harbour Bridge Night Run',
    description: 'Join thousands of runners for this iconic nighttime run across the Sydney Harbour Bridge with spectacular city views and a festival atmosphere.',
    date: '2025-03-12',
    time: '8:00 PM',
    location: 'Sydney Harbour Bridge',
    imageUrl: 'https://images.pexels.com/photos/3514254/pexels-photo-3514254.jpeg',
    ticketUrl: 'https://example.com/tickets/bridge-run',
    price: '₹4,125 Registration',
    category: 'sports',
  },
  {
    id: '5',
    title: 'Comedy Festival Gala',
    description: 'Laugh until it hurts with Australia\'s best comedians and international guests at this special one-night comedy showcase.',
    date: '2025-03-18',
    time: '8:30 PM',
    location: 'State Theatre, Market St',
    imageUrl: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
    ticketUrl: 'https://example.com/tickets/comedy-gala',
    price: '₹2,745 - ₹4,945',
    category: 'comedy',
  },
  {
    id: '6',
    title: 'Royal Easter Show',
    description: 'Australia\'s largest annual event featuring agricultural competitions, animal experiences, carnival rides, showbags, and entertainment for the whole family.',
    date: '2025-04-03',
    time: '9:00 AM - 9:00 PM',
    location: 'Sydney Showground, Olympic Park',
    imageUrl: 'https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg',
    ticketUrl: 'https://example.com/tickets/easter-show',
    price: '₹2,475 Adult, ₹1,540 Child',
    category: 'festivals',
  },
  {
    id: '7',
    title: 'Hamilton - The Musical',
    description: 'Don\'t miss the return season of the global phenomenon that has taken the world by storm with its innovative storytelling and unforgettable music.',
    date: '2025-04-15',
    time: 'Various showtimes',
    location: 'Sydney Lyric Theatre, Pyrmont',
    imageUrl: 'https://images.pexels.com/photos/11833889/pexels-photo-11833889.jpeg',
    ticketUrl: 'https://example.com/tickets/hamilton',
    price: '₹3,850 - ₹13,750',
    category: 'theatre',
  },
  {
    id: '8',
    title: 'Vivid Sydney Light Festival',
    description: 'Immerse yourself in Australia\'s largest festival of light, music, and ideas with spectacular projections and installations throughout the city.',
    date: '2025-05-22',
    time: '6:00 PM - 11:00 PM',
    location: 'Various locations around Sydney',
    imageUrl: 'https://images.pexels.com/photos/20010753/pexels-photo-20010753/free-photo-of-night-illuminated-bridge-in-sydney.jpeg',
    ticketUrl: 'https://example.com/tickets/vivid-sydney',
    price: 'Free and Ticketed Events',
    category: 'festivals',
  }
];

// Simulate fetching events with a delay to mimic API call
export const fetchEvents = (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 800);
  });
};