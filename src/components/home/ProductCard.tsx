import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  id?: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  seller: string;
  location: string;
}

const ProductCard = ({ id = '1', title, price, image, rating, seller, location }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-lg border bg-white transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-medium text-gray-900 line-clamp-2">
          {title}
        </h3>
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
        </div>
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-medium">{rating}</span>
        </div>
        <div className="text-sm text-gray-600">
          <p className="font-medium">{seller}</p>
          <div className="mt-1 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="mt-4">
          <Button 
            className="w-full"
            onClick={() => navigate(`/produto/${id}`)}
          >
            Comprar Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;