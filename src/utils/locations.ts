import { Location } from '../types';

const LOCATIONS: Location[] = [
  // Europe
  { lat: 62.0397, lng: 7.2684 },     // Geirangerfjord, Norway
  { lat: 46.6294, lng: 11.3428 },    // Dolomites, Italy
  { lat: 43.7384, lng: 15.8962 },    // Kornati Islands, Croatia
  { lat: 37.4416, lng: 25.3666 },    // Mykonos Countryside, Greece
  { lat: 51.0486, lng: -0.7249 },    // South Downs Way, England
  { lat: 48.8605, lng: 2.3526 },     // Canal Saint-Martin, Paris, France
  { lat: 38.7069, lng: -9.1356 },    // Alfama District, Lisbon, Portugal
  { lat: 55.9485, lng: -3.1999 },    // Dean Village, Edinburgh, Scotland
  { lat: 52.5200, lng: 13.4050 },    // East Side Gallery, Berlin, Germany
  { lat: 59.3293, lng: 18.0686 },    // Södermalm, Stockholm, Sweden
  { lat: 42.6507, lng: 18.0944 },    // Dubrovnik Walls, Croatia
  { lat: 45.4408, lng: 12.3155 },    // Burano Island, Venice, Italy
  { lat: 50.0755, lng: 14.4378 },    // Vinohrady, Prague, Czech Republic
  { lat: 53.3498, lng: -6.2603 },    // Georgian Dublin, Ireland
  { lat: 41.3851, lng: 2.1734 },     // Gràcia, Barcelona, Spain

  // Asia
  { lat: 34.4661, lng: 135.8433 },   // Yoshino Mountain, Japan
  { lat: 25.0330, lng: 121.5654 },   // Jiufen Old Street, Taiwan
  { lat: 13.7563, lng: 100.5018 },   // Thonburi Canals, Bangkok, Thailand
  { lat: 31.2304, lng: 121.4737 },   // The Bund, Shanghai, China
  { lat: 3.1412, lng: 101.6865 },    // Kampung Baru, Kuala Lumpur, Malaysia
  { lat: 27.7172, lng: 85.3240 },    // Patan Durbar Square, Nepal
  { lat: 35.2321, lng: 129.0256 },   // Gamcheon Culture Village, Busan, Korea
  { lat: 22.3193, lng: 114.1694 },   // Sai Ying Pun, Hong Kong
  { lat: 21.0285, lng: 105.8542 },   // Old Quarter, Hanoi, Vietnam
  { lat: 7.9465, lng: 98.3381 },     // Old Phuket Town, Thailand
  { lat: 26.8867, lng: 75.8158 },    // Pink City, Jaipur, India
  { lat: 34.3916, lng: 132.4519 },   // Miyajima Island, Japan
  { lat: 1.2867, lng: 103.8500 },    // Kampong Glam, Singapore
  { lat: 23.1291, lng: 113.2644 },   // Liwan District, Guangzhou, China
  { lat: 13.5125, lng: 144.8016 },   // Tumon Bay, Guam

  // Americas
  { lat: -13.1631, lng: -72.5450 },  // Sacred Valley, Peru
  { lat: 19.4260, lng: -99.1722 },   // Coyoacán, Mexico City, Mexico
  { lat: -34.6037, lng: -58.3816 },  // La Boca, Buenos Aires, Argentina
  { lat: 40.7829, lng: -73.9654 },   // Central Park, New York, USA
  { lat: -23.9618, lng: -46.3322 },  // Santos, Brazil
  { lat: 49.2827, lng: -123.1207 },  // Granville Island, Vancouver, Canada
  { lat: -33.0472, lng: -71.6127 },  // Valparaíso Hills, Chile
  { lat: 18.4655, lng: -66.1057 },   // Old San Juan, Puerto Rico
  { lat: 4.5981, lng: -74.0758 },    // La Candelaria, Bogota, Colombia
  { lat: 29.9511, lng: -90.0715 },   // Bywater, New Orleans, USA
  { lat: -16.4990, lng: -68.1192 },  // La Paz Cable Cars, Bolivia
  { lat: 43.6532, lng: -79.3832 },   // Distillery District, Toronto, Canada
  { lat: -0.2295, lng: -78.5243 },   // Old Town Quito, Ecuador
  { lat: 37.8099, lng: -122.4103 },  // North Beach, San Francisco, USA
  { lat: -12.0464, lng: -77.0428 },  // Barranco, Lima, Peru

  // Africa
  { lat: -33.9249, lng: 18.4241 },   // Bo-Kaap, Cape Town, South Africa
  { lat: 31.6295, lng: -7.9811 },    // Medina, Marrakech, Morocco
  { lat: 30.0444, lng: 31.2357 },    // Islamic Cairo, Egypt
  { lat: -6.8235, lng: 39.2695 },    // Stone Town, Zanzibar, Tanzania
  { lat: 14.6928, lng: -17.4467 },   // Ngor, Dakar, Senegal
  { lat: 36.8665, lng: 10.3317 },    // Sidi Bou Said, Tunisia
  { lat: -1.2921, lng: 36.8219 },    // Karen, Nairobi, Kenya
  { lat: 6.5244, lng: 3.3792 },      // Lagos Island, Nigeria
  { lat: -26.1867, lng: 28.0307 },   // Maboneng, Johannesburg, South Africa
  { lat: 15.3229, lng: 38.9251 },    // Asmara Historic Center, Eritrea
  { lat: -15.4167, lng: 28.2833 },   // Cairo Road, Lusaka, Zambia
  { lat: 5.5557, lng: -0.1963 },     // Jamestown, Accra, Ghana
  { lat: -18.8792, lng: 47.5079 },   // Haute-Ville, Antananarivo, Madagascar
  { lat: 0.3476, lng: 32.5825 },     // Kampala Old Town, Uganda
  { lat: -3.3696, lng: 29.3650 },    // Lake Tanganyika Shore, Bujumbura, Burundi

  // Oceania
  { lat: -33.8688, lng: 151.2093 },  // The Rocks, Sydney, Australia
  { lat: -41.2865, lng: 174.7762 },  // Cuba Street, Wellington, New Zealand
  { lat: -17.5334, lng: -149.5667 }, // Papeete Waterfront, Tahiti
  { lat: -21.1351, lng: -175.2026 }, // Vava'u Islands, Tonga
  { lat: -8.4753, lng: 179.1962 },   // Funafuti Atoll, Tuvalu
  { lat: -13.8333, lng: -171.7667 }, // Apia Waterfront, Samoa
  { lat: -9.4438, lng: 147.1803 },   // Ela Beach, Port Moresby, Papua New Guinea
  { lat: -18.1416, lng: 178.4239 },  // Levuka Historical Port Town, Fiji
  { lat: -29.0047, lng: 167.9392 },  // Kingston, Norfolk Island
  { lat: -19.0596, lng: 178.4478 },  // Savusavu, Fiji
  { lat: -31.9505, lng: 115.8605 },  // Fremantle, Perth, Australia
  { lat: -43.5321, lng: 172.6362 },  // New Brighton, Christchurch, New Zealand
  { lat: -16.5004, lng: -151.7415 }, // Bora Bora Lagoon, French Polynesia
  { lat: -22.2758, lng: 166.4580 },  // Nouméa Peninsula, New Caledonia
  { lat: -27.4698, lng: 153.0251 },  // New Farm, Brisbane, Australia

  // Additional Unique Locations
  { lat: 78.2232, lng: 15.6267 },    // Longyearbyen, Svalbard
  { lat: 64.1470, lng: -21.9408 },   // Grandi Harbor, Reykjavik, Iceland
  { lat: 69.6492, lng: 18.9553 },    // Tromsø Harbor, Norway
  { lat: -54.8019, lng: -68.3030 },  // Ushuaia Waterfront, Argentina
  { lat: 35.6762, lng: 139.6503 },   // Shimokitazawa, Tokyo, Japan
  { lat: 22.1987, lng: 113.5439 },   // Coloane Village, Macau
  { lat: 25.2867, lng: 83.0059 },    // Assi Ghat, Varanasi, India
  { lat: 36.2048, lng: 138.2529 },   // Matsumoto Castle Town, Japan
  { lat: 43.9493, lng: 12.4517 },    // San Marino Historic Centre
  { lat: 47.5574, lng: 10.7495 },    // Neuschwanstein Surroundings, Germany
  { lat: 51.1789, lng: -1.8262 },    // Stonehenge Plain, England
];

export function getRandomLocation(): Location {
  const randomIndex = Math.floor(Math.random() * LOCATIONS.length);
  return LOCATIONS[randomIndex];
}