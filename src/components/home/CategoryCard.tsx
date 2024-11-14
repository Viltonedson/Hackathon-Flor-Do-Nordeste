
import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  count: number;
}

const CategoryCard = ({ icon, title, count }: CategoryCardProps) => {
  return (
    <a
      href={`/categoria/${title.toLowerCase()}`}
      className="group flex flex-col items-center rounded-lg border bg-white p-6 transition-all hover:border-primary hover:shadow-md"
    >
      <div className="mb-4 text-gray-600 transition-colors group-hover:text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{count} produtos</p>
    </a>
  );
};

export default CategoryCard;