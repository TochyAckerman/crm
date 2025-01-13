import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerInfo from './pages/CustomerInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer/:id" element={<CustomerInfo />} />
    </Routes>
  );
}

export default App;