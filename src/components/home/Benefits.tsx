import { Shield, Truck, Heart, Users } from 'lucide-react';

<link rel="stylesheet" href="style.css" />
const benefits = [
  {
    icon: Shield,
    title: 'Compra Segura',
    description: 'Garantimos a segurança de todas as suas transações'
  },
  {
    icon: Truck,
    title: 'Entrega Rastreada',
    description: 'Acompanhe seu pedido em tempo real'
  },
  {
    icon: Heart,
    title: 'Produtos Artesanais',
    description: 'Qualidade e origem garantida'
  },
  {
    icon: Users,
    title: 'Apoio ao Produtor',
    description: 'Fortalecendo a agricultura familiar'
  }
];

const Benefits = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center"
            >
              <div className="rounded-full bg-primary/10 p-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default Benefits;