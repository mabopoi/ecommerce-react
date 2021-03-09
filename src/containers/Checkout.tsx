import React from 'react';
import CartSection from '../components/CartSection';

const Checkout = () => {
  return (
    <>
      <CartSection cart={[]} />
      {/* cart prop required by TypeScript compiler */}
    </>
  );
};

export default Checkout;
