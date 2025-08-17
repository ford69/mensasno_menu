import React from 'react';
import { Restaurant } from '../types/menu';
import { MapPin, Phone, Globe } from 'lucide-react';

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ restaurant }) => {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {restaurant.name}
        </h1>
        <p className="text-lg text-gray-700 mb-6 italic">
          {restaurant.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-600" />
            <a href={`tel:${restaurant.phone}`} className="hover:text-amber-600 transition-colors">
              {restaurant.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-amber-600" />
            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" 
               className="hover:text-amber-600 transition-colors">
              {restaurant.website}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};