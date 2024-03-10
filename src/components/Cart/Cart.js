import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ProductCard from '../ProductCard/ProductCard';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  console.log('cartItems', cartItems);

  useEffect(() => {
    const fetchCartItems = () => {
      const storedCartItems = Cookies.get('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cartItems?.map((item, index) => (
          <ProductCard item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;