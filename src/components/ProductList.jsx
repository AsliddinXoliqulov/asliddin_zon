import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductCard from './ProductCard';
import { VscLoading } from 'react-icons/vsc';
import ZonCards from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => {
        // Tekshirish: agar res.data massiv bo'lsa, uni setProducts ga o'rnatish
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Ma'lumotlar massiv emas:", res.data);
        }
      })
      .catch((error) => {
        console.error("API xatosi:", error);
      });
  }, []);

  return (
    <div className='flex items-center justify-center w-full pt-5'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <ZonCards key={product.id} product={product} />
        ))
      ) : (
         <b><VscLoading className="animate-spin text-5xl font-black text-blue-500"/></b>
      )}
    </div>
  );
};

export default ProductList;
