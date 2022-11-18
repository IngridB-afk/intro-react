import React from 'react'
import Button from 'react-bootstrap/Button';
import girl from '../../images/landing-page-girl.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Box = () => {
    return (
        <main className='d-flex home-bg flex-grow-1'>
            <Container className='d-flex flex-column justify-content-end'>
                <Row>
                    <div className="home">
                        <Col><img src={girl} className="img-fluid" alt="girl"/></Col>
                    </div>
                    <div className="box">
                        <Col className='pt-15'>
                            <h1>Feel The Music</h1>
                            <p>Stream over 20 thousand sons with one click</p>
                            <Button
                            variant="primary" href="#Join">
                            Join Now
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </main>
    )
}

export default Box;