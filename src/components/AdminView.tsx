import React from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';
import { restaurant } from '../data/menuData';
import { Settings, Menu } from 'lucide-react';

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
            <h1 className="text-4xl font-bold text-white">Restaurant Admin</h1>
          </div>
          <p className="text-lg text-gray-300">
            Manage your digital menu and QR code
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg border border-gray-700/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Restaurant Information</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-orange-400">Name: </span>
                  <span className="text-gray-300">{restaurant.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-orange-400">Description: </span>
                  <span className="text-gray-300">{restaurant.description}</span>
                </div>
                <div>
                  <span className="font-semibold text-orange-400">Address: </span>
                  <span className="text-gray-300">{restaurant.address}</span>
                </div>
                <div>
                  <span className="font-semibold text-orange-400">Phone: </span>
                  <span className="text-gray-300">{restaurant.phone}</span>
                </div>
                <div>
                  <span className="font-semibold text-orange-400">Website: </span>
                  <span className="text-gray-300">{restaurant.website}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg border border-gray-700/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
              <button
                onClick={onViewMenu}
                className="flex items-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg shadow-orange-500/30"
              >
                <Menu className="w-5 h-5" />
                Preview Menu
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg border border-gray-700/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Instructions</h2>
              <div className="space-y-3 text-sm text-gray-300">
                <p>1. <strong className="text-orange-400">Display the QR Code:</strong> Print or display the QR code prominently in your restaurant</p>
                <p>2. <strong className="text-orange-400">Customer Access:</strong> Customers scan the QR code with their phone camera</p>
                <p>3. <strong className="text-orange-400">Instant Menu:</strong> They'll be redirected to your digital menu automatically</p>
                <p>4. <strong className="text-orange-400">Download Options:</strong> Use the download button to save the QR code for printing</p>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <QRCodeGenerator url={menuUrl} restaurantName={restaurant.name} />
          </div>
        </div>
      </div>
    </div>
  );
};