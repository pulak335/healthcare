import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <img src="https://image.freepik.com/free-vector/404-error-isometric-illustration_23-2148509538.jpg" alt="" srcset="" />
            </div>
            <Link to='/home' className='px-5 d-flex justify-content-center'>
                <button className='fw-bold text-center button-font mb-2 border border-0 rounded-pill px-5 py-2 med-button'>Back To Home</button>
            </Link>
        </Container>
    );
};

export default NotFound;