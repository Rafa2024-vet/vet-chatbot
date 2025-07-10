import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Heart
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contato@vetchatbot.com",
    description: "Responderemos em até 24 horas"
  },
  {
    icon: Phone,
    title: "Telefone",
    details: "+55 (11) 9999-9999",
    description: "Seg a Sex, 9h às 18h"
  },
  {
    icon: MapPin,
    title: "Endereço",
    details: "São Paulo, SP - Brasil",
    description: "Atendimento remoto disponível"
  },
  {
    icon: Clock,
    title: "Horário",
    details: "24/7 Online",
    description: "IA sempre disponível"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Entre em Contato
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Estamos aqui para
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {" "}ajudar
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Tem dúvidas sobre o VetChatBot? Quer saber mais sobre como podemos 
            ajudar você e seus animais? Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fale conosco
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe está sempre pronta para responder suas perguntas 
                e ajudar com qualquer dúvida sobre nossos serviços.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Envie sua mensagem
                  </h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato em breve.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" required className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" required className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
                    <Input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Sobre o que você gostaria de falar?" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Descreva sua dúvida ou sugestão..." rows={6} required className="w-full resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-600 mb-8">Obrigado pelo seu contato. Nossa equipe responderá em até 24 horas.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Enviar Nova Mensagem
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}