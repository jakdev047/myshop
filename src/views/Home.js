import React,{useState,useEffect} from 'react';

import ProductList from '../components/ProductList/ProductList';
import Cart from '../components/Cart/Cart';

import data from '../data/data';

import { useCart } from '../customHooks/useCart';

const Home = ({keyword}) => {

  const [products,setProducts] = useState([...data]);

  const {cartItems,addCartItem,removeCartItem,clearCart,decrementCartItem} = useCart([],products);

  useEffect(()=>{
    const results = data.filter(product => 
      product.title.includes(keyword) || product.brand.includes(keyword)
    )
    setProducts(results);
  },[keyword]);
  return (
    <>
      <ProductList products={products} 
                  addCartItem={addCartItem}
      />
      <Cart cartItems={cartItems} 
            removeCartItem={removeCartItem}
            clearCart={clearCart} 
            addCartItem={addCartItem} 
            decrementCartItem={decrementCartItem}
      />
    </>
  );
};

export default Home;