import React from 'react';
import { Leaf, Sprout, Wrench, Palette, Coffee } from 'lucide-react';
import Button from '@/components/ui/Button';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';

const categories = [
  { icon: <Leaf className="h-8 w-8" />, title: 'Sementes', count: 1234 },
  { icon: <Sprout className="h-8 w-8" />, title: 'Mudas', count: 856 },
  { icon: <Wrench className="h-8 w-8" />, title: 'Equipamentos', count: 567 },
  { icon: <Palette className="h-8 w-8" />, title: 'Artesanato', count: 789 },
  { icon: <Coffee className="h-8 w-8" />, title: 'Alimentos', count: 432 },
];

const featuredProducts = [
  {
    title: 'Café Especial Bourbon Amarelo',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9',
    rating: 4.8,
    seller: 'Fazenda Alta Vista',
    location: 'Serra do Caparaó, ES'
  },
  {
    title: 'Mel Orgânico Silvestre',
    price: 45.50,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
    rating: 4.9,
    seller: 'Apiário Flores do Campo',
    location: 'Vale do Ribeira, SP'
  },
  {
    title: 'Cesta de Produtos Orgânicos',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
    rating: 4.7,
    seller: 'Horta Familiar Orgânica',
    location: 'Região Serrana, RJ'
  },
  {
    title: 'Artesanato em Palha Natural',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38',
    rating: 4.6,
    seller: 'Artesãs do Vale',
    location: 'Vale do Jequitinhonha, MG'
  }
];

const Main = () => {
  return (
    <>
      {/* Categories Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">Categorias</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16 px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Produtos em Destaque</h2>
          <Button variant="outline">Ver Todos</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;