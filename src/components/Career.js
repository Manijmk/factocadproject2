// components/Career.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import careerImg from '../assets/images/staffing-1.jpg'
import { useEffect } from 'react';

export default function Career() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

   useEffect(() => {
      // Check if this is causing the scroll
      window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
    }, []);

  return (
    <section
      id="career"
      className={`career-section ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="career-content">
            <h2>Join the FACTOCAD Family</h2>
            <p>
              We would love to see you as a part of the FACTOCAD family. If you are an experienced and certified engineer willing to work with us, then it's time you should join us.
            </p>
            <p>
              Send your CV to <strong>hr@factocad-robotics.com</strong>.
            </p>
            <Button
              variant="primary"
              href="mailto:hr@factocad-robotics.com"
              className="cta-button"
            >
              Send Your CV
            </Button>
          </Col>
          <Col lg={6} className="career-image">
            <img
              src={careerImg} // Add your manufacturing-related image here
              alt="Join FACTOCAD"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}