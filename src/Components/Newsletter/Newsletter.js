import React from 'react';
import { Link } from 'react-router-dom';
import './Newsletter.css';

const Newsletter = () => {
    return (
            <div className='box py-5'>
                <h5 className='text-white pre-font text-center'>Meet the professional services provider team</h5>
                <h1 className='text-white headline-font text-center fw-bold'>Get started with Mediz today!</h1>
            <div className='d-flex justify-content-center'>
                <Link to='/signup'>
                    <button className='button-font med-button border border-3 rounded-pill px-4 py-2 button-font mt-4 fw-bold'>Get Started</button>
                </Link>
                
                </div>
            </div>
    );
};

export default Newsletter;