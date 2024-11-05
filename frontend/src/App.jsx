import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx'; // Import the routes
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
