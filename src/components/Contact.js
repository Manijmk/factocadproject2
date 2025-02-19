// components/Contact.js
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className="contact-section py-5">
      <Container>
        <h2 className="section-title mb-5">Contact Us</h2>
        <Row className="g-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={5} placeholder="Message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>We'd love to hear from you! Reach out for inquiries or collaborations.</p>
              {/* <ul className="contact-details">
                <li>Phone: +1 (123) 456-7890</li>
                <li>Email: info@factocad.com</li>
                <li>Address: 123 Industrial Way, Manufacturing City, USA</li>
              </ul> */}

              <ul className="contact-details">
              <li> FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD </li>
              <li>Email: sales@factocad-robotics.com</li>
              {/* <li>Address: No.941,pasumpon nagar ,kilpudhupakkam salai,</li>
              <li>Near cheyyar sipcot industrial park </li>
              <li>Cheyyar -604407, TamilNadu, India </li> */}
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}