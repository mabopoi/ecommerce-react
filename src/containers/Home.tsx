import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Cart cart={[]} />
      {/* cart prop required by TypeScript compiler */}
    </>
  );
};

export default Home;
