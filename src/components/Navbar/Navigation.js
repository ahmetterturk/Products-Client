import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/products">Products</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;