import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  LocationOn,
  Search,
  ShoppingCart,
  Favorite,
  Clear,
  Menu,
  BusinessCenter,
  Handshake,
  Window,
  Public,
  LocalPhone
} from '@mui/icons-material';
import logo from '../assets/logo.png'
import menuright from '../assets/mrnuright.png'

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('likes')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setLikesCount(likes.length);
    setCartCount(cart.length);
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) return;
    try {
      const res = await axios.get(`${BASE_URL}/ZonCards`);
      const filtered = res.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
      setResults(filtered);
      setShowModal(true);
    } catch (error) {
      console.error('Qidirishda xatolik:', error);
    }
  };

  return (
    <div className="w-full shadow-sm border-b border-gray-200 text-sm font-sans">
      {/* Top Bar */}
      <div className="bg-[#f9f9f9] py-1 px-4 md:px-6 flex justify-between items-center text-[#4f5d75] text-xs">
        <div className="hidden md:flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1"><LocationOn fontSize="small" /><a href="#" className="underline text-[#007aff]">Toshkent</a></span>
          <a href="#" className="flex items-center gap-1"><Handshake fontSize="small" /> Продавайте на Zon.uz</a>
          <a href="#" className="flex items-center gap-1"><BusinessCenter fontSize="small" /> Покупать как юрлицо</a>
          <a href="#" className="flex items-center gap-1">Помощь</a>
          <a href="#" className="flex items-center gap-1">Контакты</a>
        </div>
        <div className="text-black font-bold flex items-center gap-2 whitespace-nowrap text-xs md:text-sm">
          <LocalPhone fontSize='small'/> +998-78 555-35-00
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 md:px-6 py-3 flex justify-between items-center gap-3 relative">
        <div className="flex items-center gap-3">
        <Link to="/" className="">
          <img src={logo} alt="Zon Logo" className="h-6 md:h-7" />
          </Link>
          <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm font-medium">
            <Window fontSize="small" />
            <span>Каталог</span>
          </button>
        </div>

        <div className="hidden md:flex border rounded overflow-hidden flex-1 mx-4 w-[90%] m-auto">
          <input
            type="text"
            placeholder="Найти товары"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 text-sm outline-none flex-1"
          />
          <button onClick={handleSearch} className="px-4 bg-[#d3d8de] flex items-center justify-center">
            <Search fontSize="small" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart fontSize="medium" color='action'/>
            {cartCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">{cartCount}</span>}
          </Link>
          <Link to="/like" className="relative">
            <Favorite fontSize="medium" color='action' />
            {likesCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">{likesCount}</span>}
          </Link>
          <span className='items-center gap-2 text-gray-500 px-2 py-0.5 border-2 rounded-md hidden lg:flex border-gray-300'><Public/> <b>UZ</b></span>
          <img className='w-6' src={menuright} alt="" />
          <button className="bg-[#3b61dd] hover:bg-[#3252c2] text-white text-sm px-4 py-1 rounded">Войти</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          <Menu fontSize="medium" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 border-t text-sm">
          <div className="flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Найти товары"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 text-sm outline-none flex-1"
            />
            <button onClick={handleSearch} className="px-4 bg-[#d3d8de] flex items-center justify-center">
              <Search fontSize="small" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart fontSize="medium" />
              {cartCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">{cartCount}</span>}
            </Link>
            <Link to="/like" className="relative">
              <Favorite fontSize="medium" color="error" />
              {likesCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">{likesCount}</span>}
            </Link>
            <button className="bg-[#3b61dd] hover:bg-[#3252c2] text-white text-sm px-4 py-1 rounded">Войти</button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] bg-white border border-gray-300 rounded shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold">Результаты поиска</h2>
            <button onClick={() => setShowModal(false)}><Clear /></button>
          </div>
          <ul className="space-y-2 max-h-[200px] overflow-y-auto">
            {results.map(item => (
              <li key={item.id} className="border-b pb-1 text-sm">{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;