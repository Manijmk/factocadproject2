// pages/BodyInWhite.js
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import bodyInWhiteImg from '../assets/images/BodyInWhite.png'; // Image for Body in White
import processPlanningImg from '../assets/images/process-planning.jpg'; // Image for Process Planning
import fixtureDesignImg from '../assets/images/fixture-design.jpg'; // Image for Fixture Design
import robotSimulationImg from '../assets/images/robot-simulation.jpg'; // Image for Robot Simulation
import draftingDetailingImg from '../assets/images/cadautomation.png'; // Image for Drafting & Detailing
import technicalDocumentationImg from '../assets/images/technical-documentation.png'; // Image for Technical Documentation
import './BodyInWhite.css'; // Custom CSS for this component

export default function BodyInWhite() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const content = [
    {
      subTopic: "PROCESS PLANNING & DESIGN",
      image: processPlanningImg,
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
      image: fixtureDesignImg,
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
      image: robotSimulationImg,
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
      image: draftingDetailingImg,
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
      image: technicalDocumentationImg,
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
    // <section className="body-in-white-difacto">
    //   <div
    //     className="hero-section-difacto"
    //     style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bodyInWhiteImg})` }}
    //   >
    //     <Container>
    //       <Button
    //         as={Link}
    //         to="/digital-manufacturing"
    //         variant="light"
    //         className="back-to-services-btn-difacto"
    //       >
    //         <ArrowLeft className="me-2" /> Back to Digital Manufacturing
    //       </Button>
    //       <h1 className="hero-title-difacto">Body in White</h1>
    //       <p className="hero-subtitle-difacto">
    //         Comprehensive solutions for body-in-white manufacturing processes.
    //       </p>
    //     </Container>
    //   </div>

    //   <Container className="content-section-difacto">
    //     {content.map((section, index) => (
    //       <div
    //         key={index}
    //         className="content-block-difacto"
    //         style={{ background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)' }}
    //       >
    //         <Row className="align-items-center">
    //           <Col md={7}>
    //             <h3 className="content-title-difacto">{section.subTopic}</h3>
    //             <ul className="content-list-difacto">
    //               {section.items.map((item, idx) => (
    //                 <li key={idx}>{item}</li>
    //               ))}
    //             </ul>
    //           </Col>
    //           <Col md={5}>
    //             <div className="image-container-difacto">
    //               <img
    //                 src={section.image}
    //                 alt={section.subTopic}
    //                 className="content-image-difacto"
    //               />
    //             </div>
    //           </Col>
    //         </Row>
    //       </div>
    //     ))}
    //   </Container>
    // </section>

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
          <div
            key={index}
            className="content-block-difacto"
          >
            <Row className="align-items-center">
              <Col md={7}>
                <h3 className="content-title-difacto">{section.subTopic}</h3>
                <ul className="content-list-difacto">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={5}>
                <div className="image-container-difacto">
                  <img
                    src={section.image}
                    alt={section.subTopic}
                    className="content-image-difacto"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
}