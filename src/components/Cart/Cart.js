import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ProductCard from '../ProductCard/ProductCard';
import { createSoldItem } from '../../api/api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../../globalContext/context';
import { Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useGlobalContext();

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
    <Container>
      <h2>Cart Page</h2>
      {cartItems.length > 0 ? (
        <>
          {state?.currentUser?.user?.email ? <Button className="mb-3" variant="primary" onClick={handleCheckout}>
            Checkout
          </Button> : 
          <p>Please login to checkout</p>
          }
          <Row xs={1} md={2} lg={3} className="g-4">
            {cartItems?.map((item, index) => (
              <Col key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}

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
    </Container>
  );
};

export default Cart;
