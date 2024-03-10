import React, { useState, useEffect } from 'react';
import { createUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext/context';
import { Container, Form, Button } from 'react-bootstrap';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false,
    permissions: 'read',
  });

  const { state } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.currentUser?.user?.isAdmin) {
      navigate('/products');
    }
  }, [state?.currentUser?.user?.isAdmin, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUser(formData);
      navigate('/users');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Create User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicIsAdmin">
          <Form.Check type="checkbox" label="Is Admin" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPermissions">
          <Form.Label>Permissions:</Form.Label>
          <Form.Control as="select" name="permissions" value={formData.permissions} onChange={handleChange}>
            <option value="read">Read</option>
            <option value="edit">Edit</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </Container>
  );
};

export default UserForm;
