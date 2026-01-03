import React, { useState, useEffect } from 'react';
import { MenuView } from './components/MenuView';
import { AdminView } from './components/AdminView';

function App() {
  const [currentView, setCurrentView] = useState<'admin' | 'menu'>('admin');

  useEffect(() => {
    // Check if we're on the menu path
    const path = window.location.pathname;
    if (path === '/menu' || path.includes('/menu')) {
      setCurrentView('menu');
    }
  }, []);

  const handleViewMenu = () => {
    setCurrentView('menu');
    // Update URL without full page reload
    window.history.pushState({}, '', '/menu');
  };

  const handleBackToAdmin = () => {
    setCurrentView('admin');
    window.history.pushState({}, '', '/');
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/menu' || path.includes('/menu')) {
        setCurrentView('menu');
      } else {
        setCurrentView('admin');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentView === 'menu') {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleBackToAdmin}
            className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700/50"
          >
            ← Admin
          </button>
        </div>
        <MenuView />
      </div>
    );
  }

  return <AdminView onViewMenu={handleViewMenu} />;
}

export default App;