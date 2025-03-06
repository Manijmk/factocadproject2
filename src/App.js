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
import BodyInWhite from './components/BodyInWhite';
import MetalStamping from './components/MetalStmping';
import AssemblyEngineering from './components/AssemblyEngineering';
import LayoutPlanning from './components/LayoutPlanning';
import TechnicalDocumentation from './components/TechnicalDocumentation';


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
        <Route path="/digital-manufacturing/body-in-white" element={<BodyInWhite />} />
        <Route path="/digital-manufacturing/metal-stamping" element={<MetalStamping />} />
        <Route path="/digital-manufacturing/assembly-engineering" element={<AssemblyEngineering />} />
        <Route path="/digital-manufacturing/3d-layout-planning" element={<LayoutPlanning />} />
        <Route path="/digital-manufacturing/technical-documentation" element={<TechnicalDocumentation />} />
      </Routes>
      <CustomNavbar />
      <Footer />
    </Router>
  );
}

export default App;
