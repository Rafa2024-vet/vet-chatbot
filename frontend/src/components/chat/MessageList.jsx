import React from 'react';
import ChatMessage from './ChatMessage';
import { Bot } from 'lucide-react';

export default function MessageList({ messages, messagesEndRef, isLoadingBot }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
      {messages.map(msg => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      {isLoadingBot && (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="bg-gray-200 text-gray-700 p-3 rounded-2xl rounded-bl-none max-w-md animate-pulse">
            Digitando...
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}