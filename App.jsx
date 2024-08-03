
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/contactus';

function App() {
  return (
    <>
      <div>
        <Routes> 
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />

        </Routes>
      </div>
    </>
  );
}

export default App;