import React from 'react';        
//import style&container for navigation
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import images
import Twitter from '../../images/twitter.svg';
import Facebook from '../../images/facebook.svg';

const Footer = () => {
  return (
    <footer>
    <Navbar variant="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#Twitter"> <img src={Twitter} width="20" height="20"
              className="d-inline-block align-top me-2"alt="twitter"
            /> Twitter</Nav.Link>
            <Nav.Link href="#Facebook"><img src={Facebook} width="20" height="20"
              className="d-inline-block align-top me-2" alt="facebook"
            />Facebook</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer;