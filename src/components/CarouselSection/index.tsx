import React from 'react';
import Carousel from '../Carousel';
import './index.scss';

const CarouselSection = () => {
  return (
    <main>
      <h3 className='carouselSection__title'>
        Start adding items to your cart!
      </h3>
      <Carousel />
    </main>
  );
};

export default CarouselSection;
