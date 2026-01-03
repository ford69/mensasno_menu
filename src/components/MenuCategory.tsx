import React from 'react';
import { MenuCategory as MenuCategoryType } from '../types/menu';
import { MenuItemCard } from './MenuItemCard';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section className="mb-12">
      <div className="border-b border-gradient-to-r from-orange-500 to-orange-600 pb-3 mb-6">
        <div className="relative">
          <h2 className="text-2xl font-bold text-white text-center">
            {category.name}
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>
      </div>
      <div className="space-y-4">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};