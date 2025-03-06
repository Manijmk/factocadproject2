// pages/BodyInWhite.js
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import bodyInWhiteImg from '../assets/images/BodyInWhite.png'; // Image for Body in White
import './BodyInWhite.css'; // Custom CSS for this component

export default function BodyInWhite() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const content = [
    {
      subTopic: "PROCESS PLANNING & DESIGN",
      items: [
        "Production Volume − Takt Time Calculations",
        "Part Study − Part Build ups",
        "Weld Points Study",
        "Weld Process Definition",
        "Weld Gun Selections",
        "System Layouts − Conceptual Plant Layout",
        "Clamping Plans",
        "Methods Time Measurement (MTM) analysis",
        "Line balancing",
        "Ergo Study",
        "Material flow simulation using EM-Plant",
        "Documentation of the Process"
      ]
    },
    {
      subTopic: "FIXTURE DESIGN",
      items: [
        "Production Tooling",
        "Gripper Design",
        "Material Handling End",
        "Low Cost Automation",
        "Geo- Fixtures",
        "Re-Spot Fixtures",
        "Material Handling Grippers",
        "Process & Geo Grippers",
        "Proto type Fixtures",
        "Checking Fixtures",
        "MIG/MAG Welding Fixtures",
        "Put-Down Stand",
        "Buffer Stand",
        "Passing Tables",
        "Conveyor Tooling",
        "Gun / Gripper Docking Stand"
      ]
    },
    {
      subTopic: "ROBOT SIMULATION",
      items: [
        "Pre-engineering Work cell",
        "Parts Placement and Part Orientation",
        "Reachability of Robots check according to Layout",
        "Gripper Validation Fine-tuning of the Placement",
        "Weld Point Segregation",
        "Selected Weld Gun Study",
        "Weld gun search & collision analysis",
        "Fixture Validation , Tooling & Gun Kinematics",
        "Kinematics for tools, and weld gun",
        "Weld gun & tool validation",
        "Robot Payload Checks",
        "Path Creation & Optimization",
        "Assigning attributes",
        "I/O- signaling, Sequence of Operation",
        "Layout finalization",
        "Cycle Time & Off-Line Program"
      ]
    },
    {
      subTopic: "DRAFTING & DETAILING",
      items: [
        "Detailed Manufacturing Drawings",
        "Bill of materials",
        "Tooling Layout",
        "Flame cut drawings",
        "Pay load and Buyoff sheets",
        "Control sheet creation"
      ]
    },
    {
      subTopic: "TECHNICAL DOCUMENTATION",
      items: [
        "Pneumatic clamping valve sequence Design",
        "Ergonomic Studies",
        "Robot load capacity",
        "Flow Chart",
        "Spot Distribution",
        "Cycle time studies",
        "Health & Safety Risks Assessments",
        "Function Diagrams",
        "Manuals"
      ]
    }
  ];

  return (
    <section className="body-in-white-difacto">
      {/* Hero Section */}
      <div
        className="hero-section-difacto"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bodyInWhiteImg})` }}
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
          <h1 className="hero-title-difacto">Body in White</h1>
          <p className="hero-subtitle-difacto">
            Comprehensive solutions for body-in-white manufacturing processes.
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