import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import images for button groups
import but1 from '../../images/microphone.svg';
import but2 from '../../images/albums.svg';
import but3 from '../../images/more.svg';
import album from '../../images/covers.jpg';

const Boxbut = () => {
    return (
        <div id='disc' className='d-flex discover-bg flex-grow-1'>
            <Container className='d-flex flex-column justify-content-center'>
                <Row>
                    <Col className='pt-3' id="music">
                    <h2 className='display-3 fw-normal mb-5'>Discover new music</h2>
                    <div className="discover-but">
                        <div className="discover-but1">
                            <img src={but1} alt="charts" />
                            <h6>Charts</h6>
                        </div>
                        <div className="discover-but2">
                            <img src={but2} alt="albums" />
                            <p>Albums</p>
                        </div>
                        <div className="discover-but3">
                            <img src={but3} alt="more" />
                            <p>More</p>
                        </div>
                    </div>
                    <h5>By joining you can benefit by listening to the latest albums released.</h5>
                    </Col>
                    <Col className='text-center'>
                    <section className="discoverimg">
                        <img src={album} className="covers" alt="covers" />
                    </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Boxbut;