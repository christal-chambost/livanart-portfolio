import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import About from './pages/about';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Header from './components/Header';
import Contact from './pages/contact';
import Workshop from './pages/workshop';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;
