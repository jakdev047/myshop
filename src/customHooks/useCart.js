import { useSelector, useDispatch } from "react-redux";
import {setCartItems as setCart} from '../action';

export const useCart = () => {
  const {products,cartItems} = useSelector(state=>state);
  const dispatch = useDispatch()

  const setCartItems = (items) => {
    dispatch(setCart(items));
  };

  const addCartItem = id => {
    const item = products.find(product => product.id === id);
    const itemIndex = cartItems.findIndex(item =>item.id === id)
    if( itemIndex === -1) {
      setCartItems([...cartItems,{...item,quantity:1}])
    }
    else {
      setCartItems(
        cartItems.map(item=> item.id === id ? (
          {...item,quantity:item.quantity + 1}
        ) : item)
      )
    }
  }

  const decrementCartItem = id => {
    const item = products.find(product => product.id === id);
    const itemIndex = cartItems.findIndex(item =>item.id === id)
      if( itemIndex === -1) {
        setCartItems([ {...item,quantity:1}, ...cartItems ])
      }
      else {
        setCartItems(
          cartItems.map(item=> item.id === id ? (
            {...item,quantity:item.quantity - 1}
          ) : item)
        ) 
      }
  }

  const removeCartItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const clearCart = () => {
    const res = window.confirm('Are you sure to perform the action');
    if ( res === true ) {
      setCartItems([])
    }
  }

  const total = cartItems.reduce((sum,current)=> {
    return sum + (current.price * current.quantity)
  },0);

  return {
    total,
    cartItems,
    addCartItem,
    decrementCartItem,
    removeCartItem,
    clearCart
  }
}