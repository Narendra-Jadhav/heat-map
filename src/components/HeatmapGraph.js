import React, { useRef } from 'react';
import Chart from 'chart.js/auto';
import html2canvas from 'html2canvas';

const HeatmapGraph = () => {
  const chartRef = useRef(null);

  // Function to capture the heatmap graph as an image
  const captureHeatmapAsImage = () => {
    // Capture the heatmap graph container as a canvas
    html2canvas(chartRef.current).then((canvas) => {
      // Convert canvas to data URL (Base64-encoded)
      const dataURL = canvas.toDataURL();

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'heatmap.png'; // Specify the filename

      // Trigger a click event to initiate the download
      link.click();
    });
  };

  // Render the heatmap graph using Chart.js
  React.useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'heatmap',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [
            [1, 2, 3, 4, 5, 6, 7],
            [7, 6, 5, 4, 3, 2, 1],
            [1, 2, 3, 4, 5, 6, 7],
            [7, 6, 5, 4, 3, 2, 1],
            [1, 2, 3, 4, 5, 6, 7],
            [7, 6, 5, 4, 3, 2, 1]
          ],
        }]
      },
    });
  }, []);

  return (
    <div>
      {/* Container for the heatmap graph */}
      <canvas ref={chartRef} />

      {/* Button to trigger image capture and download */}
      <button onClick={captureHeatmapAsImage}>Download Heatmap</button>
    </div>
  );
};

export default HeatmapGraph;
