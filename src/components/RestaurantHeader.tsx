import React from 'react';
import { Restaurant } from '../types/menu';
import { MapPin, Phone, Globe } from 'lucide-react';

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ restaurant }) => {
  return (
    <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 border-b-4 border-orange-400 shadow-lg shadow-orange-500/30">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/images/mensaano-logo.JPG" 
            alt="Men SaaNo Papabi Logo" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-300 shadow-xl mb-4"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          {restaurant.name}
        </h1>
        <p className="text-lg text-orange-50 mb-6 italic">
          {restaurant.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <a href={`tel:${restaurant.phone}`} className="hover:text-orange-100 transition-colors">
              {restaurant.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white" />
            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" 
               className="hover:text-orange-100 transition-colors">
              {restaurant.website}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};