import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Location } from '../types';

interface StreetViewProps {
  location: Location;
}

export function StreetView({ location }: StreetViewProps) {
  const streetViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (streetViewRef.current) {
        const panorama = new google.maps.StreetViewPanorama(streetViewRef.current, {
          position: location,
          pov: { heading: 0, pitch: 0 },
          zoom: 1,
          addressControl: false,
          showRoadLabels: false,
        });
      }
    });
  }, [location]);

  return (
    <div ref={streetViewRef} className="w-full h-[400px] rounded-lg overflow-hidden" />
  );
}