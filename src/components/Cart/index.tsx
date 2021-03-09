import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem';
import { State } from '../../types';
import './index.scss';

const Cart: React.FC<State> = ({ cart }) => {
  return (
    <section className='cart'>
      {cart.map((item) => (
        <CartItem key={cart.indexOf(item)} product={item} />
      ))}
    </section>
  );
};

const mapStateToProps = (state: State) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
