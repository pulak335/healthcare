import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ServiceItem.css';
import Doctor from './../../Components/Doctor/Doctor';
import { Link, useParams } from 'react-router-dom';

const ServiceItem = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        const url = `./health.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            console.log(data)
            }
        )
    }, [])

    return (
        <Container>
            <div className='service py-5'>
                <h1 className='py-5 my-5 basic-color fw-bold text-center headline-font'>We are always ready for you id{ serviceId }</h1>
            </div>
            <div>
            </div>
            <div className='my-4'>
                <Link to='/appointment'>
                    <button className='button-font border border-0 rounded-pill px-4 py-2 med-button mt-4'>Get a Appointment</button>
                </Link>
            </div>
            <div className='my-5'>
                <h1 className='basic-color'>Our Team</h1>
                <Doctor></Doctor>
            </div>
        </Container>
    );
};

export default ServiceItem;