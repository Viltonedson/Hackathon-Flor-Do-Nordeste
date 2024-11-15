import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Package,
  MapPin,
  MessageSquare,
  Bot,
  Calendar,
  HeadphonesIcon,
  
} from 'lucide-react';

function ProfileOption({ icon: Icon, title, description, onClick }: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const options = [
    {
      icon: Package,
      title: 'Seus pedidos',
      description: 'Acompanhe seus pedidos e histórico de compras',
      onClick: () => {},
    },
    {
      icon: MapPin,
      title: 'Seus endereços',
      description: 'Gerencie seus endereços de entrega',
      onClick: () => {},
    },
    {
      icon: MessageSquare,
      title: 'Suas mensagens',
      description: 'Visualize suas mensagens e notificações',
      onClick: () => navigate('/messages'),
    },
    {
      icon: Bot,
      title: 'Chat Inteligência Artificial',
      description: 'Tire suas dúvidas com nossa IA',
      onClick: () => navigate('/chat-ia'),
    },
    {
      icon: Calendar,
      title: 'Planejamentos',
      description: 'Gerencie seus planejamentos e metas',
      onClick: () => navigate('/dashboard'),
    },
    {
      icon: HeadphonesIcon,
      title: 'Atendimento ao cliente',
      description: 'Entre em contato com nosso suporte',
      onClick: () => {},
    },
    {
      icon: Package,
      title: 'Vender seu produto',
      description: 'Anuncie um novo produto para venda',
      onClick: () => navigate('/publicar-produto'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sua conta</h1>
        <p className="text-gray-600">Bem-vindo(a), {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <ProfileOption
            key={index}
            icon={option.icon}
            title={option.title}
            description={option.description}
            onClick={option.onClick}
          />
        ))}
      </div>
    </div>
  );
}