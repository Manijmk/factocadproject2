// pages/DigitalManufacturing.js
import { Container, Button, Row, Col, Card, Accordion } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import factoryImg from '../assets/images/bg-2.jpg'; // Background image for the header
import metalStampingImg from '../assets/images/Metalstamping.jpg'; // Image for Metal Stamping section
import bodyInWhiteImg from '../assets/images/Metalstamping.jpg';   
import assemblyEngineeringImg from '../assets/images/BG 1.png';
import layoutPlanningImg from '../assets/images/process-planning.jpg';
import technicalDocumentationImg from '../assets/images/technical-documentation.png';
import './DigitalManufacturing.css'; // Custom CSS for this component

// export default function DigitalManufacturing() {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
//   }, []);

//   const [activeKey, setActiveKey] = useState(null); // State to manage active accordion

//   const topics = [
//     {
//       title: "BODY IN WHITE",
//       image: bodyInWhiteImg,
//       description: "Comprehensive solutions for body-in-white manufacturing processes.",
//       content: [
//         "Process planning",
//         "Metal Forming",
//         "Tooling design",
//         "Robot simulation",
//         "Drafting & Detailing",
//         "Layout planning",
//         "Technical Documentation",
//         {
//           subTopic: "PROCESS PLANNING & DESIGN",
//           items: [
//             "Production Volume − Takt Time Calculations",
//             "Part Study − Part Build ups",
//             "Weld Points Study",
//             "Weld Process Definition",
//             "Weld Gun Selections",
//             "System Layouts − Conceptual Plant Layout",
//             "Clamping Plans",
//             "Methods Time Measurement (MTM) analysis",
//             "Line balancing",
//             "Ergo Study",
//             "Material flow simulation using EM-Plant",
//             "Documentation of the Process"
//           ]
//         },
//         {
//           subTopic: "FIXTURE DESIGN",
//           items: [
//             "Production Tooling",
//             "Gripper Design",
//             "Material Handling End",
//             "Low Cost Automation",
//             "Geo- Fixtures",
//             "Re-Spot Fixtures",
//             "Material Handling Grippers",
//             "Process & Geo Grippers",
//             "Proto type Fixtures",
//             "Checking Fixtures",
//             "MIG/MAG Welding Fixtures",
//             "Put-Down Stand",
//             "Buffer Stand",
//             "Passing Tables",
//             "Conveyor Tooling",
//             "Gun / Gripper Docking Stand"
//           ]
//         },
//         {
//           subTopic: "ROBOT SIMULATION",
//           items: [
//             "Pre-engineering Work cell",
//             "Parts Placement and Part Orientation",
//             "Reachability of Robots check according to Layout",
//             "Gripper Validation Fine-tuning of the Placement",
//             "Weld Point Segregation",
//             "Selected Weld Gun Study",
//             "Weld gun search & collision analysis",
//             "Fixture Validation , Tooling & Gun Kinematics",
//             "Kinematics for tools, and weld gun",
//             "Weld gun & tool validation",
//             "Robot Payload Checks",
//             "Path Creation & Optimization",
//             "Assigning attributes",
//             "I/O- signaling, Sequence of Operation",
//             "Layout finalization",
//             "Cycle Time & Off-Line Program"
//           ]
//         },
//         {
//           subTopic: "DRAFTING & DETAILING",
//           items: [
//             "Detailed Manufacturing Drawings",
//             "Bill of materials",
//             "Tooling Layout",
//             "Flame cut drawings",
//             "Pay load and Buyoff sheets",
//             "Control sheet creation"
//           ]
//         },
//         {
//           subTopic: "TECHNICAL DOCUMENTATION",
//           items: [
//             "Pneumatic clamping valve sequence Design",
//             "Ergonomic Studies",
//             "Robot load capacity",
//             "Flow Chart",
//             "Spot Distribution",
//             "Cycle time studies",
//             "Health & Safety Risks Assessments",
//             "Function Diagrams",
//             "Manuals"
//           ]
//         }
//       ]
//     },
//     {
//       title: "METAL STAMPING",
//       image: metalStampingImg,
//       description: "Advanced solutions for metal stamping and sheet metal forming.",
//       content: [
//         "FACTOCAD gives you the ability to address sheet metal formability challenges from the design of parts and tooling to part production with a single tool. Validate the forming of individual panels and even help validate the assembly of closure panels (SKIN PANEL), such as doors. Develop and validate key manufacturing and joining processes, virtually, to assure production capability of parts, sub-assemblies, and assemblies for all sheet metal parts, simple to complex, conventional steel to advanced lightweight sheet metals."
//       ]
//     },
//     {
//       title: "ASSEMBLY ENGINEERING",
//       image: assemblyEngineeringImg,
//       description: "Efficient assembly engineering solutions for modern industries.",
//       content: [
//         "Vehicle validation",
//         "Clash Check analysis",
//         "Feasibility Analysis",
//         "Human Ergonomics",
//         "MTM"
//       ]
//     },
//     {
//       title: "3D LAYOUT PLANNING",
//       image: layoutPlanningImg,
//       description: "Comprehensive 3D layout planning and factory design solutions.",
//       content: [
//         "Layout Engineering (2D &3D)",
//         "Produce animations and Renderings",
//         "Visualize and analyze designs",
//         "Factory walk through and",
//         "Over plant design @3D",
//         "Conversions CAD files in to compatible format"
//       ]
//     },
//     {
//       title: "TECHNICAL DOCUMENTATION",
//       image: technicalDocumentationImg,
//       description: "Detailed technical documentation for manufacturing processes.",
//       content: [
//         "Layout Engineering (2D &3D)",
//         "Produce animations and Renderings",
//         "Visualize and analyze designs",
//         "Factory walk through and",
//         "Over plant design @3D",
//         "Conversions CAD files in to compatible format"
//       ]
//     }
//   ];

//   return (
//     <section className="digital-manufacturing-difacto">
//       {/* Hero Section */}
//       <div
//         className="hero-section-difacto"
//         style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${factoryImg})` }}
//       >
//         <Container>
//           <Button
//             as={Link}
//             to="/"
//             variant="light"
//             className="back-to-services-btn-difacto"
//           >
//             <ArrowLeft className="me-2" /> Back to Services
//           </Button>
//           <h1 className="hero-title-difacto">Digital Manufacturing</h1>
//           <p className="hero-subtitle-difacto">
//             Transforming industries with cutting-edge digital manufacturing solutions.
//           </p>
//         </Container>
//       </div>

//       {/* Overview Section */}
//       <Container className="overview-section-difacto">
//         <h2 className="overview-title-difacto">Overview</h2>
//         <p className="overview-text-difacto">
//           Digital manufacturing integrates advanced technologies to optimize production processes, reduce costs, and improve efficiency. Our solutions cover a wide range of services, including body-in-white, metal stamping, assembly engineering, 3D layout planning, and technical documentation.
//         </p>
//       </Container>

//       {/* Cards Section */}
//       <Container className="cards-section-difacto">
//         <Row className="g-4">
//           {topics.map((topic, index) => (
//             <Col md={4} key={index}>
//               <Card
//                 className="service-card-difacto"
//                 onClick={() => setActiveKey(activeKey === index.toString() ? null : index.toString())}
//               >
//                 <div
//                   className="card-image-difacto"
//                   style={{ backgroundImage: `url(${topic.image})` }}
//                 />
//                 <Card.Body>
//                   <h3>{topic.title}</h3>
//                   <p>{topic.description}</p>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Accordion Section */}
//       <Container className="accordion-section-difacto">
//         <Accordion activeKey={activeKey}>
//           {topics.map((topic, index) => (
//             <Accordion.Item eventKey={index.toString()} key={index}>
//               <Accordion.Header>{topic.title}</Accordion.Header>
//               <Accordion.Body>
//                 <Row>
//                   <Col md={8}>
//                     {topic.content.map((item, idx) => (
//                       typeof item === "string" ? (
//                         <p key={idx}>{item}</p>
//                       ) : (
//                         <div key={idx}>
//                           <h5>{item.subTopic}</h5>
//                           <ul>
//                             {item.items.map((subItem, subIdx) => (
//                               <li key={subIdx}>{subItem}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )
//                     ))}
//                   </Col>
//                   <Col md={4}>
//                     <img
//                       src={topic.image}
//                       alt={topic.title}
//                       className="accordion-image"
//                     />
//                   </Col>
//                 </Row>
//               </Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </Container>
//     </section>
//   );
// }

export default function DigitalManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  const topics = [
    {
      id: "body-in-white",
      title: "BODY IN WHITE",
      image: bodyInWhiteImg,
      description: "Comprehensive solutions for body-in-white manufacturing processes.",
    },
    {
      id: "metal-stamping",
      title: "METAL STAMPING",
      image: metalStampingImg,
      description: "Advanced solutions for metal stamping and sheet metal forming.",
    },
    {
      id: "assembly-engineering",
      title: "ASSEMBLY ENGINEERING",
      image: assemblyEngineeringImg,
      description: "Efficient assembly engineering solutions for modern industries.",
    },
    {
      id: "3d-layout-planning",
      title: "3D LAYOUT PLANNING",
      image: layoutPlanningImg,
      description: "Comprehensive 3D layout planning and factory design solutions.",
    },
    {
      id: "technical-documentation",
      title: "TECHNICAL DOCUMENTATION",
      image: technicalDocumentationImg,
      description: "Detailed technical documentation for manufacturing processes.",
    },
  ];

  return (
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

    {/* Overview Section */}
    <Container className="overview-section-difacto">
      <h2 className="overview-title-difacto">Overview</h2>
      <p className="overview-text-difacto">
        Digital manufacturing integrates advanced technologies to optimize production processes, reduce costs, and improve efficiency. Our solutions cover a wide range of services, including body-in-white, metal stamping, assembly engineering, 3D layout planning, and technical documentation.
      </p>
    </Container>

    {/* Cards Section */}
    <Container className="cards-section-difacto">
      <Row className="g-4">
        {topics.map((topic, index) => (
          <Col md={4} key={index}>
            <Link
              to={`/digital-manufacturing/${topic.id}`}
              className="text-decoration-none"
            >
              <Card className="service-card-difacto">
                <div
                  className="card-image-difacto"
                  style={{ backgroundImage: `url(${topic.image})` }}
                >
                  <div className="card-overlay-difacto">
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  );
}
