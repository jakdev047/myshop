import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products,addCartItem}) => {
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