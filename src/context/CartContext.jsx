import React, { createContext, useState, useContext } from 'react';

// CartContext yaratish
const CartContext = createContext();

// CartProvider yaratish
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Savatchaga mahsulot qo'shish
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Savatchadan mahsulotni olib tashlash
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// CartContext-ni ishlatish uchun hook
export const useCart = () => useContext(CartContext);
