import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const { services } = useServices();

    return (
        <div className="services mt-5 pt-5 text-center">
            <Container>
                <h2 className="services-heading">Doctors</h2>
                <Row xs={1} md={3} className="g-4 w-100">
                    {
                        services.map(doctor => <Doctor key={doctor.id} service={doctor}></Doctor>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Doctors;