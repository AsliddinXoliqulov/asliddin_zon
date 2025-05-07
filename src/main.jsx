import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { LikeProvider } from "./context/LikeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LikeProvider>
      <CartProvider>
       <div className="max-w-[1400px] m-auto"> <App /></div>
      </CartProvider>
    </LikeProvider>
  </React.StrictMode>
);
