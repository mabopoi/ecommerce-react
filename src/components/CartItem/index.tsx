import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import { Product } from '../../types';
import './index.scss';

interface Props {
  product: Product;
  removeFromCart: (arg0: Product) => {};
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const CartItem: React.FC<Props> = ({ product, removeFromCart }) => {
  const { src, productName, price } = product;

  return (
    <article className='cartItem'>
      <img
        src={src}
        alt={`${productName} item`}
        className='cartItem__img'
        loading='lazy'
      />
      <div className='cartItem__textSection'>
        <p className='cartItem__name'>{productName}</p>
        <span className='cartItem__price'>{price}</span>
      </div>
      <button
        aria-label='Remove from cart button'
        className='cartItem__btn'
        type='button'
        onClick={() => removeFromCart(product)}
      >
        X
      </button>
    </article>
  );
};

const mapDispatchToProps = { removeFromCart };

export default connect(null, mapDispatchToProps)(CartItem);
