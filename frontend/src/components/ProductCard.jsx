import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useSpring, animated } from 'react-spring'; // Import React Spring
import { motion } from 'framer-motion';

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  const [isLiked, setIsLiked] = useState(false);
  // Create a spring animation for hover effect
  const [props, set] = useSpring(() => ({
    scale: 1,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    config: { tension: 200, friction: 15 },
  }));

  return (
    <animated.div
      className="bg-white rounded-lg shadow-sm transition-shadow duration-300"
      style={props}
      onMouseEnter={() => set({ scale: 1.03, boxShadow: '0px 0px 20px rgba(0,0,0,0.2)' })}
      onMouseLeave={() => set({ scale: 1, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' })}
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <motion.button
            onClick={() => onViewProduct(product)}
            initial={{ translateY: 4 }} // Initial state
            whileHover={{ translateY: 0 }} // Hover animation
            transition={{ duration: 0.2 }} // Duration of the transition
            className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-blue-300 transition-all duration-500 hover:text-white"
          >
            Quick View
          </motion.button>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => setIsLiked(!isLiked)}>
          <Heart className={`w-4 h-4 transition-all duration-1000 ${isLiked ? 'fill-red-600 scale-110' : 'fill-gray-300 scale-100'}`}/>
        </button>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProductCard;
