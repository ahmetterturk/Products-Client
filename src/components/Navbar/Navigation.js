import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../globalContext/context';

function Navigation() {
  const { state, dispatch } = useGlobalContext();
  // console.log(state);
  // console.log(state.currentUser.user.email);

  const handleLogout = () => {
    // Remove the currentUser cookie
    Cookies.remove('currentUser');
    // Dispatch an action to update the currentUser state to an empty object
    dispatch({ type: 'SET_CURRENT_USER', data: {} });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {state.currentUser?.user?.email ? (
              // If there is a currentUser, display the Products, Users, and Logout links
              <>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/users" className="nav-link">Users</Link>
                <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
              </>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
