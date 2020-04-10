import React,{ useState,useEffect } from 'react';

import './assets/css/style.css';

// data
import data from './data/data';

// components
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

// custom hook
import { useCart } from './customHooks/useCart';
import ThemeContext  from './context/ThemeContext';

const App = () => {
  const [products,setProducts] = useState([...data]);
  const [keyword,setKeyword] = useState('');
  const [dark,setdark] = useState(false);

  const {cartItems,addCartItem,removeCartItem,clearCart,decrementCartItem} = useCart([],products);

  const toggleDark = () => {
    setdark(isDark=>!isDark);
  }
  

  useEffect(()=>{
    const results = data.filter(product => 
      product.title.includes(keyword) || product.brand.includes(keyword)
    )
    setProducts(results);
  },[keyword]);

  return (
    <ThemeContext.Provider value={{dark:dark,toggle:toggleDark}}>
      <div className="App">
        <Navbar setKeyword={setKeyword}/>
        <ProductList products={products} addCartItem={addCartItem}/>
        <Cart cartItems={cartItems} removeCartItem={removeCartItem}
        clearCart={clearCart} addCartItem={addCartItem} decrementCartItem={decrementCartItem}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
