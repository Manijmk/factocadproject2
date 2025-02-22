import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetails';
import AboutUs from './components/AboutUs';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Career from './components/Career';
import LeanManufacturing from './components/LeanManufacturing';
import StaffingConsulting from './components/StaffingConsulting';
import DigitalManufacturing from './components/DigitalManufacturing';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
        <Route path="/services/digital-manufacturing" element={<DigitalManufacturing />} />
        <Route path="/services/staffing-consulting" element={<StaffingConsulting />} />
        <Route path="/services/lean-manufacturing" element={<LeanManufacturing />} />
      </Routes>
      <CustomNavbar />
      <Footer />
    </Router>
  );
}

export default App;
