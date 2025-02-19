// components/Footer.js
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer-section py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Factocad</h3>
            <p>Precision digital manufacturing solutions for the modern industry.</p>
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li> FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD </li>
              <li>Email: sales@factocad-robotics.com</li>
              <li>Address: No.941,pasumpon nagar ,kilpudhupakkam salai,</li>
              <li>Near cheyyar sipcot industrial park </li>
              <li>Cheyyar -604407, TamilNadu, India </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} Factocad. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}