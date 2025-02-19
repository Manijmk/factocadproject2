// components/Industries.js
import { Container, Row, Col } from 'react-bootstrap';
import AutomotiveImg from '../assets/images/BG 1.png';
import AerospaceImg from '../assets/images/aerospaceimg.jpg';
import LocomotiveImg from '../assets/images/locomotiveimg.webp';
import HeavyEquipmentImg from '../assets/images/heavyequipmentimg.webp';

const industries = [
  {
    title: "Automotive",
    description: "Precision engineering for automotive manufacturing",
    image: AutomotiveImg
  },
  {
    title: "Aerospace",
    description: "Advanced solutions for aerospace applications",
    image: AerospaceImg
  },
  {
    title: "Locomotive",
    description: "Robust systems for railway manufacturing",
    image: LocomotiveImg
  },
  {
    title: "Heavy Equipment",
    description: "Custom solutions for industrial machinery",
    image: HeavyEquipmentImg
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