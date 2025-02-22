// pages/RoboticIntegration.js
import { Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function LeanManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const sections = [
    {
      title: "Robotic Workcell Design",
      content: [
        "Custom Robotic Cell Layouts",
        "End-of-Arm Tooling Design",
        "Simulation and Validation"
      ]
    },
    {
      title: "Automation Solutions",
      content: [
        "PLC Programming",
        "SCADA Systems",
        "System Integration"
      ]
    }
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
          <h1 className="display-4 mb-3">Robotic Integration</h1>
          <p className="lead">Advanced robotic systems implementation for modern industries.</p>
        </div>

        <Row className="g-4">
          {sections.map((section, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <h3 className="text-primary">{section.title}</h3>
                  <ListGroup variant="flush">
                    {section.content.map((item, idx) => (
                      <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}