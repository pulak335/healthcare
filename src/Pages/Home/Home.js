import React from 'react';
import { useState, useEffect } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Doctor from '../../Components/Doctor/Doctor';
import HospitalGallary from '../../Components/HospitalGallary/HospitalGallary';
import Newsletter from '../../Components/Newsletter/Newsletter';
import SingleService from '../../Components/SingleService/SingleService';
import './Home.css';

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./health.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className='custom-bg'>
                {/* start banner */}
                <Container className='d-flex align-content-center'>
                    <div className='w-50 text-white header-contain'>
                        <h1 className='headline-font'>We are protact you 	&#38; your Family members.</h1>
                        <p className='pre-font'>Many physicians are struggling to understand what disinfection is necessary before coming home, or if they should remain in a separate room or home during this unprecedented time.</p>
                        <button className='button-font border border-0 rounded-pill px-4 py-2 med-button mt-4'>Register Now</button>
                    </div>
                </Container>
            </div>
            {/* end banner */}

            {/* start service */}
            
            <Container className='mt-5 '>
                <h1 className='headline-font basic-color mb-5'>Our Services</h1>
                    <Row xs={1} md={2} className="g-4">  
                    {
                       services.map((service)=><SingleService key={service.id} service={service}></SingleService>) 
                            }
                        
                    </Row>
            </Container>
            {/* end service */}


            {/* start hospital condition */}

            <Container className='mt-5'>
                <h1 className='headline-font basic-color mb-5'>Hospital Gallary</h1>
            <HospitalGallary></HospitalGallary>
            </Container>
        
            {/* end hospital condition */}
            <Container className='my-5'>
                <Newsletter></Newsletter>
            </Container>
            

            {/* start doctor */}
            <Container>
                <h1 className='headline-font basic-color mb-5'>Our Doctor's</h1>

                <Doctor></Doctor>
            </Container>

            {/* end doctor */}

        </>
    );
};

export default Home;