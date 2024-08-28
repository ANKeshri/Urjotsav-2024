import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './Layout';
import About from './components/About';
import Contact from './components/Contact';
import planet from "../src/images/planet.png"
import Home from './components/Home';


function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
        
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
