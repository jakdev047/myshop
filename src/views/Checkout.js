import React,{useState} from 'react';
import { useCart } from '../customHooks/useCart';
import data from '../data/data';

const Checkout = () => {

  const {total,clearCart} = useCart(data);
  const [address,setAddress] = useState('');

  const handleChange = e => {
    setAddress(e.target.value)
  }

  return (
    <div className="checkout-section">
      <h3>Checkout Total: ${total}</h3>
      {
        total > 0 ? (
          <div className="cart-item">
            <div className="info">
              <span>
                <input type="text" placeholder="Address" onChange={handleChange}/>
              </span>
              <button type="submit" 
                      className={!address ? 'clear' : 'checkout'} disabled={!address}
                      onClick={clearCart}
              >
                Submit
              </button>
            </div>
          </div>
        ) : 'Cart is empty'
      }
      
    </div>
  );
};

export default Checkout;