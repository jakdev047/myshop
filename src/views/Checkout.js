import React from 'react';
import { useCart } from '../customHooks/useCart';
import data from '../data/data';

const Checkout = () => {
  const {total} = useCart(data);
  return (
    <div className="checkout-section">
      <h2>Checkout Total: ${total}</h2>
    </div>
  );
};

export default Checkout;