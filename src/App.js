import React,{ useState,useEffect } from 'react';

import './assets/css/style.css';

// data
import data from './data/data';

// components
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

const App = () => {
  const [products,setProducts] = useState([...data]);
  const [keyword,setKeyword] = useState('');
  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    const results = data.filter(product => 
      product.title.includes(keyword) || product.brand.includes(keyword)
    )
    setProducts(results);
  },[keyword]);

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

  return (
    <div className="App">
      <Navbar setKeyword={setKeyword}/>
      <ProductList products={products} addCartItem={addCartItem}/>
      <Cart cartItems={cartItems} removeCartItem={removeCartItem}
      clearCart={clearCart} addCartItem={addCartItem} decrementCartItem={decrementCartItem}/>
    </div>
  );
}

export default App;
