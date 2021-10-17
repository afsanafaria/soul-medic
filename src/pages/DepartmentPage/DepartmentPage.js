import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DepartmentPage = () => {
    const { departmentId } = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/afsanafaria/fakeMealData/main/healthCare.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const departmentDetails = details.find(d => d.id == departmentId);
    console.log('from service page', departmentDetails)
    // console.log('from service page', details);

    return (
        <div className="service-page my-5">
            <h2 className="services-heading mt-5 py-5 text-center">Department Details</h2>
            <Container>
                <Row className="w-100">
                    <div className="mx-auto">
                        <Col>
                            <div>
                                <h4 className="service-title">{departmentDetails?.department}</h4>
                                <p>{departmentDetails?.descrition}</p>
                                <Link to="/departments"><Button>Other Departments</Button></Link>
                            </div>

                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default DepartmentPage;