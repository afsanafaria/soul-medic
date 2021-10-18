import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Button, Image } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { id, service, descrition, picture } = props.service;
    return (
        <div className="service mt-5">

            <Col>
                <div className="service-page-card">
                    <Image variant="top" src={picture} roundedCircle className="card-img w-50 mx-auto mt-2 border border-4" />
                    <Card.Body className="card-body">
                        <Card.Title className="service-title">{service}</Card.Title>
                        <Card.Text>
                            {descrition.slice(0, 120)}....
                            <br /><Link to={`/servicepage/${id}`}><Button className="mt-3 button">Want to know more?</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Col>
        </div>
    );
};

export default Service;