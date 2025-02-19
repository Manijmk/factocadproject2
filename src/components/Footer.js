// // components/Footer.js
// import { Container, Row, Col } from 'react-bootstrap';

// export default function Footer() {
//   return (
//     <footer className="footer-section py-4">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <h3>Factocad</h3>
//             <p>Precision digital manufacturing solutions for the modern industry.</p>
//           </Col>
//           <Col md={4}>
//             <h4>Quick Links</h4>
//             <ul className="footer-links">
//               <li><a href="#services">Services</a></li>
//               <li><a href="#capabilities">Capabilities</a></li>
//               <li><a href="#industries">Industries</a></li>
//               <li><a href="#contact">Contact</a></li>
//             </ul>
//           </Col>
//           <Col md={4}>
//             <h4>Contact Info</h4>
//             <ul className="contact-info">
//               <li> FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD </li>
//               <li>Email: sales@factocad-robotics.com</li>
//               <li>Address: No.941,pasumpon nagar ,kilpudhupakkam salai,</li>
//               <li>Near cheyyar sipcot industrial park </li>
//               <li>Cheyyar -604407, TamilNadu, India </li>
//             </ul>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//           <Col>
//             <p className="text-center mb-0">
//               &copy; {new Date().getFullYear()} Factocad. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// components/Footer.js
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Icons for contact and social media

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-brand">
            <h3>Factocad</h3>
            <p>Precision digital manufacturing solutions for the modern industry.</p>
          </Col>
          <Col md={4} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li><FaMapMarkerAlt /> FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD</li>
              <li><FaEnvelope /> sales@factocad-robotics.com</li>
              <li>Address: No.941, Pasumpon Nagar, Kilpudhupakkam Salai,</li>
              <li>Near Cheyyar Sipcot Industrial Park,</li>
              <li>Cheyyar - 604407, TamilNadu, India</li>
            </ul>
            <div className="social-media">
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </Col>
        </Row>
        <Row className="footer-copyright">
          <Col>
            <p>&copy; {new Date().getFullYear()} Factocad. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}