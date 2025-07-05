import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import './styles.css';
import CrumRubber from './CrumRubber';
import EnquiryForm from './EnquiryForm.js';
import ContactUs from './ContacUs.js';
import Epdm from './Epdm.js';
import TyreWire from './TyreWire.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CrumRubber" element={<CrumRubber />} />
        <Route path="/EnquiryForm" element={<EnquiryForm />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Epdm" element={<Epdm />} />
        <Route path="/TyreWire" element={<TyreWire />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
