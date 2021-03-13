import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Cart from '../Cart';
import { State } from '../../types';
import './index.scss';

const CartSection: React.FC<State> = ({ cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const checkout = cart.reduce((acc, item) => {
      const price = parseInt(item.price.split(' ')[0], 10);
      return price + acc;
    }, 0); //not optimal but works

    setTotal(checkout);
  }, [cart]);

  return (
    <main className='cartSection'>
      {total ? (
        <>
          <h3 className='cartSection__title'>This is your cart</h3>
          <div className='cartSection__cartContainer'>
            <Cart cart={[]} />
            <p>Total Checkout:</p>
            <span className='cartSection__total'>
              {total}
              USD
            </span>
          </div>
        </>
      ) : (
        <div className='cartSection__container'>
          <h3 className='cartSection__title--emptyCart'>
            Your cart is empty! Go to the home and add some items!
          </h3>
        </div>
      )}
    </main>
  );
};

const mapStateToProps = (state: State) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartSection);
