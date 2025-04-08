import { Location } from '../types';

const EARTH_RADIUS = 6371; // Earth's radius in kilometers

export function calculateDistance(point1: Location, point2: Location): number {
  const lat1 = point1.lat * Math.PI / 180;
  const lat2 = point2.lat * Math.PI / 180;
  const lng1 = point1.lng * Math.PI / 180;
  const lng2 = point2.lng * Math.PI / 180;

  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}