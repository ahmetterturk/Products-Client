import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ProductCard from '../ProductCard/ProductCard';
import { createSoldItem } from '../../api/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      const storedCartItems = Cookies.get('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    };

    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    try {
      await Promise.all(cartItems.map(item => createSoldItem(item)));
            Cookies.remove('cartItems');
      setCartItems([]);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <h2>Cart Page</h2>
      <button onClick={handleCheckout}>Checkout</button>
      <ul>
        {cartItems?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
