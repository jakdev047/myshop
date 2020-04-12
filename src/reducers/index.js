import { SET_CART_ITEMS, SET_PORDUCTS, SET_KEYWORD } from "../action/actionType";

// reducer
const init = {
  products:[],
  cartItems: [],
  keyword: ""
}
const reducer = (state=init,action) => {
  switch(action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload
      };
    case SET_PORDUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    default:
      return state;
  }
}

export default reducer;