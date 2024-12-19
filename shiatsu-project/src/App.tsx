import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Tarifs } from './pages/Tarifs/Tarifs';



export const App: React.FC = () => {


  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

