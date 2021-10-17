import React from 'react';
import './Philosophy.css';
import phil from '../../../images/philo.jpg'
import { Col, Container, Row } from 'react-bootstrap';


const Philosophy = () => {
    return (
        <div className="philosophy mt-5">
            <Container fluid>
                <Row className="w-100 g-0">
                    <Col md={6}>
                        <img className="w-100"
                            src={phil}
                            alt=""
                        />
                    </Col>
                    <Col className="text-white" md={6}>
                        <div className="m-lg-5 p-lg-3">
                            <h1>Our Philosophy</h1>
                            <p>Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care.
                                <br />
                                Patients can do a lot of small things to make their health-care experience as safe as possible.
                                <br />
                                Hospitals are places of recovery and healing but there are also safety risks for patients.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Philosophy;