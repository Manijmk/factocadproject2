// pages/StaffingConsulting.js
import { Container, Button, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function StaffingConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const expertiseList = [
    "OEM Standards Implementation",
    "Skill-set Upgradation Programs",
    "Customized Engineering Solutions"
  ];

  const softwareList = [
    'Robcad',
    'Delmia V5',
    'Process Simulate',
    'Process Designer',
    'Roboguide',
    'Robotstudio',
    'CATIA V5',
    'UGNX',
    'Microstation',
    'Plant Simulation',
    'Stamping Simulation'
  ];

  return (
    <section className="service-detail-section py-5 mt-5">
      <Container>
        <Button
          as={Link}
          to="/"
          variant="light"
          className="mb-4"
        >
          <ArrowLeft className="me-2" /> Back to Services
        </Button>

        <div className="service-header mb-5 text-white">
          <h1 className="display-4 mb-3">Staffing & Consulting</h1>
          <p className="lead">Expert engineering resources for your automation projects.</p>
        </div>

        <Card className="shadow mb-5">
          <Card.Body>
            <Row className="g-4">
              <Col md={6}>
                <h5 className="text-primary mb-3">Our Expertise:</h5>
                <ListGroup variant="flush">
                  {expertiseList.map((item, idx) => (
                    <ListGroup.Item key={idx} className="border-0">
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <h5 className="text-primary mb-3">Software Proficiency:</h5>
                <div className="software-grid">
                  {softwareList.map((software, idx) => (
                    <Badge key={idx} bg="primary" className="me-2 mb-2 fs-6">
                      {software}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}