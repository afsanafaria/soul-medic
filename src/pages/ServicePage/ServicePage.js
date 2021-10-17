import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServicePage.css'

const ServicePage = () => {
    const { serviceId } = useParams();
    // const { services, setServices } = useServices();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/afsanafaria/fakeMealData/main/healthCare.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const serviceDetails = details.find(s => s.id == serviceId);
    console.log('from service page', serviceDetails)
    // console.log('from service page', details);

    return (
        <div className="service-page my-5">
            <h2 className="services-heading mt-5 py-5 text-center">Service Details</h2>
            <Container>
                <Row className="w-100">

                    <Col lg={6} md={6}>
                        <img
                            src={serviceDetails?.picture}
                            alt=""
                        />
                    </Col>
                    <Col lg={6} md={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className="service-title">{serviceDetails?.name}</h4>
                            <p>{serviceDetails?.descrition}</p>
                            <h5 className="doctor-name">Doctor : {serviceDetails?.name}</h5>
                            <Link to="/complete"><Button>Appoint</Button></Link>
                            <Link to="/services"><Button>Other Services</Button></Link>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ServicePage;