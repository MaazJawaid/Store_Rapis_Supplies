import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListingPage from './components/ProductListingPage.jsx';
import ShoppingCartComponent from './components/ShoppingCartComponent.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListingPage />} />
      <Route path="/cart" element={<ShoppingCartComponent />} />
    </Routes>
  );
};

export default AppRoutes;
