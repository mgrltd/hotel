import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/user/Home';
import Header from '../pages/user/Header';

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
