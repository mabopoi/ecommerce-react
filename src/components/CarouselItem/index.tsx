import React from 'react';
import './index.scss';

interface Props {
  src: string;
  productName: string;
  price: string;
}

const CarouselItem: React.FC<Props> = ({ src, productName, price }) => {
  return (
    <article className='product'>
      <img
        className='product__img'
        src={src}
        alt={`${productName} product`}
        loading='lazy'
      />
      <p className='product__name'>{productName}</p>
      <span className='product__price'>{price}</span>
      <button className='product__btn' type='button'>
        Add to cart
      </button>
    </article>
  );
};

export default CarouselItem;
