// frontend/src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginUser as apiLogin, registerUser as apiRegister } from '../services/apiService';

// 1. Criamos o Contexto
const AuthContext = createContext(null);

// 2. Criamos o "Provedor" que irá fornecer os dados de autenticação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Ao iniciar a aplicação, verifica se há um usuário salvo no localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Função de login que atualiza o estado e o localStorage
  const login = async (loginData) => {
    const userData = await apiLogin(loginData);
    setUser(userData);
    // O token já é salvo no localStorage pela função do apiService
  };
  
  // Função de registro que atualiza o estado e o localStorage
  const register = async (userData) => {
    const newUserData = await apiRegister(userData);
    setUser(newUserData);
  };

  // Função de logout que limpa o estado e o localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const authData = { user, login, logout, register };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Criamos um "Hook" customizado para facilitar o uso do contexto
export const useAuth = () => {
  return useContext(AuthContext);
};