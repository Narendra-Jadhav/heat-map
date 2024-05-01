import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeatmapPage from './pages/HeatMapPage.js';
import MapWithHeatmapPage from './pages/MapWithHeatMapPage.js';
import HeatmapLivePage from './pages/HeatmapLivePage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeatmapPage />} />
        <Route path="/live" element={<HeatmapLivePage />} />
        <Route path="/map" element={<MapWithHeatmapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
