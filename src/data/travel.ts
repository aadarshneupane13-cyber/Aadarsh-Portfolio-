import { TravelDestination } from '../types';

export const travelDestinations: TravelDestination[] = [
  {
    id: 'mustang',
    name: 'Mustang',
    country: 'Nepal',
    countryFlag: '🇳🇵',
    region: 'Annapurna Conservation Region',
    coordinates: { lat: 28.7844, lng: 83.7231 },
    altitude: '2,800m — 3,840m',
    highlight: 'High-altitude cold desert, wind-carved cliffs, and sacred trails',
    story: 'High-altitude landscapes, rugged dirt roads, towering Himalayan shadows, and the feeling of stepping onto another planet. Riding through Kali Gandaki gorge into the ancient Kingdom of Lo is an experience etched permanently into my perspective.',
    photoCount: 18,
    year: '2024',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    country: 'Nepal',
    countryFlag: '🇳🇵',
    region: 'Rupandehi District',
    coordinates: { lat: 27.4839, lng: 83.2759 },
    altitude: '150m',
    highlight: 'Birthplace of Lord Buddha, sacred tranquility, and world monastic architecture',
    story: 'A sanctuary of timeless silence. Walking through the Sacred Garden, Ashoka Pillar, and the quiet lotus canals offers a powerful contrast to modern speed. A place to reflect, center thoughts, and appreciate inner peace.',
    photoCount: 12,
    year: '2023',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'banaras',
    name: 'Banaras (Varanasi)',
    country: 'India',
    countryFlag: '🇮🇳',
    region: 'Uttar Pradesh',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    altitude: '80m',
    highlight: 'Ancient river ghats, morning boat stillness, and evening Ganga Aarti',
    story: 'One of the oldest continuously inhabited cities on earth. Watching dawn break across Dashashwamedh Ghat as priests offer fire to the sacred river revealed how traditions survive millennia unchanged.',
    photoCount: 24,
    year: '2023',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    country: 'India',
    countryFlag: '🇮🇳',
    region: 'Uttar Pradesh',
    coordinates: { lat: 26.8467, lng: 80.9462 },
    altitude: '123m',
    highlight: 'Nawabi heritage, Bara Imambara architectural wonders, and timeless hospitality',
    story: 'The city of manners, sprawling Mughal-Awadhi arched palaces, and culinary mastery. Navigating the labyrinth of Bhool Bhulaiya tested spatial orientation while appreciating the ingenuity of centuries-old acoustics.',
    photoCount: 16,
    year: '2023',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];
