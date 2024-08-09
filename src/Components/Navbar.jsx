import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CustomNavbar({ isLoggedIn, onLogout }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ borderRadius: '10px', padding: '10px' }} >
      <Container>
        <Navbar.Brand as={Link} to="/home">ToyMakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/boys">Boys</Nav.Link>
            <Nav.Link as={Link} to="/girls">Girls</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={onLogout}>Logout</Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
