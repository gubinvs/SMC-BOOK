// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthorizationForm from "./RegistrationForm/AuthorizationForm.jsx";
import Panel from "./Panel/Panel.jsx";
import { ProtectedRoute } from "./js/authHelpers.js"; // Импорт из нового файла

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationForm />} />
        <Route
          path="/Panel"
          element={
            <ProtectedRoute>
              <Panel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
