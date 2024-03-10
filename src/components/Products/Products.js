import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../globalContext/context';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const { state, dispatch } = useGlobalContext();
  const items = state?.products?.products
  const updatedItems = state?.products
  const listItems = items || updatedItems
  
  return <div>Product List
    {listItems?.map(item => {
      return <ProductCard item={item} />
    })}
  </div>;
};

export default Products;
