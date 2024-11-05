import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const ProductFilteringComponent = ({ categories, selectedCategory, onCategoryChange, searchTerm, onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm);

  // Create a debounced version of the onSearchChange function
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearchChange(value);
    }, 300), // Adjust the delay as needed
    [onSearchChange]
  );

  // Handle input change and update inputValue state
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  // Cleanup function to cancel the debounced search on component unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="w-full my-4 relative">
      <div className="flex space-x-2">
        {/* Custom Dropdown Button */}
        <div
          className="p-2 border rounded-r-md bg-white shadow-md cursor-pointer w-1/3 mb-2 border-gray-300 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
        >
          <span>{selectedCategory || 'Select a category'}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue} // Use the local input value state
          onChange={handleInputChange} // Use the debounced input change handler
          className="p-2 border rounded-l-md w-2/3 sm:w-full mb-2 border-gray-300"
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute mt-1 w-1/4 bg-white shadow-lg rounded-md z-10 border border-gray-300"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: '#f0f0f0' }}
                className={`p-2 cursor-pointer ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFilteringComponent;
