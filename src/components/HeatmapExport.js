import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const HeatmapExport = () => {
  const heatmapRef = useRef(null);

  const handleExport = () => {
    // Capture heatmap as an image using html2canvas
    html2canvas(heatmapRef.current).then((canvas) => {
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL();
  
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'heatmap.png'; // Specify the filename
  
      // Trigger a click event to initiate the download
      link.click();
    });
  };
  

  return (
    <div>
      {/* Heatmap container */}
      <div ref={heatmapRef} className="heatmap">
        {/* Render your heatmap here */}
      </div>

      {/* Button to trigger export */}
      <button onClick={handleExport}>Export Heatmap</button>
    </div>
  );
};

export default HeatmapExport;
