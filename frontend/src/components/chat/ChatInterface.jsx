// frontend/src/components/chat/ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Bot } from 'lucide-react';
import { sendMessageToBot } from '../../services/apiService'; // Importe o serviço de API!

const initialMessages = [
  { id: 1, text: 'Olá! Sou o VetChatBot, seu assistente veterinário virtual. Como posso ajudar você e seu pet hoje?', sender: 'bot', timestamp: new Date() }
];

export default function ChatInterface() {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text) => {
    const newUserMessage = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    try {
      // Chama a função do nosso apiService
      const botResponseText = await sendMessageToBot(text);

      const newBotMessage = {
        id: `bot-${Date.now()}`,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);

    } catch (error) {
      // Se a API falhar, mostra uma mensagem de erro específica
      const newBotMessage = {
        id: `bot-error-${Date.now()}`,
        text: "Desculpe, estou com dificuldades para processar sua solicitação no momento. Verifique sua conexão ou tente novamente mais tarde.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] bg-white shadow-2xl rounded-xl border border-gray-200 overflow-hidden my-4">
      {/* Header do Chat */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">VetChatBot Assistente</h2>
            <p className="text-xs text-blue-100">Online</p>
          </div>
        </div>
      </div>

      {/* Lista de Mensagens */}
      <MessageList messages={messages} messagesEndRef={messagesEndRef} isLoadingBot={isLoading} />

      {/* Input de Mensagem */}
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}