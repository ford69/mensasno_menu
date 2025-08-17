import React from 'react';
import { MenuCategory as MenuCategoryType } from '../types/menu';
import { MenuItemCard } from './MenuItemCard';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section className="mb-12">
      <div className="border-b border-amber-200 pb-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          {category.name}
        </h2>
      </div>
      <div className="space-y-4">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};