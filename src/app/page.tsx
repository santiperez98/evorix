'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import HowWeCanHelp from './components/HowWeCanHelp';
import CallToAction from './components/CallToAction';
import ServicesPreview from './components/ServicesPreview';
import ProjectCarousel from './components/ProjectCarousel';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black to-black text-dark">
      <Navbar />

      <Hero />
      <AboutPreview />
      <HowWeCanHelp />

      <ProjectCarousel />
      <ServicesPreview />
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;