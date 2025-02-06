// components/Capabilities.js
import { Container, Row, Col } from 'react-bootstrap';

const capabilities = [
  "Process Planning & Simulation",
  "3D Digital Factory Design",
  "Robotic Workcell Integration",
  "Tooling & Fixture Design",
  "Technical Documentation",
  "Quality Assurance Systems"
];

export default function Capabilities() {
  return (
    <section className="capabilities-section py-5">
      <Container>
        <h2 className="section-title mb-5">Capabilities</h2>
        <Row className="g-4">
          {capabilities.map((capability, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="capability-item">
                <h3>{capability}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}