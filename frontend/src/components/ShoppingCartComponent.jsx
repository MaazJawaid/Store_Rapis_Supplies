import React, { useState, useEffect } from 'react';
import { useCartState } from '../hooks/useCartState';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const ShoppingCartComponent = () => {
  const { cart, removeFromCart, updateQuantity } = useCartState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const GST_RATE = 0.18;

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleSelectAll = () => {
    setSelectedItems(prev =>
      prev.length === cart.length ? [] : cart.map(item => item.id)
    );
  };

  const removeSelectedItems = () => {
    selectedItems.forEach(id => {
      const item = cart.find(item => item.id === id);
      if (item) removeFromCart(id, item.name);
    });
    setSelectedItems([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gstAmount = subtotal * GST_RATE;
  const total = subtotal + gstAmount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const [springProps, setSpring] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 15 },
  }));

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="max-w-full mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          {cart.length > 0 && !loading && (
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={toggleSelectAll}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {selectedItems.length === cart.length ? 'Deselect All' : 'Select All'}
              </button>
              {selectedItems.length > 0 && (
                <motion.button
                  onClick={removeSelectedItems}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  Remove Selected
                </motion.button>
              )}
            </div>
          )}
        </div>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="w-full h-6 bg-gray-200 rounded"></div>
            <div className="w-full h-6 bg-gray-200 rounded"></div>
            <div className="w-full h-6 bg-gray-200 rounded"></div>
          </div>
        ) : cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="divide-y"
            >
              <AnimatePresence>
                {cart.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="py-4 flex flex-col md:flex-row items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleItemSelection(item.id)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <div className="flex flex-col md:flex-row flex-1 items-center gap-4">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full md:w-52 cursor-pointer h-32 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className='flex'>
                        <div className="flex items-center gap-2">
                          <animated.button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                            onMouseEnter={() => setSpring({ scale: 1.1 })}
                            onMouseLeave={() => setSpring({ scale: 1 })}
                          >
                            <MinusCircle className="h-4 w-4" />
                          </animated.button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <animated.button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                            style={springProps}
                          >
                            <PlusCircle className="h-4 w-4" />
                          </animated.button>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className="w-24 text-right font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <motion.button
                            onClick={() => removeFromCart(item.id, item.name)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            whileTap={{ scale: 0.95 }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </motion.button>

                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="border-t pt-4 space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST (18%)</span>
                <span>${gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <motion.button
                className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartComponent;
