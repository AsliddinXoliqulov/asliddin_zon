// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Like = () => {
//   const [likedCards, setLikedCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const apiUrl = import.meta.env.VITE_API_URL;

//     axios
//       .get(`${apiUrl}/ZonCards`)
//       .then((res) => {
//         const likedOnly = res.data.filter((card) => card.liked === true);
//         setLikedCards(likedOnly);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Xatolik:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="px-4 py-6">
//       <h2 className="text-2xl font-semibold mb-4">Yoqtirganlar</h2>
//       {loading ? (
//         <p>Yuklanmoqda...</p>
//       ) : likedCards.length === 0 ? (
//         <p>Hozircha yoqtirilgan mahsulotlar yo‘q</p>
//       ) : (
//         <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//           {likedCards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-gray-100 rounded-xl shadow p-4 flex flex-col items-center"
//             >
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="w-full h-40 object-contain mb-2"
//               />
//               <h3 className="text-sm font-semibold mb-1 text-center">
//                 {card.title}
//               </h3>
//               <p className="text-green-600 font-bold">
//                 {card.price.toLocaleString("ru-RU")} so'm
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Like;
