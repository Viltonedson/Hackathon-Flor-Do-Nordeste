import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import Button from '../ui/Button';
import { toast } from 'react-hot-toast';

interface ProductForm {
  name: string;
  type: string;
  quantity: string;
  weight: string;
  description: string;
  technicalSheet: File | null;
  image: File | null;
  price: string;
}

const SellProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductForm>({
    name: '',
    type: '',
    quantity: '',
    weight: '',
    description: '',
    technicalSheet: null,
    image: null,
    price: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setProduct((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Aqui você implementaria a lógica para enviar os dados para o backend
      console.log('Produto publicado:', product);
      toast.success('Produto publicado com sucesso!');
      navigate('/perfil');
    } catch (error) {
      toast.error('Erro ao publicar produto');
    }
  };

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
        <h1 className="text-2xl font-bold">Publicar Produto</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Imagem do Produto */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Foto do Produto
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {product.image ? (
                  <img
                    src={URL.createObjectURL(product.image)}
                    alt="Preview"
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Clique para upload</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 800x400px)</p>
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Nome do Produto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Produto
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          {/* Preço */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço (R$)
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              step="0.01"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          {/* Tipo de Produto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Produto
            </label>
            <select
              name="type"
              value={product.type}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              required
            >
              <option value="">Selecione um tipo</option>
              <option value="Sementes">Sementes</option>
              <option value="Mudas">Mudas</option>
              <option value="Equipamentos">Equipamentos</option>
              <option value="Artesanato">Artesanato</option>
              <option value="Alimentos">Alimentos</option>
            </select>
          </div>

          {/* Quantidade e Peso */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade
              </label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Peso (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={product.weight}
                onChange={handleInputChange}
                step="0.1"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição do Produto
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          {/* Ficha Técnica */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ficha Técnica (PDF)
            </label>
            <input
              type="file"
              name="technicalSheet"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
            />
          </div>

          {/* Botão de Submit */}
          <Button type="submit" className="w-full">
            Publicar Produto
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SellProduct;