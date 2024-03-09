import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../globalContext/context';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const { state, dispatch } = useGlobalContext();
  const items = state?.products?.products
  const updatedItems = state?.products
  const listItems = items || updatedItems
  const reversedList = [...listItems].reverse();
  
  return <div>Product List
    {reversedList?.map(item => {
      return <ProductCard item={item} />
    })}
  </div>;
};

export default Products;
