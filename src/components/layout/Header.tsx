import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="text-2xl font-bold text-primary">
              Flor do Nordeste
            </a>
          </div>

          {/* Search */}
          <div className="hidden flex-1 max-w-xl lg:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar produtos, categorias..."
                className="w-full rounded-lg border border-gray-200 py-2 pl-4 pr-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden lg:flex"
                onClick={() => navigate('/perfil')}
              >
                <User className="h-5 w-5" />
                <span className="ml-2">Perfil</span>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden lg:flex"
                onClick={() => navigate('/login')}
              >
                <User className="h-5 w-5" />
                <span className="ml-2">Entrar</span>
              </Button>
            )}
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2 hidden lg:inline">Carrinho</span>
            </Button>
          </div>
        </div>

        {/* Categories */}
        <nav className="hidden border-t py-3 lg:block">
          <ul className="flex items-center gap-6">
            {['Sementes', 'Mudas', 'Equipamentos', 'Artesanato', 'Alimentos'].map((category) => (
              <li key={category}>
                <a
                  href={`/categoria/${category.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-primary"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;