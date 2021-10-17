import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';

const Gallery = () => {
    const { services } = useServices();
    return (
        <div className="gallery mt-5 pt-5">
            <h2 className="services-heading text-center">Gallery</h2>
            <Container>

                <Row xs={1} md={3} className="g-4 w-100">
                    {
                        services.map(service => (
                            <>
                                <Col>
                                    <Card>
                                        <Image variant="top" src={service.picture} roundedCircle className="card-img w-50 mx-auto mt-2 border border-4" />
                                        <Card.Body>
                                            <Card.Title className="service-title text-center">{service.service}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </Container>


        </div>

    );
};

export default Gallery;