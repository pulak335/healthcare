import React from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../../Components/Doctor/Doctor';
import HospitalGallary from '../../Components/HospitalGallary/HospitalGallary';
import Newsletter from '../../Components/Newsletter/Newsletter';
import './About.css';

const About = () => {
    return (
        <>
        <div className='about'>
            <h1 className='text-center text-white py-4 pre-font'><span className='basic-color'>About</span> Us</h1>
            <h5 className='text-center py-4 button-font'>We are always at your service</h5>
        </div>
            <Container>
                <div className='my-5'>
                    <h1 className='headline-font basic-color my-5'>Welcome to Mediz</h1>
                <p>News Medical was designed to put medical and life sciences information in reach of people that can make a difference.

                    Healthcare professionals, researchers, and engaged consumers can access a wealth of open-access content from thought leaders across the world.
                    <br></br>

                    Exclusive interviews with Nobel Prize-winning laureates. Insightful articles written by experts in an enormous range of fields. Along with our encyclopedic library of health and life sciences articles written by our in house team of biomedical professionals. Our mission is to share science with you.
                    <br></br>
                Our team of medical and life science writers, contributors and reviewers come from a range of disciplines including medical professionals, scientists and medical journalists. They are the backbone of content production on News Medical, working hard to research and quality check the content on site, not just to ensure that it is correct but to keep it relatable and understandable to a scientifically engaged audience.</p>
                </div>
                <div className='mb-5'>
                    <h1 className='headline-font basic-color mb-5'>Our Doctor's</h1>

                <Doctor></Doctor>
                </div>
                <div className='my-5'>
                    <h1 className='headline-font basic-color mb-5'>Hospital Gallary</h1>
            <HospitalGallary></HospitalGallary>
                </div>

                <div className='mb-5'>
                    <Newsletter></Newsletter>
                </div>
            </Container>
        
        </>
    );
};

export default About;