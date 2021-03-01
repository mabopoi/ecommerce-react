import React, { useState } from 'react';
import { Product } from '../../types';
import './index.scss';

const CarouselItem: React.FC<Product> = ({ src, productName, price }) => {
  const [done, setDone] = useState(false);

  return (
    <article className='product'>
      <img
        className='product__img'
        src={src}
        alt={`${productName} item`}
        loading='lazy'
      />
      <p className='product__name'>{productName}</p>
      <span className='product__price'>{price}</span>
      <button
        className={done ? 'product__btn done' : 'product__btn'}
        type='button'
        onClick={() => setDone(true)}
      >
        Add to cart
      </button>
    </article>
  );
};

export default CarouselItem;
