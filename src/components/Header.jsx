import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link}from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} id='logo_name'>
              Bakery
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>Главная</Link>
            </Nav.Link>
            
              
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header