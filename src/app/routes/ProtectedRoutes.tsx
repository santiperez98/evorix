// src/routes/ProtectedRoute.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

interface AuthResponse {
  // Define la estructura de la respuesta de la API /api/auth/me
  // Por ejemplo:
  isAuthenticated?: boolean;
  user?: any;
  error?: string;
}

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    axios.get<AuthResponse>('https://evorix-back.onrender.com/api/auth/me', { withCredentials: true })
      .then((response: AxiosResponse<AuthResponse>) => {
        setAuth(response.data?.isAuthenticated || false);
      })
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Cargando...</div>;
  return auth ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;