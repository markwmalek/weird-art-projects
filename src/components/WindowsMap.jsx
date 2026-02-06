import { useEffect, useRef } from 'react';
import './WindowsMap.css';

// Window locations with coordinates (downtown Durham)
const locations = [
  {
    id: 1,
    artist: 'Ali Waller',
    title: 'A Reclaimed Christmas',
    address: '121 Market St',
    lat: 35.996612,
    lng: -78.902215,
  },
  {
    id: 2,
    artist: 'Christian Smith',
    title: 'Carnival of Dogs',
    address: '307 West Main St',
    lat: 35.996016,
    lng: -78.902546,
  },
  {
    id: 3,
    artist: 'Jeghetto',
    title: 'Window Shopping in an Alternate Reality',
    address: '407 E Chapel Hill St',
    lat: 35.997008,
    lng: -78.899798,
  },
  {
    id: 4,
    artist: 'Jordan Grace Owens',
    title: 'The Holiday Party',
    address: '309 E Chapel Hill St',
    lat: 35.997008,
    lng: -78.901270,
  },
  {
    id: 5,
    artist: 'Jason Lord',
    title: "Santa's Werkshop",
    address: '204 Rigsbee Ave',
    lat: 35.997051,
    lng: -78.899844,
  },
  {
    id: 6,
    artist: 'Bob Ostrom',
    title: 'A Holiday Under the Sea',
    address: '107 E Chapel Hill St',
    lat: 35.997026,
    lng: -78.903743,
  },
  {
    id: 7,
    artist: 'Sabrina Servance',
    title: 'Be Audacious',
    address: '212 W Main St',
    lat: 35.995814,
    lng: -78.901931,
  },
];

export default function WindowsMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = await import('leaflet');

      // Don't re-initialize if already created
      if (mapInstanceRef.current) return;

      // Create map centered on downtown Durham
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
      }).setView([35.9965, -78.9010], 16);

      mapInstanceRef.current = map;

      // Add CartoDB Positron tiles (light minimal theme)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map);

      // Custom marker icon
      const markerIcon = L.divIcon({
        className: 'windows-map__marker',
        html: '<div class="windows-map__marker-inner"></div>',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add markers for each location
      locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon }).addTo(map);

        marker.bindPopup(`
          <div class="windows-map__popup">
            <strong>${loc.title}</strong>
            <span>by ${loc.artist}</span>
            <span class="windows-map__popup-address">${loc.address}</span>
            <a href="https://maps.google.com/?q=${encodeURIComponent(loc.address + ', Durham, NC')}" target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </div>
        `);
      });
    };

    loadMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="windows-map">
      <div className="windows-map__container" ref={mapRef}></div>
      <div className="windows-map__legend">
        {locations.map((loc) => (
          <div className="windows-map__legend-item" key={loc.id}>
            <span className="windows-map__legend-number">{loc.id}</span>
            <div className="windows-map__legend-info">
              <strong>{loc.artist}</strong>
              <span>{loc.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
