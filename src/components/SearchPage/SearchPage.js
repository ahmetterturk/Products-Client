import React, { useState } from 'react';
import { searchProducts } from '../../api/api';
import ProductCard from '../ProductCard/ProductCard'

const YourComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log('searchQuery', searchQuery);
  console.log('searchResults', searchResults);

  const handleSearch = async () => {
    try {
      const results = await searchProducts(searchQuery);
      console.log('results', results);
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults?.products?.map((product) => (
          <ProductCard item={product} />
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
