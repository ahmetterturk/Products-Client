import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { login } from '../../api/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext/context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);

      if (!userData.success) {
        setShowModal(true);
        return;
      }

      Cookies.set('currentUser', JSON.stringify(userData), { expires: 7 });
      dispatch({ type: 'SET_CURRENT_USER', data: userData });

      navigate('/products'); // Redirect to /products
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Unsuccessful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your login attempt was unsuccessful. Please check your credentials and try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
