import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Send, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

const Messages = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Como posso ajudar?',
      sender: 'seller',
      timestamp: new Date('2024-03-15T10:00:00'),
    },
    {
      id: 2,
      text: 'Gostaria de saber mais sobre o produto',
      sender: 'user',
      timestamp: new Date('2024-03-15T10:01:00'),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: 'user',
          timestamp: new Date(),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/perfil')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Mensagens</h1>
      </div>

      <div className="rounded-lg border bg-white">
        {/* Messages Container */}
        <div className="h-[600px] overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`mt-1 text-xs ${
                      message.sender === 'user'
                        ? 'text-white/80'
                        : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;