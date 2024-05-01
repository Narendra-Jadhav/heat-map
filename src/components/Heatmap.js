// Heatmap.js

import React, { useEffect } from 'react';
import h337 from 'heatmap.js';

const Heatmap = () => {
  useEffect(() => {
    // Create heatmap instance
    const heatmapInstance = h337.create({
      container: document.querySelector('.heatmap'),
      radius: 90
    });

    // Add click event listener to the container
    const handleClick = (ev) => {
      heatmapInstance.addData({
        x: ev.layerX,
        y: ev.layerY,
        value: 1
      });
    };
    document.querySelector('.heatmap').addEventListener('click', handleClick);

    // Clean up event listener on component unmount
    return () => {
      document.querySelector('.heatmap').removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="heatmap" style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      {/* No need to render anything here, heatmap will be drawn on this div */}
    </div>
  );
};

export default Heatmap;
