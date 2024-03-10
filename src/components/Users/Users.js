import React, { useEffect } from 'react';
import { useGlobalContext } from '../../globalContext/context';
import { fetchUsers } from '../../api/api';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.currentUser?.user?.isAdmin) {
      navigate('/products');
    }
  }, [state?.currentUser?.user?.isAdmin, navigate]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        dispatch({ type: 'GET_USERS', data: users });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, [dispatch]);

  return (
    <Container>
      <h2>Users</h2>
      <Row xs={1} md={3} className="g-4">
        {state.users.map((user, index) => (
          <Col key={index}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Email: {user.email}</Card.Title>
                <Card.Text>Is Admin: {user.isAdmin.toString()}</Card.Text>
                <Card.Text>Password: {user.password}</Card.Text>
                <Card.Text>Permissions: {user.permissions}</Card.Text>
                <Card.Text>id: {user._id}</Card.Text>
                <Link to={`/users/${user._id}`}>
                  <Button variant="primary">View User</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
