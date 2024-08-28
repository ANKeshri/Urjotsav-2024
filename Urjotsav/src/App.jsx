import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Events from './components/Events'
import About2 from './components/About2';

function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="Events" element={<Events />} />
            <Route path="About2" element={<About2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
