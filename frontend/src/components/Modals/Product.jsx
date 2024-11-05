import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: "100vh", transition: { duration: 0.3, ease: "easeIn" } }
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
};

const ProductModal = ({ selectedProduct, quantity, setQuantity, handleAddToCart, setSelectedProduct }) => {
    if (!selectedProduct) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 overflow-y-auto"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />

                <div className="flex min-h-full items-center justify-center p-4">
                    <motion.div
                        className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Product Image */}
                                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="max-h-[400px] w-auto object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>

                                    <div className="mt-4 flex items-center space-x-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            {selectedProduct.reviews?.length || 0} reviews
                                        </span>
                                    </div>

                                    <p className="mt-6 text-3xl font-bold text-gray-900">
                                        ${selectedProduct.price.toFixed(2)}
                                    </p>

                                    <div className="mt-4 flex items-center space-x-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            In Stock
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Free Shipping
                                        </span>
                                    </div>

                                    <p className="mt-4 text-gray-600">
                                        {selectedProduct.description}
                                    </p>

                                    {selectedProduct.specifications?.length > 0 && (
                                        <div className="mt-6">
                                            <h3 className="text-sm font-medium text-gray-900">Key Features</h3>
                                            <ul className="mt-2 space-y-2">
                                                {selectedProduct.specifications.map((spec, index) => (
                                                    <li key={index} className="text-sm text-gray-500 flex items-center">
                                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {spec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="mt-8">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center border border-gray-200 rounded-lg">
                                                <button
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                    className="p-2 text-gray-600 hover:text-gray-700"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    readOnly
                                                    className="w-12 text-center border-x border-gray-200 p-2"
                                                />
                                                <button
                                                    onClick={() => setQuantity(quantity + 1)}
                                                    className="p-2 text-gray-600 hover:text-gray-700"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => handleAddToCart(selectedProduct)}
                                                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out flex items-center justify-center space-x-2"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span>Add to Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            {selectedProduct.reviews?.length > 0 && (
                                <div className="mt-12 border-t border-gray-200 pt-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">Reviews</h3>
                                        <button className="text-sm text-indigo-600 hover:text-indigo-500">
                                            See all reviews
                                        </button>
                                    </div>
                                    <ul className="mt-4 space-y-4">
                                        {selectedProduct.reviews.slice(0, 3).map((review, index) => (
                                            <li key={index} className="border border-gray-200 p-4 rounded-lg">
                                                <p className="text-sm text-gray-600">{review.comment}</p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="text-sm font-medium text-gray-800">{review.author}</span>
                                                    <span className="text-sm text-gray-500">{review.rating} / 5</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
