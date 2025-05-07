import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { VscLoading } from "react-icons/vsc";
import axios from "axios";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ZonCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/ZonCards`)
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const addToCart = (card) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === card.id);
    if (!isAlreadyInCart) {
      const newCard = { ...card, count: 1 }; // count: 1 qo‘shildi
      const updatedCart = [...cartItems, newCard];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const toggleLike = async (id, currentLiked) => {
    try {
      const updated = { liked: !currentLiked };
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.put(`${apiUrl}/ZonCards/${id}`, updated);

      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, liked: !currentLiked } : card
        )
      );
    } catch (error) {
      console.error("Like o'zgartirishda xatolik:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 relative">
      {loading ? (
        <div className="absolute right-[50%] top-10 transform translate-x-1/2">
          <VscLoading className="animate-spin text-5xl text-blue-500" />
        </div>
      ) : (
        cards.map((card) => {
          const isInCart = cartItems.some((item) => item.id === card.id);
          const isDisabled = isInCart || card.sale;

          return (
            <div
              key={card.id}
              className="shadow-md rounded-2xl p-3 relative hover:shadow-lg transition duration-300 max-w-60"
            >
              {card.sale && (
                <span className="absolute bottom-16 left-2 bg-red-200 text-red-500 text-xs px-2 py-0.5 rounded-2xl font-bold">
                  Нет в наличии
                </span>
              )}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 rounded-t-2xl object-contain mb-2"
              />
              <h2 className="text-sm font-medium text-gray-500 mb-1 line-clamp-2 h-5">
                {card.title}
              </h2>
              <div className="w-full h-5"></div>
              <div className="flex justify-between items-center">
                <span className="mt-5">
                  <p className="text-base font-bold">
                    {card.price.toLocaleString("ru-RU")} so'm
                  </p>
                  <p className=" text-sm text-gray-400 line-through">250 000</p>
                </span>
                <button
                  className={`text-[#1bc5bd] bg-white text-2xl border border-gray-400 w-9 h-9 rounded-full flex items-center justify-center ${
                    isDisabled
                      ? "cursor-not-allowed text-gray-400"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => addToCart(card)}
                  disabled={isDisabled}
                >
                  <MdOutlineAddShoppingCart />
                </button>
              </div>
              <button
                className={`${
                  card.liked ? "text-red-500" : "text-[#f1f1f1]"
                } absolute top-2 right-2`}
                onClick={() => toggleLike(card.id, card.liked)}
              >
                <Heart fill={card.liked ? "red" : "#f1f1f1"} />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ZonCards;
