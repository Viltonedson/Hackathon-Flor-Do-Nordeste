import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80"
          alt="Agricultura familiar"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Do Campo à sua Mesa
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Conectamos pequenos produtores rurais e artesãos diretamente aos consumidores. 
            Produtos frescos, orgânicos e artesanais com a qualidade que você merece.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg">
              Explorar Produtos
            </Button>
            <Button variant="secondary" size="lg">
              Seja um Vendedor
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button variant="outline" className="bg-white/20 backdrop-blur-sm">
          <ChevronLeft className="h-5 w-5 text-white" />
        </Button>
        <Button variant="outline" className="bg-white/20 backdrop-blur-sm">
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;