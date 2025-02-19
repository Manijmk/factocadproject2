// pages/ServiceDetail.js
import { useParams } from 'react-router-dom';
import { Container, Button, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import bgimage from '../assets/images/bg-3.jpg';
import metalstampingimg from '../assets/images/Metalstamping.jpg';

const serviceDetails = {
  'digital-manufacturing': {
    title: "Digital Manufacturing",
    description: "Comprehensive digital manufacturing solutions for modern industries.",
    sections: [
      {
        title: "Body in White Solutions",
        content: [
          "Process Planning & Simulation",
          "3D Digital Factory Design",
          "Robotic Workcell Integration"
        ],
        image: bgimage
      },
      {
        title: "Metal Stamping Solutions",
        content: [
          "Die Design Engineering",
          "Stamping Simulation",
          "Hemming Simulation"
        ],
        image: metalstampingimg
      }
    ]
  },
  'staffing-consulting': {
    title: "Staffing & Consulting",
    description: "Expert engineering resources for your automation projects",
    sections: [
      {
        type: 'split',
        content: {
          expertiseList: [
            "OEM Standards Implementation",
            "Skill-set Upgradation Programs",
            "Customized Engineering Solutions"
          ],
          softwareList: [
            'Robcad',
            'Delmia V5',
            'Process Simulate',
            'Process Designer',
            'Roboguide',
            'Robotstudio',
            'CATIA V5',
            'UGNX',
            'Microstation',
            'Plant Simulation',
            'Stamping Simulation'
          ]
        }
      }
    ]
  },
  // 'automation-systems': {
  //   title: "Automation Systems",
  //   description: "Custom automation solutions to streamline your production processes.",
  //   content: [
  //     "Custom Automation Design",
  //     "PLC Programming",
  //     "SCADA Systems",
  //     "Industrial Robotics",
  //     "System Integration"
  //   ],
  //   image: "/images/automation.jpg"
  // },
  // Add other services
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <section className="service-detail-section py-5 mt-5">
      <Container>
        <Button
          as={Link}
          to="/"
          variant="light"
          className="mb-4"
        >
          <ArrowLeft className="me-2" /> Back to Services
        </Button>

        <div className="service-header mb-5 text-white">
          <h1 className="display-4 mb-3">{service.title}</h1>
          <p className="lead">{service.description}</p>
        </div>

        <Row className="g-4">
          {service.sections?.map((section, index) => (
            // <Col md={6} key={index}>
            //   <Card className="h-100 shadow">
            //     <div
            //       className="card-top-img"
            //       style={{ backgroundImage: `url(${section.image})` }}
            //     />
            //     <Card.Body>
            //       <h3 className="text-primary">{section.title}</h3>
            //       <ListGroup variant="flush">
            //         {section.content.map((item, idx) => (
            //           <ListGroup.Item key={idx}>{item}</ListGroup.Item>
            //         ))}
            //       </ListGroup>
            //     </Card.Body>
            //   </Card>
            // </Col>

            <Card key={index} className="shadow mb-5">
              <Card.Body>
                {section.type === 'split' ? (
                  <Row className="g-4">
                    <Col md={6}>
                      <h5 className="text-primary mb-3">Our Expertise:</h5>
                      <ListGroup variant="flush">
                        {section.content.expertiseList.map((item, idx) => (
                          <ListGroup.Item key={idx} className="border-0">
                            {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                    <Col md={6}>
                      <h5 className="text-primary mb-3">Software Proficiency:</h5>
                      <div className="software-grid">
                        {section.content.softwareList.map((software, idx) => (
                          <Badge key={idx} bg="primary" className="me-2 mb-2 fs-6">
                            {software}
                          </Badge>
                        ))}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  // Default section rendering
                  <div className="service-section-content">
                    <div
                      className="card-top-img"
                      style={{ backgroundImage: `url(${section.image})` }}
                    />

                    <h3 className="text-primary">{section.title}</h3>
                    <ListGroup variant="flush">
                      {section.content.map((item, idx) => (
                        <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                )}
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </section>
  );
}