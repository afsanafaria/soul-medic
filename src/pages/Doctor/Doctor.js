import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Doctor = (props) => {
    const { doctorPic, name, email, department } = props.service;
    return (
        <div className="service mt-5">

            <Col>
                <div className="service-page-card h-100">
                    <Image variant="top" src={doctorPic} roundedCircle className="card-img w-50 mx-auto mt-2 border border-4" />
                    <Card.Body className="card-body">
                        <Card.Title className="service-title">{department} Department</Card.Title>
                        <Card.Text>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>

                        </Card.Text>
                    </Card.Body>
                </div>
            </Col>
        </div>
    );
};

export default Doctor;