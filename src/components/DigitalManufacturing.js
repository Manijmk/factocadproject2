// pages/DigitalManufacturing.js
import { Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import bgimage from '../assets/images/bg-3.jpg'; // Background image for the header
import metalstampingimg from '../assets/images/Metalstamping.jpg'; // Image for Metal Stamping section
import roboticworkcellimg from '../assets/images/robot-simulation.jpg'; // Image for Robotic Workcell section
import './DigitalManufacturing.css'; // Custom CSS for this component

export default function DigitalManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const sections = [
    {
      title: "Body in White Solutions",
      content: [
        "Process Planning & Simulation",
        "3D Digital Factory Design",
        "Robotic Workcell Integration"
      ],
      image: bgimage,
      icon: "bi bi-gear-wide-connected" // Bootstrap Icons for section icons
    },
    {
      title: "Metal Stamping Solutions",
      content: [
        "Die Design Engineering",
        "Stamping Simulation",
        "Hemming Simulation"
      ],
      image: metalstampingimg,
      icon: "bi bi-hammer"
    },
    {
      title: "Robotic Workcell Solutions",
      content: [
        "Custom Robotic Cell Layouts",
        "End-of-Arm Tooling Design",
        "Simulation and Validation"
      ],
      image: roboticworkcellimg,
      icon: "bi bi-robot"
    }
  ];

  return (
    <section className="digital-manufacturing">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgimage})` }}
      >
        <Container>
          <Button
            as={Link}
            to="/"
            variant="light"
            className="back-button"
          >
            <ArrowLeft className="me-2" /> Back to Services
          </Button>
          <h1 className="hero-title">Digital Manufacturing</h1>
          <p className="hero-subtitle">
            Comprehensive digital manufacturing solutions for modern industries.
          </p>
        </Container>
      </div>

      {/* Services Sections */}
      <Container className="services-container">
        {sections.map((section, index) => (
          <Row key={index} className="service-section align-items-center">
            <Col md={6} className="service-image">
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid"
              />
            </Col>
            <Col md={6} className="service-content">
              <div className="service-icon">
                <i className={section.icon}></i>
              </div>
              <h2>{section.title}</h2>
              <ListGroup variant="flush">
                {section.content.map((item, idx) => (
                  <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}