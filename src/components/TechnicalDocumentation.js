// pages/TechnicalDocumentation.js
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import technicalDocumentationImg from '../assets/images/technical-documentation.png'; // Image for Technical Documentation
import './TechnicalDocumentation.css'; // Custom CSS for this component

export default function TechnicalDocumentation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const content = [
    {
      subTopic: "Overview",
      items: [
        "Layout Engineering (2D &3D)",
        "Produce animations and Renderings",
        "Visualize and analyze designs",
        "Factory walk through and",
        "Over plant design @3D",
        "Conversions CAD files in to compatible format"
      ]
    }
  ];

  return (
    <section className="technical-documentation-difacto">
      {/* Hero Section */}
      <div
        className="hero-section-difacto"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${technicalDocumentationImg})` }}
      >
        <Container>
          <Button
            as={Link}
            to="/digital-manufacturing"
            variant="light"
            className="back-to-services-btn-difacto"
          >
            <ArrowLeft className="me-2" /> Back to Digital Manufacturing
          </Button>
          <h1 className="hero-title-difacto">Technical Documentation</h1>
          <p className="hero-subtitle-difacto">
            Detailed technical documentation for manufacturing processes.
          </p>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="content-section-difacto">
        {content.map((section, index) => (
          <div key={index} className="content-block-difacto">
            <h3>{section.subTopic}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}