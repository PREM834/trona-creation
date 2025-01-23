import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Products from './components/Products';
import CollectionPage from './components/CollectionPage';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Philosophy />
              <Products />
              <Sustainability />
              <Contact />
            </>
          } />
          <Route path="/collection/:type" element={<CollectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;