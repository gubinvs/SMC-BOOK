import React from 'react';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; // Установите эту библиотеку: npm install jwt-decode
import AuthorizationForm from "./RegistrationForm/AuthorizationForm.jsx";
import Panel from "./Panel/Panel.jsx";
import { isTokenValid } from "./isTokenValid.js";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationForm />} />
        <Route path="/Panel" element= {
          <ProtectedRoute>
            <Panel />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;