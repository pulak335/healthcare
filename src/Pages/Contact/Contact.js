import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Contact = () => {
    return (
        <Container>
            <div className='d-flex justify-content-between'>

                <div className='w-50 my-5'>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>White your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className='button-font border border-0 rounded-pill px-4 py-2 med-button-2  button-font mt-4 fw-bold mx-auto'>Send</button>
                    </Form>
                </div>

                <div className='my-5'>
                    <h1>Address</h1>
                    <div className='my-5'>
                        <h6>18/F, Bir Uttam
                        Qazi Nuruzzaman Sarak,
                        West Panthapath,Dhaka 1205
                    </h6>
                    <h6>
                        10616, 01313718687,
                    09610707334
                    </h6>
                    <h6>
                        info@squarehospital.com
                    </h6>
                    </div>
                </div>

            </div>
            <div className='my-5'>
                <Newsletter></Newsletter>
            </div>
        </Container>
    );
};

export default Contact;