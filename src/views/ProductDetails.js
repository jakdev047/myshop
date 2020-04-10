import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data';
import ProductItem from '../components/ProductList/ProductItem';

const ProductDetails = () => {
  const {id} = useParams();
  const product = data.find(p=>p.id === parseInt(id));
  return (
    <div className="product-details">
      <ProductItem product={product}/>
    </div>
  );
};

export default ProductDetails;