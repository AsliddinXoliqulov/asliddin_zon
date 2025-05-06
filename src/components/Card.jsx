import React, { useEffect, useState } from 'react';
import { Minus, Plus, Trash } from 'lucide-react';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cartItems');
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error("Cart items could not be parsed:", e);
      }
    }
  }, []);

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-white rounded-xl shadow-md">
      {/* Mahsulotlar qismi */}
      <div className="flex-1 border-2 border-gray-300 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Корзина</h2>

        {items.length === 0 ? (
          <p className="text-gray-600">Корзина пустая</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-lg font-bold mt-1">{item.price.toLocaleString()} сум</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-red-600 border rounded-full w-8 h-8 flex items-center justify-center">
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium">1</span>
                <button className="text-green-600 border rounded-full w-8 h-8 flex items-center justify-center">
                  <Plus size={16} />
                </button>
              </div>
              <button className="text-red-600 ml-4" onClick={() => removeItem(item.id)}>
                <Trash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Umumiy narx */}
      <div className="w-full md:w-1/3 border-2 border-gray-300 p-4 rounded-xl">
        <div className="flex justify-between text-lg font-medium mb-2">
          <span>Итого</span>
          <span>{totalPrice.toLocaleString()} сум</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Доставка</span>
          <span className="text-green-600">бесплатно</span>
        </div>
        <p className="text-xs text-gray-600 mb-4">
          Для заказа товаров требуется регистрация. Если вы уже зарегистрированы, войдите в свою учетную запись.
        </p>
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
          Заказать
        </button>
        <p className="text-xs text-gray-600 mt-2">
          ✓ Согласен с условиями <a href="#" className="underline">Правил пользования</a> и <a href="#" className="underline">правилами возврата</a>
        </p>
      </div>
    </div>
  );
};

export default Cart;
