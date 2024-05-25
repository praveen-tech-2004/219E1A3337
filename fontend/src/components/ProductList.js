// src/components/ProductList.js
import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>{product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
