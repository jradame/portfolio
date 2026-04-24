import { useState, useEffect } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactFormModal from "./components/ContactFormModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [contactOpen, setContactOpen] = useState(false);

  // Track which section is in view for nav highlighting
  useEffect(() => {
    const sections = ["hero", "work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Nav activeSection={activeSection} onContactClick={openContact} />
      <Hero />
      <Projects />
      <About />
      <Contact onContactClick={openContact} />
      <ContactFormModal open={contactOpen} onClose={closeContact} />
    </>
  );
}