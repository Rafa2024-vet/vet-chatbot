// frontend/src/pages/Register.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe o useNavigate
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, UserPlus } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { registerUser } from '../services/apiService'; // Importe nossa função da API

export default function Register() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(''); // Novo estado para lidar com erros
  const navigate = useNavigate(); // Hook para navegar programaticamente

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError(''); // Limpa erros anteriores
    setIsLoading(true); 

    try {
      const userData = { name, email, password };
      await registerUser(userData); // Chama a função real da API
      
      // Se o registro for bem-sucedido, redireciona para a página de chat
      navigate('/chat');

    } catch (err) {
      // Se a API retornar um erro (ex: usuário já existe), o capturamos aqui
      const errorMessage = err.response?.data?.message || "Ocorreu um erro ao tentar registrar. Tente novamente.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-2xl">
        <div className="text-center">
          <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                VetChatBot
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800">Crie sua conta</h2>
          <p className="text-gray-600">É rápido e fácil. Comece a cuidar melhor dos seus pets hoje.</p>
        </div>
        
        {/* Mostra a mensagem de erro, se houver */}
        {error && <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crie uma senha forte"
              required
              disabled={isLoading}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Criando conta...' : <> <UserPlus className="mr-2 h-4 w-4" /> Criar Conta </>}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Já tem uma conta?{' '}
          <Link to={createPageUrl("Login")} className="font-medium text-blue-600 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}