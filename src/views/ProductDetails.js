import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data';
import ProductItem from '../components/ProductList/ProductItem';
import { useCart } from '../customHooks/useCart';

const ProductDetails = () => {
  const {id} = useParams();
  const {addCartItem,decrementCartItem,removeCartItem} = useCart(data);
  const product = data.find(p=>p.id === parseInt(id));
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