import React from 'react';
import logo from '../../imgs/logo-light.png';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className=' pt-3 d-flex justify-content-center'>
                <img src={logo} alt=""/>
            </div>
            <p className='text-white text-center py-2 pre-font'> © 2021 - Health Center Theme by Arafat Islam</p>
        </div>
    );
};

export default Footer;