import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ProductFilteringComponent from './ProductFilteringComponent';
import { useCartState } from '../hooks/useCartState';
import ProductModal from './Modals/Product';
import ProductList from './ProductList';
import { motion } from 'framer-motion';

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const { addToCart } = useCartState();

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart!`);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <ProductFilteringComponent
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm} // Pass search term
        onSearchChange={setSearchTerm} // Update search term
      />
      <ProductList
        selectedCategory={selectedCategory}
        searchTerm={searchTerm} // Pass search term
        onAddToCart={handleAddToCart}
        onViewProduct={handleViewProduct}
      />

      {/* Side Panel for Product Details */}
      <ProductModal
        selectedProduct={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        setSelectedProduct={setSelectedProduct}
      />
    </motion.div>
  );
};

export default ProductListingPage;
