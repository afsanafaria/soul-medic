import { Row, Container } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useServices();

    return (
        <div className="mx-auto services mt-5 pt-5 text-center">
            <Container>
                <h2 className="services-heading">Services</h2>
                <Row xs={1} md={3} className="g-4 w-100 mx-auto">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Services;