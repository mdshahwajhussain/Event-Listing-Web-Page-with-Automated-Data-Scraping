export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  time: string;
  location: string;
  imageUrl: string;
  ticketUrl: string;
  price: string;
  category: EventCategory;
}

export type EventCategory = 
  | 'music' 
  | 'arts' 
  | 'sports' 
  | 'food' 
  | 'festivals' 
  | 'comedy' 
  | 'theatre' 
  | 'other';