
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [freeShipping, setFreeShipping] = useState(false);
  const [minRating, setMinRating] = useState(0);

  // Simulação de dados de produtos
  const products = [
    { id: 1, name: 'Semente de Girassol', category: 'sementes', price: 10, rating: 4, freeShipping: true, image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937' },
    { id: 2, name: 'Semente de Abóbora', category: 'sementes', price: 15, rating: 5, freeShipping: false, image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937' },
    { id: 3, name: 'Maçã', category: 'frutas', price: 5, rating: 4, freeShipping: true, image: 'https://via.placeholder.com/150' },
    // Adicione mais produtos conforme necessário
  ];

  // Função para filtrar e ordenar produtos
  const filteredProducts = products
    .filter(product => 
      (category === 'all' || product.category === category) &&
      (freeShipping ? product.freeShipping : true) &&
      product.rating >= minRating &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Produtos - {category}</h1>
      <div className="flex flex-wrap mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="asc">Preço: Menor para Maior</option>
          <option value="desc">Preço: Maior para Menor</option>
        </select>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value={0}>Todas as Avaliações</option>
          <option value={1}>1 Estrela e acima</option>
          <option value={2}>2 Estrelas e acima</option>
          <option value={3}>3 Estrelas e acima</option>
          <option value={4}>4 Estrelas e acima</option>
          <option value={5}>5 Estrelas</option>
        </select>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={freeShipping}
            onChange={() => setFreeShipping(!freeShipping)}
            className="mr-2"
          />
          Frete Grátis
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h2 className="font-bold">{product.name}</h2>
            <p>Categoria: {product.category}</p>
            <p>Preço: R${product.price}</p>
            <p>Avaliação: {product.rating} estrelas</p>
            {product.freeShipping && <p className="text-green-500">Frete Grátis</p>}
            <button className="mt-2 w-full bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-700">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;