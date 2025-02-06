// components/About.js
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from '../assets/images/bg-4.png'

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <section
            id="about"
            className={`about-section py-5 ${inView ? 'in-view' : ''}`}
            ref={ref}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="about-image">
                        <img
                            src={BackgroundImage}
                            alt="About Factocad"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6} className="about-content">
                        <h2 className="section-title mb-4">About Factocad</h2>
                        <p className="lead">
                            Factocad Robotics and Automation India Pvt Ltd is a fast-growing digital manufacturing engineering solutions provider specializing in automotive, aerospace, and locomotive industries.
                        </p>
                        <p>
                            With a team of highly skilled engineers and cutting-edge technology, we deliver end-to-end solutions from concept to production. Our expertise includes process planning, tooling design, robotic simulation, and technical documentation.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}