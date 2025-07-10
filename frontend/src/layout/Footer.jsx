import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">VetChatBot</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Revolucionando o cuidado veterinário com inteligência artificial. Diagnósticos rápidos e precisos para o bem-estar dos seus animais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to={createPageUrl("Features")} className="hover:text-white transition-colors">Funcionalidades</Link></li>
              <li><Link to={createPageUrl("About")} className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VetChatBot. Todos os direitos reservados.
          </p>
          {/* Social Media links can be added here */}
        </div>
      </div>
    </footer>
  );
}
