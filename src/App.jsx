// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthorizationForm from "./RegistrationForm/AuthorizationForm.jsx";
import ApplicationPanel from "./ApplicationPanel/ApplicationPanel.jsx";
import { ProtectedRoute } from "./js/authHelpers.js"; // Импорт из нового файла

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorizationForm />} />
        <Route
          path="/ApplicationPanel"
          element={
            <ProtectedRoute>
              <ApplicationPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
