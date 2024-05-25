// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { getProducts } from '../api';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    minPrice: 1,
    maxPrice: 10000,
    topN: 10
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(filters.company, filters.category, filters.minPrice, filters.maxPrice, filters.topN);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [filters]);

  return (
    <div>
      <h1>All Products</h1>
      <Filters setFilters={setFilters} />
      <ProductList products={products} />
    </div>
  );
}

export default AllProductsPage;
