import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppContent from './AppContent';

export default function App() {
  return (
    <Router>
      <AppHeader />
      <AppContent />
    </Router>
  );
}
