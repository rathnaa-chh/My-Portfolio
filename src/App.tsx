import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection as Hero } from "./components/sections/Hero";
import { AboutSection as About } from "./components/sections/About";
import { SkillsSection as Skills } from "./components/sections/Skills";
import { ProjectsSection as Projects } from "./components/sections/Projects";
import { ExperienceSection as Experience } from "./components/sections/Experience";
import { ServicesSection as Services } from "./components/sections/Services";
import { ContactSection as Contact } from "./components/sections/Contact";
import { CustomCursor } from "./components/layout/CustomCursor";
import { ParticlesCanvas } from "./components/layout/ParticlesCanvas";
import { Preloader } from "./components/layout/Preloader";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#030014', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
      <Preloader done={loaded} />
      <CustomCursor />
      <ParticlesCanvas />
      <Navbar progress={progress} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </div>
  );
}