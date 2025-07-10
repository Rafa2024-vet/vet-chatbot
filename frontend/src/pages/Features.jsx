import React from "react";
import {
  Brain,
  MessageCircle,
  Shield,
  Clock,
  Stethoscope,
  Users,
  CheckCircle,
  ArrowRight,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    icon: Brain,
    title: "Inteligência Artificial Avançada",
    description: "Nossa IA foi treinada com milhares de casos clínicos reais e constantemente atualizada com as mais recentes descobertas em medicina veterinária.",
    details: [
      "Algoritmos de machine learning especializados",
      "Base de dados com +100,000 casos clínicos",
      "Precisão de 95% em diagnósticos preliminares",
      "Atualização contínua com novas pesquisas"
    ]
  },
  {
    icon: MessageCircle,
    title: "Interface Conversacional Natural",
    description: "Converse com nossa IA como se estivesse falando com um veterinário experiente. Interface intuitiva que qualquer pessoa pode usar.",
    details: [
      "Processamento de linguagem natural",
      "Compreende contexto e nuances",
      "Respostas em linguagem clara",
      "Suporte a múltiplos idiomas"
    ]
  },
  {
    icon: Stethoscope,
    title: "Cobertura Completa de Espécies",
    description: "Desde cães e gatos até animais exóticos e de grande porte. Nossa IA possui conhecimento especializado para diversas espécies.",
    details: [
      "Pets domésticos (cães, gatos, aves)",
      "Animais exóticos e silvestres",
      "Gado e animais de produção",
      "Cavalos e animais de grande porte"
    ]
  },
  {
    icon: Clock,
    title: "Diagnóstico em Tempo Real",
    description: "Obtenha respostas instantâneas para situações que podem precisar de atenção veterinária imediata.",
    details: [
      "Respostas em menos de 5 segundos",
      "Identificação de emergências",
      "Orientações para primeiros socorros",
      "Disponível 24 horas por dia"
    ]
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Seus dados e informações sobre seus pets são protegidos com os mais altos padrões de segurança digital.",
    details: [
      "Criptografia de ponta a ponta",
      "Conformidade com LGPD",
      "Armazenamento seguro na nuvem",
      "Política de privacidade transparente"
    ]
  },
  {
    icon: Users,
    title: "Para Profissionais e Tutores",
    description: "Desenvolvido para atender tanto veterinários profissionais quanto tutores que buscam orientação sobre seus pets.",
    details: [
      "Ferramenta de apoio para veterinários",
      "Educação continuada para estudantes",
      "Orientação para tutores responsáveis",
      "Interface adaptável ao nível do usuário"
    ]
  }
];

export default function Features() {
  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Funcionalidades Avançadas
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tecnologia de ponta para
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {" "}cuidado animal
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubra como nossa inteligência artificial revoluciona o diagnóstico 
            e cuidado veterinário, oferecendo precisão, velocidade e confiabilidade 
            em cada consulta.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 pb-4 border-b">
                          <Brain className="w-8 h-8 text-blue-600" />
                          <div>
                            <div className="font-semibold">Sistema de IA</div>
                            <div className="text-sm text-green-500">Analisando...</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="text-sm font-medium">Sintomas identificados:</div>
                            <div className="text-xs text-gray-600">Tosse, letargia, perda de apetite</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="text-sm font-medium text-blue-700">Probabilidade de diagnóstico:</div>
                            <div className="text-xs text-blue-600">Infecção respiratória (87%)</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
                          <p className="text-sm">Meu cachorro está com diarréia há 2 dias. O que pode ser?</p>
                        </div>
                        <div className="bg-blue-600 text-white rounded-2xl rounded-br-md p-3 ml-auto max-w-xs">
                          <p className="text-sm">Vou analisar os sintomas...</p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
                          <p className="text-sm">Baseado nos sintomas, pode ser gastroenterite. Recomendo dieta leve e observação. Se persistir, procure um veterinário.</p>
                        </div>
                      </div>
                    )}
                    {index >= 2 && (
                      <div className="text-center space-y-4">
                        <feature.icon className="w-16 h-16 text-blue-600 mx-auto" />
                        <div className="space-y-2">
                          <div className="font-semibold text-gray-900">{feature.title}</div>
                          <div className="text-sm text-gray-600">Sistema ativo e funcional</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-20 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para experimentar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Comece a usar o VetChatBot hoje mesmo e descubra como nossa IA 
            pode transformar o cuidado com seus animais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Chat")}>
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}