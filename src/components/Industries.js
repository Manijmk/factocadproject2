// components/Industries.js
import { Container, Row, Col } from 'react-bootstrap';

const industries = [
  {
    title: "Automotive",
    description: "Precision engineering for automotive manufacturing",
    image: "/images/automotive.jpg"
  },
  {
    title: "Aerospace",
    description: "Advanced solutions for aerospace applications",
    image: "/images/aerospace.jpg"
  },
  {
    title: "Locomotive",
    description: "Robust systems for railway manufacturing",
    image: "/images/locomotive.jpg"
  },
  {
    title: "Heavy Equipment",
    description: "Custom solutions for industrial machinery",
    image: "/images/heavy-equipment.jpg"
  }
];

export default function Industries() {
  return (
    <section className="industries-section py-5">
      <Container>
        <h2 className="section-title mb-5">Industries We Serve</h2>
        <Row className="g-4">
          {industries.map((industry, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="industry-card">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="industry-image"
                />
                <div className="industry-overlay">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}