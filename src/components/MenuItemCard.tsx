import React from 'react';
import { MenuItem } from '../types/menu';
import { Leaf, Flame } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg border border-gray-700/50 p-6 hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white flex-1 mr-4">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {item.isVegetarian && (
            <Leaf className="w-4 h-4 text-green-400" title="Vegetarian" />
          )}
          {item.isSpicy && (
            <Flame className="w-4 h-4 text-orange-500" title="Spicy" />
          )}
          <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            GH₵{item.price.toFixed(0)}
          </span>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};