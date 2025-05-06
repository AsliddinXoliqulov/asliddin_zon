import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchProducts = () => axios.get(`${BASE_URL}/products`);
export const fetchSwiperImages = () => axios.get(`${BASE_URL}/slider`);
