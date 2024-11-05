// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartState } from '../hooks/useCartState.jsx'; // Import your cart state hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { cart } = useCartState(); // Get the cart state from the hook
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Navbar re-rendered with cart:', cart);
    }, [cart]);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div onClick={() => navigate("/")} className="text-white text-xl font-bold cursor-pointer">
                    Shop
                </div>
                <div onClick={() => navigate("/cart")} className="relative flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
                    {totalQuantity > -1 && (
                        <span className="absolute -top-4 right-5 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            {totalQuantity}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
