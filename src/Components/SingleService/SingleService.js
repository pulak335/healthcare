import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
  const { id, serviceName, describe, img } = service;
    return (
    <Col>
      <Card className=' text-center p-5'>
        <Card.Img variant="top" src={img} className='mx-auto' style={{width:"50px"}}/>
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
            <Card.Text>{ describe }</Card.Text>
          </Card.Body>
          <Link to={`/services/${id}`}>
            <button className='button-font border border-0 rounded-pill px-4 py-2 med-button mt-4'>More Details</button>
            </Link>
      </Card>
    </Col>
  )

};

export default SingleService;