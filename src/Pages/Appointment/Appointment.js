import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Appointment.css';
const Appointment = () => {
    return (
        <Container className='my-5'>
            <h1 className='basic-color'>Get a Appointment</h1>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number"  />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>address</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Text here</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className='button-font border border-0 rounded-pill px-4 py-2 med-button mt-4'>
                    Send
                </button>
            </Form>
        </Container>
    );
};

export default Appointment;