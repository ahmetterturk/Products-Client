import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../globalContext/context';

function Navigation() {
  const { state, dispatch } = useGlobalContext();

  const handleLogout = () => {
    Cookies.remove('currentUser');
    dispatch({ type: 'SET_CURRENT_USER', data: {} });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {state.currentUser?.user?.email ? (
              <>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/new-product" className="nav-link">New Product</Link>
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
