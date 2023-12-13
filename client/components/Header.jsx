import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ fontFamily: "Cooper Std",}}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav text-light">
            <Nav className="text-light">
              <Navbar.Brand className="text-danger" style={{ fontSize: "48px" }}>g</Navbar.Brand>
              <Link to="/">Homepage</Link>
              <Link to="/user">Giftees</Link>
              <Link to="/authpage">Login</Link>
              <Link to="/logout">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
