import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Изменено с Switch на Routes

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Wlc1 from './components/wlcpage/wlc1';
import Wlc2 from './components/wlcpage/wlc2';
import Wlc3 from './components/wlcpage/wlc3';
import Wlc4 from './components/wlcpage/wlc4';
import Wlc5 from './components/wlcpage/wlc5';
import Wlc6 from './components/wlcpage/wlc6';
import Wlc7 from './components/wlcpage/wlc7';
import Stylesy from './components/wlcpage/stylesy' // Correct import with PascalCase
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/wlc1" element={<Wlc1 />} />
        <Route exact path="/wlc2" element={<Wlc2 />} />
        <Route exact path="/wlc3" element={<Wlc3 />} />
        <Route exact path="/wlc4" element={<Wlc4 />} />
        <Route exact path="/wlc5" element={<Wlc5 />} />
        <Route exact path="/wlc6" element={<Wlc6 />} />
        <Route exact path="/wlc7" element={<Wlc7 />} />
        <Route exact path="/stylesy" element={<Stylesy />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
