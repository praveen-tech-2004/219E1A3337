// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(productId);
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <div>Name: {product.name}</div>
      <div>Company: {product.company}</div>
      <div>Category: {product.category}</div>
      <div>Price: {product.price}</div>
      <div>Rating: {product.rating}</div>
      <div>Discount: {product.discount}</div>
      <div>Availability: {product.availability}</div>
    </div>
  );
}

export default ProductDetailPage;
