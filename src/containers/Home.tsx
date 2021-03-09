import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CartSection from '../components/CartSection';

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <CartSection cart={[]} />
      {/* cart prop required by TypeScript compiler */}
    </>
  );
};

export default Home;
