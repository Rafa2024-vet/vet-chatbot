import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, LogIn } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Lógica de login aqui (ex: chamada ao apiService)
    console.log("Login attempt:", { email, password });
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-2xl rounded-2xl">
        <div className="text-center">
          <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                VetChatBot
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800">Acesse sua conta</h2>
          <p className="text-gray-600">Bem-vindo de volta! Faça login para continuar.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Sua senha"
              required
              disabled={isLoading}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : <> <LogIn className="mr-2 h-4 w-4" /> Entrar </>}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link to={createPageUrl("Register")} className="font-medium text-blue-600 hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
}