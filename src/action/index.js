import { SET_CART_ITEMS, SET_PORDUCTS, SET_KEYWORD } from "./actionType";

export const setCartItems = cartItems => {
  return {
    type: SET_CART_ITEMS,
    payload: cartItems
  }
}
export const setProducts = products => {
  return {
    type: SET_PORDUCTS,
    payload: products
  }
}

export const setKeyword = keyword => {
  return {
    type: SET_KEYWORD,
    payload: keyword
  }
}