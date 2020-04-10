import React,{ useState } from 'react';

const CartItem = props => {
  const {id,title,price,quantity} = props.item;
  return(
    <div className="cart-item">
      <div className="btn-group">
        <button onClick={()=>props.addCartItem(id)}>+</button>
        <button onClick={()=>props.decrementCartItem(id)}
                disabled={ quantity <= 0}
        >
          -
        </button>
      </div>
      <button onClick={()=>props.removeCartItem(id)}>X</button>
      <div className="info">
        <span>{title} * {quantity}</span>
        <span>{price * quantity}</span>
      </div>
    </div>
  );
}

const Cart = ({cartItems,removeCartItem,clearCart,addCartItem,decrementCartItem}) => {
  const [checkoutOpen,setCheckoutOpen] = useState(false);
  const [address,setAddress] = useState('');

  const toggleCheckout = () => {
    setCheckoutOpen(status => !status)
  }

  const handleChange = e => {
    setAddress(e.target.value)
  }

  const total = cartItems.reduce((sum,current)=> sum + (current.price * current.quantity),0);
  return (
    <div className="cart">
      <h3>Cart Items</h3>
      
      <div className="cart-items">
        { cartItems.length === 0 && 
            (
              <div className="cart-item">
                <div className="info">
                  <span>Cart is empty</span>
                </div>
              </div>
            )
        }
        
        { cartItems.length !== 0 && 
          cartItems.map(item => {
            return <CartItem key={item.id} item={item} removeCartItem={removeCartItem} addCartItem={addCartItem} decrementCartItem={decrementCartItem} />
          })
        }
      </div>
      {
        cartItems.length !== 0 && (
          <div className="cart-item">
            <div className="info">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          </div>
          
        )
      }
      { cartItems.length !== 0 && 
        (
          <div className="cart-item">
            <div className="info">
              <button onClick={clearCart} className="clear">Cancel</button>
              <button className="checkout" onClick={toggleCheckout}>
                {
                  checkoutOpen ? 'Hide' : 'Checkout'
                }
              </button>
            </div>
          </div>
        )
      }

      {
        cartItems.length !== 0 && checkoutOpen && (
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
        )
      }
      
      
    </div>
  );
};

export default Cart;