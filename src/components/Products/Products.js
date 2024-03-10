import React, { useEffect } from 'react';
import { useGlobalContext } from '../../globalContext/context';
import ProductCard from '../ProductCard/ProductCard';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
  const { state } = useGlobalContext();
  const items = state?.products?.products;
  const updatedItems = state?.products;
  const listItems = items || updatedItems;

  return (
    <Container>
      <h2>Product List</h2>
      <Row xs={1} md={3} className="g-4">
        {listItems?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
