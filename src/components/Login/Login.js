import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../api/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext/context'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { dispatch } = useGlobalContext(); // Get dispatch function from global context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);

      if (!userData.success) {
        console.log('Login Unsuccessful');
        return;
      }

      Cookies.set('currentUser', JSON.stringify(userData), { expires: 7 });
      dispatch({ type: 'SET_CURRENT_USER', data: userData });

      navigate('/products'); // Redirect to /products
    } catch (error) {
      console.log(error);
    }
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
    </div>
  );
};

export default Login;
