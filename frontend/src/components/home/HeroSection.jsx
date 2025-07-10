import React from "react";
import { Button } from "@/components/ui/Button";
import { Heart, Play, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              Inteligência Artificial Veterinária
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidado
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  {" "}Veterinário
                </span>
                <br />
                Inteligente e Acessível
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Revolucione o diagnóstico e cuidado dos seus animais com nossa 
                IA especializada. Respostas rápidas, precisas e confiáveis.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl("Chat")}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto group"
                >
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Mockup da Interface de Chat */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Dr. IA Veterinário</div>
                    <div className="text-sm text-green-500">● Online</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                    <p className="text-sm">Olá! Como posso ajudar com o seu pet hoje?</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-2xl rounded-br-md p-3 max-w-xs ml-auto">
                    <p className="text-sm">Meu gato está com tosse há 2 dias</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 max-w-xs">
                    <p className="text-sm">Entendido. A tosse pode indicar várias condições. Ele apresenta outros sintomas como espirros, febre ou falta de apetite? Para uma avaliação precisa, recomendo uma consulta com um veterinário.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos Flutuantes */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg animate-bounce">
              <Heart className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-2xl shadow-lg animate-pulse">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
