import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Product } from '../../types';
import { addToCart } from '../../actions';
import './index.scss';

interface Props extends Product {
  addToCart: (arg1: Product) => {};
}

const CarouselItem: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { id, src, productName, price, addToCart } = props;
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(true);
    addToCart({ id, src, productName, price });
  };

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
        onClick={handleClick}
      >
        Add to cart
      </button>
    </article>
  );
};

const mapDispatchToProps = { addToCart };

export default connect(null, mapDispatchToProps)(CarouselItem);
