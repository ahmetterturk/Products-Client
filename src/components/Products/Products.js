import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../globalContext/context';

const Products = () => {

  const { state, dispatch } = useGlobalContext();
  const items = state.products.products

  console.log(items);

  return <div>Product List</div>;
};

export default Products;
