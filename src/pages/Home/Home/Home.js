import React from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Banner from '../Banner/Banner';
import Philosophy from '../Philosophy/Philosophy';
import './Home.css'
import Partners from './Partners/Partners';

const Home = () => {
    const { services } = useServices();
    return (
        <div>
            <Banner></Banner>
            <div className="sercives-in-home text-center">
                <h2 className="my-4 services-heading">Services</h2>
                <Row xs={1} md={4} className="g-4 w-100">
                    {
                        services.slice(0, 4).map(service => (
                            <>
                                <Col>
                                    <Card className="card">
                                        <Image variant="top" src={service.picture} roundedCircle className="card-img w-50 mx-auto mt-2 border border-4" />
                                        <Card.Body>
                                            <Card.Title className="service-title">{service.service}</Card.Title>
                                            <Card.Text>
                                                {service.descrition.slice(0, 100)}....
                                                <br /><Link to="/services"><Button className="mt-3 button">Know More</Button></Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </div>

            <Philosophy></Philosophy>
            <Partners></Partners>

        </div>
    );
};

export default Home;