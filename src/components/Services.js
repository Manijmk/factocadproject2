// components/Services.js
import { Container, Row, Col } from 'react-bootstrap';
import { Gear, Cpu, Robot, Tools } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'digital-manufacturing',
        icon: <Gear />,
        title: "Digital Manufacturing",
        desc: "End-to-end engineering solutions from concept to production"
    },
    {
        id: 'automation-systems',
        icon: <Cpu />,
        title: "Automation Systems",
        desc: "Custom industrial automation solutions"
    },
    {
        id: 'robotic-integration',
        icon: <Robot />,
        title: "Robotic Integration",
        desc: "Advanced robotic systems implementation"
    },
    {
        id: 'tooling-design',
        icon: <Tools />,
        title: "Tooling Design",
        desc: "Precision tooling and fixture development"
    }
];

export default function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    return (
        <section
            id="services"
            className={`services-section py-5 ${inView ? 'in-view' : ''}`}
            ref={ref}
        >
            <Container>
                <h2 className="section-title mb-5">Our Services</h2>
                <Row className="g-4">
                    {services.map((service) => (
                        <Col md={6} lg={3} key={service.id}>
                            <Link
                                to={`/services/${service.id}`}
                                className="text-decoration-none"
                            >
                                <div className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}