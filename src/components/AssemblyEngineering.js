
// pages/AssemblyEngineering.js
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import assemblyEngineeringImg from '../assets/images/ManufacturingEngineering.png'; // Image for Assembly Engineering
import './AssemblyEngineering.css'; // Custom CSS for this component

export default function AssemblyEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const content = [
    {
      subTopic: "Overview",
      items: [
        "Vehicle validation",
        "Clash Check analysis",
        "Feasibility Analysis",
        "Human Ergonomics",
        "MTM"
      ]
    }
  ];

  return (
    <section className="assembly-engineering-difacto">
      {/* Hero Section */}
      <div
        className="hero-section-difacto"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${assemblyEngineeringImg})` }}
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
          <h1 className="hero-title-difacto">Assembly Engineering</h1>
          <p className="hero-subtitle-difacto">
            Efficient assembly engineering solutions for modern industries.
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