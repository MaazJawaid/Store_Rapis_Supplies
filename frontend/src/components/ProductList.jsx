import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from './Spinners/Spinner';

const fetchProducts = async () => {
  const response = await fetch('http://localhost:5000/api/products'); // Update the URL to your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const ProductList = ({ selectedCategory, searchTerm, onAddToCart, onViewProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    // If products are still loading, show the spinner
    return <LoadingSpinner />;
  }

  if (error) {
    // If there's an error, you can handle it here
    return <div>Error: {error}</div>;
  }

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewProduct={onViewProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
