import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/Navigation';
import Home from './pages';
import AboutMe from './pages/about';
import Below from './pages/below';
import Contact from './pages/contact';
import GrowingUpAssala from './pages/growingUp';
import Landscapes from './pages/landscapes';
import OnTheRoad from './pages/onTheRoad';
import Street from './pages/street';
import './stylesheets/globalStyle.css';

function App() {
  return (
    <>
      <NavigationMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/street" element={<Street />} />
          <Route path="/landscapes" element={<Landscapes />} />
          <Route path="/growingUp" element={<GrowingUpAssala />} />
          <Route path="/onTheRoad" element={<OnTheRoad />} />
          <Route path="/below" element={<Below />} />
          {/* <Route path="/store" element={} /> */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
