import React from "react";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import reducer from "./reducers";

// create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// provider
const StateProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}
export { StateProvider }