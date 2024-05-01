import React, { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

const MapWithHeatmap = () => {
  const mapRef = useRef(null);
  const heatmapRef = useRef(null);

  useEffect(() => {
    // Initialize Google Maps
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 }, // Set initial center coordinates
      zoom: 4, // Set initial zoom level
    });

    // Initialize heatmap
    const heatmap = h337.create({
      container: heatmapRef.current,
      radius: 90,
    });

    // Add click event listener to the map
    const handleMapClick = (event) => {
      const { latLng } = event;
      const point = map.getProjection().fromLatLngToPoint(latLng);

      // Add data point to the heatmap
      heatmap.addData({
        x: point.x * 1000, // Multiply by a factor to adjust the scale
        y: point.y * 1000,
        value: 1,
      });
    };

    // Attach event listener to the map
    map.addListener('click', handleMapClick);

    // Store references to map and heatmap instances for cleanup
    mapRef.current = map;
    heatmapRef.current = heatmap;

    // Clean up event listener on component unmount
    return () => {
      map.removeListener('click', handleMapClick);
    };
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }} />
      <div ref={heatmapRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }} />
    </div>
  );
};

export default MapWithHeatmap;
