import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ fontFamily: "Cooper Std" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav text-light">
            <Nav className="text-light">
              <Navbar.Brand className="text-danger" style={{ fontSize: "48px" }}>g</Navbar.Brand>
              <Nav.Link to="">Homepage</Nav.Link>
              <Nav.Link to="">Giftees</Nav.Link>
              <Nav.Link to="">Login</Nav.Link>
              <Nav.Link to="">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}