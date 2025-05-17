import React from 'react';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; // Установите эту библиотеку: npm install jwt-decode
import AuthorizationForm from "./RegistrationForm/AuthorizationForm.jsx";
import Panel from "./Panel/Panel.jsx";


function isTokenValid(token) {
  try {
    const decoded = jwtDecode(token); // Декодируем токен
    const currentTime = Math.floor(Date.now() / 1000); // Текущее время в секундах
    return decoded.exp > currentTime; // Проверяем, не истек ли токен
  } catch (error) {
    console.error("Ошибка проверки токена:", error);
    return false; // Если токен невалиден или не может быть декодирован
  }
}

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const token = localStorage.getItem("token");

    if (token && isTokenValid(token)) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Загрузка...</div>; 
  }

  return isAuthenticated ? children : <Navigate to="/Panel" replace />;
}


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