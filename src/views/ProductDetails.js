import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams()
  return (
    <div>
      <h2>ProductDetails {id} </h2>
    </div>
  );
};

export default ProductDetails;