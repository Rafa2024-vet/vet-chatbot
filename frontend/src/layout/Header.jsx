import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/utils';

const navigationItems = [
    { title: "Início", page: "Home" },
    { title: "Funcionalidades", page: "Features" },
    { title: "Sobre", page: "About" },
    { title: "Contato", page: "Contact" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (pageUrl) => location.pathname === pageUrl;

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

          {/* Desktop Navigation */}
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

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to={createPageUrl("Chat")}>
              <Button>Começar Agora</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => {
                  const url = createPageUrl(item.page);
                  return (
                    <Link
                        key={item.title}
                        to={url}
                        className={`font-medium transition-colors hover:text-blue-600 ${
                            isActivePage(url) ? "text-blue-600" : "text-gray-700"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                  );
              })}
              <Link to={createPageUrl("Chat")} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-2">Começar Agora</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
