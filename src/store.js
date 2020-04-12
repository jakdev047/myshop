import React from "react";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
import reducer from "./reducers";

// persist config
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// create store
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persistance store
const persistor = persistStore(store)

// provider
const StateProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div><h2>Loading...</h2></div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
export { StateProvider }