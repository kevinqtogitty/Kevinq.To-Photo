import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@stripe/stripe-js';

import NavigationMenu from './components/Navigation';
import Home from './pages';
import AboutMe from './pages/about';
import Below from './pages/below';
import Contact from './pages/contact';
import GrowingUpAssala from './pages/growingUp';
import Landscapes from './pages/landscapes';
import OnTheRoad from './pages/onTheRoad';
import Store from './pages/store';
import Street from './pages/street';
import './stylesheets/globalStyle.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/street" element={<Street />} />
          <Route path="/landscapes" element={<Landscapes />} />
          <Route path="/growingUp" element={<GrowingUpAssala />} />
          <Route path="/onTheRoad" element={<OnTheRoad />} />
          <Route path="/below" element={<Below />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
