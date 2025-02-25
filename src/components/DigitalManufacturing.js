// pages/DigitalManufacturing.js
import { Container, Button, Row, Col, Card, Accordion } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import factoryImg from '../assets/images/bg-2.jpg'; // Background image for the header
import roboticWorkcellImg from '../assets/images/robot-simulation.jpg'; // Image for Robotic Workcell section
import metalStampingImg from '../assets/images/Metalstamping.jpg'; // Image for Metal Stamping section
import digitalFactoryImg from '../assets/images/bg-4.png'; // Image for Digital Factory section
import './DigitalManufacturing.css'; // Custom CSS for this component

export default function DigitalManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const services = [
    {
      title: "Robotic Workcell Solutions",
      description: "Custom robotic cell layouts and integration for advanced manufacturing.",
      image: roboticWorkcellImg,
      icon: "bi-robot" // Bootstrap icon class
    },
    {
      title: "Metal Stamping Solutions",
      description: "Precision metal stamping and die design for high-quality production.",
      image: metalStampingImg,
      icon: "bi-hammer"
    },
    {
      title: "Digital Factory Design",
      description: "End-to-end digital factory planning and simulation for modern industries.",
      image: digitalFactoryImg,
      icon: "bi-gear-wide-connected"
    }
  ];

  const [activeKey, setActiveKey] = useState(null); // State to manage active accordion

  const topics = [
    {
      title: "BODY IN WHITE",
      content: [
        "Process planning",
        "Metal Forming",
        "Tooling design",
        "Robot simulation",
        "Drafting & Detailing",
        "Layout planning",
        "Technical Documentation",
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
      ]
    },
    {
      title: "METAL STAMPING",
      content: [
        "FACTOCAD gives you the ability to address sheet metal formability challenges from the design of parts and tooling to part production with a single tool. Validate the forming of individual panels and even help validate the assembly of closure panels (SKIN PANEL), such as doors. Develop and validate key manufacturing and joining processes, virtually, to assure production capability of parts, sub-assemblies, and assemblies for all sheet metal parts, simple to complex, conventional steel to advanced lightweight sheet metals."
      ]
    },
    {
      title: "ASSEMBLY ENGINEERING",
      content: [
        "Vehicle validation",
        "Clash Check analysis",
        "Feasibility Analysis",
        "Human Ergonomics",
        "MTM"
      ]
    },
    {
      title: "3D LAYOUT PLANNING",
      content: [
        "Layout Engineering (2D &3D)",
        "Produce animations and Renderings",
        "Visualize and analyze designs",
        "Factory walk through and",
        "Over plant design @3D",
        "Conversions CAD files in to compatible format"
      ]
    },
    {
      title: "TECHNICAL DOCUMENTATION",
      content: [
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
    // <section className="digital-manufacturing-difacto">
    //   {/* Hero Section */}
    //   <div
    //     className="hero-section-difacto"
    //     style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${factoryImg})` }}
    //   >
    //     <Container>
    //       <Button
    //         as={Link}
    //         to="/"
    //         variant="light"
    //         className="back-to-services-btn-difacto"
    //       >
    //         <ArrowLeft className="me-2" /> Back to Services
    //       </Button>
    //       <h1 className="hero-title-difacto">Digital Manufacturing</h1>
    //       <p className="hero-subtitle-difacto">
    //         Transforming industries with cutting-edge digital manufacturing solutions.
    //       </p>
    //     </Container>
    //   </div>

    //   {/* Services Section */}
    //   <Container className="services-section-difacto">
    //     <h2 className="services-title-difacto">Our Services</h2>
    //     <Row className="g-4">
    //       {services.map((service, index) => (
    //         <Col md={4} key={index}>
    //           <Card className="service-card-difacto">
    //             <div
    //               className="service-image-difacto"
    //               style={{ backgroundImage: `url(${service.image})` }}
    //             />
    //             <Card.Body className="service-body-difacto">
    //               <div className="service-icon-difacto">
    //                 <i className={`bi ${service.icon}`}></i>
    //               </div>
    //               <h3>{service.title}</h3>
    //               <p>{service.description}</p>
    //             </Card.Body>
    //           </Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>

    //   {/* Call-to-Action Section */}
    //   <div className="cta-section-difacto">
    //     <Container>
    //       <h2>Ready to Transform Your Manufacturing Process?</h2>
    //       <p>Contact us today to learn more about our digital manufacturing solutions.</p>
    //       <Button
    //         variant="primary"
    //         size="lg"
    //         as={Link}
    //         to="/contact"
    //         className="cta-btn-difacto"
    //       >
    //         Get in Touch
    //       </Button>
    //     </Container>
    //   </div>
    // </section>

    <section className="digital-manufacturing-difacto">
      {/* Hero Section */}
      <div
        className="hero-section-difacto"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${factoryImg})` }}
      >
        <Container>
          <Button
            as={Link}
            to="/"
            variant="light"
            className="back-to-services-btn-difacto"
          >
            <ArrowLeft className="me-2" /> Back to Services
          </Button>
          <h1 className="hero-title-difacto">Digital Manufacturing</h1>
          <p className="hero-subtitle-difacto">
            Transforming industries with cutting-edge digital manufacturing solutions.
          </p>
        </Container>
      </div>

      {/* Topics Section */}
      <Container className="topics-section-difacto">
        <h2 className="topics-title-difacto">Our Services</h2>
        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          {topics.map((topic, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{topic.title}</Accordion.Header>
              <Accordion.Body>
                {topic.content.map((item, idx) => (
                  typeof item === "string" ? (
                    <p key={idx}>{item}</p>
                  ) : (
                    <div key={idx}>
                      <h5>{item.subTopic}</h5>
                      <ul>
                        {item.items.map((subItem, subIdx) => (
                          <li key={subIdx}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}