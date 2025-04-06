// src/routes/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/auth/me', { withCredentials: true })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Cargando...</div>;
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
