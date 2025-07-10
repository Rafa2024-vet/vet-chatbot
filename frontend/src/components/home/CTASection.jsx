import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const benefits = [
  "Acesso ilimitado à IA veterinária",
  "Orientações em tempo real",
  "Base de conhecimento atualizada",
  "Suporte para múltiplas espécies",
  "Interface intuitiva e fácil",
  "Dados seguros e protegidos"
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-green-500 relative">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Conteúdo */}
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Comece hoje a <span className="text-yellow-300">cuidar melhor</span> dos seus animais
            </h2>
            
            <p className="text-xl text-blue-100 mt-6 mb-10">
                Junte-se a milhares de veterinários e tutores que já revolucionaram o cuidado animal com nossa IA.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Chat")}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 group"
                >
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to={createPageUrl("Features")}>
                <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600"
                >
                    Saber Mais
                </Button>
              </Link>
            </div>
        </div>

        {/* Lista de Benefícios */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-left">
            {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span className="text-blue-100">{benefit}</span>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
