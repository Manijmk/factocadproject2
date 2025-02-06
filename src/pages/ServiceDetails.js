// pages/ServiceDetail.js
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const serviceDetails = {
  'digital-manufacturing': {
    title: "Digital Manufacturing",
    description: "Comprehensive digital manufacturing solutions for modern industries.",
    content: [
      "Process Planning & Simulation",
      "3D Digital Factory Design",
      "Robotic Workcell Integration",
      "Tooling & Fixture Design",
      "Technical Documentation"
    ],
    image: "/images/digital-mfg.jpg"
  },
  'automation-systems': {
    title: "Automation Systems",
    description: "Custom automation solutions to streamline your production processes.",
    content: [
      "Custom Automation Design",
      "PLC Programming",
      "SCADA Systems",
      "Industrial Robotics",
      "System Integration"
    ],
    image: "/images/automation.jpg"
  },
  // Add other services
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <section className="service-detail-section py-5">
      <Container>
        <Button 
          as={Link} 
          to="/" 
          variant="light" 
          className="mb-4"
        >
          <ArrowLeft className="me-2" /> Back to Services
        </Button>

        <div className="service-detail-content">
          <div className="service-image">
            <img 
              src={service.image} 
              alt={service.title} 
              className="img-fluid rounded"
            />
          </div>
          <div className="service-info">
            <h1 className="mb-4">{service.title}</h1>
            <p className="lead mb-4">{service.description}</p>
            <ul className="service-features">
              {service.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}