import React, { useState } from 'react';
import { RestaurantHeader } from './RestaurantHeader';
import { MenuCategory } from './MenuCategory';
import { restaurant, menuCategories } from '../data/menuData';

export const MenuView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0]?.id || '');

  const activeCategory = menuCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantHeader restaurant={restaurant} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 shadow-sm border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Category Content */}
        {activeCategory && (
          <div className="animate-fadeIn">
            <MenuCategory key={activeCategory.id} category={activeCategory} />
          </div>
        )}
        
        <footer className="text-center py-8 border-t border-gray-200 mt-12">
          <p className="text-gray-600">
            Thank you for dining with us! Please let your server know about any allergies or dietary restrictions.
          </p>
        </footer>
      </main>
    </div>
  );
};