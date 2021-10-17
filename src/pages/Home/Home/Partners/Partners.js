import React from 'react';
import p1 from '../../../../images/Partners/client1.jpg';
import p2 from '../../../../images/Partners/client2.jpg';
import p3 from '../../../../images/Partners/client3.jpg';
import p4 from '../../../../images/Partners/client4.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './Partners.css'

const Partners = () => {
    return (
        <div className="partners my-4">
            <Container>
                <h2 className=" services-heading mb-4 text-center">Our Partners</h2>
                <Row className="w-100">
                    <Col md={3}>
                        <img className="w-100"
                            src={p1}
                            alt=""
                        />
                    </Col>
                    <Col md={3}>
                        <img className="w-100"
                            src={p2}
                            alt=""
                        />
                    </Col>
                    <Col md={3}>
                        <img className="w-100"
                            src={p3}
                            alt=""
                        />
                    </Col>
                    <Col md={3}>
                        <img className="w-100"
                            src={p4}
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;