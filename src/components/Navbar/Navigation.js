import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../globalContext/context';

function Navigation() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const { currentUser } = state;

  const handleLogout = () => {
    Cookies.remove('currentUser');
    Cookies.remove('cartItems');
    dispatch({ type: 'SET_CURRENT_USER', data: {} });
    navigate('/products');
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {currentUser?.user?.email ? (
              <>
                <Link to="/products" className="nav-link">Products</Link>
                {(currentUser?.user?.isAdmin || currentUser.user.permissions === 'edit' ) && <Link to="/new-product" className="nav-link">New Product</Link>}
                {currentUser?.user?.isAdmin && <Link to="/new-user" className="nav-link">New User</Link>}
                {currentUser?.user?.isAdmin && <Link to="/users" className="nav-link">Users</Link>}
                <Link to="/cart" className="nav-link">Cart</Link>
                <Link to="/search" className="nav-link">Search</Link>
                <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/cart" className="nav-link">Cart</Link>
                <Link to="/search" className="nav-link">Search</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
