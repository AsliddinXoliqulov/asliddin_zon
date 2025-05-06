import React from 'react';
// import ProductList from '../components/ProductList';
import SwiperSlider from '../components/SwiperSlider';
// import ProductCard from '../components/ProductCard';
import ZonCards from '../components/ProductCard';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="px-4 py-6">
      <SwiperSlider />
      <div><h1 className='sm:text-3xl text-xl font-bold text-center my-5'>Product</h1></div>
      {/* <ProductList /> */}
      <ZonCards />
      {/* <Footer /> */}
      
    </div>
  );
};

export default Home;