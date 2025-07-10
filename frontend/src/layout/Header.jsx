// frontend/src/layout/Header.jsx

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/utils';
import { useAuth } from '../context/AuthContext'; // 1. Importe o hook de autenticação

const navigationItems = [
    { title: "Início", page: "Home" },
    { title: "Funcionalidades", page: "Features" },
    { title: "Sobre", page: "About" },
    { title: "Contato", page: "Contact" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // 2. Obtenha o usuário e a função de logout do contexto

  const isActivePage = (pageUrl) => location.pathname === pageUrl;

  const handleLogout = () => {
    logout(); // Limpa o estado e o localStorage
    navigate('/'); // Redireciona para a página inicial
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              VetChatBot
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
                const url = createPageUrl(item.page);
                return (
                    <Link
                        key={item.title}
                        to={url}
                        className={`font-medium transition-colors hover:text-blue-600 ${
                            isActivePage(url) ? "text-blue-600" : "text-gray-700"
                        }`}
                    >
                        {item.title}
                    </Link>
                );
            })}
          </nav>

          {/* 3. Lógica Condicional para os Botões */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              // Se o usuário ESTÁ logado
              <>
                <span className="text-sm text-gray-600">Olá, {user.name}!</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </>
            ) : (
              // Se o usuário NÃO ESTÁ logado
              <Link to={createPageUrl("Chat")}>
                <Button>Começar Agora</Button>
              </Link>
            )}
          </div>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                  <Link
                      key={item.title}
                      to={createPageUrl(item.page)}
                      className={`font-medium transition-colors hover:text-blue-600 ${
                          isActivePage(createPageUrl(item.page)) ? "text-blue-600" : "text-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                  >
                      {item.title}
                  </Link>
              ))}
              {user ? (
                <Button variant="outline" onClick={handleLogout} className="w-full mt-2">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              ) : (
                <Link to={createPageUrl("Chat")} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full mt-2">Começar Agora</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}