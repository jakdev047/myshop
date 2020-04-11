import React from "react";
import { Provider } from 'react-redux'
import { createStore } from "redux";
// reducer
const init = {
  products:[],
  cartItems: [],
  keyword: ""
}
const reducer = (state=init,action) => {
  switch(action.type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload
      };
    case 'SET_PORDUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'SET_KEYWORD':
      return {
        ...state,
        keyword: action.payload
      };
    default:
      return state;
  }
}
// create store
const store = createStore(
  reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// provider
const StateProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
export {
  store,
  StateProvider
}