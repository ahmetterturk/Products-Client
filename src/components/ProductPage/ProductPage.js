import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductCard from './../ProductCard/ProductCard'; 
import { useGlobalContext } from '../../globalContext/context';
import { fetchProductById } from '../../api/api';

const ProductPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct(); 
  }, [id]); 

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <ProductCard item={product} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductPage;
