import React from "react";
import { 
  Brain, 
  Clock, 
  Shield, 
  Stethoscope, 
  Users, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Especializada",
    description: "Algoritmos treinados especificamente em medicina veterinária com milhares de casos reais e literatura científica."
  },
  {
    icon: Clock,
    title: "Diagnóstico Rápido",
    description: "Receba orientações preliminares em segundos para situações que podem precisar de atenção imediata."
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Seus dados são protegidos e as recomendações são baseadas em evidências científicas."
  },
  {
    icon: Stethoscope,
    title: "Múltiplas Especialidades",
    description: "Cobertura completa desde cães e gatos até animais exóticos, com base em ampla literatura."
  },
  {
    icon: Users,
    title: "Para Profissionais e Tutores",
    description: "Uma ferramenta de apoio para veterinários, estudantes e uma fonte de orientação para tutores."
  },
  {
    icon: Zap,
    title: "Sempre Atualizado",
    description: "Nossa base de conhecimento é constantemente atualizada com as mais recentes descobertas científicas."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {" "}VetChatBot?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Combinamos tecnologia de ponta com conhecimento veterinário especializado para oferecer o melhor suporte no cuidado com animais.
          </p>
        </div>

        {/* Grade de Funcionalidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
