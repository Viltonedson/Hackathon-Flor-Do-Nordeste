import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import Button from '../ui/Button';

const ProductReviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Maria Santos',
      rating: 5,
      date: '15/03/2024',
      content: 'Café excepcional! Aroma intenso e sabor equilibrado. Recomendo muito!',
      helpful: 12,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      author: 'Carlos Oliveira',
      rating: 4,
      date: '10/03/2024',
      content: 'Ótimo café, entrega rápida. Só achei o preço um pouco alto.',
      helpful: 8,
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Avaliações dos Compradores</h2>
        <Button>Avaliar Produto</Button>
      </div>

      <div className="mt-6 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-t pt-6 first:border-t-0 first:pt-0">
            <div className="flex gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{review.author}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'fill-warning text-warning'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.content}</p>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-gray-600"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Útil ({review.helpful})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;