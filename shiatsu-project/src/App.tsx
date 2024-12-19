import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Tarifs } from './pages/Tarifs/Tarifs';
import { Prestations } from './pages/Prestations/Prestations';



export const App: React.FC = () => {


  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/tarifs" element={<Tarifs />} />
        </Route>
      </Routes>
    </Router>
  );
};

