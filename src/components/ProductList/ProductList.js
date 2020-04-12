import React,{useEffect} from 'react';
import ProductItem from './ProductItem';
import { useCart } from '../../customHooks/useCart';
import data from '../../data/data';
import { useSelector, useDispatch } from 'react-redux';
import {setProducts} from '../../action';

const ProductList = () => {
  const {addCartItem} = useCart();
  const {keyword,products} = useSelector(state=>state);
  const dispatch = useDispatch();

  useEffect(()=>{
    const results = data.filter(product => 
      product.title.includes(keyword) || product.brand.includes(keyword)
    )
    dispatch(setProducts(results));
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