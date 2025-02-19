// components/Services.js
import { Container, Row, Col } from 'react-bootstrap';
import { Gear, Robot, Person } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Bgimage from '../assets/images/bg-2.jpg';
import StaffImg from '../assets/images/staffing-1.jpg';
import RobotMfgImg from '../assets/images/bg-4.png'

const services = [
    {
        id: 'digital-manufacturing',
        icon: <Gear />,
        title: "Digital Manufacturing",
        desc: "End-to-end engineering solutions from concept to production",
        bgImage : Bgimage,
    },
    {
        id: 'staffing-consulting',
        icon: <Person />,
        title: "Staffing & Consulting",
        desc: "Skill-set Upgradation Programs",
        bgImage : StaffImg,
    },
    {
        id: 'robotic-integration',
        icon: <Robot />,
        title: "Lean Manufacturing",
        desc: "Advanced robotic systems implementation",
        bgImage : RobotMfgImg,
    },
    // {
    //     id: 'tooling-design',
    //     icon: <Tools />,
    //     title: "Tooling Design",
    //     desc: "Precision tooling and fixture development"
    // }
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
                        <Col md={6} lg={4} key={service.id}>
                            <Link
                                to={`/services/${service.id}`}
                                className="text-decoration-none"
                            >
                               <div
                                    className="service-card"
                                    style={{
                                        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${service.bgImage})`,
                                        backgroundSize: 'cover',
                                        minHeight: '300px'
                                      }}
                                >
                                    <div className="service-overlay"></div>
                                    <div className="service-content">
                                        <div className="service-icon">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}