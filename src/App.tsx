import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Header from './components/Header';
import Contact from './pages/contact';
import Workshop from './pages/workshop';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
