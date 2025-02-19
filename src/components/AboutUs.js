// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import { Gear, People, ShieldCheck, Lightning, Diagram3 } from 'react-bootstrap-icons';

// export default function AboutUs() {
//   return (
//     <section className="about-us py-5">
//       <Container>
//         <h1 className="display-4 text-primary text-center    mb-5">Who Are We</h1>
        
//         {/* Introduction Section */}
//         <Row className="mb-5">
//           <Col lg={8} className="mx-auto text-center">
//             <p className="lead">
//               Factocad Robotics and Automation India Pvt Ltd is a fast-growing digital manufacturing 
//               engineering solutions provider for automotive, aerospace, and locomotive manufacturers.
//             </p>
//           </Col>
//         </Row>

//         {/* Key Points Cards */}
//         <Row className="g-4 mb-5">
//           <Col md={6} lg={4}>
//             <Card className="h-100 shadow-sm">
//               <Card.Body>
//                 <div className="icon-wrapper bg-primary mb-3">
//                   <Gear size={24} className="text-white" />
//                 </div>
//                 <Card.Title>Complete Automation Solutions</Card.Title>
//                 <Card.Text>
//                   End-to-end manufacturing automation lifecycle management from planning to post-commissioning
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={6} lg={4}>
//             <Card className="h-100 shadow-sm">
//               <Card.Body>
//                 <div className="icon-wrapper bg-primary mb-3">
//                   <People size={24} className="text-white" />
//                 </div>
//                 <Card.Title>Industry Expertise</Card.Title>
//                 <Card.Text>
//                   Specialized in BIW/Locomotive weld lines and robotic systems for various industrial applications
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col md={6} lg={4}>
//             <Card className="h-100 shadow-sm">
//               <Card.Body>
//                 <div className="icon-wrapper bg-primary mb-3">
//                   <ShieldCheck size={24} className="text-white" />
//                 </div>
//                 <Card.Title>Core Values</Card.Title>
//                 <ListGroup variant="flush">
//                   <ListGroup.Item>Integrity</ListGroup.Item>
//                   <ListGroup.Item>Excellence</ListGroup.Item>
//                   <ListGroup.Item>Impeccability</ListGroup.Item>
//                   <ListGroup.Item>Team Work</ListGroup.Item>
//                 </ListGroup>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Technical Expertise Section */}
//         <Row className="mb-5">
//           <Col lg={6}>
//             <h3 className="text-primary mb-4">
//               <Lightning className="me-2" />
//               Technical Capabilities
//             </h3>
//             <ul className="list-unstyled">
//               <li className="mb-3">Process Planning & Simulation</li>
//               <li className="mb-3">3D Layout Planning</li>
//               <li className="mb-3">Fixture Design & Robotic Simulation</li>
//               <li className="mb-3">Off-line Programming</li>
//               <li className="mb-3">Technical Documentation</li>
//             </ul>
//           </Col>
          
//           <Col lg={6}>
//             <h3 className="text-primary mb-4">
//               <Diagram3 className="me-2" />
//               Industrial Applications
//             </h3>
//             <div className="row g-2">
//               {[
//                 "Spot Welding Systems",
//                 "MIG Welding Lines",
//                 "Sealing Applications",
//                 "Pick & Place Systems",
//                 "Pedestal Welding",
//                 "Projection Welding"
//               ].map((app, index) => (
//                 <div key={index} className="col-6">
//                   <div className="p-3 border rounded mb-2">
//                     {app}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Col>
//         </Row>

//         {/* Company Philosophy */}
//         <Card className="bg-light border-0 shadow-sm">
//           <Card.Body>
//             <blockquote className="blockquote mb-0">
//               <p className="lead">
//                 "Our engagement is based on mutual trust and value creation. We listen to our customers' 
//                 challenges and deploy the right engineering expertise where it matters most."
//               </p>
//             </blockquote>
//           </Card.Body>
//         </Card>
//       </Container>
//     </section>
//   );
// }


import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Gear, People, ShieldCheck, Lightning, Diagram3 } from 'react-bootstrap-icons';
import AboutImage from '../assets/images/bg-4.png'; // Add your image here

export default function AboutUs() {
  return (
    <section className="about-us">
      {/* Introduction Section */}
      <div className="intro-section py-5 bg-light mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img 
                src={AboutImage} 
                alt="About Factocad" 
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <h1 className="display-4 text-primary mb-4">Who Are We?</h1>
              <p className="lead">
                Factocad Robotics and Automation India Pvt Ltd is a fast-growing digital manufacturing 
                engineering solutions provider for automotive, aerospace, and locomotive manufacturers.
              </p>
              <p>
                We specialize in complete manufacturing automation lifecycle management, from planning 
                to post-commissioning, with a focus on BIW/Locomotive weld lines and robotic systems.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Key Points Section */}
      <div className="key-points-section py-5">
        <Container>
          <h2 className="text-center text-primary mb-5">Our Expertise</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <div className="icon-wrapper bg-primary mb-3">
                    <Gear size={24} className="text-white" />
                  </div>
                  <Card.Title>Complete Automation Solutions</Card.Title>
                  <Card.Text>
                    End-to-end manufacturing automation lifecycle management from planning to post-commissioning
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <div className="icon-wrapper bg-primary mb-3">
                    <People size={24} className="text-white" />
                  </div>
                  <Card.Title>Industry Expertise</Card.Title>
                  <Card.Text>
                    Specialized in BIW/Locomotive weld lines and robotic systems for various industrial applications
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <div className="icon-wrapper bg-primary mb-3">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <Card.Title>Core Values</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Integrity</ListGroup.Item>
                    <ListGroup.Item>Excellence</ListGroup.Item>
                    <ListGroup.Item>Impeccability</ListGroup.Item>
                    <ListGroup.Item>Team Work</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Technical Expertise Section */}
      <div className="technical-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="text-primary mb-4">
                <Lightning className="me-2" />
                Technical Capabilities
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3">Process Planning & Simulation</li>
                <li className="mb-3">3D Layout Planning</li>
                <li className="mb-3">Fixture Design & Robotic Simulation</li>
                <li className="mb-3">Off-line Programming</li>
                <li className="mb-3">Technical Documentation</li>
              </ul>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <h2 className="text-primary mb-4">
                <Diagram3 className="me-2" />
                Industrial Applications
              </h2>
              <div className="row g-2">
                {[
                  "Spot Welding Systems",
                  "MIG Welding Lines",
                  "Sealing Applications",
                  "Pick & Place Systems",
                  "Pedestal Welding",
                  "Projection Welding"
                ].map((app, index) => (
                  <div key={index} className="col-6">
                    <div className="p-3 border rounded mb-2 bg-white">
                      {app}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Company Philosophy Section */}
      <div className="philosophy-section py-5">
        <Container>
          <Card className="border-0 shadow-sm bg-primary text-white">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p className="lead">
                  "Our engagement is based on mutual trust and value creation. We listen to our customers' 
                  challenges and deploy the right engineering expertise where it matters most."
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </section>
  );
}