import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { searchProducts } from '../../api/api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  console.log('searchResults', searchResults);

  const handleSearch = async () => {
    try {
      const results = await searchProducts(query);
      console.log('results', results);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <div className="container">
      <h2>Search Page</h2>
      <Form className="mb-3">
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Enter search query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {/* <div className="row">
        {searchResults?.map((product, index) => (
          <div key={index} className="col-md-4 mb-3">
            <ProductCard item={product} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchPage;
