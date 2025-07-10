import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Maria Silva",
    role: "Veterinária, Clínica Pet Care",
    content: "O VetChatBot revolucionou minha prática. A precisão das orientações preliminares é impressionante e me ajuda a otimizar o tempo com cada paciente, focando no que realmente importa.",
    rating: 5,
    avatar: "https://i.pravatar.cc/64?img=1"
  },
  {
    name: "Carlos Mendes",
    role: "Tutor de Pet",
    content: "Como tutor de primeira viagem, o app me deu a confiança que eu precisava. Sempre que meu cachorro apresenta algo diferente, consigo uma orientação rápida e sei quando devo correr para o veterinário.",
    rating: 5,
    avatar: "https://i.pravatar.cc/64?img=3"
  },
  {
    name: "Ana Costa",
    role: "Estudante de Veterinária",
    content: "Uma ferramenta incrível para estudos! Consigo correlacionar sinais clínicos com possíveis diagnósticos, o que acelera meu aprendizado. Recomendo para todos os colegas de curso.",
    rating: 5,
    avatar: "https://i.pravatar.cc/64?img=5"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos usuários
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {" "}dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Milhares de veterinários e tutores já confiam no VetChatBot para cuidar melhor dos seus animais.
          </p>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col"
            >
              <div className="flex-grow">
                {/* Ícone de Citação */}
                <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Avaliação */}
                <div className="flex gap-1 mb-4 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                {/* Conteúdo */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    "{testimonial.content}"
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
