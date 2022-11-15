import React from 'react';
import Logo from '../atoms/Logo';
import Discover from '../atoms/Discover';
import Join from '../atoms/Join';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Soundwave = () => {
    return (
        <header>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#logo"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#discover"><Discover/></Nav.Link>
            <Nav.Link href="#join"><Join/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </header>
//        <div>
//            <Logo />
//            <Discover />
//            <Join />
//        </div>



        
        
    )
}

export default Soundwave;
