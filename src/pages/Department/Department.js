import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Department = (props) => {
    const { id, department, departmentInfo } = props.service;
    return (
        <div className="service mt-5">

            <Col>
                <div className="service-page-card">

                    <Card.Body className="card-body">
                        <Card.Title className="service-title">{department}</Card.Title>
                        <Card.Text>
                            {departmentInfo.slice(0, 100)}....
                            <br /><Link to={`/departmentpage/${id}`}><Button className="mt-3 button">Know More</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Col>
        </div>
    );
};

export default Department;