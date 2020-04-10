import React from 'react';

const ProductItem = props => {
  const {id,title,brand,price,image_url} = props.product;
  return (
    <div className="product">
      <img src={image_url} alt="product-img"/>
      <div className="title">
        <span>{title}</span>
        <span>{brand}</span>
      </div>
      <div className="actions">
        <span>$ {price}</span>
        <button onClick={()=>props.addCartItem(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;