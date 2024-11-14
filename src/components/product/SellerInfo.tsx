import React from 'react';
import { Star, MapPin, Award } from 'lucide-react';
import Button from '../ui/Button';

const SellerInfo = () => {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-xl font-semibold">Informações do Vendedor</h2>
      
      <div className="mt-4 flex items-start gap-6">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
            alt="Vendedor"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">João Silva</h3>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="ml-1 text-sm font-medium">4.8</span>
                </div>
                <span className="text-sm text-gray-500">(123 avaliações)</span>
              </div>
            </div>
            <Button>Ver Perfil</Button>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Minas Gerais, Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4" />
              <span>Vendedor Verificado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;