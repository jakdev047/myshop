import React, { createContext,useReducer } from "react";

// create store
const init = {
  products:[],
  cartItems: [],
  keyword: ""
}
const store = createContext(init);
const {Provider} = store;

// reducer
const reducer = (state,action) => {
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

// provider
const StateProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,init);
  return <Provider value={{state,dispatch}}>{children}</Provider>
}

export {
  store,
  StateProvider
}