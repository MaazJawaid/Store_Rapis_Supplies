// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p>Price: ${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
