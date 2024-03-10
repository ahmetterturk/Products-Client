import React, { useState } from 'react';
import { searchProducts } from '../../api/api';
import ProductCard from '../ProductCard/ProductCard';
import { Container, Form, Button } from 'react-bootstrap';

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
    <Container className="mt-4">
      <Form>
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-wrap">
        {searchResults?.products?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </Container>
  );
};

export default YourComponent;
