import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Изменено с Switch на Routes

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Wlc1 from './components/wlcpage/wlc1';
import Leaders from './pages/Leaders';
import Stylesy from './components/wlcpage/stylesy'; // Correct import with PascalCase
import './App.css';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://jettocoinwebapp.vercel.app/tonconnect-manifest.json">
        
    <>
      <Routes>
        <Route exact path="/wlc1" element={<Wlc1 />} />
        <Route exact path="/stylesy" element={<Stylesy />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/manifest" element={<manifest />} />
      </Routes>
    </>
    </TonConnectUIProvider>
  );
}

export default App;
