import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Capabilities from '../components/Capabalities';
import { ParallaxProvider } from 'react-scroll-parallax';
import Counter from '../components/Counter';
import About from '../components/About';


export default function Home() {
    return (
        <ParallaxProvider>
            <div className="industrial-theme">
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Capabilities />
                <Industries />
                <Counter />
                <Contact />
                <Footer />
            </div>
        </ParallaxProvider>
    );
}