import React, { createContext, useState, useContext } from 'react';

// LikeContext yaratish
const LikeContext = createContext();

// LikeProvider yaratish
export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  // Mahsulotni liked holatiga qo'shish yoki olib tashlash
  const toggleLike = (productId) => {
    setLikedItems((prevItems) =>
      prevItems.includes(productId)
        ? prevItems.filter(item => item !== productId)
        : [...prevItems, productId]
    );
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

// LikeContext-ni ishlatish uchun hook
export const useLike = () => useContext(LikeContext);
