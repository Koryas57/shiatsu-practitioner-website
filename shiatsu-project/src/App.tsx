import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Tarifs } from './pages/Tarifs/Tarifs';
import { Prestations } from './pages/Prestations/Prestations';
import { Diplomas } from './pages/Diplomas/Diplomas';



export const App: React.FC = () => {


  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/diplomas" element={<Diplomas />} />
        </Route>
      </Routes>
    </Router>
  );
};

