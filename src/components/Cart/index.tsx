import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../types';

const Cart: React.FC<State> = ({ cart }) => {
  return (
    <section>
      {cart.map((item) => (
        <h3>{item.productName}</h3>
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
