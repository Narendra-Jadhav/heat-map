import React, { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

const Heatmap = () => {
  const heatmapRef = useRef(null);

  useEffect(() => {
    // Initialize heatmap instance
    const heatmapInstance = h337.create({
      container: heatmapRef.current,
      radius: 90,
    });

    // Add mousemove event listener to the heatmap container
    const handleMouseMove = (event) => {
      const rect = heatmapRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      // Add data point to the heatmap based on cursor position
      heatmapInstance.addData({
        x: offsetX,
        y: offsetY,
        value: 0.99, // Higher value for slightly darker intensity (adjust as needed)
      });
    };

    // Attach event listener to the heatmap container
    heatmapRef.current.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      heatmapRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heatmapRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 9999 }} />
  );
};

export default Heatmap;
