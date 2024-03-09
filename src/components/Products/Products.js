import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../globalContext/context';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

  const { state, dispatch } = useGlobalContext();
  const items = state.products.products

  console.log(items);

  return <div>Product List
    {items?.map(item => {
      return <ProductCard item={item} />
    })}
  </div>;
};

export default Products;
