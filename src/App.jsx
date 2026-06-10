import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import SkillsExperience from "./components/SkillsExperience.jsx";
import Credentials from "./components/Credentials.jsx";
import BottomSection from "./components/BottomSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const trackedIds = ["home", "about", "experience", "projects", "skills", "contact"];
    const nodes = trackedIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) setActiveSection(visible[0].target.id);
      },
      {
        threshold: [0.18, 0.3, 0.5],
        rootMargin: "-90px 0px -35% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />

      <div className="page-shell">
        <Navbar activeSection={activeSection} />

        <main>
          <Hero />
          <Services />
          <Projects />
          <SkillsExperience />
          <Credentials />
          <BottomSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
