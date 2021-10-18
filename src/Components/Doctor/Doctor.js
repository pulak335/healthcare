import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Doctor = () => {
    return (
        <div className='mb-5'>
            <Row xs={1} md={3} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/p-6-600x600.jpg" />
                    <Card.Body>
                    <Card.Title className='basic-color'>Joshua Clark</Card.Title>
                    <Card.Text>Anesthesiologist</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/p-9-600x600.jpg" />
                    <Card.Body>
                    <Card.Title className='basic-color'>Steven Jacob</Card.Title>
                    <Card.Text>Anesthesiologist</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/p-8-600x600.jpg" />
                    <Card.Body>
                    <Card.Title className='basic-color'>Emma Bunton</Card.Title>
                    <Card.Text>Allergist</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Doctor;