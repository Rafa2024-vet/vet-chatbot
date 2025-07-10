import React from "react";
import {
  Heart,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Dr. João Silva",
    role: "CEO & Veterinário",
    bio: "Veterinário com 15 anos de experiência e especialista em IA aplicada à medicina veterinária.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Maria Santos",
    role: "CTO",
    bio: "Engenheira de software especializada em machine learning e inteligência artificial.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Diretor Científico",
    bio: "Veterinário e pesquisador com doutorado em medicina veterinária pela USP.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  }
];

const values = [
  {
    icon: Heart,
    title: "Amor pelos Animais",
    description: "Nossa paixão pelos animais é o que nos motiva a criar tecnologia que realmente faça a diferença."
  },
  {
    icon: Target,
    title: "Precisão Científica",
    description: "Baseamos todas nossas decisões em evidências científicas e dados comprovados."
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em parceria com veterinários para criar soluções realmente úteis."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos constantemente a perfeição em tudo que fazemos."
  }
];

export default function About() {
  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Nossa História
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Revolucionando o
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {" "}cuidado animal
            </span>
            <br />com tecnologia
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Somos uma equipe apaixonada por animais e tecnologia, dedicada a
            criar soluções inovadoras que tornem o cuidado veterinário mais
            acessível, preciso e eficiente para todos.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Nossa Missão</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Democratizar o acesso ao conhecimento veterinário através da
              inteligência artificial, oferecendo diagnósticos precisos e
              orientações confiáveis para veterinários e tutores de animais
              em todo o mundo.
            </p>
            <div className="space-y-4">
              {[
                "Tornar o diagnóstico veterinário mais acessível",
                "Reduzir o tempo de identificação de problemas de saúde",
                "Apoiar veterinários com tecnologia de ponta",
                "Educar tutores sobre cuidados preventivos"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
                alt="Veterinário cuidando de animal"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50k+</div>
                <div className="text-sm text-gray-600">Animais Atendidos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e desenvolvimento em nossa jornada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais dedicados que combinam expertise veterinária com inovação tecnológica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Faça parte da revolução
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de veterinários e tutores que já confiam
            no VetChatBot para cuidar melhor dos seus animais.
          </p>
          <Link to={createPageUrl("Chat")}>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group mx-auto">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}