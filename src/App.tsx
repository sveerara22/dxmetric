import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DXRadar from './pages/DXRadar';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-violet-900 to-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/radar" element={<DXRadar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;