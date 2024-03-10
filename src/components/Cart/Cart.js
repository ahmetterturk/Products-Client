import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ProductCard from '../ProductCard/ProductCard';
import { createSoldItem } from '../../api/api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(true);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>Cart Page</h2>
      <button className="btn btn-primary mb-3" onClick={handleCheckout}>
        Checkout
      </button>
      <ul className="list-group">
        {cartItems?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </ul>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your purchase has been completed successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
