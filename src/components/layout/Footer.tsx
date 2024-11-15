import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4">
            <h5 className="font-bold mb-2">Sobre nós</h5>
            <ul>
              <li><p>Sua feira digital, conectando produtores e compradores com qualidade e segurança.</p></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="font-bold mb-2">Ganhe Dinheiro Conosco</h5>
            <ul>
              <li><a href="#" className="hover:underline">Venda Conosco</a></li>
              <li><a href="#" className="hover:underline">Seja um Associado</a></li>
              <li><a href="#" className="hover:underline">Anuncie Seus Produtos</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="font-bold mb-2">Deixe-nos Ajudá-lo</h5>
            <ul>
              <li><a href="#" className="hover:underline">Sua Conta</a></li>
              <li><a href="#" className="hover:underline">Frete e Entrega</a></li>
              <li><a href="#" className="hover:underline">Devoluções e Reembolsos</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="font-bold mb-2">Suporte e Políticas</h5>
            <ul>
              <li><a href="#" className="hover:underline">Política de Devolução</a></li>
              <li><a href="#" className="hover:underline">Atendimento ao Cliente</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h5 className="font-bold mb-2">Inscreva-se na nossa Newsletter</h5>
          <form className="flex">
            <input type="email" placeholder="Seu email" className="w-full p-2 rounded-l-md border border-gray-300 focus:outline-none" />
            <button type="submit" className="bg-indigo-600 text-white p-2 rounded-r-md hover:bg-indigo-700">Inscrever-se</button>
          </form>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Flor do Nordeste. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;