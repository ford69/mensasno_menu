import React from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';
import { restaurant } from '../data/menuData';
import { Settings } from 'lucide-react';

interface AdminViewProps {
  onViewMenu: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ onViewMenu }) => {
  const menuUrl = window.location.origin + '/menu';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex flex-col items-center mb-4">
            <img 
              src="/images/mensaano-logo.JPG" 
              alt="Men SaaNo Papabi Logo" 
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg mb-4"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">Restaurant Menu QR Code</h1>
          </div>
          <p className="text-lg text-gray-300">
            View our digital menu by scanning the QR code below
          </p>
        </header>

        <div className="flex justify-center items-start">
          <div className="max-w-md w-full">
            <QRCodeGenerator url={menuUrl} restaurantName={restaurant.name} />
          </div>
        </div>
      </div>
    </div>
  );
};