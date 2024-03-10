import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../api/api';
import { Card } from 'react-bootstrap';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();


  console.log('user', user);


  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error if needed
      }
    };

    getUser();
  }, [id]);

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
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default UserPage;
