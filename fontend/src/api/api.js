// api/api.js

const BASE_URL = 'http://20.244.56.144/test/';

export const getProducts = async (company, category, minPrice, maxPrice, topN) => {
  try {
    const response = await fetch(`${BASE_URL}/companies/${company}/categories/${category}/products/top-${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
