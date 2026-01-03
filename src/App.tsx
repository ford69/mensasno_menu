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
    return <MenuView />;
  }

  return <AdminView onViewMenu={handleViewMenu} />;
}

export default App;