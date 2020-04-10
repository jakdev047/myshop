import { useState } from "react";

export const useCart = (init,products) => {
  const [cartItems,setCartItems] = useState(init);

  const addCartItem = id => {
    const item = products.find(product => product.id === id);
    setCartItems(items => {
      const itemIndex = items.findIndex(item =>item.id === id)
      if( itemIndex === -1) {
        return  [ {...item,quantity:1}, ...items ]
      }
      else {
        return  items.map(item=> item.id === id ? (
          {...item,quantity:item.quantity + 1}
        ) : item)
      }
    });
  }

  const decrementCartItem = id => {
    const item = products.find(product => product.id === id);
    setCartItems(items => {
      const itemIndex = items.findIndex(item =>item.id === id)
      if( itemIndex === -1) {
        return  [ {...item,quantity:1}, ...items ]
      }
      else {
        return  items.map(item=> item.id === id ? (
          {...item,quantity:item.quantity - 1}
        ) : item)
      }
    });
  }

  const removeCartItem = id => {
    setCartItems(items => {
      return items.filter(item => item.id !== id)
    })
  }

  const clearCart = () => {
    const res = window.confirm('Are you sure to perform the action');
    if ( res === true ) {
      setCartItems([])
    }
  }

  return {
    cartItems,
    addCartItem,
    decrementCartItem,
    removeCartItem,
    clearCart
  }
}