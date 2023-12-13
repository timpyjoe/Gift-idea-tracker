import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ fontFamily: "Cooper Std", }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='nav-link-container' id="basic-navbar-nav text-light">
            <Nav className="text-light nav-contained">
              <Navbar.Brand className="text-danger" style={{ fontSize: "48px" }}>g</Navbar.Brand>
              <Link className="homeClass" to="/">Homepage</Link>

              <Link className="gifteeClass" to="/user">Profile</Link>

              <Link className="loginClass" to="/authpage">Login</Link>
              <Link className="logoutClass" to="/logout">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
