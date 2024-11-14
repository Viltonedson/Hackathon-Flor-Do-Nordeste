import React, { useState } from 'react';
import { Heart, MessageCircle, ShieldCheck, Download } from 'lucide-react';
import Button from '../ui/Button';
import ProductImageGallery from './ProductImageGallery';
import SellerInfo from './SellerInfo';
import ProductReviews from './ProductReviews';
import { cn } from '@/lib/utils';

const ProductPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: 'Café Especial Orgânico - Produtor João Silva',
    price: 49.90,
    weight: 0.5,
    stock: 50,
    origin: 'Serra da Mantiqueira, MG',
    description: 'Café especial cultivado a 1.200m de altitude, com notas de chocolate e caramelo. Processo natural de secagem e torrefação artesanal.',
    pdfUrl: '/docs/ficha-tecnica-cafe.pdf',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Images */}
        <ProductImageGallery />

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500">/unidade</span>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  'gap-2',
                  isWishlisted && 'text-red-500 hover:text-red-600'
                )}
              >
                <Heart className="h-5 w-5" fill={isWishlisted ? 'currentColor' : 'none'} />
                Lista de Desejos
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 rounded-lg bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Peso:</span>
                <span className="ml-2 font-medium">{product.weight}kg</span>
              </div>
              <div>
                <span className="text-gray-600">Estoque:</span>
                <span className="ml-2 font-medium">{product.stock} unidades</span>
              </div>
              <div>
                <span className="text-gray-600">Origem:</span>
                <span className="ml-2 font-medium">{product.origin}</span>
              </div>
              <div>
                <span className="text-gray-600">Categoria:</span>
                <span className="ml-2 font-medium">Alimentos</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Quantidade:
              </label>
              <select
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                className="rounded-md border border-gray-300 px-3 py-2"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Adicionar ao Carrinho
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                <MessageCircle className="mr-2 h-5 w-5" />
                Negociar
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => window.open(product.pdfUrl)}
            >
              <Download className="h-5 w-5" />
              Baixar Ficha Técnica (PDF)
            </Button>
          </div>

          {/* Security Badge */}
          <div className="flex items-center gap-2 rounded-lg border border-green-100 bg-green-50 p-3 text-sm text-green-700">
            <ShieldCheck className="h-5 w-5" />
            <span>Compra 100% segura com garantia Flor do Norde</span>
          </div>

          {/* Description */}
          <div className="prose prose-sm max-w-none">
            <h2 className="text-xl font-semibold">Descrição do Produto</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Seller Info */}
      <div className="mt-12">
        <SellerInfo />
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <ProductReviews />
      </div>
    </div>
  );
};

export default ProductPage;