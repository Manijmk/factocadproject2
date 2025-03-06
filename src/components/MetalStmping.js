// pages/MetalStamping.js
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import metalStampingImg from '../assets/images/Metalstamping.jpg'; // Image for Metal Stamping
import './MetalStamping.css'; // Custom CSS for this component

export default function MetalStamping() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const content = [
    {
      subTopic: "Overview",
      items: [
        "FACTOCAD gives you the ability to address sheet metal formability challenges from the design of parts and tooling to part production with a single tool.",
        "Validate the forming of individual panels and even help validate the assembly of closure panels (SKIN PANEL), such as doors.",
        "Develop and validate key manufacturing and joining processes, virtually, to assure production capability of parts, sub-assemblies, and assemblies for all sheet metal parts, simple to complex, conventional steel to advanced lightweight sheet metals."
      ]
    }
  ];

  return (
    <section className="metal-stamping-difacto">
      {/* Hero Section */}
      <div
        className="hero-section-difacto"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${metalStampingImg})` }}
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
          <h1 className="hero-title-difacto">Metal Stamping</h1>
          <p className="hero-subtitle-difacto">
            Advanced solutions for metal stamping and sheet metal forming.
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