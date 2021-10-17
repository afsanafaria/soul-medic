import React from 'react';
import { Row, Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Department from '../Department/Department';

const Departments = () => {
    const { services } = useServices();
    return (
        <div className="departments mt-5 pt-5">
            <h2 className="services-heading text-center">Departments</h2>
            <Container>

                <Row xs={1} md={3} className="g-4 w-100">
                    {
                        services.map(d => <Department key={d.id} service={d}></Department>)
                    }
                </Row>
            </Container>


        </div>

    );
};

export default Departments;