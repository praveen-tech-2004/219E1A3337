// src/components/Filters.js
import React, { useState } from 'react';

function Filters({ setFilters }) {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [topN, setTopN] = useState(10);

  const handleApplyFilters = () => {
    setFilters({
      company,
      category,
      minPrice,
      maxPrice,
      topN
    });
  };

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Company:
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Min Price:
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <label>
        Top N:
        <input type="number" value={topN} onChange={(e) => setTopN(e.target.value)} />
      </label>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
