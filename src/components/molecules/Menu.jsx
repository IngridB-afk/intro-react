import React from 'react';
//import atoms for navigation
import logo from '../../images/logo.svg';
//import style&container for navigation
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <header>
        <Navbar variant="dark">
            <Container>
              <Nav className="me-auto">
                <Navbar.Brand href="#Logo" className='soundlogo'><img src={logo} className="d-inline-block align-top me-2"alt="logo"/> Soundwave</Navbar.Brand>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="#Discover" className='discover'>Discover</Nav.Link>
                <Nav.Link href="#Joined" className='joined'>Join</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>        
    )
}

export default Menu;
