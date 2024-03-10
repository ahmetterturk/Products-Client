import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById, editUser } from '../../api/api';
import { Card, Form, Button } from 'react-bootstrap';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    isAdmin: false,
    password: '',
    permissions: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
        setFormData({
          email: userData.email,
          isAdmin: userData.isAdmin,
          password: userData.password,
          permissions: userData.permissions,
        });
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error if needed
      }
    };

    getUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await editUser(id, formData);
      // Assuming you have a function to update the user in the global context
      // updateUserInContext(updatedUser);
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>UserPage</h2>
          <Card>
            <Card.Body>
              <Card.Title>Email: {user.email}</Card.Title>
                <Card.Text>Is Admin: {user.isAdmin.toString()}</Card.Text>
                <Card.Text>Password: {user.password}</Card.Text>
                <Card.Text>Permissions: {user.permissions}</Card.Text>
                <Card.Text>id: {user._id}</Card.Text>
                </Card.Body>
                
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Is Admin"
                      name="isAdmin"
                      checked={formData.isAdmin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          isAdmin: e.target.checked,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPermissions">
                    <Form.Label>Permissions</Form.Label>
                    <Form.Control
                      as="select"
                      name="permissions"
                      value={formData.permissions}
                      onChange={handleChange}
                    >
                      <option value="read">Read</option>
                      <option value="edit">Edit</option>
                    </Form.Control>
                  </Form.Group>


                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPage;
