import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Button from '../ui/Button';

const ProductImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?auto=format&fit=crop&q=80',
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={`Produto - Imagem ${selectedImage + 1}`}
          className="h-full w-full object-cover"
        />
        <Button
          variant="outline"
          className="absolute right-4 top-4 bg-white/80 backdrop-blur-sm"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md ${
                selectedImage === index
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              <img
                src={image}
                alt={`Miniatura ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full bg-white/80 p-0"
            onClick={() => setSelectedImage((prev) => Math.max(0, prev - 1))}
            disabled={selectedImage === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full bg-white/80 p-0"
            onClick={() =>
              setSelectedImage((prev) => Math.min(images.length - 1, prev + 1))
            }
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;