import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = props => {
  const {id,title,brand,price,image_url} = props.product;
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={image_url} alt="product-img"/>
        <div className="title">
          <span>{title}</span>
          <span>{brand}</span>
        </div>
      </Link>
      <div className="actions">
        <span>$ {price}</span>
        <button onClick={()=>props.addCartItem(id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;