import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "../data.js";
import Icon from "./Icon.jsx";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header" id="top">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} data-cursor="link">
          <span className="brand-icon" aria-hidden="true">&lt;/&gt;</span>
          <span>
            <strong>{contact.name}</strong>
            <small>Web Developer</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className={activeSection === item.id ? "active" : ""}
              data-cursor="magnetic"
              data-cursor-label={item.label}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="nav-active-dot"
                  layoutId="nav-active-dot"
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <motion.a
            className="btn btn-outline header-cv"
            href={contact.cv}
            download
            data-cursor="magnetic"
            data-cursor-label="CV"
            whileTap={{ scale: 0.98 }}
          >
            <Icon name="download" />
            Download CV
          </motion.a>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            className="mobile-backdrop"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
