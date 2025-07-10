// frontend/src/components/auth/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Se não há usuário logado, o "porteiro" te manda para a página de login.
    return <Navigate to="/login" />;
  }

  // Se o usuário está logado, o "porteiro" te deixa passar e mostra a página solicitada.
  return children;
}