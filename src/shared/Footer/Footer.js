import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 font-weight-bold text-white py-4">
            <Container>
                <Row className="w-100">

                    <Col md={4}>

                        <ul>
                            <h5>Health Solutions</h5>
                            <li>Alzheimer's Disease</li>
                            <li>Diabetes Help Center</li>
                            <li>Learn About Triglycerides</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <h5>Latest Posts</h5>
                            <li>Three Musketeers Surgical Team</li><small>April 8, 2021</small>
                            <li>Accredited surgical facility</li><small>May 21, 2021</small>
                            <li>Health checks for babies</li><small>June 17, 2021</small>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <h5>Contact</h5>
                            <li>Phone : +1 200 258 2145</li>
                            <li>Email : yourname@somemail.com</li>
                            <li>Web :<a href="https://www.google.com/" target="_blank" rel="noreferrer">google.com</a></li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;