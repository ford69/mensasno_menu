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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900">Restaurant Admin</h1>
          </div>
          <p className="text-lg text-gray-600">
            Manage your digital menu and QR code
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Information</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Name: </span>
                  <span className="text-gray-600">{restaurant.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Description: </span>
                  <span className="text-gray-600">{restaurant.description}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Address: </span>
                  <span className="text-gray-600">{restaurant.address}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Phone: </span>
                  <span className="text-gray-600">{restaurant.phone}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Website: </span>
                  <span className="text-gray-600">{restaurant.website}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <button
                onClick={onViewMenu}
                className="flex items-center gap-2 w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                <Menu className="w-5 h-5" />
                Preview Menu
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p>1. <strong>Display the QR Code:</strong> Print or display the QR code prominently in your restaurant</p>
                <p>2. <strong>Customer Access:</strong> Customers scan the QR code with their phone camera</p>
                <p>3. <strong>Instant Menu:</strong> They'll be redirected to your digital menu automatically</p>
                <p>4. <strong>Download Options:</strong> Use the download button to save the QR code for printing</p>
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