import React,{useEffect,useContext} from 'react';
import ProductItem from './ProductItem';
import { useCart } from '../../customHooks/useCart';
import { store } from '../../store';
import data from '../../data/data';

const ProductList = () => {
  const {addCartItem} = useCart();
  const {state:{keyword,products},dispatch} = useContext(store);

  useEffect(()=>{
    const results = data.filter(product => 
      product.title.includes(keyword) || product.brand.includes(keyword)
    )
    dispatch({type:'SET_PORDUCTS',payload:results});
  },[dispatch,keyword]);
  return (
    <div className="product-list">
      {
        products.map(product=>{
          return <ProductItem key={product.id} 
                              product={product} 
                              addCartItem={addCartItem}
                  />
        })
      }
    </div>
  );
};

export default ProductList;