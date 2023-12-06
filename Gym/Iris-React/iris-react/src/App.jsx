import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import IMC from './components/Pages/IMC';
import Exercitii from './components/Pages/Exercitii';
import ExercitiiID from './components/Pages/ExercitiiID';
import ExercitiiGroup from './components/Pages/ExercitiiGroup';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/IMC" element={<IMC />} />
          <Route path="/Exercitii/*" element={<Exercitii />} />
          <Route path="/Exercitii/:group" element={<ExercitiiGroup />} />
          <Route path="/Exercitii/:group/:id" element={<ExercitiiID />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
