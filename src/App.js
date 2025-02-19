import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetails';
import AboutUs from './components/AboutUs';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Career from './components/Career';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
      </Routes>
      <CustomNavbar />
      <Footer />
    </Router>
  );
}

export default App;
