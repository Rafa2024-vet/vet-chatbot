import React from 'react';
import ChatInterface from '../components/chat/ChatInterface';

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 md:pt-0">
      <ChatInterface />
    </div>
  );
}