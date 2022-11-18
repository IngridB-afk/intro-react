import React from 'react';
import Menu from '../molecules/Menu';
import Boxsub from '../atoms/Boxsub';
import Footer from '../molecules/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Join = () => {
  return (
    <div className='join'>
      <Menu/>
        <section className='d-flex discover-bg flex-grow-1'>
          <Container className='d-flex flex-column justify-content-center'>
            <Row>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
              <h1>Join the <span>fun.</span></h1>
              </Col>
              <Col md={6}>
                <div className='bg-dark px-5 pt-5 pb-4 rounded-4' id='sub'>
                  <Boxsub />
                </div>
              </Col>
            </Row>
          </Container>  
        </section>
      <Footer/> 
    </div>      
  )
}

export default Join;