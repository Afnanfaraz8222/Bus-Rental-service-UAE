// Sample data for search functionality
const buses = [
  {
    id: 1,
    name: 'Toyota Hiace Standard',
    description: '13-seater comfortable van for group travel',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  },
  {
    id: 2,
    name: 'Toyota Coaster',
    description: '22-seater bus for medium group travel',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  },
  {
    id: 3,
    name: 'Toyota Previa',
    description: '7-8 seater luxury van for small group travel',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  },
  {
    id: 4,
    name: '35 Seater Luxury Bus',
    description: 'Spacious bus for large group travel',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  },
  {
    id: 5,
    name: '50 Seater Luxury Bus',
    description: 'Large capacity bus for big group travel',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  },
  {
    id: 6,
    name: 'Toyota Hiace VIP',
    description: '8 luxury seats for premium travel experience',
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Space']
  }
];

const services = [
  {
    id: 1,
    title: 'Airport Transfers',
    keywords: ['airport', 'transfer', 'flight', 'terminal', 'pickup', 'dropoff']
  },
  {
    id: 2,
    title: 'Hotel Transfers',
    keywords: ['hotel', 'resort', 'accommodation', 'lodge', 'stay']
  },
  {
    id: 3,
    title: 'Event Transportation',
    keywords: ['event', 'wedding', 'party', 'gathering', 'function', 'celebration']
  },
  {
    id: 4,
    title: 'Sports Events',
    keywords: ['sports', 'game', 'match', 'tournament', 'team', 'stadium']
  },
  {
    id: 5,
    title: 'Corporate Services',
    keywords: ['corporate', 'business', 'office', 'company', 'meeting', 'conference']
  },
  {
    id: 6,
    title: 'City Tours',
    keywords: ['tour', 'sightseeing', 'city', 'attraction', 'guide', 'explore']
  }
];

const contactInfo = [
  {
    id: 1,
    name: 'Customer Support',
    description: '24/7 customer support available',
    keywords: ['support', 'help', 'customer', 'service', 'assistance']
  },
  {
    id: 2,
    name: 'Booking Office',
    description: 'Main office for bookings and inquiries',
    keywords: ['booking', 'office', 'reservation', 'inquiry', 'contact']
  },
  {
    id: 3,
    name: 'Emergency Contact',
    description: 'Emergency support line available 24/7',
    keywords: ['emergency', 'urgent', 'help', 'support', 'assistance']
  }
];

// Search functions
export const searchService = {
  searchBuses: (query) => {
    const searchTerm = query.toLowerCase();
    return buses.filter(bus => 
      bus.name.toLowerCase().includes(searchTerm) ||
      bus.description.toLowerCase().includes(searchTerm) ||
      bus.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
  },

  searchServices: (query) => {
    const searchTerm = query.toLowerCase();
    return services.filter(service =>
      service.title.toLowerCase().includes(searchTerm) ||
      service.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
  },

  searchContact: (query) => {
    const searchTerm = query.toLowerCase();
    return contactInfo.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm) ||
      contact.description.toLowerCase().includes(searchTerm) ||
      contact.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
  }
}; 