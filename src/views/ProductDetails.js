import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductList/ProductItem';
import { useCart } from '../customHooks/useCart';

const ProductDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState({});
  const {addCartItem,decrementCartItem,removeCartItem} = useCart();

  useEffect(() => {
    fetch(`https://murmuring-fortress-41915.herokuapp.com/products/${id}`)
    .then(res=>res.json())
    .then(data=> {
      setProduct(data);
    })
  },[id])

  return (
    <div className="product-details">
      <ProductItem product={product} 
                  addCartItem={addCartItem} 
                  decrementCartItem={decrementCartItem} removeCartItem={removeCartItem}
      />
    </div>
  );
};

export default ProductDetails;