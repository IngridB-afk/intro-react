import React from 'react';
// Button of bootstrap
import Button from 'react-bootstrap/Button';
// Box submit
import Form from 'react-bootstrap/Form';

const Boxsub = () => {
  return (
    <div className='boxsub'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Join now
                </Button>
                </Form>
    </div>
  )
}

export default Boxsub;