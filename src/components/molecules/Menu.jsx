import React from 'react';
//import atoms for navigation
import logo from '../../images/logo.svg';
//import style&container for navigation
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <header>
        <Navbar className="pt-4" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'><img src={logo} className="d-inline-block align-top me-2"alt="logo"/> Soundwave</Navbar.Brand>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to='/discover'>Discover</Nav.Link>
                <Nav.Link as={Link} to='/joined'>Join</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>        
    )
}

export default Menu;
