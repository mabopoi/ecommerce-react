import React from 'react';
import products from '../../products';
import CarouselItem from '../CarouselItem';
import './index.scss';

const Carousel: React.FC = () => {
  return (
    <section className='carousel'>
      {products.map((product) => {
        const { id, src, productName, price } = product;
        return (
          <CarouselItem
            key={id}
            id={id}
            src={src}
            productName={productName}
            price={price}
          />
        );
      })}
    </section>
  );
};

export default Carousel;
