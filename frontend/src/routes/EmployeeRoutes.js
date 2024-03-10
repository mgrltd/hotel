import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/employee/Home';
import Header from '../pages/employee/Header';

const UserRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default UserRoutes;
