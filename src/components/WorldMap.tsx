import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Location } from '../types';

interface WorldMapProps {
  onLocationSelect: (location: Location) => void;
  isGuessing: boolean;
  actualLocation?: Location;
  guessedLocation?: Location;
}

export function WorldMap({ onLocationSelect, isGuessing, actualLocation, guessedLocation }: WorldMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !map) {
        const newMap = new google.maps.Map(mapRef.current, {
          center: { lat: 20, lng: 0 },
          zoom: 2,
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          styles: [
            {
              featureType: 'administrative.country',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }]
            },
            {
              featureType: 'administrative.province',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'road',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit',
              stylers: [{ visibility: 'off' }]
            }
          ],
          minZoom: 2,
          maxZoom: 8,
          restriction: {
            latLngBounds: {
              north: 85,
              south: -85,
              west: -180,
              east: 180
            },
            strictBounds: true
          }
        });

        setMap(newMap);

        if (isGuessing) {
          newMap.addListener('click', (e: google.maps.MapMouseEvent) => {
            const location = e.latLng?.toJSON();
            if (location) {
              if (marker) {
                marker.setMap(null);
              }
              const newMarker = new google.maps.Marker({
                position: location,
                map: newMap,
              });
              setMarker(newMarker);
              onLocationSelect(location);
            }
          });
        }
      }
    });
  }, [map, isGuessing, onLocationSelect]);

  useEffect(() => {
    if (map && !isGuessing && actualLocation && guessedLocation) {
      // Clear existing marker
      if (marker) {
        marker.setMap(null);
      }

      // Show actual location marker
      new google.maps.Marker({
        position: actualLocation,
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#4CAF50',
          fillOpacity: 1,
          strokeWeight: 0,
        },
      });

      // Show guessed location marker
      new google.maps.Marker({
        position: guessedLocation,
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#F44336',
          fillOpacity: 1,
          strokeWeight: 0,
        },
      });

      // Draw line between points
      new google.maps.Polyline({
        path: [actualLocation, guessedLocation],
        map,
        geodesic: true,
        strokeColor: '#FF5722',
        strokeOpacity: 0.8,
        strokeWeight: 2,
      });

      // Fit bounds to show both markers
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(actualLocation);
      bounds.extend(guessedLocation);
      map.fitBounds(bounds);
    }
  }, [map, isGuessing, actualLocation, guessedLocation]);

  return <div ref={mapRef} className="w-full h-[300px] rounded-lg overflow-hidden" />;
}