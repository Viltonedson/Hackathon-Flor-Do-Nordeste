import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ChatbotPage = () => {
  const navigate = useNavigate();
  const chatbotUrl = "https://flor-do-nordeste-chatbot-ia.streamlit.app";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/perfil')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Perfil
        </Button>
        <h1 className="text-2xl font-bold">Chat Inteligência Artificial</h1>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-600 mb-4">
          Para uma melhor experiência, nosso chat IA está disponível em uma janela separada.
        </p>
        <Button
          onClick={() => window.open(chatbotUrl, '_blank', 'width=800,height=600')}
          className="flex items-center gap-2 mx-auto"
        >
          Abrir Chat IA
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>

      {/* Alternativa: Link direto */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Outras opções de acesso:</h2>
        <ul className="space-y-4">
          <li>
            <a
              href={chatbotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              Acessar em nova aba
              <ExternalLink className="h-4 w-4" />
            </a>
          </li>
          <li className="text-gray-600">
            Ou copie e cole este link no seu navegador:
            <code className="block mt-2 p-2 bg-white rounded border">
              {chatbotUrl}
            </code>
          </li>
        </ul>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">💡 Dica:</h3>
        <p className="text-sm text-gray-700">
          Nosso Chat IA pode ajudar você com:
          <ul className="list-disc ml-6 mt-2">
            <li>Dúvidas sobre produtos</li>
            <li>Informações sobre cultivo</li>
            <li>Recomendações personalizadas</li>
            <li>Suporte técnico básico</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ChatbotPage;