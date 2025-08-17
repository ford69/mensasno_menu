import React from 'react';
import { MenuItem } from '../types/menu';
import { Leaf, Flame } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-4">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {item.isVegetarian && (
            <Leaf className="w-4 h-4 text-green-600" title="Vegetarian" />
          )}
          {item.isSpicy && (
            <Flame className="w-4 h-4 text-red-500" title="Spicy" />
          )}
          <span className="text-xl font-bold text-amber-600">
            GH₵{item.price.toFixed(0)}
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};