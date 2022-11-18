import React from 'react'
import Button from 'react-bootstrap/Button';
import girl from '../../images/landing-page-girl.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Box = () => {
    return (
        <main className='d-flex home-bg flex-grow-1' id="home">
            <Container className='d-flex flex-column justify-content-center justify-content-md-end'>
                <Row>
                    <Col md={6} className='d-none d-md-block' id="girl">
                        <section className="home">
                            <img src={girl} className="img-fluid" alt="girl"/>
                        </section>
                    </Col>
                    <Col md={6} className='pt-15' id="feel">
                        <h1>Feel The Music</h1>
                        <h5>Stream over 20 thousand sons with one click</h5>
                        <Button variant="primary" type='submit'>
                            Join now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Box;